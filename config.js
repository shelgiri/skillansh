/* Centralized Integration Configuration */
/* IMPORTANT: All values below must be set before launch. Do not insert fake URLs. */
/* Formspree endpoint handles enquiry submissions. No secrets are exposed in frontend code. */

window.ACCOUNTPRO_CONFIG = {
  // Official Primary Domain
  SITE_URL: 'https://www.skillansh.com',

  // Consultation booking link (Calendly, Google Calendar booking page, etc.)
  CLARITY_CALL_BOOKING_URL: 'https://calendly.com/ai-girish-shelar/skillansh-free-clarity-call',

  // Contact configuration (set before launch)
  CONTACT_EMAIL: '',
  CONTACT_PHONE: '+919922045007',
  WHATSAPP_NUMBER: '919922045007',
  WHATSAPP_COMMUNITY_URL: 'https://chat.whatsapp.com/L70yQ3OXHdM3KCgDwxJsIU',
  YOUTUBE_CHANNEL_URL: 'https://www.youtube.com/@SkillAnsh',
  WORKSHOP_PAID_COMMUNITY_URL: '',

  // Official Razorpay Payment Configuration
  RAZORPAY_KEY_ID: 'rzp_test_TxynQtDHnvxC1V',
  RAZORPAY_BUTTON_ID: '',
  RAZORPAY_PAYMENT_LINK: 'https://rzp.io/rzp/BVYNZBfG',
  PROGRAM_PRICE_INR: 9999,

  // Flexible Payment Plans Configuration
  PAYMENT_PLANS: {
    full: {
      id: 'full',
      name: 'Full 30-Day Cohort',
      amount: 9999,
      link: 'https://rzp.io/rzp/BVYNZBfG'
    },
    special: {
      id: 'special',
      name: 'Special Batch Offer',
      amount: 5999,
      link: 'https://rzp.io/rzp/cUEB0E5K'
    },
    inst1: {
      id: 'inst1',
      name: '1st Installment (Seat Booking)',
      amount: 5000,
      link: 'https://rzp.io/rzp/e1bWeKi'
    },
    inst2: {
      id: 'inst2',
      name: 'Part Payment / Balance',
      amount: 4000,
      link: 'https://rzp.io/rzp/mfkvE1Px'
    },
    spot: {
      id: 'spot',
      name: 'Spot Booking Token',
      amount: 500,
      link: 'https://rzp.io/rzp/enMyDgi'
    }
  },

  // Secret Promo Codes for Unlocking Exclusive Offers
  PROMO_CODES: {
    'SPECIAL5999': {
      planId: 'special',
      discount: 4000,
      messageEn: '🎉 Promo Code SPECIAL5999 Applied! ₹4,000 Discount Unlocked! Special Batch Offer is now active.',
      messageMr: '🎉 प्रोमो कोड SPECIAL5999 लागू झाला! ₹४,००० सवलत अनलॉक झाली! स्पेशल बॅच ऑफर सुरू झाली.'
    }
  },

  // Google Sheets Webhook endpoint for capturing learner leads directly to private Google Sheet
  GOOGLE_SHEET_WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbwcLGBVuwFVuD6wa_fgl8b3_pdjB60vmGb1vDaujSUErfafRjqcDXSgUpPYskSEVgZrEA/exec',

  // Formspree endpoint — configure at formspree.io, then paste the endpoint URL here
  ENQUIRY_SUBMISSION_ENDPOINT: 'https://formspree.io/f/xqppyvgd',

  // Legal pages (verified URLs only — do not link to nonexistent pages)
  PRIVACY_INFORMATION_URL: 'privacy.html',
  TERMS_URL: 'terms.html',

  // Duplicate submission guard (milliseconds)
  DUPLICATE_SUBMIT_WINDOW_MS: 30000,

  // ---------------- Campaign Configuration ----------------
  // Set CAMPAIGN_ACTIVE to false to hide the festive offer and show the regular registration CTA.
  CAMPAIGN: {
    NAME: 'Skillansh Digital Skills Learning Program',
    ACTIVE: false,
    // Standard registration configuration.
    
    // Offer closing date and time (IST). Campaign expires after this.
    CLOSE_AT_IST: '2026-11-11T23:59:59+05:30',
    // Show live countdown only when a genuine closing date is configured.
    SHOW_COUNTDOWN: false
  }
};
