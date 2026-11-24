/* Centralized Integration Configuration */
/* IMPORTANT: Complete Pricing Privacy is enforced across all public frontend files. */
/* All authoritative course prices, package prices, discounts, and instalment calculations reside strictly in the secure backend (google-sheets-webhook.js). */

window.ACCOUNTPRO_CONFIG = {
  // Official Primary Domain
  SITE_URL: 'https://www.skillansh.com',

  // Consultation booking link
  CLARITY_CALL_BOOKING_URL: 'https://calendly.com/ai-girish-shelar/skillansh-free-clarity-call',

  // Separate Google Form URL for Free Sunday Introductory Session Registration
  FREE_SESSION_REGISTRATION_URL: 'https://forms.gle/TqDgYuWZYLHGGpYTA',

  // Contact configuration
  CONTACT_EMAIL: 'support@skillansh.com',
  CONTACT_PHONE: '+919922045007',
  WHATSAPP_NUMBER: '919922045007',
  WHATSAPP_DISPLAY_CONTACT: '9922045007',
  WHATSAPP_COMMUNITY_URL: 'https://chat.whatsapp.com/L70yQ3OXHdM3KCgDwxJsIU',
  YOUTUBE_CHANNEL_URL: 'https://www.youtube.com/@SkillAnsh',
  WORKSHOP_PAID_COMMUNITY_URL: '',

  // Official Razorpay Public Key ID (Order amounts & verification are generated dynamically on the backend)
  RAZORPAY_KEY_ID: 'rzp_test_TxynQtDHnvxC1V',
  RAZORPAY_BUTTON_ID: '',

  // Public Course Catalogue Metadata (Strictly NO prices, fees, discounts, or instalment numbers exposed in public frontend data)
  COURSE_CATALOGUE: {
    ADHAAR: {
      code: 'ADHAAR',
      id: 'adhaar',
      title: 'ADHAAR – Excel Foundation',
      titleMr: 'आधार (ADHAAR) – Excel फाउंडेशन',
      inFourCoursePackage: true,
      order: 1,
      description: 'Core Excel foundation, 25+ everyday office formulas (XLOOKUP, INDEX/MATCH, Dynamic Arrays, SUMIFS), Pivot Tables & error-proof spreadsheet structure.'
    },
    DRISHTI: {
      code: 'DRISHTI',
      id: 'drishti',
      title: 'DRISHTI – MIS & Dashboards',
      titleMr: 'दृष्टी (DRISHTI) – MIS आणि डॅशबोर्ड्स',
      inFourCoursePackage: true,
      order: 2,
      description: 'Automated monthly MIS reporting, Ageing & P&L summaries, Maker-Checker controls, and 1-page interactive Excel executive dashboards.'
    },
    PRAVAH: {
      code: 'PRAVAH',
      id: 'pravah',
      title: 'PRAVAH – Power Query',
      titleMr: 'प्रवाह (PRAVAH) – Power Query ऑटोमेशन',
      inFourCoursePackage: true,
      order: 3,
      description: '1-click multi-file data cleaning, unpivoting messy tables, combining 12+ Tally/ERP/CSV exports, and automated repeatable refresh pipelines.'
    },
    BODH: {
      code: 'BODH',
      id: 'bodh',
      title: 'BODH – Power BI & AI',
      titleMr: 'बोध (BODH) – Power BI आणि स्मार्ट AI',
      inFourCoursePackage: true,
      order: 4,
      description: 'Interactive Power BI data modeling, essential DAX measures, slicer-driven KPI visuals, and structured AI Prompt Engineering for data automation.'
    },
    KRIYA: {
      code: 'KRIYA',
      id: 'kriya',
      title: 'KRIYA – VBA & Automation (Standalone)',
      titleMr: 'क्रिया (KRIYA) – VBA आणि १-क्लिक ऑटोमेशन (स्वतंत्र कोर्स)',
      inFourCoursePackage: false,
      order: 5,
      description: 'Standalone specialized course: build 1-click VBA macro buttons inside Excel to automate repetitive formatting, sheet splitting, and instant PDF exports.'
    }
  },

  // Public Payment Plan Metadata (Strictly NO price numbers in public frontend data; authoritative prices are retrieved from the backend only after registration)
  PAYMENT_PLANS: {
    pkg_full: {
      id: 'pkg_full',
      code: 'PKG_4COURSE_FULL',
      name: 'Complete 4-Course Package (ADHAAR + DRISHTI + PRAVAH + BODH) – Option A: Full Payment',
      shortName: '4-Course Package (Full Payment)',
      unlockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'BODH'],
      lockedCourses: ['KRIYA'],
      paymentStatusOnSuccess: 'PAID'
    },
    pkg_inst1: {
      id: 'pkg_inst1',
      code: 'PKG_4COURSE_INST1',
      name: 'Complete 4-Course Package – Option B: 1st Instalment (Unlocks ADHAAR Now)',
      shortName: '4-Course Package (1st Instalment)',
      unlockedCourses: ['ADHAAR'],
      lockedCourses: ['DRISHTI', 'PRAVAH', 'BODH', 'KRIYA'],
      paymentStatusOnSuccess: 'PARTIALLY_PAID'
    },
    pkg_inst2: {
      id: 'pkg_inst2',
      code: 'PKG_4COURSE_INST2',
      name: 'Complete 4-Course Package – Option B: 2nd Instalment Balance (Unlocks DRISHTI, PRAVAH & BODH)',
      shortName: '4-Course Package (2nd Instalment Balance)',
      unlockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'BODH'],
      lockedCourses: ['KRIYA'],
      paymentStatusOnSuccess: 'PAID'
    },
    adhaar: {
      id: 'adhaar',
      code: 'ADHAAR',
      name: 'ADHAAR – Excel Foundation (Individual Course)',
      shortName: 'ADHAAR – Excel Foundation',
      unlockedCourses: ['ADHAAR'],
      lockedCourses: ['DRISHTI', 'PRAVAH', 'BODH', 'KRIYA'],
      paymentStatusOnSuccess: 'PAID'
    },
    drishti: {
      id: 'drishti',
      code: 'DRISHTI',
      name: 'DRISHTI – MIS & Dashboards (Individual Course)',
      shortName: 'DRISHTI – MIS & Dashboards',
      unlockedCourses: ['DRISHTI'],
      lockedCourses: ['ADHAAR', 'PRAVAH', 'BODH', 'KRIYA'],
      paymentStatusOnSuccess: 'PAID'
    },
    pravah: {
      id: 'pravah',
      code: 'PRAVAH',
      name: 'PRAVAH – Power Query (Individual Course)',
      shortName: 'PRAVAH – Power Query',
      unlockedCourses: ['PRAVAH'],
      lockedCourses: ['ADHAAR', 'DRISHTI', 'BODH', 'KRIYA'],
      paymentStatusOnSuccess: 'PAID'
    },
    bodh: {
      id: 'bodh',
      code: 'BODH',
      name: 'BODH – Power BI & AI (Individual Course)',
      shortName: 'BODH – Power BI & AI',
      unlockedCourses: ['BODH'],
      lockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'KRIYA'],
      paymentStatusOnSuccess: 'PAID'
    },
    kriya: {
      id: 'kriya',
      code: 'KRIYA',
      name: 'KRIYA – VBA & Automation (Separate Standalone Course)',
      shortName: 'KRIYA – VBA & Automation',
      unlockedCourses: ['KRIYA'],
      lockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'BODH'],
      paymentStatusOnSuccess: 'PAID'
    }
  },

  // Google Sheets Webhook endpoint for capturing learner leads & retrieving authoritative backend pricing after registration
  GOOGLE_SHEET_WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbwcLGBVuwFVuD6wa_fgl8b3_pdjB60vmGb1vDaujSUErfafRjqcDXSgUpPYskSEVgZrEA/exec',

  // Formspree endpoint — backup email notification
  ENQUIRY_SUBMISSION_ENDPOINT: 'https://formspree.io/f/xqppyvgd',

  // Legal pages
  PRIVACY_INFORMATION_URL: 'privacy.html',
  TERMS_URL: 'terms.html',

  // Duplicate submission guard (milliseconds)
  DUPLICATE_SUBMIT_WINDOW_MS: 30000,

  // Campaign Configuration
  CAMPAIGN: {
    NAME: 'Skillansh Practical Learning Programmes',
    ACTIVE: true,
    CLOSE_AT_IST: '2026-12-31T23:59:59+05:30',
    SHOW_COUNTDOWN: false
  }
};
