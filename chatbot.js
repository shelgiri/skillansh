/**
 * Skillmitra - Official AI Career & Automation Guide
 * Brand: Skillansh (www.skillansh.com)
 * WhatsApp: +91 9922045007 | Skillansh Mentor Team
 * Languages: English, Marathi, Hindi
 * Complete Pricing Privacy Enforced: Zero course or package fees disclosed publicly.
 */

(function () {
  'use strict';

  const config = window.ACCOUNTPRO_CONFIG || {};
  const WA_NUMBER = config.WHATSAPP_NUMBER || '919922045007';
  const YT_CHANNEL = config.YOUTUBE_CHANNEL_URL || 'https://www.youtube.com/@SkillAnsh';
  const FREE_SESSION_URL = config.FREE_SESSION_REGISTRATION_URL || 'https://forms.gle/TqDgYuWZYLHGGpYTA';
  const AVATAR_IMG_SRC = 'assets/skillmitra-avatar.png';

  let currentLang = 'en';
  let isOpen = false;

  const KB = {
    greetings: {
      en: {
        text: `Hello! 👋 Welcome to <strong>Skillansh – Learn. Apply. Implement. Grow.</strong> I am <strong>Skillmitra</strong>, your 24/7 AI Guide.<br><br>🟢 <strong>We teach only what makes your daily office &amp; practical life easy!</strong> Explore our 4-Course Learning Pathway (ADHAAR, DRISHTI, PRAVAH, BODH) or join our <strong>FREE Introductory Session this Sunday</strong>.`,
        chips: ['🟢 Join Free Session', '📚 Learning Programmes', '💳 Enquire About Pricing', '👨‍🏫 Mentor Team', '💬 DM Us on WhatsApp']
      },
      mr: {
        text: `नमस्कार! 👋 <strong>Skillansh</strong> मध्ये आपले स्वागत आहे. मी <strong>Skillmitra</strong>, आपला 24/7 AI गाइड आहे.<br><br>🟢 <strong>आम्ही फक्त रोजचे काम आणि जीवन सोपे करणाऱ्याच गोष्टी शिकवतो!</strong> आमचा ४-कोर्स लर्निंग मार्ग (ADHAAR, DRISHTI, PRAVAH, BODH) किंवा या रविवारी होणाऱ्या <strong>मोफत परिचयात्मक सत्राबद्दल (FREE Introductory Session)</strong> माहिती मिळवा.`,
        chips: ['🟢 मोफत सत्रात सहभागी व्हा', '📚 अभ्यासक्रम यादी', '💳 फी व प्रवेश माहिती', '👨‍🏫 मेंटर टीम माहिती', '💬 WhatsApp वर मेसेज करा']
      },
      hi: {
        text: `नमस्ते! 👋 <strong>Skillansh</strong> में आपका स्वागत है। मैं <strong>Skillmitra</strong>, आपका 24/7 एआई गाइड हूँ।<br><br>🟢 <strong>हम केवल वही सिखाते हैं जो आपके रोज़मर्रा के काम और जीवन को आसान बनाए!</strong> हमारे 4-कोर्स लर्निंग पाथवे (ADHAAR, DRISHTI, PRAVAH, BODH) या इस रविवार के <strong>FREE Introductory Session</strong> के बारे में जानें।`,
        chips: ['🟢 फ्री सेशन जॉइन करें', '📚 कोर्स स्ट्रक्चर', '💳 फीस व प्रवेश जानकारी', '👨‍🏫 मेंटर टीम', '💬 WhatsApp पर मैसेज करें']
      }
    },

    curriculum: {
      en: {
        text: `<strong>📚 Skillansh Learning Programmes:</strong><br><br>
<strong>Progressive 4-Course Learning Pathway:</strong><br>
• <strong>1. ADHAAR – Excel Foundation:</strong> 25+ core office formulas, dynamic tables &amp; Pivot Table analysis.<br>
• <strong>2. DRISHTI – MIS &amp; Dashboards:</strong> Automated monthly MIS reporting, Maker-Checker controls &amp; 1-page visual Excel dashboards.<br>
• <strong>3. PRAVAH – Power Query:</strong> 1-click multi-file data cleaning, unpivoting &amp; automated consolidation pipelines.<br>
• <strong>4. BODH – Power BI &amp; AI:</strong> Interactive Power BI data models, DAX measures &amp; structured AI Prompt Engineering.`,
        cta: { text: `🎓 Explore Courses & Register`, action: 'enrol_cohort' },
        chips: ['💳 Enquire About Pricing', '🟢 Join Free Session', '💬 DM Us on WhatsApp']
      },
      mr: {
        text: `<strong>📚 Skillansh लर्निंग प्रोग्राम्स:</strong><br><br>
<strong>क्रमानुसार ४-कोर्स लर्निंग मार्ग:</strong><br>
• <strong>१. ADHAAR (आधार) – Excel Foundation:</strong> २५+ ऑफिस फॉर्म्युले, डायनॅमिक टेबल्स व Pivot Tables.<br>
• <strong>२. DRISHTI (दृष्टी) – MIS &amp; Dashboards:</strong> ऑटोमेटेड मासिक MIS रिपोर्ट्स आणि १-पेज Excel डॅशबोर्ड्स.<br>
• <strong>३. PRAVAH (प्रवाह) – Power Query:</strong> १-क्लिक मल्टी-फाईल डेटा क्लिनिंग आणि एकत्रीकरण.<br>
• <strong>४. BODH (बोध) – Power BI &amp; AI:</strong> संवादात्मक Power BI डॅशबोर्ड्स, DAX आणि स्ट्रक्चर्ड AI प्रॉम्प्ट्स.`,
        cta: { text: `🎓 अभ्यासक्रम पहा आणि नोंदणी करा`, action: 'enrol_cohort' },
        chips: ['💳 फी व प्रवेश माहिती', '🟢 मोफत सत्रात सहभागी व्हा', '💬 WhatsApp वर मेसेज करा']
      },
      hi: {
        text: `<strong>📚 Skillansh लर्निंग प्रोग्राम्स:</strong><br><br>
<strong>4-कोर्स लर्निंग पाथवे:</strong><br>
• <strong>1. ADHAAR – Excel Foundation:</strong> 25+ ऑफिस फ़ॉर्मूले, डायनेमिक टेबल्स व पिवट टेबल्स।<br>
• <strong>2. DRISHTI – MIS &amp; Dashboards:</strong> ऑटोमेटेड मासिक MIS रिपोर्ट्स व 1-पेज एक्सेल डैशबोर्ड।<br>
• <strong>3. PRAVAH – Power Query:</strong> 1-क्लिक मल्टी-फाइल डेटा क्लीनिंग व ऑटोमेशन।<br>
• <strong>4. BODH – Power BI &amp; AI:</strong> इंटरएक्टिव Power BI डैशबोर्ड, DAX व स्ट्रक्चर्ड AI प्रॉम्प्ट्स।`,
        cta: { text: `🎓 कोर्स देखें और रजिस्टर करें`, action: 'enrol_cohort' },
        chips: ['💳 फीस व प्रवेश जानकारी', '🟢 फ्री सेशन जॉइन करें', '💬 WhatsApp पर मैसेज करें']
      }
    },

    pricing: {
      en: {
        text: `<strong>Interested in Joining Skillansh?</strong><br>
Want to understand our courses, programme structure and available payment options?<br><br>
You have two options:<br><br>
<strong>Option 1 – Join Our FREE Introductory Session</strong><br>
Join our upcoming FREE session this Sunday. We will explain our learning programmes, course structure and available enrolment options.<br><br>
<strong>Option 2 – Direct WhatsApp Enquiry</strong><br>
Prefer personal assistance? Send us a direct WhatsApp message for course details and pricing.<br>
<strong>WhatsApp Contact:</strong> 9922045007<br><br>
<em>Note: Applicable payment options are also unlocked automatically after you complete course registration on our registration portal.</em>`,
        cta: { text: `💬 DM Us on WhatsApp (9922045007)`, action: 'whatsapp', url: `https://wa.me/${WA_NUMBER}?text=Hello%20Skillansh%20Team,%20I%20would%20like%20to%20enquire%20about%20course%20details%20and%20pricing%20for%20Skillansh%20Learning%20Programmes.` },
        chips: ['🟢 Join Free Session', '📚 Learning Programmes', '🎓 Complete Course Registration']
      },
      mr: {
        text: `<strong>Skillansh मध्ये सहभागी होऊ इच्छिता? (Interested in Joining Skillansh?)</strong><br>
आमचे कोर्सेस, अभ्यासक्रमाची रचना आणि उपलब्ध पेमेंट पर्याय समजून घ्यायचे आहेत का?<br><br>
तुमच्याकडे दोन पर्याय आहेत:<br><br>
<strong>पर्याय १ – आमच्या मोफत परिचयात्मक सत्रात सहभागी व्हा (Join Our FREE Introductory Session)</strong><br>
या रविवारी होणाऱ्या आमच्या मोफत सत्रात सहभागी व्हा. त्यामध्ये आम्ही आमचे सर्व लर्निंग प्रोग्राम्स, कोर्स स्ट्रक्चर आणि प्रवेश पर्याय सविस्तर समजावून सांगू.<br><br>
<strong>पर्याय २ – थेट WhatsApp वर विचारणा करा (Direct WhatsApp Enquiry)</strong><br>
वैयक्तिक मार्गदर्शनासाठी आणि कोर्स तपशील व फी जाणून घेण्यासाठी आम्हाला थेट WhatsApp मेसेज पाठवा.<br>
<strong>WhatsApp क्रमांक:</strong> 9922045007`,
        cta: { text: `💬 DM Us on WhatsApp (9922045007)`, action: 'whatsapp', url: `https://wa.me/${WA_NUMBER}?text=Hello%20Skillansh%20Team,%20I%20would%20like%20to%20enquire%20about%20course%20details%20and%20pricing%20for%20Skillansh%20Learning%20Programmes.` },
        chips: ['🟢 मोफत सत्रात सहभागी व्हा', '📚 अभ्यासक्रम यादी', '🎓 कोर्स नोंदणी पूर्ण करा']
      },
      hi: {
        text: `<strong>Skillansh से जुड़ना चाहते हैं? (Interested in Joining Skillansh?)</strong><br>
हमारे कोर्सेज, प्रोग्राम स्ट्रक्चर और उपलब्ध पेमेंट विकल्पों को समझना चाहते हैं?<br><br>
आपके पास दो विकल्प हैं:<br><br>
<strong>विकल्प 1 – हमारे FREE Introductory Session में शामिल हों</strong><br>
इस रविवार हमारे आगामी निःशुल्क सत्र में शामिल हों। हम अपने लर्निंग प्रोग्राम्स, कोर्स स्ट्रक्चर और उपलब्ध नामांकन विकल्पों की पूरी जानकारी देंगे।<br><br>
<strong>विकल्प 2 – सीधा WhatsApp संपर्क</strong><br>
व्यक्तिगत सहायता चाहते हैं? कोर्स विवरण और फीस की जानकारी के लिए हमें सीधे WhatsApp संदेश भेजें।<br>
<strong>WhatsApp संपर्क:</strong> 9922045007`,
        cta: { text: `💬 DM Us on WhatsApp (9922045007)`, action: 'whatsapp', url: `https://wa.me/${WA_NUMBER}?text=Hello%20Skillansh%20Team,%20I%20would%20like%20to%20enquire%20about%20course%20details%20and%20pricing%20for%20Skillansh%20Learning%20Programmes.` },
        chips: ['🟢 फ्री सेशन जॉइन करें', '📚 कोर्स स्ट्रक्चर', '🎓 कोर्स रजिस्ट्रेशन करें']
      }
    },

    promocode: {
      en: {
        text: `<strong>🟢 Join Our FREE Introductory Session This Sunday:</strong><br><br>
Join our upcoming FREE session this Sunday where we demonstrate practical office automation live and explain our learning programmes, course structure, and available enrolment options.`,
        cta: { text: `🟢 Join Free Session`, action: 'workshop_page' },
        chips: ['📚 Learning Programmes', '💳 Enquire About Pricing', '💬 DM Us on WhatsApp']
      },
      mr: {
        text: `<strong>🟢 या रविवारी आमच्या मोफत परिचयात्मक सत्रात (FREE Introductory Session) सहभागी व्हा:</strong><br><br>
३ तासांचे ऑफिसचे काम १० मिनिटांत कसे पूर्ण होते हे प्रत्यक्ष पाहण्यासाठी आणि आमचे लर्निंग प्रोग्राम्स व प्रवेश पर्याय समजून घेण्यासाठी मोफत सत्रात सहभागी व्हा!`,
        cta: { text: `🟢 Join Free Session`, action: 'workshop_page' },
        chips: ['📚 अभ्यासक्रम यादी', '💳 फी व प्रवेश माहिती', '💬 WhatsApp वर मेसेज करा']
      },
      hi: {
        text: `<strong>🟢 इस रविवार हमारे FREE Introductory Session में शामिल हों:</strong><br><br>
3 घंटे का ऑफिस एक्सेल काम 10 मिनट में कैसे पूरा होता है, यह लाइव देखने और हमारे लर्निंग प्रोग्राम्स व नामांकन विकल्पों को समझने के लिए फ्री सेशन जॉइन करें!`,
        cta: { text: `🟢 Join Free Session`, action: 'workshop_page' },
        chips: ['📚 कोर्स स्ट्रक्चर', '💳 फीस व प्रवेश जानकारी', '💬 WhatsApp पर मैसेज करें']
      }
    },

    mentor: {
      en: {
        text: `<strong>👨‍🏫 About the Skillansh Mentor Team:</strong><br><br>
• Led by <strong>Girish Shelar</strong>, Senior Corporate Practitioner with <strong>15+ Years of Corporate &amp; Data Workflow Experience</strong>.<br>
• Specializes in advanced Excel (ADHAAR), MIS &amp; Dashboards (DRISHTI), Power Query (PRAVAH), Power BI &amp; AI (BODH), and VBA Automation (KRIYA).<br>
• Focuses strictly on 100% practical workplace execution — zero theoretical fluff.`,
        cta: { text: `💬 DM Us on WhatsApp`, action: 'whatsapp' },
        chips: ['📚 Learning Programmes', '🟢 Join Free Session', '💳 Enquire About Pricing']
      },
      mr: {
        text: `<strong>👨‍🏫 Skillansh मेंटर व मार्गदर्शक टीम:</strong><br><br>
• कॉर्पोरेट फायनान्स, एमआयएस आणि ऑटोमेशन क्षेत्रातील <strong>१५+ वर्षांचा प्रत्यक्ष अनुभव असलेले गिरीश शेलार</strong> यांच्या मार्गदर्शनाखाली संपूर्ण प्रात्यक्षिक प्रशिक्षण दिले जाते.<br>
• केवळ पुस्तकी ज्ञान नाही, तर प्रत्यक्षात कंपन्यांमध्ये दररोज वापरले जाणारे लाइव्ह Excel, MIS, Power Query, Power BI आणि VBA वर्कफ्लो शिकवले जातात.`,
        cta: { text: `💬 DM Us on WhatsApp`, action: 'whatsapp' },
        chips: ['📚 अभ्यासक्रम यादी', '🟢 मोफत सत्रात सहभागी व्हा', '💳 फी व प्रवेश माहिती']
      },
      hi: {
        text: `<strong>👨‍🏫 Skillansh मेंटर टीम के बारे में:</strong><br><br>
• कॉर्पोरेट फाइनेंस, एमआईएस और ऑटोमेशन में <strong>15+ वर्षों के प्रत्यक्ष अनुभव वाले गिरीश शेलार</strong> के मार्गदर्शन में प्रैक्टिकल प्रशिक्षण दिया जाता है।<br>
• केवल किताबी ज्ञान नहीं, बल्कि कंपनियों में रोज इस्तेमाल होने वाले लाइव एक्सेल, पावर क्वेरी, पावर बीआई और वीबीए वर्कफ़्लो सिखाए जाते हैं।`,
        cta: { text: `💬 DM Us on WhatsApp`, action: 'whatsapp' },
        chips: ['📚 कोर्स स्ट्रक्चर', '🟢 फ्री सेशन जॉइन करें', '💳 फीस व प्रवेश जानकारी']
      }
    },

    timings: {
      en: {
        text: `<strong>🕒 Session Format &amp; Learning Support:</strong><br><br>
• <strong>Format:</strong> Interactive live practical sessions designed for working professionals and students, paired with hands-on workplace datasets.<br>
• <strong>Introductory Session:</strong> Join our FREE Introductory Session this Sunday to explore the complete schedule and structure.`,
        cta: { text: `🟢 Join Free Session`, action: 'workshop_page' },
        chips: ['📚 Learning Programmes', '💳 Enquire About Pricing', '💬 DM Us on WhatsApp']
      },
      mr: {
        text: `<strong>🕒 सत्राचे स्वरूप आणि वेळापत्रक:</strong><br><br>
• नोकरदार आणि विद्यार्थ्यांसाठी उपयुक्त संवादात्मक लाइव्ह प्रॅक्टिकल सत्रे आणि ऑफिस प्रॅक्टिस डेटासेट्स.<br>
• या रविवारी होणाऱ्या आमच्या मोफत सत्रात (FREE Introductory Session) संपूर्ण वेळापत्रक आणि रचना समजावून सांगितली जाईल.`,
        cta: { text: `🟢 Join Free Session`, action: 'workshop_page' },
        chips: ['📚 अभ्यासक्रम यादी', '💳 फी व प्रवेश माहिती', '💬 WhatsApp वर मेसेज करा']
      },
      hi: {
        text: `<strong>🕒 सेशन प्रारूप और समय:</strong><br><br>
• वर्किंग प्रोफेशनल्स और छात्रों के लिए उपयुक्त लाइव प्रैक्टिकल सेशन और हैंड्स-ऑन वर्कशीट्स।<br>
• इस रविवार हमारे FREE Introductory Session में पूरा शेड्यूल और कोर्स स्ट्रक्चर विस्तार से बताया जाएगा।`,
        cta: { text: `🟢 Join Free Session`, action: 'workshop_page' },
        chips: ['📚 कोर्स स्ट्रक्चर', '💳 फीस व प्रवेश जानकारी', '💬 WhatsApp पर मैसेज करें']
      }
    },

    whatsapp: {
      en: {
        text: `<strong>💬 Direct WhatsApp Enquiry:</strong><br><br>
Prefer personal assistance? Send us a direct WhatsApp message for course details and pricing.<br>
<strong>WhatsApp Contact:</strong> 9922045007`,
        cta: { text: `💬 DM Us on WhatsApp`, action: 'whatsapp', url: `https://wa.me/${WA_NUMBER}?text=Hello%20Skillansh%20Team,%20I%20would%20like%20to%20enquire%20about%20course%20details%20and%20pricing.` },
        chips: ['🟢 Join Free Session', '📚 Learning Programmes', '🎓 Course Registration']
      },
      mr: {
        text: `<strong>💬 थेट WhatsApp वर संपर्क साधा:</strong><br><br>
वैयक्तिक सहाय्य हवे आहे का? कोर्स तपशील आणि फी जाणून घेण्यासाठी आम्हाला थेट WhatsApp मेसेज पाठवा.<br>
<strong>WhatsApp क्रमांक:</strong> 9922045007`,
        cta: { text: `💬 DM Us on WhatsApp`, action: 'whatsapp', url: `https://wa.me/${WA_NUMBER}?text=Hello%20Skillansh%20Team,%20I%20would%20like%20to%20enquire%20about%20course%20details%20and%20pricing.` },
        chips: ['🟢 मोफत सत्रात सहभागी व्हा', '📚 अभ्यासक्रम यादी', '🎓 कोर्स नोंदणी']
      },
      hi: {
        text: `<strong>💬 सीधा WhatsApp संपर्क:</strong><br><br>
व्यक्तिगत सहायता चाहते हैं? कोर्स विवरण और फीस की जानकारी के लिए हमें सीधे WhatsApp संदेश भेजें।<br>
<strong>WhatsApp संपर्क:</strong> 9922045007`,
        cta: { text: `💬 DM Us on WhatsApp`, action: 'whatsapp', url: `https://wa.me/${WA_NUMBER}?text=Hello%20Skillansh%20Team,%20I%20would%20like%20to%20enquire%20about%20course%20details%20and%20pricing.` },
        chips: ['🟢 फ्री सेशन जॉइन करें', '📚 कोर्स स्ट्रक्चर', '🎓 कोर्स रजिस्ट्रेशन']
      }
    },

    youtube: {
      en: {
        text: `<strong>▶ Official Skillansh YouTube Channel:</strong><br><br>
Subscribe to <strong>@SkillAnsh</strong> on YouTube for free practical Excel tips, workflow automation demos, and tutorial walkthroughs!`,
        cta: { text: `▶ Subscribe on YouTube (@SkillAnsh)`, action: 'link', url: YT_CHANNEL },
        chips: ['📚 Learning Programmes', '🟢 Join Free Session', '💬 DM Us on WhatsApp']
      },
      mr: {
        text: `<strong>▶ अधिकृत Skillansh YouTube चॅनल:</strong><br><br>
मोफत प्रॅक्टिकल Excel टिप्स, वर्कफ्लो ऑटोमेशन प्रात्यक्षिके आणि ट्युटोरियल्स पाहण्यासाठी आमच्या YouTube चॅनल <strong>@SkillAnsh</strong> ला सबस्क्राईब करा!`,
        cta: { text: `▶ YouTube चॅनल सबस्क्राईब करा (@SkillAnsh)`, action: 'link', url: YT_CHANNEL },
        chips: ['📚 अभ्यासक्रम यादी', '🟢 मोफत सत्रात सहभागी व्हा', '💬 WhatsApp वर मेसेज करा']
      },
      hi: {
        text: `<strong>▶ ऑफिशियल Skillansh यूट्यूब चैनल:</strong><br><br>
फ्री प्रैक्टिकल एक्सेल टिप्स, ऑटोमेशन वीडियो और ट्यूटोरियल्स देखने के लिए हमारे चैनल <strong>@SkillAnsh</strong> को सब्सक्राइब करें!`,
        cta: { text: `▶ यूट्यूब चैनल सब्सक्राइब करें (@SkillAnsh)`, action: 'link', url: YT_CHANNEL },
        chips: ['📚 कोर्स स्ट्रक्चर', '🟢 फ्री सेशन जॉइन करें', '💬 WhatsApp पर मैसेज करें']
      }
    },

    fallback: {
      en: {
        text: `I am here to guide you! As your <strong>Skillmitra</strong> assistant, I can help you explore our <strong>Learning Programmes (ADHAAR, DRISHTI, PRAVAH, BODH &amp; standalone KRIYA)</strong>, register for our <strong>FREE Sunday Introductory Session</strong>, or connect you via <strong>Direct WhatsApp Enquiry (9922045007)</strong> for course details and pricing.`,
        cta: { text: `💬 DM Us on WhatsApp`, action: 'whatsapp' },
        chips: ['🟢 Join Free Session', '📚 Learning Programmes', '💳 Enquire About Pricing', '💬 DM Us on WhatsApp']
      },
      mr: {
        text: `मी आपल्याला मदत करण्यासाठी तत्पर आहे! आपला <strong>Skillmitra</strong> असिस्टंट म्हणून मी <strong>लर्निंग प्रोग्राम्स (ADHAAR, DRISHTI, PRAVAH, BODH आणि स्वतंत्र KRIYA)</strong>, <strong>रविवारचे मोफत सत्र</strong> किंवा <strong>कोर्स तपशील व फीसाठी थेट WhatsApp संपर्क (9922045007)</strong> याबद्दल मदत करू शकतो.`,
        cta: { text: `💬 DM Us on WhatsApp`, action: 'whatsapp' },
        chips: ['🟢 मोफत सत्रात सहभागी व्हा', '📚 अभ्यासक्रम यादी', '💳 फी व प्रवेश माहिती', '💬 WhatsApp वर मेसेज करा']
      },
      hi: {
        text: `मैं आपकी पूरी सहायता करने के लिए यहाँ हूँ! आपके <strong>Skillmitra</strong> गाइड के रूप में मैं <strong>लर्निंग प्रोग्राम्स (ADHAAR, DRISHTI, PRAVAH, BODH और स्टैंडअलोन KRIYA)</strong>, <strong>रविवार के FREE Introductory Session</strong>, या <strong>कोर्स विवरण और फीस के लिए WhatsApp संपर्क (9922045007)</strong> में आपकी मदद कर सकता हूँ।`,
        cta: { text: `💬 DM Us on WhatsApp`, action: 'whatsapp' },
        chips: ['🟢 फ्री सेशन जॉइन करें', '📚 कोर्स स्ट्रक्चर', '💳 फीस व प्रवेश जानकारी', '💬 WhatsApp पर मैसेज करें']
      }
    }
  };

  function detectIntent(rawQuery) {
    const q = rawQuery.toLowerCase().trim();

    if (
      q.includes('fee') || q.includes('price') || q.includes('pricing') || q.includes('cost') ||
      q.includes('charge') || q.includes('how much') || q.includes('kiti') ||
      q.includes('kitna') || q.includes('paise') || q.includes('रुपये') ||
      q.includes('फी') || q.includes('किंमत') || q.includes('खर्च') ||
      q.includes('फीस') || q.includes('रक्कम') || q.includes('instalment') || q.includes('installment') ||
      q.includes('हप्ता') || q.includes('हप्ते') || q.includes('payment')
    ) {
      return 'pricing';
    }

    if (
      q.includes('free') || q.includes('session') || q.includes('sunday') ||
      q.includes('workshop') || q.includes('masterclass') || q.includes('introductory') ||
      q.includes('मोफत') || q.includes('कार्यशाळा') || q.includes('सत्र') || q.includes('वर्कशॉप')
    ) {
      return 'promocode';
    }

    if (
      q.includes('syllabus') || q.includes('curriculum') || q.includes('course') ||
      q.includes('programme') || q.includes('structure') || q.includes('module') ||
      q.includes('adhaar') || q.includes('drishti') || q.includes('pravah') ||
      q.includes('bodh') || q.includes('kriya') || q.includes('excel') ||
      q.includes('power query') || q.includes('power bi') || q.includes('vba') ||
      q.includes('अभ्यासक्रम') || q.includes('रचना') || q.includes('कोर्स') || q.includes('स्ट्रक्चर')
    ) {
      return 'curriculum';
    }

    if (q.includes('youtube') || q.includes('video') || q.includes('channel') || q.includes('चॅनल') || q.includes('चैनल')) {
      return 'youtube';
    }

    if (
      q.includes('whatsapp') || q.includes('dm') || q.includes('phone') || q.includes('call') ||
      q.includes('support') || q.includes('contact') || q.includes('number') ||
      q.includes('संपर्क') || q.includes('व्हाट्सएप') || q.includes('व्हॉट्सॲप') || q.includes('मेसेज')
    ) {
      return 'whatsapp';
    }

    if (
      q.includes('mentor') || q.includes('instructor') || q.includes('teacher') ||
      q.includes('girish') || q.includes('shelar') || q.includes('मेंटर') || q.includes('मार्गदर्शक')
    ) {
      return 'mentor';
    }

    if (
      q.includes('timing') || q.includes('time') || q.includes('schedule') ||
      q.includes('date') || q.includes('batch') || q.includes('वेळ') || q.includes('वेळापत्रक')
    ) {
      return 'timings';
    }

    return 'fallback';
  }

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

  function sanitize(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }

  function getTimeString() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function renderWelcomeMessage() {
    const greet = KB.greetings[currentLang];
    appendMessage('bot', greet.text, { chips: greet.chips });
  }

  function createChatbotUI() {
    if (document.getElementById('sa-chatbot-wrapper')) return;

    const root = document.getElementById('skillansh-chatbot-root') || document.body;
    const container = document.createElement('div');
    container.id = 'sa-chatbot-wrapper';
    container.innerHTML = `
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

      <div id="sa-chatbot-dialog" role="dialog" aria-label="Skillmitra Chatbot" aria-hidden="true">
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
            <a href="https://wa.me/${WA_NUMBER}?text=Hello%20Skillansh%20Team,%20I%20would%20like%20to%20enquire%20about%20course%20details%20and%20pricing." target="_blank" rel="noopener noreferrer" class="sa-icon-btn" title="DM Us on WhatsApp" aria-label="WhatsApp Support">
              💬
            </a>
            <button class="sa-icon-btn" id="sa-close-btn" aria-label="Close Chat Window">
              ✕
            </button>
          </div>
        </div>

        <div class="sa-lang-bar">
          <span>Language / भाषा:</span>
          <div class="sa-lang-chips">
            <button class="sa-lang-chip sa-active" data-lang="en">English</button>
            <button class="sa-lang-chip" data-lang="mr">मराठी</button>
            <button class="sa-lang-chip" data-lang="hi">हिंदी</button>
          </div>
        </div>

        <div class="sa-chat-body" id="sa-chat-body" role="log" aria-live="polite"></div>

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

  function handleActionClick(action, targetUrl, userQuery) {
    if (action === 'view_curriculum' || action === 'course_structure') {
      toggleChat(false);
      window.location.href = 'courses.html';
    } else if (action === 'enrol_cohort') {
      toggleChat(false);
      window.location.href = 'enroll.html';
    } else if (action === 'workshop_page') {
      toggleChat(false);
      if (/^https?:\/\//i.test(FREE_SESSION_URL)) {
        window.open(FREE_SESSION_URL, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = FREE_SESSION_URL;
      }
    } else if (action === 'link') {
      if (targetUrl) window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } else if (action === 'whatsapp') {
      const queryParam = userQuery
        ? encodeURIComponent(`Hello Skillansh Team, I would like to enquire about course details and pricing: "${userQuery}"`)
        : encodeURIComponent('Hello Skillansh Team, I would like to enquire about course details and pricing for Skillansh Learning Programmes.');
      const finalUrl = targetUrl || `https://wa.me/${WA_NUMBER}?text=${queryParam}`;
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    }
  }

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

  function removeTypingIndicator() {
    const el = document.getElementById('sa-typing-indicator');
    if (el) el.remove();
  }

  function handleUserSubmit(rawQuery) {
    if (!rawQuery || !rawQuery.trim()) return;
    const cleanText = rawQuery.trim();

    appendMessage('user', sanitize(cleanText));

    const input = document.getElementById('sa-chat-input');
    if (input) input.value = '';

    const guessedLang = guessQueryLang(cleanText);
    if (guessedLang && guessedLang !== currentLang) {
      setLanguage(guessedLang, false);
    }

    const intent = detectIntent(cleanText);
    const intentData = (KB[intent] && KB[intent][currentLang]) || KB.fallback[currentLang];

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

  function setLanguage(langCode, announce = true) {
    if (langCode !== 'en' && langCode !== 'hi' && langCode !== 'mr') return;
    currentLang = langCode;

    const chips = document.querySelectorAll('.sa-lang-chip');
    chips.forEach(chip => {
      if (chip.getAttribute('data-lang') === langCode) {
        chip.classList.add('sa-active');
      } else {
        chip.classList.remove('sa-active');
      }
    });

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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleChat(false);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createChatbotUI);
  } else {
    createChatbotUI();
  }
})();
