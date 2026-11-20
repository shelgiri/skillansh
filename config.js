/* Centralized Integration Configuration */
/* IMPORTANT: All values below must be set before launch. Do not insert fake URLs. */
/* Google Sheets Webhook & Formspree endpoint handle enquiry submissions. No secrets are exposed in frontend code. */

window.ACCOUNTPRO_CONFIG = {
  // Official Primary Domain
  SITE_URL: 'https://www.skillansh.com',

  // Consultation booking link (Calendly, Google Calendar booking page, etc.)
  CLARITY_CALL_BOOKING_URL: 'https://calendly.com/ai-girish-shelar/skillansh-free-clarity-call',

  // Contact configuration
  CONTACT_EMAIL: 'support@skillansh.com',
  CONTACT_PHONE: '+919922045007',
  WHATSAPP_NUMBER: '919922045007',
  WHATSAPP_COMMUNITY_URL: 'https://chat.whatsapp.com/L70yQ3OXHdM3KCgDwxJsIU',
  YOUTUBE_CHANNEL_URL: 'https://www.youtube.com/@SkillAnsh',
  WORKSHOP_PAID_COMMUNITY_URL: '',

  // Official Razorpay Payment Configuration
  RAZORPAY_KEY_ID: 'rzp_test_TxynQtDHnvxC1V',
  RAZORPAY_BUTTON_ID: '',
  RAZORPAY_PAYMENT_LINK: 'https://rzp.io/rzp/BVYNZBfG',
  PROGRAM_PRICE_INR: 14999,

  // 1st Founding Batch Stepwise & All-In-One Payment Plans Configuration
  PAYMENT_PLANS: {
    full: {
      id: 'full',
      name: 'All-In-One 5-Step Mastery Program (1st Batch Introductory Fee)',
      amount: 14999,
      link: 'https://rzp.io/rzp/BVYNZBfG'
    },
    step1: {
      id: 'step1',
      name: 'Step 01: Smart Excel (Zero to Pro - 7 Days)',
      amount: 1999,
      link: 'https://razorpay.me/@skillansh'
    },
    step2: {
      id: 'step2',
      name: 'Step 02: Practical MIS & 1-Page Dashboards (7 Days)',
      amount: 2499,
      link: 'https://razorpay.me/@skillansh'
    },
    step3: {
      id: 'step3',
      name: 'Step 03: Excel VBA & 1-Click Macro Buttons (7 Days)',
      amount: 2999,
      link: 'https://razorpay.me/@skillansh'
    },
    step4: {
      id: 'step4',
      name: 'Step 04: Power Query & Power BI Visual Reports (7 Days)',
      amount: 3499,
      link: 'https://razorpay.me/@skillansh'
    },
    step5: {
      id: 'step5',
      name: 'Step 05: Smart AI Automation & Exact AI Prompts (7 Days)',
      amount: 4499,
      link: 'https://razorpay.me/@skillansh'
    },
    student: {
      id: 'student',
      name: 'Student Track: Job-Ready Resume & Office Interview Lab (5 Days)',
      amount: 1499,
      link: 'https://razorpay.me/@skillansh'
    },
    inst1: {
      id: 'inst1',
      name: '1st Installment (All-In-One Program Seat Booking)',
      amount: 7500,
      link: 'https://rzp.io/rzp/e1bWeKi'
    },
    inst2: {
      id: 'inst2',
      name: 'Part Payment / Fee Balance',
      amount: 4000,
      link: 'https://rzp.io/rzp/mfkvE1Px'
    },
    spot: {
      id: 'spot',
      name: 'Spot Booking Token (Locks 1st Batch Introductory Rate)',
      amount: 500,
      link: 'https://rzp.io/rzp/enMyDgi'
    },
    special: {
      id: 'special',
      name: 'Live Session Scholarship Offer (All-In-One Program)',
      amount: 9999,
      link: 'https://rzp.io/rzp/BVYNZBfG'
    }
  },

  // Secret Promo Codes for Unlocking Live Session Scholarship Offers
  PROMO_CODES: {
    'SPECIAL5999': {
      planId: 'special',
      discount: 5000,
      messageEn: '🎉 Live Session Scholarship Applied! ₹5,000 Scholarship Unlocked on the All-In-One Program.',
      messageMr: '🎉 लाइव्ह सत्र स्कॉलरशिप कोड लागू झाला! ₹५,००० विशेष सवलत अनलॉक झाली.'
    },
    'FIRSTBATCH': {
      planId: 'special',
      discount: 5000,
      messageEn: '🎉 1st Batch Scholarship Code FIRSTBATCH Applied! ₹5,000 Off Unlocked!',
      messageMr: '🎉 पहिली बॅच स्कॉलरशिप कोड FIRSTBATCH लागू झाला! ₹५,००० सवलत अनलॉक झाली!'
    }
  },

  // Google Sheets Webhook endpoint for capturing learner leads directly to private Google Sheet CRM
  GOOGLE_SHEET_WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbwcLGBVuwFVuD6wa_fgl8b3_pdjB60vmGb1vDaujSUErfafRjqcDXSgUpPYskSEVgZrEA/exec',

  // Formspree endpoint — backup email notification
  ENQUIRY_SUBMISSION_ENDPOINT: 'https://formspree.io/f/xqppyvgd',

  // Legal pages (verified URLs only)
  PRIVACY_INFORMATION_URL: 'privacy.html',
  TERMS_URL: 'terms.html',

  // Duplicate submission guard (milliseconds)
  DUPLICATE_SUBMIT_WINDOW_MS: 30000,

  // ---------------- Campaign Configuration ----------------
  CAMPAIGN: {
    NAME: 'Skillansh 1st Founding Batch Introductory Enrollment',
    ACTIVE: true,
    CLOSE_AT_IST: '2026-12-31T23:59:59+05:30',
    SHOW_COUNTDOWN: false
  }
};
