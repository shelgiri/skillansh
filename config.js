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
  WHATSAPP_COMMUNITY_URL: 'https://chat.whatsapp.com/JPGdVKRxJ77G2paT6xl9nr',
  WORKSHOP_PAID_COMMUNITY_URL: 'https://chat.whatsapp.com/EztQgqztZ54HQ9h2jTvroA',

  // Official Razorpay Payment Configuration
  RAZORPAY_KEY_ID: 'rzp_test_TxynQtDHnvxC1V',
  RAZORPAY_BUTTON_ID: 'pl_Ty0EmPXx8Xgsx2',
  PROGRAM_PRICE_INR: 9999,
  WORKSHOP_PRICE_INR: 51,

  // Formspree endpoint — configure at formspree.io, then paste the endpoint URL here
  ENQUIRY_SUBMISSION_ENDPOINT: 'https://formspree.io/f/xqppyvgd',

  // Legal pages (verified URLs only — do not link to nonexistent pages)
  PRIVACY_INFORMATION_URL: 'privacy.html',
  TERMS_URL: 'terms.html',

  // Duplicate submission guard (milliseconds)
  DUPLICATE_SUBMIT_WINDOW_MS: 30000,

  // ---------------- Festive Campaign Configuration (Skillansh Festive Learning Special) ----------------
  // Set CAMPAIGN_ACTIVE to false to hide the festive offer and show the regular registration CTA.
  CAMPAIGN: {
    NAME: 'Bhai Dooj Special Learning Offer',
    ACTIVE: true,
    // Promotional price — use the existing approved price (₹51). Do not invent a new price.
    PRICE_INR: 51,
    // Offer closing date and time (IST). Campaign expires after this.
    CLOSE_AT_IST: '2026-11-11T23:59:59+05:30',
    // Show live countdown only when a genuine closing date is configured.
    SHOW_COUNTDOWN: true
  }
};
