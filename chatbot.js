/**
 * Skillmitra - Official AI Career & Automation Guide
 * Brand: Skillansh (www.skillansh.com)
 * WhatsApp: +91 9922045007 | Skillansh Mentor Team
 * Languages: English, Marathi, Hindi
 * Pricing: Dynamic from window.ACCOUNTPRO_CONFIG
 * Technology: Pure Vanilla JavaScript, zero paid APIs, privacy-first
 */

(function () {
  'use strict';

  // Read verified configuration
  const config = window.ACCOUNTPRO_CONFIG || {};
  const PROGRAM_PRICE = config.PROGRAM_PRICE_INR || 9999;
  const WA_NUMBER = config.WHATSAPP_NUMBER || '919922045007';
  const YT_CHANNEL = config.YOUTUBE_CHANNEL_URL || 'https://www.youtube.com/@SkillAnsh';
  const SPOT_BOOKING_URL = 'https://rzp.io/rzp/enMyDgi';
  const FULL_ACCESS_URL = 'https://rzp.io/rzp/BVYNZBfG';
  const AVATAR_IMG_SRC = 'assets/skillmitra-avatar.png';

  // Current language: 'en' | 'mr' | 'hi'
  let currentLang = 'en';
  let isOpen = false;

  // Multi-language Knowledge Base & Intent Dictionary (Zero Personal Names Disclosed)
  const KB = {
    greetings: {
      en: {
        text: `Hello! 👋 Welcome to <strong>Skillansh</strong>. I am <strong>Skillmitra</strong>, your 24/7 AI Guide.<br><br>🔥 <strong>1st Batch Introductory Pricing is Live!</strong> You can join our <strong>Free 90-Min Live Workshop (Worth ₹1,099)</strong>, explore our <strong>5-Step Practical Courses (from ₹1,999)</strong>, or lock your 1st Batch seat with a <strong>₹500 Spot Token</strong>.`,
        chips: ['🟢 Free Live Workshop', '📚 5-Step Course Structure', '🚀 1st Batch Fees & Plans', '🎯 Spot Booking (₹500)', '👨‍🏫 Mentor Team', '💬 WhatsApp Team']
      },
      mr: {
        text: `नमस्कार! 👋 <strong>Skillansh</strong> मध्ये आपले स्वागत आहे. मी <strong>Skillmitra</strong>, आपला 24/7 AI गाइड आहे.<br><br>🔥 <strong>१ल्या बॅचसाठी विशेष प्रारंभिक फी सुरू आहे!</strong> आपण आमच्या <strong>मोफत लाइव्ह कार्यशाळेत (मूल्य ₹१,०९९)</strong> सहभागी होऊ शकता, <strong>५-स्टेप कोर्सेस (₹१,९९९ पासून)</strong> पाहू शकता किंवा <strong>₹५०० स्पॉट टोकनने</strong> आपली जागा लॉक करू शकता.`,
        chips: ['🟢 मोफत लाइव्ह कार्यशाळा', '📚 ५-स्टेप अभ्यासक्रम रचना', '🚀 १ली बॅच फी व प्लॅन्स', '🎯 स्पॉट बुकिंग (₹५००)', '👨‍🏫 मेंटर टीम माहिती', '💬 WhatsApp टीम']
      },
      hi: {
        text: `नमस्ते! 👋 <strong>Skillansh</strong> में आपका स्वागत है। मैं <strong>Skillmitra</strong>, आपका 24/7 एआई गाइड हूँ।<br><br>🔥 <strong>पहले बैच (1st Batch) की विशेष शुरुआती फीस लागू है!</strong> आप हमारी <strong>फ्री लाइव वर्कशॉप (मूल्य ₹1,099)</strong>, <strong>5-स्टेप कोर्सेस (₹1,999 से शुरू)</strong> या <strong>₹500 स्पॉट बुकिंग</strong> के बारे में पूछ सकते हैं।`,
        chips: ['🟢 फ्री लाइव वर्कशॉप', '📚 5-स्टेप कोर्स स्ट्रक्चर', '🚀 1st बैच फीस व प्लान्स', '🎯 स्पॉट बुकिंग (₹500)', '👨‍🏫 मेंटर टीम', '💬 WhatsApp टीम']
      }
    },

    curriculum: {
      en: {
        text: `<strong>📚 Skillansh 5-Step Practical Learning Ladder (+ Separate Student Track):</strong><br><br>
We complete your full Excel mastery first, move to Power BI, and crown it with Smart AI Prompts:<br>
• <strong>Step 01 (Week 1 · ₹1,999):</strong> Smart Excel — Zero to Pro (25+ Office Formulas & Pivots)<br>
• <strong>Step 02 (Week 2 · ₹2,499):</strong> Practical MIS & 1-Page Business Dashboards<br>
• <strong>Step 03 (Week 3 · ₹2,999):</strong> Excel VBA & 1-Click Macro Buttons (Before Power BI!)<br>
• <strong>Step 04 (Week 4 · ₹3,499):</strong> Power Query & Power BI Visual Reports (DAX & Slicers)<br>
• <strong>Step 05 (Week 5 · ₹4,499):</strong> Smart AI Automation & Exact AI Prompts (Premium Capstone)<br>
• <strong>🎓 Separate Student Track (5 Days · ₹1,499):</strong> Job-Ready Resume & Office Interview Lab<br><br>
Every step includes hands-on practice datasets and a <strong>Verified Skillansh Certificate</strong>!`,
        cta: { text: `📚 View 5-Step Course Structure ↓`, action: 'view_curriculum' },
        chips: ['🚀 1st Batch Fees & Plans', '🎯 Spot Booking (₹500)', '🟢 Free Live Workshop', '💬 WhatsApp Support']
      },
      mr: {
        text: `<strong>📚 Skillansh ५-स्टेप प्रात्यक्षिक अभ्यासक्रम (+ स्वतंत्र विद्यार्थी ट्रॅक):</strong><br><br>
आधी Excel मध्ये पूर्ण पकड, त्यानंतर Power BI आणि शेवटी स्मार्ट AI प्रॉम्प्ट्स:<br>
• <strong>स्टेप ०१ (आठवडा १ · ₹१,९९९):</strong> स्मार्ट Excel — शून्य ते एक्सपर्ट (२५+ फॉर्म्युले व पिव्हट्स)<br>
• <strong>स्टेप ०२ (आठवडा २ · ₹२,४९९):</strong> प्रॅक्टिकल MIS आणि १-पेज डॅशबोर्ड्स<br>
• <strong>स्टेप ०३ (आठवडा ३ · ₹२,९९९):</strong> Excel VBA आणि १-क्लिक मॅक्रो बटणे (Power BI पूर्वी!)<br>
• <strong>स्टेप ०४ (आठवडा ४ · ₹३,४९९):</strong> Power Query आणि Power BI व्हिज्युअल रिपोर्ट्स<br>
• <strong>स्टेप ०५ (आठवडा ५ · ₹४,४९९):</strong> स्मार्ट AI ऑटोमेशन आणि अचूक प्रॉम्प्ट्स (प्रीमियम AI कोर्स)<br>
• <strong>🎓 स्वतंत्र विद्यार्थी ट्रॅक (५ दिवस · ₹१,४९९):</strong> जॉब-रेडी रेझ्युमे व इंटरव्ह्यू लॅब<br><br>
प्रत्येक स्टेपमध्ये प्रॅक्टिस डेटा शीट्स आणि <strong>अधिकृत Skillansh सर्टिफिकेट</strong> समाविष्ट!`,
        cta: { text: `📚 ५-स्टेप अभ्यासक्रम रचना पहा ↓`, action: 'view_curriculum' },
        chips: ['🚀 १ली बॅच फी व प्लॅन्स', '🎯 स्पॉट बुकिंग (₹५००)', '🟢 मोफत लाइव्ह कार्यशाळा', '💬 WhatsApp सपोर्ट']
      },
      hi: {
        text: `<strong>📚 Skillansh 5-स्टेप प्रैक्टिकल कोर्स स्ट्रक्चर (+ स्टूडेंट ट्रैक):</strong><br><br>
• <strong>स्टेप 01 (सप्ताह 1 · ₹1,999):</strong> स्मार्ट एक्सेल — जीरो से प्रो (25+ फॉर्मूले व पिवट)<br>
• <strong>स्टेप 02 (सप्ताह 2 · ₹2,499):</strong> प्रैक्टिकल MIS और 1-पेज डैशबोर्ड्स<br>
• <strong>स्टेप 03 (सप्ताह 3 · ₹2,999):</strong> एक्सेल VBA और 1-क्लिक मैक्रो बटन्स (Power BI से पहले!)<br>
• <strong>स्टेप 04 (सप्ताह 4 · ₹3,499):</strong> पावर क्वेरी और पावर बीआई विजुअल रिपोर्ट्स<br>
• <strong>स्टेप 05 (सप्ताह 5 · ₹4,499):</strong> स्मार्ट AI ऑटोमेशन व स्ट्रक्चर्ड प्रॉम्प्ट इंजीनियरिंग<br>
• <strong>🎓 स्टूडेंट करियर ट्रैक (5 दिन · ₹1,499):</strong> एटीएस रिज्यूमे और इंटरव्यू लैब<br><br>
हर स्टेप के साथ प्रैक्टिस डेटा शीट्स और <strong>वेरिफाइड सर्टिफिकेट</strong> शामिल है!`,
        cta: { text: `📚 5-स्टेप कोर्स स्ट्रक्चर देखें ↓`, action: 'view_curriculum' },
        chips: ['🚀 1st बैच फीस व प्लान्स', '🎯 स्पॉट बुकिंग (₹500)', '🟢 फ्री लाइव वर्कशॉप', '💬 WhatsApp सहायता']
      }
    },

    pricing: {
      en: {
        text: `<strong>🔥 1st Founding Batch Introductory Fees (Limited to 15–20 Seats/Batch):</strong><br><br>
• <strong>🏆 All-In-One 5-Step Mastery Program (35 Days):</strong> <strong>₹14,999</strong> (Includes all 5 Steps + Career Lab + 1-on-1 Mentorship + Master Certificate &middot; Individual sum ₹16,994)<br>
• <strong>🎯 Instant Spot Booking Token:</strong> <strong>₹500</strong> (Locks your 1st Batch introductory fee today &middot; 100% deducted from total fee)<br>
• <strong>Individual Stepwise Courses:</strong><br>
  - Step 01 (Smart Excel): <strong>₹1,999</strong><br>
  - Step 02 (Practical MIS): <strong>₹2,499</strong><br>
  - Step 03 (Excel VBA Macros): <strong>₹2,999</strong><br>
  - Step 04 (Power Query & Power BI): <strong>₹3,499</strong><br>
  - Step 05 (Smart AI & Prompts): <strong>₹4,499</strong><br>
  - Student Resume & Interview Lab: <strong>₹1,499</strong><br><br>
<em>⚠️ Hurry: Once 1st Batch seats are filled, prices will increase for next batches!</em>`,
        cta: { text: `🚀 Book Your 1st Batch Seat Now`, action: 'enrol_cohort' },
        chips: ['📚 5-Step Course Structure', '🎯 Spot Booking (₹500)', '🟢 Free Live Workshop', '💬 WhatsApp Support']
      },
      mr: {
        text: `<strong>🔥 १ल्या बॅचसाठी विशेष प्रारंभिक फी (फक्त १५–२० जागा प्रति बॅच):</strong><br><br>
• <strong>🏆 ऑल-इन-वन ५-स्टेप मास्टरी प्रोग्राम (३५ दिवस):</strong> <strong>₹१४,९९९</strong> (सर्व ५ स्टेप्स + करिअर लॅब + १-ऑन-१ मार्गदर्शन + मास्टर सर्टिफिकेट &middot; स्वतंत्र एकूण ₹१६,९९४)<br>
• <strong>🎯 इन्स्टंट स्पॉट बुकिंग टोकन:</strong> <strong>₹५००</strong> (आजच १ल्या बॅचची फी लॉक करा &middot; मुख्य फीमधून १००% वजा)<br>
• <strong>स्वतंत्र स्टेपनुसार फी:</strong><br>
  - स्टेप ०१ (स्मार्ट Excel): <strong>₹१,९९९</strong><br>
  - स्टेप ०२ (प्रॅक्टिकल MIS): <strong>₹२,४९९</strong><br>
  - स्टेप ०३ (Excel VBA मॅक्रो): <strong>₹२,९९९</strong><br>
  - स्टेप ०४ (Power Query व Power BI): <strong>₹३,४९९</strong><br>
  - स्टेप ०५ (स्मार्ट AI व प्रॉम्प्ट्स): <strong>₹४,४९९</strong><br>
  - विद्यार्थी रेझ्युमे व इंटरव्ह्यू लॅब: <strong>₹१,४९९</strong><br><br>
<em>⚠️ घाई करा: पहिल्या बॅचच्या जागा पूर्ण होताच पुढील बॅचची फी वाढेल!</em>`,
        cta: { text: `🚀 १ल्या बॅचमध्ये प्रवेश घ्या`, action: 'enrol_cohort' },
        chips: ['📚 ५-स्टेप अभ्यासक्रम रचना', '🎯 स्पॉट बुकिंग (₹५००)', '🟢 मोफत लाइव्ह कार्यशाळा', '💬 WhatsApp सपोर्ट']
      },
      hi: {
        text: `<strong>🔥 पहले बैच (1st Batch) की विशेष शुरुआती फीस (सीमित 15–20 सीटें):</strong><br><br>
• <strong>🏆 ऑल-इन-वन 5-स्टेप मास्टरी प्रोग्राम (35 दिन):</strong> <strong>₹14,999</strong> (सभी 5 स्टेप्स + करियर लैब + 1-ऑन-1 मेंटरशिप + मास्टर सर्टिफिकेट)<br>
• <strong>🎯 इंस्टेंट स्पॉट बुकिंग टोकन:</strong> <strong>₹500</strong> (1st बैच की फीस आज ही लॉक करें &middot; कुल फीस से 100% समायोजित)<br>
• <strong>स्टेप-बाय-स्टेप कोर्स फीस:</strong><br>
  - स्टेप 01 (स्मार्ट एक्सेल): <strong>₹1,999</strong> | स्टेप 02 (MIS): <strong>₹2,499</strong><br>
  - स्टेप 03 (VBA मैक्रो): <strong>₹2,999</strong> | स्टेप 04 (Power BI): <strong>₹3,499</strong><br>
  - स्टेप 05 (स्मार्ट AI व प्रॉम्प्ट्स): <strong>₹4,499</strong> | स्टूडेंट ट्रैक: <strong>₹1,499</strong><br><br>
<em>⚠️ जल्दी करें: 1st बैच की सीटें भरने के बाद अगले बैच की फीस बढ़ जाएगी!</em>`,
        cta: { text: `🚀 अपनी 1st बैच सीट बुक करें`, action: 'enrol_cohort' },
        chips: ['📚 5-स्टेप कोर्स स्ट्रक्चर', '🎯 स्पॉट बुकिंग (₹500)', '🟢 फ्री लाइव वर्कशॉप', '💬 WhatsApp सहायता']
      }
    },

    spot: {
      en: {
        text: `<strong>🎯 Instant Spot Booking Token (₹500 — Locks 1st Batch Rate):</strong><br><br>
Because our 1st Founding Batch has only 15–20 seats per section, you can lock your seat and today's introductory fee instantly by paying just <strong>₹500</strong>!<br><br>
• Your seat in the 1st Batch is officially reserved.<br>
• The ₹500 token is <strong>100% deducted</strong> from your course or All-In-One program fee.<br>
• Protects you from next-batch price increases.`,
        cta: { text: `🎯 Lock Your 1st Batch Seat for ₹500`, action: 'spot_booking', url: SPOT_BOOKING_URL },
        chips: ['📚 5-Step Course Structure', '🚀 1st Batch Fees & Plans', '💬 Chat on WhatsApp']
      },
      mr: {
        text: `<strong>🎯 इन्स्टंट स्पॉट बुकिंग टोकन (₹५०० — १ली बॅच फी लॉक करा):</strong><br><br>
पहिल्या बॅचमध्ये फक्त १५-२० जागा असल्याने, आपण केवळ <strong>₹५०० टोकन</strong> भरून आपली जागा आणि १ल्या बॅचची विशेष फी त्वरित सुरक्षित करू शकता!<br><br>
• हे ₹५०० तुमच्या मुख्य कोर्स फीमधून <strong>१००% वजा</strong> केले जातात.<br>
• पुढील बॅचच्या दरवाढीपासून तुमचे संरक्षण होते.`,
        cta: { text: `🎯 आताच ₹५०० मध्ये जागा लॉक करा`, action: 'spot_booking', url: SPOT_BOOKING_URL },
        chips: ['📚 ५-स्टेप अभ्यासक्रम रचना', '🚀 १ली बॅच फी व प्लॅन्स', '💬 WhatsApp वर बोला']
      },
      hi: {
        text: `<strong>🎯 इंस्टेंट स्पॉट बुकिंग टोकन (₹500 — 1st बैच फीस लॉक करें):</strong><br><br>
केवल <strong>₹500 टोकन</strong> देकर आप 1st बैच में अपनी सीट और शुरुआती फीस तुरंत लॉक कर सकते हैं!<br><br>
• यह ₹500 आपकी मुख्य फीस से <strong>100% घटा (adjust)</strong> दिया जाता है।<br>
• अगले बैच की बढ़ी हुई फीस से आपकी बचत होती है।`,
        cta: { text: `🎯 ₹500 में अपनी सीट लॉक करें`, action: 'spot_booking', url: SPOT_BOOKING_URL },
        chips: ['📚 5-स्टेप कोर्स स्ट्रक्चर', '🚀 1st बैच फीस व प्लान्स', '💬 WhatsApp पर पूछें']
      }
    },

    promocode: {
      en: {
        text: `<strong>🟢 Free 90-Min Live Workshop (Worth ₹1,099/- &rarr; FREE) &amp; Live Attendee Scholarships:</strong><br><br>
Attend our next <strong>90-Min Live Practical Masterclass for FREE</strong> to see how 3 hours of messy office work is finished in 10 minutes!<br><br>
• Live attendees also receive our exclusive <strong>Live Session Scholarship Code</strong> to apply inside the Enrolment Form.`,
        cta: { text: `🟢 Claim Free Live Workshop Seat`, action: 'workshop_page' },
        chips: ['📚 5-Step Course Structure', '🚀 1st Batch Fees & Plans', '🎯 Spot Booking (₹500)', '💬 WhatsApp Support']
      },
      mr: {
        text: `<strong>🟢 मोफत ९०-मिनिटे लाइव्ह कार्यशाळा (मूल्य ₹१,०९९/- &rarr; १००% मोफत):</strong><br><br>
३ तासांचे ऑफिसचे काम १० मिनिटांत कसे पूर्ण होते हे प्रत्यक्ष पाहण्यासाठी आमच्या आगामी <strong>मोफत लाइव्ह मास्टरक्लासमध्ये</strong> सहभागी व्हा!<br><br>
• लाइव्ह सत्रातील सहभागींना नोंदणी फॉर्मसाठी विशेष <strong>स्कॉलरशिप प्रोमो कोड</strong> देखील दिला जातो.`,
        cta: { text: `🟢 मोफत कार्यशाळेत जागा बुक करा`, action: 'workshop_page' },
        chips: ['📚 ५-स्टेप अभ्यासक्रम रचना', '🚀 १ली बॅच फी व प्लॅन्स', '🎯 स्पॉट बुकिंग (₹५००)', '💬 WhatsApp सपोर्ट']
      },
      hi: {
        text: `<strong>🟢 फ्री 90-मिनट लाइव वर्कशॉप (मूल्य ₹1,099/- &rarr; FREE):</strong><br><br>
3 घंटे का ऑफिस एक्सेल काम 10 मिनट में कैसे पूरा होता है, यह लाइव देखने के लिए हमारी अगली <strong>फ्री लाइव वर्कशॉप</strong> जॉइन करें!<br><br>
• लाइव सेशन में भाग लेने वालों को विशेष <strong>स्कॉलरशिप प्रोमो कोड</strong> भी मिलता है।`,
        cta: { text: `🟢 फ्री वर्कशॉप सीट बुक करें`, action: 'workshop_page' },
        chips: ['📚 5-स्टेप कोर्स स्ट्रक्चर', '🚀 1st बैच फीस व प्लान्स', '🎯 स्पॉट बुकिंग (₹500)', '💬 WhatsApp सहायता']
      }
    },

    mentor: {
      en: {
        text: `<strong>👨‍🏫 About the Skillansh Mentor Team:</strong><br><br>
• Our training and practical mentorship are led by a <strong>Senior Corporate Practitioner with 15+ Years of Corporate & Data Workflow Experience</strong>.<br>
• Specializes in advanced Excel, Power Query, Power BI, MIS reporting, and practical enterprise automation.<br>
• Has guided hundreds of accounting, finance, and operations professionals across India to eliminate manual drudgery, optimize workflows, and secure significant career upgrades.<br>
• Focuses strictly on 100% practical implementation — zero theoretical fluff.`,
        cta: { text: `💬 Chat with Skillansh Mentor Team on WhatsApp`, action: 'whatsapp' },
        chips: ['📚 30-Day Course Structure', '🚀 Cohort Fees & Plans', '🎯 Spot Booking (₹500)']
      },
      mr: {
        text: `<strong>👨‍🏫 Skillansh मेंटर व मार्गदर्शक टीम:</strong><br><br>
• हे संपूर्ण प्रात्यक्षिक प्रशिक्षण कॉर्पोरेट फायनान्स, एमआयएस आणि ऑटोमेशन क्षेत्रातील <strong>15+ वर्षांचा प्रत्यक्ष कॉर्पोरेट अनुभव असलेल्या सीनियर प्रॅक्टिशनर मेंटर्समार्फत</strong> दिले जाते.<br>
• केवळ पुस्तकी ज्ञान नाही, तर प्रत्यक्षात कंपन्यांमध्ये दररोज वापरले जाणारे लाइव्ह Excel, Power Query आणि Power BI वर्कफ्लो शिकवले जातात.<br>
• संपूर्ण भारतातील शेकडो प्रोफेशनल्सना मॅन्युअल काम कमी करून करिअरमध्ये वेगाने प्रगती करण्यासाठी मार्गदर्शन केले आहे.<br>
• थेट शंका निरसन आणि प्रॅक्टिकल रिव्ह्यूची संपूर्ण खात्री.`,
        cta: { text: `💬 Skillansh मेंटर टीमशी WhatsApp वर बोला`, action: 'whatsapp' },
        chips: ['📚 अभ्यासक्रम रचना पहा', '🚀 कोहॉर्ट फी व प्लॅन्स', '🎯 स्पॉट बुकिंग (₹५००)']
      },
      hi: {
        text: `<strong>👨‍🏫 Skillansh मेंटर टीम के बारे में:</strong><br><br>
• हमारा प्रैक्टिकल प्रशिक्षण कॉर्पोरेट फाइनेंस, एमआईएस और ऑटोमेशन में <strong>15+ वर्षों के प्रत्यक्ष कॉर्पोरेट अनुभव</strong> वाले सीनियर प्रैक्टिशनर मेंटर्स द्वारा संचालित है।<br>
• केवल किताबी ज्ञान नहीं, बल्कि कंपनियों में रोज इस्तेमाल होने वाले लाइव एक्सेल, पावर क्वेरी और पावर बीआई वर्कफ़्लो सिखाए जाते हैं।<br>
• भारत भर में सैकड़ों अकाउंटेंट्स और प्रोफेशनल्स को करियर ग्रोथ और सैलरी हाइक हासिल करने में मदद की है।<br>
• रियल-वर्ल्ड केस स्टडीज और वन-ऑन-वन सपोर्ट।`,
        cta: { text: `💬 Skillansh मेंटर टीम से WhatsApp पर बात करें`, action: 'whatsapp' },
        chips: ['📚 30-डे कोर्स स्ट्रक्चर', '🚀 कोहॉर्ट फीस व प्लान्स', '🎯 स्पॉट बुकिंग (₹500)']
      }
    },

    certificate: {
      en: {
        text: `<strong>📜 Verified Skillansh Certificate:</strong><br><br>
Yes! Upon completing the cohort practical deliverables, you receive an official, verified <strong>Skillansh Certificate of Completion</strong>.<br><br>
You can showcase this credential on LinkedIn, ATS resumes, and job portals to highlight your workflow automation expertise.`,
        cta: { text: `🚀 Enrol in Cohort`, action: 'enrol_cohort' },
        chips: ['📚 30-Day Course Structure', '💰 Course Fees', '🎯 Spot Booking (₹500)']
      },
      mr: {
        text: `<strong>📜 अधिकृत Skillansh प्रमाणपत्र:</strong><br><br>
होय! कोहॉर्टचे प्रात्यक्षिक प्रोजेक्ट्स पूर्ण केल्यानंतर आपल्याला अधिकृत <strong>Skillansh सहभाग व प्राविण्य प्रमाणपत्र (Certificate of Completion)</strong> दिले जाते.<br><br>
हे प्रमाणपत्र आपण आपल्या लिंक्डइन, बायोडाटा (ATS Resume) आणि जॉब प्रोफाइल्सवर अभिमानाने जोडू शकता.`,
        cta: { text: `🚀 कोहॉर्टमध्ये प्रवेश घ्या`, action: 'enrol_cohort' },
        chips: ['📚 अभ्यासक्रम रचना पहा', '💰 फी रचना', '🎯 स्पॉट बुकिंग (₹५००)']
      },
      hi: {
        text: `<strong>📜 अधिकृत Skillansh सर्टिफिकेट:</strong><br><br>
हाँ! कोहॉर्ट प्रोजेक्ट्स पूरा करने पर आपको आधिकारिक और सत्यापित <strong>Skillansh Certificate of Completion</strong> प्रदान किया जाता है।<br><br>
इसे आप अपने लिंक्डइन, रिज्यूमे और जॉब पोर्टल्स पर अपने ऑटोमेशन स्किल्स दिखाने के लिए जोड़ सकते हैं।`,
        cta: { text: `🚀 कोहॉर्ट जॉइन करें`, action: 'enrol_cohort' },
        chips: ['📚 30-डे कोर्स स्ट्रक्चर', '💰 फीस विवरण', '🎯 स्पॉट बुकिंग (₹500)']
      }
    },

    timings: {
      en: {
        text: `<strong>🕒 Batch Schedule & Timings:</strong><br><br>
• <strong>Schedule:</strong> Structured weekend live master sessions with bite-sized weekday practice labs.<br>
• <strong>Recordings:</strong> Full HD lifetime recordings & exercise workbooks provided in the private community.<br>
• <strong>Doubt Clearing:</strong> Dedicated weekly live doubt-clearing and implementation reviews with the mentor team.`,
        cta: { text: `📚 View 6-Module Course Structure ↓`, action: 'view_curriculum' },
        chips: ['🚀 Cohort Fees & Plans', '🎯 Spot Booking (₹500)', '💬 WhatsApp Support']
      },
      mr: {
        text: `<strong>🕒 बॅचचे वेळापत्रक आणि वेळ:</strong><br><br>
• <strong>वेळापत्रक:</strong> वीकेंडला थेट संवादात्मक मास्टर सत्रांसह आठवड्यातील सुलभ प्रॅक्टिस लॅब्स.<br>
• <strong>रेकॉर्डिंग्ज:</strong> सत्रांचे हाय-डेफिनिशन रेकॉर्डिंग्ज आणि प्रॅक्टिस फाइल्स खाजगी कम्युनिटीमध्ये उपलब्ध.<br>
• <strong>शंका निरसन:</strong> मेंटर टीमसोबत थेट शंका निरसन आणि प्रोजेक्ट पुनरावलोकन.`,
        cta: { text: `📚 ६-मॉड्यूल अभ्यासक्रम रचना पहा ↓`, action: 'view_curriculum' },
        chips: ['🚀 कोहॉर्ट फी व प्लॅन्स', '🎯 स्पॉट बुकिंग (₹५००)', '💬 WhatsApp सपोर्ट']
      },
      hi: {
        text: `<strong>🕒 बैच का समय और शेड्यूल:</strong><br><br>
• <strong>शेड्यूल:</strong> वीकेंड लाइव मास्टर सेशन और सप्ताह के दिनों में हैंड्स-ऑन प्रैक्टिस वर्कशीट्स।<br>
• <strong>रिकॉर्डिंग:</strong> सभी सेशंस की लाइफटाइम एचडी रिकॉर्डिंग और प्रैक्टिस फाइल्स कम्युनिटी में उपलब्ध।<br>
• <strong>डाउट क्लियरिंग:</strong> मेंटर टीम के साथ लाइव शंका समाधान सत्र।`,
        cta: { text: `📚 6-मॉड्यूल कोर्स स्ट्रक्चर देखें ↓`, action: 'view_curriculum' },
        chips: ['🚀 कोहॉर्ट फीस व प्लान्स', '🎯 स्पॉट बुकिंग (₹500)', '💬 WhatsApp सहायता']
      }
    },

    whatsapp: {
      en: {
        text: `<strong>💬 Connect with Skillansh Team on WhatsApp:</strong><br><br>
Have specific career questions, need clarity call booking, or fee installment guidance?<br>
Chat directly with the <strong>Skillansh Support & Mentor Team</strong> on WhatsApp at <strong>+91 ${WA_NUMBER}</strong>.`,
        cta: { text: `💬 Chat with Skillansh Team on WhatsApp`, action: 'whatsapp', url: `https://wa.me/${WA_NUMBER}?text=Hi%20Skillansh%20Team,%20I%20have%20an%20enquiry%20about%20the%20Skillansh%20Cohort.` },
        chips: ['📚 30-Day Course Structure', '🚀 Cohort Fees & Plans', '🎯 Spot Booking (₹500)']
      },
      mr: {
        text: `<strong>💬 Skillansh टीमशी WhatsApp वर थेट बोला:</strong><br><br>
आपल्या मनात काही वैयक्तिक प्रश्न आहेत का किंवा फी हप्त्यांबद्दल मार्गदर्शन हवे आहे का?<br>
आपण थेट <strong>Skillansh सपोर्ट आणि मेंटर टीमशी</strong> WhatsApp वर <strong>+91 ${WA_NUMBER}</strong> वर बोलू शकता.`,
        cta: { text: `💬 Skillansh टीमशी WhatsApp वर चॅट करा`, action: 'whatsapp', url: `https://wa.me/${WA_NUMBER}?text=नमस्कार%20Skillansh%20टीम,%20मला%20कोहॉर्टबद्दल%20माहिती%20हवी%20आहे.` },
        chips: ['📚 अभ्यासक्रम रचना पहा', '🚀 कोहॉर्ट फी व प्लॅन्स', '🎯 स्पॉट बुकिंग (₹५००)']
      },
      hi: {
        text: `<strong>💬 Skillansh टीम से WhatsApp पर संपर्क करें:</strong><br><br>
क्या आपका कोई विशिष्ट सवाल है या फीस और बैच के बारे में बात करनी है?<br>
आप सीधे <strong>Skillansh सपोर्ट व मेंटर टीम</strong> से WhatsApp पर <strong>+91 ${WA_NUMBER}</strong> पर जुड़ सकते हैं।`,
        cta: { text: `💬 WhatsApp पर Skillansh टीम से बात करें`, action: 'whatsapp', url: `https://wa.me/${WA_NUMBER}?text=नमस्ते%20Skillansh%20टीम,%20मुझे%20कोर्स%20की%20जानकारी%20चाहिए।` },
        chips: ['📚 30-डे कोर्स स्ट्रक्चर', '🚀 कोहॉर्ट फीस व प्लान्स', '🎯 स्पॉट बुकिंग (₹500)']
      }
    },

    youtube: {
      en: {
        text: `<strong>▶ Official Skillansh YouTube Channel:</strong><br><br>
Subscribe to <strong>@SkillAnsh</strong> on YouTube for free practical Excel tips, workflow automation demos, and tutorial walkthroughs!`,
        cta: { text: `▶ Subscribe on YouTube (@SkillAnsh)`, action: 'link', url: YT_CHANNEL },
        chips: ['📚 30-Day Course Structure', '🚀 Cohort Fees & Plans', '🎯 Spot Booking (₹500)', '💬 WhatsApp Team']
      },
      mr: {
        text: `<strong>▶ अधिकृत Skillansh YouTube चॅनल:</strong><br><br>
मोफत प्रॅक्टिकल Excel टिप्स, वर्कफ्लो ऑटोमेशन प्रात्यक्षिके आणि ट्युटोरियल्स पाहण्यासाठी आमच्या YouTube चॅनल <strong>@SkillAnsh</strong> ला सबस्क्राईब करा!`,
        cta: { text: `▶ YouTube चॅनल सबस्क्राईब करा (@SkillAnsh)`, action: 'link', url: YT_CHANNEL },
        chips: ['📚 अभ्यासक्रम रचना पहा', '🚀 कोहॉर्ट फी व प्लॅन्स', '🎯 स्पॉट बुकिंग (₹५००)', '💬 WhatsApp टीम']
      },
      hi: {
        text: `<strong>▶ ऑफिशियल Skillansh यूट्यूब चैनल:</strong><br><br>
फ्री प्रैक्टिकल एक्सेल टिप्स, ऑटोमेशन वीडियो और ट्यूटोरियल्स देखने के लिए हमारे चैनल <strong>@SkillAnsh</strong> को सब्सक्राइब करें!`,
        cta: { text: `▶ यूट्यूब चैनल सब्सक्राइब करें (@SkillAnsh)`, action: 'link', url: YT_CHANNEL },
        chips: ['📚 30-डे कोर्स स्ट्रक्चर', '🚀 कोहॉर्ट फीस व प्लान्स', '🎯 स्पॉट बुकिंग (₹500)', '💬 WhatsApp टीम']
      }
    },

    fallback: {
      en: {
        text: `I am here to guide you! As your <strong>Skillmitra</strong> assistant, I can help you with the <strong>Course Structure</strong>, <strong>Course Fees & Plans</strong>, <strong>Spot Booking (₹500)</strong>, <strong>Promo Codes</strong>, or <strong>Batch Schedule</strong>.<br><br>
Would you like to speak directly with our Skillansh Support Team on WhatsApp?`,
        cta: { text: `💬 Ask Skillansh Team on WhatsApp`, action: 'whatsapp' },
        chips: ['📚 30-Day Course Structure', '🚀 Cohort Fees & Plans', '🎯 Spot Booking (₹500)', '🎟️ Promo Code', '💬 WhatsApp Team']
      },
      mr: {
        text: `मी आपल्याला मदत करण्यासाठी तत्पर आहे! आपला <strong>Skillmitra</strong> असिस्टंट म्हणून मी <strong>अभ्यासक्रम रचना</strong>, <strong>कोर्स फी व प्लॅन्स</strong>, <strong>स्पॉट बुकिंग (₹५००)</strong>, <strong>प्रोमो कोड</strong>, किंवा <strong>वेळापत्रका</strong>बद्दल अचूक माहिती देऊ शकतो.<br><br>
आपण थेट आमच्या Skillansh सपोर्ट टीमशी WhatsApp वर चर्चा करू इच्छिता का?`,
        cta: { text: `💬 Skillansh टीमशी WhatsApp वर बोला`, action: 'whatsapp' },
        chips: ['📚 अभ्यासक्रम रचना पहा', '🚀 कोहॉर्ट फी व प्लॅन्स', '🎯 स्पॉट बुकिंग (₹५००)', '🎟️ प्रोमो कोड', '💬 WhatsApp टीम']
      },
      hi: {
        text: `मैं आपकी पूरी सहायता करने के लिए यहाँ हूँ! आपके <strong>Skillmitra</strong> गाइड के रूप में मैं <strong>कोर्स स्ट्रक्चर</strong>, <strong>कोर्स फीस</strong>, <strong>स्पॉट बुकिंग (₹500)</strong>, <strong>प्रोमो कोड</strong>, या <strong>समय</strong> की जानकारी दे सकता हूँ।<br><br>
क्या आप सीधे Skillansh टीम से WhatsApp पर बात करना चाहते हैं?`,
        cta: { text: `💬 WhatsApp पर Skillansh टीम से पूछें`, action: 'whatsapp' },
        chips: ['📚 30-डे कोर्स स्ट्रक्चर', '🚀 कोहॉर्ट फीस व प्लान्स', '🎯 स्पॉट बुकिंग (₹500)', '🎟️ प्रोमो कोड', '💬 WhatsApp टीम']
      }
    }
  };

  // Intent classification rules (multilingual keyword matcher)
  function detectIntent(rawQuery) {
    const q = rawQuery.toLowerCase().trim();

    // 0. Syllabus / Curriculum / Topics / Learn / Content / Structure (Directly to program)
    if (
      q.includes('syllabus') || q.includes('curriculum') || q.includes('course') ||
      q.includes('structure') || q.includes('module') || q.includes('content') ||
      q.includes('topics') || q.includes('excel') || q.includes('power query') ||
      q.includes('power bi') || q.includes('ai') || q.includes('automation') ||
      q.includes('अभ्यासक्रम') || q.includes('रचना') || q.includes('शिकवले') ||
      q.includes('शिकणार') || q.includes('विषय') || q.includes('सिलॅबस') ||
      q.includes('सिलेबस') || q.includes('स्ट्रक्चर') || q.includes('मॉड्यूल') ||
      q.includes('सिखाएंगे') || q.includes('सिखाया')
    ) {
      return 'curriculum';
    }

    // 1. Spot Booking / 500 / Token
    if (q.includes('spot') || q.includes('500') || q.includes('token') || q.includes('lock') || q.includes('स्पॉट') || q.includes('टोकन')) {
      return 'spot';
    }

    // 2. Promo code / discount / coupon / offer / special / free workshop
    if (q.includes('promo') || q.includes('code') || q.includes('coupon') || q.includes('discount') || q.includes('special') || q.includes('offer') || q.includes('workshop') || q.includes('masterclass') || q.includes('free') || q.includes('मोफत') || q.includes('कार्यशाळा') || q.includes('प्रोमो') || q.includes('सवलत') || q.includes('ऑफिस') || q.includes('ऑफर') || q.includes('वर्कशॉप')) {
      return 'promocode';
    }

    // 3. YouTube Channel
    if (q.includes('youtube') || q.includes('video') || q.includes('channel') || q.includes('चॅनल') || q.includes('चैनल') || q.includes('vedio')) {
      return 'youtube';
    }

    // 4. WhatsApp / Human Support / Team / Contact
    if (
      q.includes('whatsapp') || q.includes('phone') || q.includes('call') ||
      q.includes('human') || q.includes('agent') || q.includes('support') ||
      q.includes('contact') || q.includes('number') || q.includes('sampark') ||
      q.includes('संपर्क') || q.includes('व्हाट्सएप') || q.includes('व्हॉट्सॲप') ||
      q.includes('baat') || q.includes('bolaycha') || q.includes('madad') || q.includes('मदत') ||
      q.includes('team') || q.includes('टीम')
    ) {
      return 'whatsapp';
    }

    // 5. Pricing / Fees / Cost / Charges / Installment
    if (
      q.includes('fee') || q.includes('price') || q.includes('cost') ||
      q.includes('charge') || q.includes('how much') || q.includes('kiti') ||
      q.includes('kitna') || q.includes('paise') || q.includes('रुपये') ||
      q.includes('फी') || q.includes('किंमत') || q.includes('खर्च') ||
      q.includes('फीस') || q.includes('रक्कम') || q.includes('installment') ||
      q.includes('हप्ता') || q.includes('हप्ते') || q.includes('9999') || q.includes('5999')
    ) {
      return 'pricing';
    }

    // 6. Mentor / Trainer / Teacher / Experience
    if (
      q.includes('mentor') || q.includes('instructor') || q.includes('teacher') ||
      q.includes('who is') || q.includes('kaun') || q.includes('kon') ||
      q.includes('मेंटर') || q.includes('कोण') || q.includes('कौन') ||
      q.includes('experience') || q.includes('अनुभव') || q.includes('sir') ||
      q.includes('सर') || q.includes('मार्गदर्शक') || q.includes('girish') || q.includes('shelar')
    ) {
      return 'mentor';
    }

    // 7. Schedule / Timings / Batch / Date / Time
    if (
      q.includes('timing') || q.includes('time') || q.includes('schedule') ||
      q.includes('date') || q.includes('batch') || q.includes('when') ||
      q.includes('kab') || q.includes('kadhi') || q.includes('वेळ') ||
      q.includes('वेळापत्रक') || q.includes('तारीख') || q.includes('समय') ||
      q.includes('कब') || q.includes('कधी') || q.includes('recording') || q.includes('रेकॉर्डिंग')
    ) {
      return 'timings';
    }

    // 8. Certificate
    if (
      q.includes('certificate') || q.includes('certification') ||
      q.includes('प्रमाणपत्र') || q.includes('सर्टिफिकेट') || q.includes('certi')
    ) {
      return 'certificate';
    }

    return 'fallback';
  }

  // Guess language from text
  function guessQueryLang(text) {
    const devanagariRegex = /[\u0900-\u097F]/;
    if (devanagariRegex.test(text)) {
      if (text.includes('कधी') || text.includes('आहे') || text.includes('काय') || text.includes('किती') || text.includes('मला') || text.includes('होय')) {
        return 'mr';
      }
      return 'hi';
    }
    return null;
  }

  // Sanitize HTML
  function sanitize(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }

  // Formatted current time string
  function getTimeString() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Render initial greeting
  function renderWelcomeMessage() {
    const greet = KB.greetings[currentLang];
    appendMessage('bot', greet.text, { chips: greet.chips });
  }

  // Create Chatbot DOM Structure
  function createChatbotUI() {
    if (document.getElementById('sa-chatbot-wrapper')) return;

    const root = document.getElementById('skillansh-chatbot-root') || document.body;

    const container = document.createElement('div');
    container.id = 'sa-chatbot-wrapper';
    container.innerHTML = `
      <!-- Launcher Button -->
      <button id="sa-chatbot-launcher" aria-label="Open Skillmitra Chat" aria-haspopup="dialog" aria-expanded="false">
        <div class="sa-launcher-avatar">
          <img src="${AVATAR_IMG_SRC}" alt="Skillmitra" class="sa-avatar-img" onerror="this.onerror=null; this.src='skillmitra-avatar.png';">
          <span class="sa-online-dot"></span>
        </div>
        <div class="sa-launcher-text">
          <span class="sa-launcher-title">Skillmitra 👋</span>
          <span class="sa-launcher-sub">24/7 AI Guide</span>
        </div>
        <div class="sa-unread-badge" id="sa-unread-badge" style="display: none;">1</div>
      </button>

      <!-- Chat Dialog Window -->
      <div id="sa-chatbot-dialog" role="dialog" aria-label="Skillmitra Chatbot" aria-hidden="true">
        <!-- Header -->
        <div class="sa-chat-header">
          <div class="sa-header-info">
            <div class="sa-header-avatar">
              <img src="${AVATAR_IMG_SRC}" alt="Skillmitra" class="sa-avatar-img" onerror="this.onerror=null; this.src='skillmitra-avatar.png';">
              <span class="sa-online-dot"></span>
            </div>
            <div>
              <h3 class="sa-header-title">Skillmitra</h3>
              <span class="sa-header-status">Online 🟢 • Your Skillansh AI Guide</span>
            </div>
          </div>
          <div class="sa-header-actions">
            <a href="https://wa.me/${WA_NUMBER}?text=Hi%20Skillansh%20Team,%20I%20have%20an%20enquiry." target="_blank" rel="noopener noreferrer" class="sa-icon-btn" title="Chat on WhatsApp" aria-label="WhatsApp Support">
              💬
            </a>
            <button class="sa-icon-btn" id="sa-close-btn" aria-label="Close Chat Window">
              ✕
            </button>
          </div>
        </div>

        <!-- Language Selector -->
        <div class="sa-lang-bar">
          <span>Language / भाषा:</span>
          <div class="sa-lang-chips">
            <button class="sa-lang-chip sa-active" data-lang="en">English</button>
            <button class="sa-lang-chip" data-lang="mr">मराठी</button>
            <button class="sa-lang-chip" data-lang="hi">हिंदी</button>
          </div>
        </div>

        <!-- Body / Messages -->
        <div class="sa-chat-body" id="sa-chat-body" role="log" aria-live="polite">
          <!-- Messages will be appended dynamically -->
        </div>

        <!-- Footer / Input -->
        <div class="sa-chat-footer">
          <form id="sa-chat-form" class="sa-input-row" autocomplete="off">
            <input 
              type="text" 
              id="sa-chat-input" 
              class="sa-chat-input" 
              placeholder="Ask in English, मराठी, or हिंदी..." 
              aria-label="Type your message"
              maxlength="250"
            />
            <button type="submit" class="sa-send-btn" id="sa-send-btn" aria-label="Send Message">
              ➤
            </button>
          </form>
          <p class="sa-footer-sub">Official Skillmitra Assistant • 24/7 Trilingual Guidance</p>
        </div>
      </div>
    `;

    root.appendChild(container);
    attachEventListeners();
    renderWelcomeMessage();
  }

  // Handle CTA button actions
  function handleActionClick(action, targetUrl, userQuery) {
    if (action === 'view_curriculum' || action === 'course_structure') {
      // Directly move / scroll to 30-Day Cohort Course Structure
      toggleChat(false);
      const programSec = document.getElementById('program');
      if (programSec) {
        programSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = 'index.html#program';
      }
    } else if (action === 'enrol_cohort') {
      toggleChat(false);
      const enrolBtn = document.getElementById('open-enrol-modal-btn');
      if (enrolBtn) {
        enrolBtn.click();
      } else {
        window.location.href = 'index.html#program';
      }
    } else if (action === 'spot_booking') {
      window.open(SPOT_BOOKING_URL, '_blank', 'noopener,noreferrer');
    } else if (action === 'workshop_page') {
      toggleChat(false);
      window.location.href = 'workshop.html';
    } else if (action === 'link') {
      if (targetUrl) window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } else if (action === 'whatsapp') {
      const queryParam = userQuery ? encodeURIComponent(`Hi Skillansh Team, I have a question: "${userQuery}"`) : encodeURIComponent('Hi Skillansh Team, I have an enquiry about the courses and programs.');
      const finalUrl = targetUrl || `https://wa.me/${WA_NUMBER}?text=${queryParam}`;
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    }
  }

  // Append a message bubble to the chat body
  function appendMessage(sender, textHtml, options = {}) {
    const body = document.getElementById('sa-chat-body');
    if (!body) return;

    const row = document.createElement('div');
    row.className = `sa-message-row sa-${sender}`;

    let avatarHtml = sender === 'bot' 
      ? `<div class="sa-msg-avatar"><img src="${AVATAR_IMG_SRC}" alt="Skillmitra" class="sa-avatar-img" onerror="this.onerror=null; this.src='skillmitra-avatar.png';"></div>` 
      : '';
    let ctaHtml = '';
    let chipsHtml = '';

    if (options.cta) {
      const isWhatsApp = options.cta.action === 'whatsapp';
      const ctaClass = isWhatsApp ? 'sa-cta-btn sa-whatsapp-btn' : 'sa-cta-btn';
      ctaHtml = `
        <button class="${ctaClass}" data-action="${options.cta.action}" data-url="${options.cta.url || ''}">
          ${options.cta.text}
        </button>
      `;
    }

    if (options.chips && options.chips.length > 0) {
      chipsHtml = `
        <div class="sa-quick-chips">
          ${options.chips.map(chip => `<button class="sa-chip-btn">${chip}</button>`).join('')}
        </div>
      `;
    }

    row.innerHTML = `
      ${avatarHtml}
      <div class="sa-msg-content" style="max-width: 100%;">
        <div class="sa-msg-bubble">
          <div>${textHtml}</div>
          ${ctaHtml}
        </div>
        ${chipsHtml}
        <div class="sa-msg-time">${getTimeString()}</div>
      </div>
    `;

    body.appendChild(row);
    body.scrollTop = body.scrollHeight;

    // Attach listeners to newly created CTA and chip buttons
    const ctaBtn = row.querySelector('.sa-cta-btn');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleActionClick(ctaBtn.getAttribute('data-action'), ctaBtn.getAttribute('data-url'), options.lastQuery);
      });
    }

    const chipBtns = row.querySelectorAll('.sa-chip-btn');
    chipBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.textContent.trim();
        handleUserSubmit(text);
      });
    });
  }

  // Show typing indicator
  function showTypingIndicator() {
    const body = document.getElementById('sa-chat-body');
    if (!body) return;

    const indicator = document.createElement('div');
    indicator.className = 'sa-message-row sa-bot';
    indicator.id = 'sa-typing-indicator';
    indicator.innerHTML = `
      <div class="sa-msg-avatar"><img src="${AVATAR_IMG_SRC}" alt="Skillmitra" class="sa-avatar-img" onerror="this.onerror=null; this.src='skillmitra-avatar.png';"></div>
      <div class="sa-msg-content">
        <div class="sa-msg-bubble sa-typing-bubble">
          <span class="sa-typing-dot"></span>
          <span class="sa-typing-dot"></span>
          <span class="sa-typing-dot"></span>
        </div>
      </div>
    `;
    body.appendChild(indicator);
    body.scrollTop = body.scrollHeight;
  }

  // Remove typing indicator
  function removeTypingIndicator() {
    const el = document.getElementById('sa-typing-indicator');
    if (el) el.remove();
  }

  // Handle user submission
  function handleUserSubmit(rawQuery) {
    if (!rawQuery || !rawQuery.trim()) return;
    const cleanText = rawQuery.trim();

    // 1. Render User Message
    appendMessage('user', sanitize(cleanText));

    // 2. Clear input
    const input = document.getElementById('sa-chat-input');
    if (input) input.value = '';

    // 3. Detect intent and language
    const guessedLang = guessQueryLang(cleanText);
    if (guessedLang && guessedLang !== currentLang) {
      setLanguage(guessedLang, false);
    }

    const intent = detectIntent(cleanText);
    const intentData = (KB[intent] && KB[intent][currentLang]) || KB.fallback[currentLang];

    // 4. Show typing animation then respond
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      appendMessage('bot', intentData.text, {
        cta: intentData.cta,
        chips: intentData.chips,
        lastQuery: cleanText
      });
    }, 380);
  }

  // Toggle open/close of chat dialog
  function toggleChat(forceState) {
    const dialog = document.getElementById('sa-chatbot-dialog');
    const launcher = document.getElementById('sa-chatbot-launcher');
    const unreadBadge = document.getElementById('sa-unread-badge');
    const input = document.getElementById('sa-chat-input');

    isOpen = typeof forceState === 'boolean' ? forceState : !isOpen;

    if (dialog && launcher) {
      if (isOpen) {
        dialog.classList.add('sa-active');
        dialog.setAttribute('aria-hidden', 'false');
        launcher.setAttribute('aria-expanded', 'true');
        if (unreadBadge) unreadBadge.style.display = 'none';
        if (input) setTimeout(() => input.focus(), 150);
      } else {
        dialog.classList.remove('sa-active');
        dialog.setAttribute('aria-hidden', 'true');
        launcher.setAttribute('aria-expanded', 'false');
      }
    }
  }

  // Switch language
  function setLanguage(langCode, announce = true) {
    if (langCode !== 'en' && langCode !== 'hi' && langCode !== 'mr') return;
    currentLang = langCode;

    // Update chip active classes
    const chips = document.querySelectorAll('.sa-lang-chip');
    chips.forEach(chip => {
      if (chip.getAttribute('data-lang') === langCode) {
        chip.classList.add('sa-active');
      } else {
        chip.classList.remove('sa-active');
      }
    });

    // Update input placeholder
    const input = document.getElementById('sa-chat-input');
    if (input) {
      if (langCode === 'mr') input.placeholder = 'मराठी किंवा English मध्ये विचारा...';
      else if (langCode === 'hi') input.placeholder = 'हिंदी या English में पूछें...';
      else input.placeholder = 'Ask in English, मराठी, or हिंदी...';
    }

    if (announce) {
      const announceText = {
        en: 'Language set to English. How can I assist you?',
        mr: 'भाषा मराठी सेट केली आहे. मी आपल्याला कशी मदत करू शकतो?',
        hi: 'भाषा हिंदी सेट की गई है। मैं आपकी क्या सहायता कर सकता हूँ?'
      };
      const greet = KB.greetings[currentLang];
      appendMessage('bot', announceText[currentLang], { chips: greet.chips });
    }
  }

  // Attach DOM events
  function attachEventListeners() {
    const launcher = document.getElementById('sa-chatbot-launcher');
    const closeBtn = document.getElementById('sa-close-btn');
    const form = document.getElementById('sa-chat-form');
    const input = document.getElementById('sa-chat-input');
    const langChips = document.querySelectorAll('.sa-lang-chip');

    if (launcher) {
      launcher.addEventListener('click', () => toggleChat());
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => toggleChat(false));
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input && input.value.trim()) {
          handleUserSubmit(input.value);
        }
      });
    }

    langChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const lang = chip.getAttribute('data-lang');
        setLanguage(lang, true);
      });
    });

    // ESC key closes chat
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleChat(false);
      }
    });
  }

  // Initialize widget on DOMContentLoaded or immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createChatbotUI);
  } else {
    createChatbotUI();
  }
})();
