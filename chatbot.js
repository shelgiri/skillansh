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
        text: `Hello! 👋 Welcome to <strong>Skillansh</strong>. I am <strong>Skillmitra</strong>, your 24/7 AI Guide.<br><br>🟢 <strong>We teach only what makes your daily office &amp; practical life easy!</strong> Join our <strong>Free 90-Min Live Practical Masterclass (Worth ₹1,099 &rarr; FREE)</strong> to experience our 10-second live demo and unlock our confidential roadmap &amp; <strong>50% Live Attendee Scholarship</strong>.`,
        chips: ['🟢 Free 90-Min Live Class', '🏡 How Daily Life Gets Easy', '🔑 50% Live Class Scholarship', '🎯 Spot Booking (₹500)', '👨‍🏫 Mentor Team', '💬 WhatsApp Team']
      },
      mr: {
        text: `नमस्कार! 👋 <strong>Skillansh</strong> मध्ये आपले स्वागत आहे. मी <strong>Skillmitra</strong>, आपला 24/7 AI गाइड आहे.<br><br>🟢 <strong>आम्ही फक्त रोजचे काम आणि जीवन सोपे करणाऱ्याच गोष्टी शिकवतो!</strong> आमच्या <strong>मोफत ९०-मिनिटे लाइव्ह मास्टरक्लासमध्ये (मूल्य ₹१,०९९ &rarr; मोफत)</strong> सहभागी व्हा आणि आमचा संपूर्ण रोडमॅप व <strong>५०% लाइव्ह स्कॉलरशिप</strong> जाणून घ्या.`,
        chips: ['🟢 मोफत लाइव्ह कार्यशाळा', '🏡 रोजचे काम कसे सोपे होईल?', '🔑 ५०% लाइव्ह स्कॉलरशिप', '🎯 स्पॉट बुकिंग (₹५००)', '👨‍🏫 मेंटर टीम माहिती', '💬 WhatsApp टीम']
      },
      hi: {
        text: `नमस्ते! 👋 <strong>Skillansh</strong> में आपका स्वागत है। मैं <strong>Skillmitra</strong>, आपका 24/7 एआई गाइड हूँ।<br><br>🟢 <strong>हम केवल वही सिखाते हैं जो आपके रोज़मर्रा के काम और जीवन को आसान बनाए!</strong> हमारी <strong>फ्री 90-मिनट लाइव वर्कशॉप (मूल्य ₹1,099 &rarr; FREE)</strong> जॉइन करें और पूरा रोडमैप व <strong>50% लाइव स्कॉलरशिप</strong> अनलॉक करें।`,
        chips: ['🟢 फ्री लाइव वर्कशॉप', '🏡 रोज़ का काम कैसे आसान होगा?', '🔑 50% लाइव स्कॉलरशिप', '🎯 स्पॉट बुकिंग (₹500)', '👨‍🏫 मेंटर टीम', '💬 WhatsApp टीम']
      }
    },

    curriculum: {
      en: {
        text: `<strong>📚 Skillansh Authoritative Course Catalogue:</strong><br><br>
• <strong>1. ADHAAR – Excel Foundation:</strong> <strong>₹1,999</strong> (25+ office formulas, dynamic tables & Pivots)<br>
• <strong>2. DRISHTI – MIS &amp; Dashboards:</strong> <strong>₹3,999</strong> (Automated monthly MIS & 1-page dashboards)<br>
• <strong>3. PRAVAH – Power Query:</strong> <strong>₹6,999</strong> (1-click multi-file data cleaning & consolidation)<br>
• <strong>4. BODH – Power BI &amp; AI:</strong> <strong>₹7,999</strong> (Interactive Power BI visuals, DAX & Smart AI Prompts)<br>
• <strong>⚙️ KRIYA – VBA &amp; Automation (Standalone):</strong> <strong>₹4,999</strong> (Separate standalone course; not included in the 4-course package)<br><br>
🏆 <strong>Complete 4-Course Package (ADHAAR + DRISHTI + PRAVAH + BODH &middot; Value ₹20,996):</strong><br>
• <strong>Option A (Full Payment):</strong> <strong>₹14,999</strong> (Unlocks all 4 courses immediately)<br>
• <strong>Option B (2-Instalment Plan &middot; Total ₹16,999):</strong> Pay <strong>₹2,000</strong> now to unlock ADHAAR + <strong>₹14,999</strong> before starting DRISHTI.`,
        cta: { text: `🎓 Open Course Registration & LMS Portal`, action: 'enrol_cohort' },
        chips: ['🚀 4-Course Package & Instalments', '🟢 Free Live Workshop', '💬 WhatsApp Support']
      },
      mr: {
        text: `<strong>📚 Skillansh अधिकृत अभ्यासक्रम आणि फी रचना:</strong><br><br>
• <strong>१. ADHAAR (आधार) – Excel Foundation:</strong> <strong>₹१,९९९</strong><br>
• <strong>२. DRISHTI (दृष्टी) – MIS &amp; Dashboards:</strong> <strong>₹३,९९९</strong><br>
• <strong>३. PRAVAH (प्रवाह) – Power Query:</strong> <strong>₹६,९९९</strong><br>
• <strong>४. BODH (बोध) – Power BI &amp; AI:</strong> <strong>₹७,९९९</strong><br>
• <strong>⚙️ KRIYA (क्रिया) – VBA &amp; Automation (स्वतंत्र कोर्स):</strong> <strong>₹४,९९९</strong> (४-कोर्स पॅकेजबाहेर)<br><br>
🏆 <strong>संपूर्ण ४-कोर्स पॅकेज (ADHAAR + DRISHTI + PRAVAH + BODH &middot; मूल्य ₹२०,९९६):</strong><br>
• <strong>पर्याय A (पूर्ण पेमेंट):</strong> <strong>₹१४,९९९</strong> (चारही कोर्सेस लगेच अनलॉक)<br>
• <strong>पर्याय B (२-हप्ते योजना &middot; एकूण ₹१६,९९९):</strong> आज <strong>₹२,०००</strong> भरून ADHAAR अनलॉक करा + DRISHTI सुरू होण्यापूर्वी <strong>₹१४,९९९</strong> भरा.`,
        cta: { text: `🎓 कोर्स नोंदणी व LMS पोर्टल उघडा`, action: 'enrol_cohort' },
        chips: ['🚀 ४-कोर्स पॅकेज व हप्ते', '🟢 मोफत लाइव्ह कार्यशाळा', '💬 WhatsApp सपोर्ट']
      },
      hi: {
        text: `<strong>📚 Skillansh आधिकारिक कोर्स और फीस संरचना:</strong><br><br>
• <strong>1. ADHAAR – Excel Foundation:</strong> <strong>₹1,999</strong><br>
• <strong>2. DRISHTI – MIS &amp; Dashboards:</strong> <strong>₹3,999</strong><br>
• <strong>3. PRAVAH – Power Query:</strong> <strong>₹6,999</strong><br>
• <strong>4. BODH – Power BI &amp; AI:</strong> <strong>₹7,999</strong><br>
• <strong>⚙️ KRIYA – VBA &amp; Automation (स्टैंडअलोन कोर्स):</strong> <strong>₹4,999</strong><br><br>
🏆 <strong>संपूर्ण 4-कोर्स पैकेज (ADHAAR + DRISHTI + PRAVAH + BODH &middot; मूल्य ₹20,996):</strong><br>
• <strong>विकल्प A (पूर्ण भुगतान):</strong> <strong>₹14,999</strong> (चारों कोर्स तुरंत अनलॉक)<br>
• <strong>विकल्प B (2-किस्त योजना &middot; कुल ₹16,999):</strong> अभी <strong>₹2,000</strong> देकर ADHAAR अनलॉक करें + DRISHTI से पहले <strong>₹14,999</strong> जमा करें।`,
        cta: { text: `🎓 कोर्स रजिस्ट्रेशन व LMS पोर्टल खोलें`, action: 'enrol_cohort' },
        chips: ['🚀 4-कोर्स पैकेज व किस्त', '🟢 फ्री लाइव वर्कशॉप', '💬 WhatsApp सहायता']
      }
    },

    pricing: {
      en: {
        text: `<strong>💳 Skillansh Course Fees &amp; 2-Instalment Policy:</strong><br><br>
• <strong>Complete 4-Course Package (ADHAAR + DRISHTI + PRAVAH + BODH):</strong><br>
  - Individual Course Value: ₹20,996<br>
  - <strong>Option A – Full Payment:</strong> <strong>₹14,999</strong> (One-time payment &middot; All 4 courses ACTIVE immediately)<br>
  - <strong>Option B – 2-Instalment Payment:</strong> Total <strong>₹16,999</strong><br>
    &bull; <strong>1st Instalment: ₹2,000</strong> (Collected at registration &middot; Unlocks ADHAAR – Excel Foundation &middot; Status: PARTIALLY_PAID)<br>
    &bull; <strong>2nd Instalment: ₹14,999</strong> (Due before starting DRISHTI &middot; Marks package PAID &amp; unlocks DRISHTI, PRAVAH &amp; BODH)<br><br>
• <strong>Individual Course Prices:</strong><br>
  - ADHAAR (Excel Foundation): ₹1,999<br>
  - DRISHTI (MIS &amp; Dashboards): ₹3,999<br>
  - PRAVAH (Power Query): ₹6,999<br>
  - BODH (Power BI &amp; AI): ₹7,999<br>
  - KRIYA (VBA &amp; Automation – Standalone Only): ₹4,999`,
        cta: { text: `🚀 Register & Pay via Razorpay Checkout`, action: 'enrol_cohort' },
        chips: ['📚 Course Catalogue', '🟢 Free Live Workshop', '💬 WhatsApp Support']
      },
      mr: {
        text: `<strong>💳 Skillansh कोर्स फी आणि २-हप्ते (Instalment) धोरण:</strong><br><br>
• <strong>संपूर्ण ४-कोर्स पॅकेज (ADHAAR + DRISHTI + PRAVAH + BODH &middot; मूल्य ₹२०,९९६):</strong><br>
  - <strong>पर्याय A – पूर्ण पेमेंट:</strong> <strong>₹१४,९९९</strong> (चारही कोर्सेस लगेच ACTIVE होतात)<br>
  - <strong>पर्याय B – २-हप्ते योजना (एकूण ₹१६,९९९):</strong><br>
    &bull; <strong>पहिला हप्ता: ₹२,०००</strong> (नोंदणीच्या वेळी &middot; ADHAAR अनलॉक करतो)<br>
    &bull; <strong>दुसरा हप्ता: ₹१४,९९९</strong> (DRISHTI सुरू होण्यापूर्वी &middot; DRISHTI, PRAVAH आणि BODH अनलॉक करतो)<br><br>
• <strong>स्वतंत्र कोर्स फी:</strong> ADHAAR ₹१,९९९ | DRISHTI ₹३,९९९ | PRAVAH ₹६,९९९ | BODH ₹७,९९९ | KRIYA (स्वतंत्र) ₹४,९९९`,
        cta: { text: `🚀 आताच नोंदणी करा`, action: 'enrol_cohort' },
        chips: ['📚 अभ्यासक्रम यादी', '🟢 मोफत लाइव्ह कार्यशाळा', '💬 WhatsApp सपोर्ट']
      },
      hi: {
        text: `<strong>💳 Skillansh कोर्स फीस और 2-किस्त (Instalment) नीति:</strong><br><br>
• <strong>संपूर्ण 4-कोर्स पैकेज (ADHAAR + DRISHTI + PRAVAH + BODH &middot; मूल्य ₹20,996):</strong><br>
  - <strong>विकल्प A – पूर्ण भुगतान:</strong> <strong>₹14,999</strong> (चारों कोर्स तुरंत ACTIVE)<br>
  - <strong>विकल्प B – 2-किस्त योजना (कुल ₹16,999):</strong><br>
    &bull; <strong>पहली किस्त: ₹2,000</strong> (रजिस्ट्रेशन के समय &middot; केवल ADHAAR अनलॉक)<br>
    &bull; <strong>दूसरी किस्त: ₹14,999</strong> (DRISHTI शुरू होने से पहले &middot; DRISHTI, PRAVAH व BODH अनलॉक)<br><br>
• <strong>व्यक्तिगत कोर्स फीस:</strong> ADHAAR ₹1,999 | DRISHTI ₹3,999 | PRAVAH ₹6,999 | BODH ₹7,999 | KRIYA (स्टैंडअलोन) ₹4,999`,
        cta: { text: `🚀 अभी रजिस्टर करें`, action: 'enrol_cohort' },
        chips: ['📚 कोर्स स्ट्रक्चर', '🟢 फ्री लाइव वर्कशॉप', '💬 WhatsApp सहायता']
      }
    },

    spot: {
      en: {
        text: `<strong>🎯 Instant Spot Booking Token (₹500 — Locks 50% Live Scholarship Seat):</strong><br><br>
Attended our Free Live Masterclass? Because our 50% Founding Scholarship (₹34,000 &rarr; <strong>₹17,000</strong>) is strictly limited to the <strong>First 51 Learners (15–20 per live batch)</strong>, you can lock your seat and 50% grant right now by paying just <strong>₹500</strong>!<br><br>
• Your seat in the First 51 Learners batch is officially reserved.<br>
• The ₹500 token is <strong>100% deducted</strong> from your ₹17,000 scholarship fee.`,
        cta: { text: `🎯 Lock Your 50% Scholarship Seat for ₹500`, action: 'spot_booking', url: SPOT_BOOKING_URL },
        chips: ['🟢 Free 90-Min Live Class', '🔑 50% Live Class Scholarship', '💬 Chat on WhatsApp']
      },
      mr: {
        text: `<strong>🎯 इन्स्टंट स्पॉट बुकिंग टोकन (₹५०० — ५०% स्कॉलरशिप जागा लॉक करा):</strong><br><br>
मोफत लाइव्ह मास्टरक्लास पूर्ण केला का? आमची ५०% स्कॉलरशिप (₹३४,००० &rarr; <strong>₹१७,०००</strong>) फक्त <strong>पहिल्या ५१ विद्यार्थ्यांसाठी (१५-२० प्रति लाइव्ह बॅच)</strong> मर्यादित असल्याने, आपण केवळ <strong>₹५०० टोकन</strong> भरून आपली जागा त्वरित सुरक्षित करू शकता!<br><br>
• हे ₹५०० तुमच्या ₹१७,००० स्कॉलरशिप फीमधून <strong>१००% वजा</strong> केले जातात.`,
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
