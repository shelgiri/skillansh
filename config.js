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

  // Authoritative Server & Frontend Course Price Catalogue (Sections 3 & 8)
  // 4-Course Package includes ONLY: ADHAAR + DRISHTI + PRAVAH + BODH (Individual sum = ₹20,996)
  // Exclusions: KRIYA (VBA & Automation, ₹4,999) is strictly a standalone course. Personal Branding & Resume Building is excluded.
  COURSE_CATALOGUE: {
    ADHAAR: {
      code: 'ADHAAR',
      id: 'adhaar',
      title: 'ADHAAR – Excel Foundation',
      titleMr: 'आधार (ADHAAR) – Excel फाउंडेशन',
      price: 1999,
      inFourCoursePackage: true,
      order: 1,
      description: 'Core Excel foundation, 25+ everyday office formulas (XLOOKUP, INDEX/MATCH, Dynamic Arrays, SUMIFS), Pivot Tables & error-proof spreadsheet structure.'
    },
    DRISHTI: {
      code: 'DRISHTI',
      id: 'drishti',
      title: 'DRISHTI – MIS & Dashboards',
      titleMr: 'दृष्टी (DRISHTI) – MIS आणि डॅशबोर्ड्स',
      price: 3999,
      inFourCoursePackage: true,
      order: 2,
      description: 'Automated monthly MIS reporting, Ageing & P&L summaries, Maker-Checker controls, and 1-page interactive Excel executive dashboards.'
    },
    PRAVAH: {
      code: 'PRAVAH',
      id: 'pravah',
      title: 'PRAVAH – Power Query',
      titleMr: 'प्रवाह (PRAVAH) – Power Query ऑटोमेशन',
      price: 6999,
      inFourCoursePackage: true,
      order: 3,
      description: '1-click multi-file data cleaning, unpivoting messy tables, combining 12+ Tally/ERP/CSV exports, and automated repeatable refresh pipelines.'
    },
    BODH: {
      code: 'BODH',
      id: 'bodh',
      title: 'BODH – Power BI & AI',
      titleMr: 'बोध (BODH) – Power BI आणि स्मार्ट AI',
      price: 7999,
      inFourCoursePackage: true,
      order: 4,
      description: 'Interactive Power BI data modeling, essential DAX measures, slicer-driven KPI visuals, and structured AI Prompt Engineering for data automation.'
    },
    KRIYA: {
      code: 'KRIYA',
      id: 'kriya',
      title: 'KRIYA – VBA & Automation (Standalone)',
      titleMr: 'क्रिया (KRIYA) – VBA आणि १-क्लिक ऑटोमेशन (स्वतंत्र कोर्स)',
      price: 4999,
      inFourCoursePackage: false,
      order: 5,
      description: 'Standalone specialized course: build 1-click VBA macro buttons inside Excel to automate repetitive formatting, sheet splitting, and instant PDF exports.'
    }
  },

  // Authoritative Payment Plans (Individual Courses + 4-Course Package Full & 2-Instalment Options)
  PAYMENT_PLANS: {
    pkg_full: {
      id: 'pkg_full',
      code: 'PKG_4COURSE_FULL',
      name: 'Complete 4-Course Package (ADHAAR + DRISHTI + PRAVAH + BODH) – Option A: Full Payment',
      shortName: '4-Course Package (Full Payment)',
      amount: 14999,
      totalPackageAmount: 14999,
      balanceDueAfter: 0,
      individualValue: 20996,
      unlockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'BODH'],
      lockedCourses: ['KRIYA'],
      paymentStatusOnSuccess: 'PAID',
      link: 'https://rzp.io/rzp/BVYNZBfG'
    },
    pkg_inst1: {
      id: 'pkg_inst1',
      code: 'PKG_4COURSE_INST1',
      name: 'Complete 4-Course Package – Option B: 1st Instalment (Unlocks ADHAAR Now)',
      shortName: '4-Course Package (1st Instalment – ₹2,000)',
      amount: 2000,
      totalPackageAmount: 16999,
      balanceDueAfter: 14999,
      individualValue: 20996,
      unlockedCourses: ['ADHAAR'],
      lockedCourses: ['DRISHTI', 'PRAVAH', 'BODH', 'KRIYA'],
      paymentStatusOnSuccess: 'PARTIALLY_PAID',
      link: 'https://razorpay.me/@skillansh'
    },
    pkg_inst2: {
      id: 'pkg_inst2',
      code: 'PKG_4COURSE_INST2',
      name: 'Complete 4-Course Package – Option B: 2nd Instalment Balance (Unlocks DRISHTI, PRAVAH & BODH)',
      shortName: '4-Course Package (2nd Instalment Balance – ₹14,999)',
      amount: 14999,
      totalPackageAmount: 16999,
      balanceDueAfter: 0,
      individualValue: 20996,
      unlockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'BODH'],
      lockedCourses: ['KRIYA'],
      paymentStatusOnSuccess: 'PAID',
      link: 'https://rzp.io/rzp/BVYNZBfG'
    },
    adhaar: {
      id: 'adhaar',
      code: 'ADHAAR',
      name: 'ADHAAR – Excel Foundation (Individual Course)',
      shortName: 'ADHAAR – Excel Foundation',
      amount: 1999,
      totalPackageAmount: 1999,
      balanceDueAfter: 0,
      unlockedCourses: ['ADHAAR'],
      lockedCourses: ['DRISHTI', 'PRAVAH', 'BODH', 'KRIYA'],
      paymentStatusOnSuccess: 'PAID',
      link: 'https://razorpay.me/@skillansh'
    },
    drishti: {
      id: 'drishti',
      code: 'DRISHTI',
      name: 'DRISHTI – MIS & Dashboards (Individual Course)',
      shortName: 'DRISHTI – MIS & Dashboards',
      amount: 3999,
      totalPackageAmount: 3999,
      balanceDueAfter: 0,
      unlockedCourses: ['DRISHTI'],
      lockedCourses: ['ADHAAR', 'PRAVAH', 'BODH', 'KRIYA'],
      paymentStatusOnSuccess: 'PAID',
      link: 'https://razorpay.me/@skillansh'
    },
    pravah: {
      id: 'pravah',
      code: 'PRAVAH',
      name: 'PRAVAH – Power Query (Individual Course)',
      shortName: 'PRAVAH – Power Query',
      amount: 6999,
      totalPackageAmount: 6999,
      balanceDueAfter: 0,
      unlockedCourses: ['PRAVAH'],
      lockedCourses: ['ADHAAR', 'DRISHTI', 'BODH', 'KRIYA'],
      paymentStatusOnSuccess: 'PAID',
      link: 'https://razorpay.me/@skillansh'
    },
    bodh: {
      id: 'bodh',
      code: 'BODH',
      name: 'BODH – Power BI & AI (Individual Course)',
      shortName: 'BODH – Power BI & AI',
      amount: 7999,
      totalPackageAmount: 7999,
      balanceDueAfter: 0,
      unlockedCourses: ['BODH'],
      lockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'KRIYA'],
      paymentStatusOnSuccess: 'PAID',
      link: 'https://razorpay.me/@skillansh'
    },
    kriya: {
      id: 'kriya',
      code: 'KRIYA',
      name: 'KRIYA – VBA & Automation (Separate Standalone Course)',
      shortName: 'KRIYA – VBA & Automation',
      amount: 4999,
      totalPackageAmount: 4999,
      balanceDueAfter: 0,
      unlockedCourses: ['KRIYA'],
      lockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'BODH'],
      paymentStatusOnSuccess: 'PAID',
      link: 'https://razorpay.me/@skillansh'
    },
    // Backwards-compatible aliases
    full: {
      id: 'pkg_full',
      code: 'PKG_4COURSE_FULL',
      name: 'Complete 4-Course Package (ADHAAR + DRISHTI + PRAVAH + BODH) – Full Payment',
      amount: 14999,
      totalPackageAmount: 14999,
      balanceDueAfter: 0,
      unlockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'BODH'],
      paymentStatusOnSuccess: 'PAID',
      link: 'https://rzp.io/rzp/BVYNZBfG'
    },
    inst1: {
      id: 'pkg_inst1',
      code: 'PKG_4COURSE_INST1',
      name: 'Complete 4-Course Package – 1st Instalment (Unlocks ADHAAR Now)',
      amount: 2000,
      totalPackageAmount: 16999,
      balanceDueAfter: 14999,
      unlockedCourses: ['ADHAAR'],
      paymentStatusOnSuccess: 'PARTIALLY_PAID',
      link: 'https://razorpay.me/@skillansh'
    },
    inst2: {
      id: 'pkg_inst2',
      code: 'PKG_4COURSE_INST2',
      name: 'Complete 4-Course Package – 2nd Instalment Balance (₹14,999)',
      amount: 14999,
      totalPackageAmount: 16999,
      balanceDueAfter: 0,
      unlockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'BODH'],
      paymentStatusOnSuccess: 'PAID',
      link: 'https://rzp.io/rzp/BVYNZBfG'
    }
  },

  // Promo Codes Configuration
  PROMO_CODES: {
    'SKILLANSH': {
      planId: 'pkg_full',
      discount: 0,
      messageEn: '✓ Official Skillansh 4-Course Package Selected (Save ₹5,997 off ₹20,996 individual value — Pay ₹14,999).',
      messageMr: '✓ अधिकृत Skillansh ४-कोर्स पॅकेज निवडले (स्वतंत्र मूल्य ₹२०,९९६ ऐवजी फक्त ₹१४,९९९).'
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
