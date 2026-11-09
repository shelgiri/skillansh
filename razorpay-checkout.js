/**
 * Skillansh - Razorpay Standard Web Checkout Integration
 * Handles:
 *  1. Dynamic Razorpay Key ID loading from /api/get-key (or config.js)
 *  2. Order creation via POST /api/create-order
 *  3. Razorpay Standard Checkout Modal launching with customer prefill
 *  4. Server-side HMAC-SHA256 signature verification via POST /api/verify-payment
 *  5. Direct active Payment Link fallback (https://razorpay.me/@skillansh)
 *  6. User-friendly error and dismissal handling
 */

(function (window) {
  'use strict';

  const RazorpayIntegration = {
    keyId: null,

    /**
     * Determine API Base URL dynamically so it works seamlessly on:
     * - http://localhost:8000
     * - file:///C:/My offer/index.html
     * - Live hosting
     */
    getApiBase() {
      if (window.location.protocol === 'file:' || (window.location.hostname === 'localhost' && window.location.port !== '8000')) {
        return 'http://localhost:8000';
      }
      return '';
    },

    /**
     * Get active Razorpay payment link from config or default.
     */
    getPaymentLink() {
      const cfg = window.ACCOUNTPRO_CONFIG || {};
      return cfg.RAZORPAY_PAYMENT_LINK || 'https://razorpay.me/@skillansh';
    },

    /**
     * Directly open active Razorpay Payment Link in new window.
     */
    openPaymentLink() {
      const link = this.getPaymentLink();
      window.open(link, '_blank', 'noopener,noreferrer');
    },

    /**
     * Fetch Razorpay Key ID from backend API or config.js.
     * Never exposes KEY_SECRET.
     */
    async getKeyId() {
      if (this.keyId) return this.keyId;
      const cfg = window.ACCOUNTPRO_CONFIG || {};
      if (cfg.RAZORPAY_KEY_ID) {
        this.keyId = cfg.RAZORPAY_KEY_ID;
        return this.keyId;
      }
      try {
        const base = this.getApiBase();
        const res = await fetch(`${base}/api/get-key`);
        if (!res.ok) {
          throw new Error('Failed to retrieve Razorpay Key ID from server');
        }
        const data = await res.json();
        this.keyId = data.key_id;
        return this.keyId;
      } catch (err) {
        console.warn('Could not fetch Razorpay key from /api/get-key:', err);
        return cfg.RAZORPAY_KEY_ID || 'rzp_test_TxynQtDHnvxC1V';
      }
    },

    /**
     * Create an order on the backend.
     * @param {number} amountInPaise - e.g. 5100 for ₹51
     * @param {string} currency - 'INR'
     * @param {object} notes - optional metadata
     */
    async createOrder(amountInPaise, currency = 'INR', notes = {}) {
      if (!amountInPaise || amountInPaise < 100) {
        throw new Error('Minimum order amount is 100 paise (₹1).');
      }

      const base = this.getApiBase();
      const response = await fetch(`${base}/api/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: currency,
          receipt: 'rcpt_' + Date.now(),
          notes: notes
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.details || `Order creation failed (HTTP ${response.status})`);
      }

      return await response.json();
    },

    /**
     * Verify payment signature on the backend.
     * @param {string} orderId
     * @param {string} paymentId
     * @param {string} signature
     */
    async verifyPayment(orderId, paymentId, signature) {
      if (!orderId || !paymentId || !signature) {
        throw new Error('Missing payment verification parameters.');
      }

      const base = this.getApiBase();
      const response = await fetch(`${base}/api/verify-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          razorpay_order_id: orderId,
          razorpay_payment_id: paymentId,
          razorpay_signature: signature
        })
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Payment signature verification failed.');
      }

      return data;
    },

    /**
     * Launch Razorpay Standard Checkout Modal.
     * If backend is not available, gracefully falls back to the active hosted Razorpay Payment Link.
     */
    async startCheckout(params) {
      const {
        amountInPaise = 5100,
        planName = 'Skillansh Festive Learning Pass',
        learnerName = '',
        email = '',
        contact = '',
        onSuccess,
        onFailure,
        onDismiss
      } = params;

      // Check if Razorpay SDK script is available
      if (typeof window.Razorpay === 'undefined') {
        console.warn('Razorpay SDK not loaded. Opening active payment link directly.');
        this.openPaymentLink();
        return;
      }

      try {
        // Step 1: Create Order on Backend
        let orderData;
        try {
          orderData = await this.createOrder(amountInPaise, 'INR', {
            plan_name: planName,
            learner_name: learnerName
          });
        } catch (orderErr) {
          console.warn('Order API creation failed; opening active Razorpay Payment Link instead:', orderErr);
          this.openPaymentLink();
          return;
        }

        const keyId = orderData.key_id || (await this.getKeyId());
        if (!keyId) {
          this.openPaymentLink();
          return;
        }

        // Step 2: Open Razorpay Checkout Modal
        const options = {
          key: keyId,
          amount: orderData.amount,
          currency: orderData.currency || 'INR',
          name: 'Skillansh',
          description: planName,
          order_id: orderData.order_id,
          prefill: {
            name: learnerName,
            email: email,
            contact: contact
          },
          notes: {
            plan_name: planName,
            learner_name: learnerName,
            whatsapp: contact
          },
          theme: {
            color: '#3E2A2A' // Banner maroon theme
          },
          handler: async (response) => {
            try {
              // Step 3: Verify Payment Signature on Backend
              const verification = await this.verifyPayment(
                response.razorpay_order_id,
                response.razorpay_payment_id,
                response.razorpay_signature
              );

              if (onSuccess) {
                onSuccess({
                  order_id: response.razorpay_order_id,
                  payment_id: response.razorpay_payment_id,
                  verification: verification
                });
              } else {
                alert('Payment verified successfully! Welcome to Skillansh.');
              }
            } catch (verifyErr) {
              console.error('Payment verification failed:', verifyErr);
              if (onFailure) onFailure(verifyErr);
              else alert('Payment verification error: ' + verifyErr.message);
            }
          },
          modal: {
            ondismiss: () => {
              console.log('Razorpay modal dismissed by user.');
              if (onDismiss) onDismiss();
            }
          }
        };

        const rzp = new window.Razorpay(options);

        rzp.on('payment.failed', (response) => {
          console.error('Razorpay payment failed:', response.error);
          const failErr = new Error(response.error.description || 'Payment failed.');
          if (onFailure) onFailure(failErr);
          else alert('Payment failed: ' + failErr.message);
        });

        rzp.open();

      } catch (err) {
        console.error('Checkout initiation failed, opening payment link:', err);
        this.openPaymentLink();
      }
    }
  };

  window.SkillanshRazorpay = RazorpayIntegration;
})(window);
