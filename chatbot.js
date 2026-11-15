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
        text: `Hello! 👋 Welcome to <strong>Skillansh</strong>. I am <strong>Skillmitra</strong>, your official 24/7 AI Career & Automation Guide.<br><br>How can I help you today? You can explore our <strong>30-Day Master Cohort</strong>, view the <strong>Course Structure</strong>, book an instant <strong>Spot Token (₹500)</strong>, or chat with our mentor team.`,
        chips: ['📚 30-Day Course Structure', '🚀 Cohort Fees & Plans', '🎯 Spot Booking (₹500)', '🎟️ Have a Promo Code?', '👨‍🏫 Mentor Team', '💬 WhatsApp Team']
      },
      mr: {
        text: `नमस्कार! 👋 <strong>Skillansh</strong> मध्ये आपले स्वागत आहे. मी <strong>Skillmitra</strong>, आपला अधिकृत 24/7 AI करिअर मित्र आहे.<br><br>मी आपल्याला कशी मदत करू? आपण आमच्या <strong>३० दिवसांच्या कोहॉर्टची रचना</strong>, फी प्लॅन्स, इन्स्टंट <strong>स्पॉट बुकिंग (₹५००)</strong>, किंवा मेंटर टीमशी संपर्काबद्दल विचारू शकता.`,
        chips: ['📚 अभ्यासक्रम रचना पहा', '🚀 कोहॉर्ट फी व प्लॅन्स', '🎯 स्पॉट बुकिंग (₹५००)', '🎟️ प्रोमो कोड आहे का?', '👨‍🏫 मेंटर टीम माहिती', '💬 WhatsApp टीम']
      },
      hi: {
        text: `नमस्ते! 👋 <strong>Skillansh</strong> में आपका स्वागत है। मैं <strong>Skillmitra</strong>, आपका ऑफिशियल 24/7 एआई गाइड हूँ।<br><br>मैं आपकी क्या मदद कर सकता हूँ? आप हमारे <strong>30-दिवसीय कोर्स स्ट्रक्चर</strong>, फीस और प्लांस, इंस्टेंट <strong>स्पॉट बुकिंग (₹500)</strong> या मेंटर टीम के बारे में पूछ सकते हैं।`,
        chips: ['📚 30-डे कोर्स स्ट्रक्चर', '🚀 कोहॉर्ट फीस व प्लान्स', '🎯 स्पॉट बुकिंग (₹500)', '🎟️ प्रोमो कोड', '👨‍🏫 मेंटर टीम', '💬 WhatsApp टीम']
      }
    },

    curriculum: {
      en: {
        text: `<strong>📚 30-Day Practical Course Structure:</strong><br><br>
The cohort is organized into <strong>6 Real-World Implementation Modules</strong>:<br>
• <strong>Module 01:</strong> Business & Data Workflow Audit<br>
• <strong>Module 02:</strong> Modern Excel Mastery (Dynamic Arrays, XLOOKUP)<br>
• <strong>Module 03:</strong> Power Query Automation (1-click bank & ledger reconciliations)<br>
• <strong>Module 04:</strong> MIS & Executive Financial Reporting (Auto P&L, KPIs)<br>
• <strong>Module 05:</strong> Power BI Interactive Dashboards<br>
• <strong>Module 06:</strong> Career Transition & ATS Resume Restructuring<br><br>
Click below to view the interactive module breakdown directly on the page:`,
        cta: { text: `📚 View 6-Module Course Structure ↓`, action: 'view_curriculum' },
        chips: ['🚀 Cohort Fees & Plans', '🎯 Spot Booking (₹500)', '👨‍🏫 Mentor Team', '💬 WhatsApp Support']
      },
      mr: {
        text: `<strong>📚 ३० दिवसांच्या प्रात्यक्षिक अभ्यासक्रमाची रचना:</strong><br><br>
हा संपूर्ण कोहॉर्ट <strong>६ प्रॅक्टिकल मॉड्यूल्स</strong>मध्ये विभागलेला आहे:<br>
• <strong>मॉड्यूल ०१:</strong> बिझनेस आणि डेटा वर्कफ्लो ऑडिट<br>
• <strong>मॉड्यूल ०२:</strong> मॉडर्न एक्सेल मास्टरी (XLOOKUP, डायनामिक ॲरेज)<br>
• <strong>मॉड्यूल ०३:</strong> पॉवर क्वेरी ऑटोमेशन (१-क्लिक बँक व लेजर रिकॉन्सिलिएशन)<br>
• <strong>मॉड्यूल ०४:</strong> एमआयएस आणि फायनान्शियल रिपोर्टिंग (ऑटो P&L, ताळेबंद)<br>
• <strong>मॉड्यूल ०५:</strong> पॉवर बीआय इंटरॅक्टिव्ह डॅशबोर्ड्स<br>
• <strong>मॉड्यूल ०६:</strong> करिअर ग्रोथ आणि ATS रेझ्युमे मेकओव्हर<br><br>
वेबसाईटवरील सविस्तर अभ्यासक्रम पाहण्यासाठी खालील बटनावर क्लिक करा:`,
        cta: { text: `📚 ६-मॉड्यूल अभ्यासक्रम रचना पहा ↓`, action: 'view_curriculum' },
        chips: ['🚀 कोहॉर्ट फी व प्लॅन्स', '🎯 स्पॉट बुकिंग (₹५००)', '👨‍🏫 मेंटर टीम', '💬 WhatsApp सपोर्ट']
      },
      hi: {
        text: `<strong>📚 30-दिवसीय प्रैक्टिकल कोर्स स्ट्रक्चर:</strong><br><br>
यह कोहॉर्ट <strong>6 रियल-वर्ल्ड मॉड्यूल्स</strong> में संरचित है:<br>
• <strong>मॉड्यूल 01:</strong> बिजनेस और डेटा वर्कफ्लो ऑडिट<br>
• <strong>मॉड्यूल 02:</strong> मॉडर्न एक्सेल मास्टरी (XLOOKUP, डायनामिक एरेज़)<br>
• <strong>मॉड्यूल 03:</strong> पावर क्वेरी ऑटोमेशन (1-क्लिक बैंक व लेजर रिकॉन्सिलिएशन)<br>
• <strong>मॉड्यूल 04:</strong> एमआईएस और एग्जीक्यूटिव रिपोर्टिंग (ऑटो P&L, KPIs)<br>
• <strong>मॉड्यूल 05:</strong> पावर बीआई इंटरैक्टिव डैशबोर्ड्स<br>
• <strong>मॉड्यूल 06:</strong> करियर अपग्रेड और एटीएस रिज्यूमे रीस्ट्रक्चरिंग<br><br>
पेज पर सीधे 6 मॉड्यूल्स देखने के लिए नीचे क्लिक करें:`,
        cta: { text: `📚 6-मॉड्यूल कोर्स स्ट्रक्चर देखें ↓`, action: 'view_curriculum' },
        chips: ['🚀 कोहॉर्ट फीस व प्लान्स', '🎯 स्पॉट बुकिंग (₹500)', '👨‍🏫 मेंटर टीम', '💬 WhatsApp सहायता']
      }
    },

    pricing: {
      en: {
        text: `Here is our transparent fee structure for the <strong>Skillansh 30-Day Comprehensive Data Cohort</strong>:<br><br>
• <strong>Full Cohort Access:</strong> ₹9,999 (Complete 30-day mentorship, live practicals, ATS resume & bonuses)<br>
• <strong>🎯 Instant Spot Booking Token:</strong> ₹500 (Instant seat lock &middot; balance before cohort starts)<br>
• <strong>1st Installment (Seat Booking):</strong> ₹5,000<br>
• <strong>Part Payment / Balance:</strong> ₹4,000<br>
• <strong>🔒 Special Batch Offer:</strong> ₹5,999 (Exclusively unlocked with secret promo code <strong>SPECIAL5999</strong> saving ₹4,000!)`,
        cta: { text: `🚀 Enrol Now & Choose Plan`, action: 'enrol_cohort' },
        chips: ['📚 30-Day Course Structure', '🎯 Spot Booking (₹500)', '🎟️ How to use Promo Code?', '💬 WhatsApp Support']
      },
      mr: {
        text: `येथे <strong>Skillansh ३०-दिवसीय कोहॉर्ट</strong>ची अधिकृत फी रचना आहे:<br><br>
• <strong>Full Cohort Access:</strong> ₹९,९९९ (संपूर्ण ३० दिवसांचे प्रॅक्टिकल मार्गदर्शन, ATS रेझ्युमे व सर्व बोनस)<br>
• <strong>🎯 इन्स्टंट स्पॉट बुकिंग टोकन:</strong> ₹५०० (जागा तात्काळ लॉक करा &middot; उर्वरित रक्कम नंतर)<br>
• <strong>पहिला हप्ता (Seat Booking):</strong> ₹५,०००<br>
• <strong>अंशतः पेमेंट / उर्वरित रक्कम:</strong> ₹४,०००<br>
• <strong>🔒 स्पेशल बॅच ऑफर:</strong> ₹५,९९९ (फक्त <strong>SPECIAL5999</strong> हा गुप्त प्रोमो कोड वापरल्यास ₹४,००० ची थेट सवलत!)`,
        cta: { text: `🚀 प्रवेश घ्या व प्लॅन निवडा`, action: 'enrol_cohort' },
        chips: ['📚 अभ्यासक्रम रचना पहा', '🎯 स्पॉट बुकिंग (₹५००)', '🎟️ प्रोमो कोड कसा वापरायचा?', '💬 WhatsApp सपोर्ट']
      },
      hi: {
        text: `यहाँ <strong>Skillansh 30-दिवसीय कोहॉर्ट</strong> की पारदर्शी फीस संरचना है:<br><br>
• <strong>फुल कोहॉर्ट एक्सेस:</strong> ₹9,999 (सम्पूर्ण 30-दिन प्रैक्टिकल मेंटरशिप, एटीएस रिज्यूमे और बोनस)<br>
• <strong>🎯 इंस्टेंट स्पॉट बुकिंग टोकन:</strong> ₹500 (सीट तुरंत लॉक करें &middot; बाकी फीस बाद में)<br>
• <strong>पहला हफ्ता (सीट बुकिंग):</strong> ₹5,000<br>
• <strong>पार्ट पेमेंट / बैलेंस:</strong> ₹4,000<br>
• <strong>🔒 स्पेशल बैच ऑफर:</strong> ₹5,999 (सीक्रेट प्रोमो कोड <strong>SPECIAL5999</strong> डालने पर ₹4,000 की छूट!)`,
        cta: { text: `🚀 एनरोल करें व प्लान चुनें`, action: 'enrol_cohort' },
        chips: ['📚 30-डे कोर्स स्ट्रक्चर', '🎯 स्पॉट बुकिंग (₹500)', '🎟️ प्रोमो कोड कैसे लगाएं?', '💬 WhatsApp सहायता']
      }
    },

    spot: {
      en: {
        text: `<strong>🎯 Instant Spot Booking Token (₹500):</strong><br><br>
During webinars, clarity calls, or preview sessions, you can lock your seat instantly by paying just <strong>₹500</strong> token amount!<br><br>
• Your seat in the upcoming cohort is officially reserved.<br>
• You lock any eligible scholarship & all fast-track bonuses.<br>
• The remaining balance can be paid before the cohort starts.`,
        cta: { text: `🎯 Lock Your Seat for ₹500 Now`, action: 'spot_booking', url: SPOT_BOOKING_URL },
        chips: ['📚 30-Day Course Structure', '🚀 Full Cohort Fees', '💬 Chat on WhatsApp']
      },
      mr: {
        text: `<strong>🎯 इन्स्टंट स्पॉट बुकिंग टोकन (₹५००):</strong><br><br>
वेबिनार, स्पष्टता सत्र किंवा विशेष ऑफरदरम्यान आपण फक्त <strong>₹५०० टोकन</strong> भरून आपली जागा त्वरित रिझर्व्ह करू शकता!<br><br>
• आगामी बॅचमधील आपली जागा अधिकृतपणे आरक्षित होते.<br>
• स्कॉलरशिप व फास्ट-ट्रॅक बोनसेस सुरक्षित होतात.<br>
• उर्वरित रक्कम बॅच सुरू होण्यापूर्वी भरता येते.`,
        cta: { text: `🎯 आताच ₹५०० मध्ये जागा लॉक करा`, action: 'spot_booking', url: SPOT_BOOKING_URL },
        chips: ['📚 अभ्यासक्रम रचना पहा', '🚀 संपूर्ण कोहॉर्ट फी', '💬 WhatsApp वर बोला']
      },
      hi: {
        text: `<strong>🎯 इंस्टेंट स्पॉट बुकिंग टोकन (₹500):</strong><br><br>
वेबिनार या डेमो सेशन के दौरान आप केवल <strong>₹500 टोकन</strong> देकर अपनी सीट तुरंत रिजर्व कर सकते हैं!<br><br>
• आगामी बैच में आपकी सीट तुरंत बुक हो जाती है।<br>
• स्कॉलरशिप और सभी बोनसेस सुरक्षित रहते हैं।<br>
• बाकी बची फीस बैच शुरू होने से पहले दी जा सकती है।`,
        cta: { text: `🎯 ₹500 में अपनी सीट लॉक करें`, action: 'spot_booking', url: SPOT_BOOKING_URL },
        chips: ['📚 30-डे कोर्स स्ट्रक्चर', '🚀 फुल कोहॉर्ट फीस', '💬 WhatsApp पर पूछें']
      }
    },

    promocode: {
      en: {
        text: `<strong>🎟️ Secret Promo Code: SPECIAL5999</strong><br><br>
If you have an exclusive batch invite, enter promo code <strong>SPECIAL5999</strong> inside our Enrolment Form to unlock:<br><br>
• <strong>Special Batch Offer: ₹5,999</strong> (Save ₹4,000 instantly off regular ₹9,999!)<br>
• Includes full 30-day cohort access, live practicals, and all fast-track bonuses.<br><br>
Click below to open the form, apply the code, and claim your offer!`,
        cta: { text: `🚀 Open Enrolment & Apply Code`, action: 'enrol_cohort' },
        chips: ['📚 30-Day Course Structure', '💰 Other Payment Options', '🎯 Spot Booking (₹500)', '💬 WhatsApp Support']
      },
      mr: {
        text: `<strong>🎟️ गुप्त प्रोमो कोड: SPECIAL5999</strong><br><br>
जर आपल्याकडे विशेष बॅच आमंत्रण असेल, तर नोंदणी फॉर्ममध्ये <strong>SPECIAL5999</strong> हा प्रोमो कोड टाकून अनलॉक करा:<br><br>
• <strong>स्पेशल बॅच ऑफर: ₹५,९९९</strong> (नियमित ₹९,९९९ वर ₹४,००० ची थेट बचत!)<br>
• संपूर्ण ३० दिवसांचा कोहॉर्ट, प्रॅक्टिकल्स आणि सर्व बोनसेस समाविष्ट.<br><br>
खालील बटनावर क्लिक करून फॉर्म उघडा आणि कोड लागू करा!`,
        cta: { text: `🚀 फॉर्म उघडा व कोड लागू करा`, action: 'enrol_cohort' },
        chips: ['📚 अभ्यासक्रम रचना पहा', '💰 इतर पेमेंट पर्याय', '🎯 स्पॉट बुकिंग (₹५००)', '💬 WhatsApp सपोर्ट']
      },
      hi: {
        text: `<strong>🎟️ सीक्रेट प्रोमो कोड: SPECIAL5999</strong><br><br>
यदि आपके पास स्पेशल इनवाइट है, तो हमारे एनरोलमेंट फॉर्म में <strong>SPECIAL5999</strong> प्रोमो कोड डालें और पाएं:<br><br>
• <strong>स्पेशल बैच ऑफर: ₹5,999</strong> (रेगुलर ₹9,999 पर सीधे ₹4,000 की बचत!)<br>
• सम्पूर्ण 30-दिवसीय एक्सेस और सभी बोनस शामिल।<br><br>
नीचे क्लिक करके फॉर्म खोलें और कोड अप्लाई करें!`,
        cta: { text: `🚀 फॉर्म खोलें और कोड लगाएं`, action: 'enrol_cohort' },
        chips: ['📚 30-डे कोर्स स्ट्रक्चर', '💰 अन्य पेमेंट विकल्प', '🎯 स्पॉट बुकिंग (₹500)', '💬 WhatsApp सहायता']
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

    // 2. Promo code / discount / coupon / offer / special
    if (q.includes('promo') || q.includes('code') || q.includes('coupon') || q.includes('discount') || q.includes('special') || q.includes('offer') || q.includes('प्रोमो') || q.includes('सवलत') || q.includes('ऑफिस') || q.includes('ऑफर')) {
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
