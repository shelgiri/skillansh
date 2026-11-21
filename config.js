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
  PROGRAM_PRICE_INR: 34000,

  // Live Workshop Attendee Scholarship & Payment Plans Configuration
  // Public website hides pricing/structure; these plans are used in the Live Workshop Checkout Portal (₹34,000 Value -> ₹17,000 50% Grant)
  PAYMENT_PLANS: {
    full: {
      id: 'full',
      name: 'Complete Practical Office & Lifestyle Mastery Program (Standard Fee)',
      amount: 34000,
      link: 'https://razorpay.me/@skillansh'
    },
    special: {
      id: 'special',
      name: 'Live Workshop 50% Founding Scholarship (All Phases + Career Lab)',
      amount: 17000,
      link: 'https://rzp.io/rzp/BVYNZBfG'
    },
    spot: {
      id: 'spot',
      name: 'Spot Booking Token (Locks ₹17,000 Live Workshop 50% Scholarship Seat)',
      amount: 500,
      link: 'https://rzp.io/rzp/enMyDgi'
    },
    inst1: {
      id: 'inst1',
      name: '1st Installment (50% Easy Split of ₹17,000 Live Scholarship)',
      amount: 8500,
      link: 'https://rzp.io/rzp/e1bWeKi'
    },
    inst2: {
      id: 'inst2',
      name: 'Part Payment / Fee Balance',
      amount: 4000,
      link: 'https://rzp.io/rzp/mfkvE1Px'
    }
  },

  // Secret Promo Codes for Unlocking the ₹17,000 (50% OFF from ₹34,000) Live Workshop Scholarship
  PROMO_CODES: {
    'LIVE50': {
      planId: 'special',
      discount: 17000,
      messageEn: '🎉 50% Live Workshop Scholarship Applied! ₹17,000 Grant Unlocked (Pay ₹17,000 instead of ₹34,000).',
      messageMr: '🎉 ५०% लाइव्ह वर्कशॉप स्कॉलरशिप कोड लागू झाला! ₹१७,००० विशेष सवलत अनलॉक झाली (₹३४,००० ऐवजी फक्त ₹१७,०००).'
    },
    'FIRST51': {
      planId: 'special',
      discount: 17000,
      messageEn: '🎉 First 51 Learners 50% Scholarship Code Applied! ₹17,000 Off Unlocked!',
      messageMr: '🎉 पहिले ५१ विद्यार्थी ५०% स्कॉलरशिप कोड लागू झाला! ₹१७,००० सवलत अनलॉक झाली!'
    },
    'FIRSTBATCH': {
      planId: 'special',
      discount: 17000,
      messageEn: '🎉 1st Batch 50% Scholarship Code FIRSTBATCH Applied! ₹17,000 Off Unlocked!',
      messageMr: '🎉 पहिली बॅच ५०% स्कॉलरशिप कोड FIRSTBATCH लागू झाला! ₹१७,००० सवलत अनलॉक झाली!'
    },
    'SPECIAL5999': {
      planId: 'special',
      discount: 17000,
      messageEn: '🎉 Live Session 50% Scholarship Applied! ₹17,000 Off Unlocked!',
      messageMr: '🎉 लाइव्ह सत्र ५०% स्कॉलरशिप लागू झाली! ₹१७,००० सवलत अनलॉक झाली!'
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
