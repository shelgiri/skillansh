/* Growth Circle — Site Scripts */
/* Centralized configuration is loaded from config.js before this script. */

let accountproSupabase = null;
let formSubmitting = false;
let lastSubmitTime = 0;
let currentLang = 'en';

/* ---------- Translations ---------- */
const translations = {
  en: {
    'Home': 'Home',
    'About & Approach': 'About & Approach',
    'Contact': 'Contact',
    'Book My Free Clarity Call': 'Book My Free Clarity Call',
    'Explore the 30-Day Program': 'Explore the 30-Day Program',
    'Accounting Automation · Digital Skills · Professional Growth': 'Accounting Automation · Digital Skills · Professional Growth',
    'Stop repeating the same accounting work. Start building smarter workflows.': 'Stop repeating the same accounting work. Start building smarter workflows.',
    'Not sure which task to automate first? Start with a conversation about your current accounting work.': 'Not sure which task to automate first? Start with a conversation about your current accounting work.',
    'Send My Enquiry': 'Send My Enquiry',
    'Name': 'Name',
    'Preferred contact method': 'Preferred contact method',
    'Email': 'Email',
    'Phone': 'Phone',
    'What would you like help with?': 'What would you like help with?',
    'Please enter your name.': 'Please enter your name.',
    'Please select email or phone.': 'Please select email or phone.',
    'Please enter a valid contact detail.': 'Please enter a valid contact detail.',
    'Please tell us briefly what you would like help with.': 'Please tell us briefly what you would like help with.',
    'Sending your enquiry…': 'Sending your enquiry…',
    'Your enquiry has been submitted successfully.': 'Your enquiry has been submitted successfully.',
    'Thank you for contacting Growth Circle. Your enquiry has been recorded.': 'Thank you for contacting Growth Circle. Your enquiry has been recorded.',
    'We could not submit your enquiry.': 'We could not submit your enquiry.',
    'Your message has not been confirmed as submitted. Please try again or use a verified contact channel if one is available.': 'Your message has not been confirmed as submitted. Please try again or use a verified contact channel if one is available.',
    'Try Again': 'Try Again',
    'Close': 'Close',
    'Discuss My Automation Goals': 'Discuss My Automation Goals',
    'Send an Enquiry': 'Send an Enquiry',
    'Privacy Information': 'Privacy Information',
    'Terms & Conditions': 'Terms & Conditions',
    'Program': 'Program',
    'Explore': 'Explore',
    'Legal': 'Legal',
    'Growth Circle · 2026 · From idea to growth.': 'Growth Circle · 2026 · From idea to growth.'
  },
  mr: {
    'Our approach': 'आमचा दृष्टिकोन',
    'Build on your accounting knowledge. Develop the skills to work differently.': 'तुमच्या लेखा ज्ञानावर आधारित राहा. वेगळ्या पद्धतीने काम करण्याचे कौशल्य विकसित करूया.',
    'Home': 'होम',
    'Live Workshop': 'लाइव्ह कार्यशाळा',
    'Live Workshop (₹51 Diwali Offer)': 'लाइव्ह कार्यशाळा (₹ 51/- दिवाळी ऑफर)',
    'Learner Requirements Form': 'शिकणाऱ्यांच्या गरजांचा फॉर्म',
    'Tell Us Your Learning Goals': 'तुमची शिकण्याची उद्दिष्टे सांगा',
    'Customize Your Accounting Automation Roadmap': 'तुमचा अकाउंटिंग ऑटोमेशन रोडमॅप तयार करा',
    'Select the skills and tools you want to master. We will review your requirements and provide you with a customized learning pathway and free automation templates.': 'तुम्हाला कोणती कौशल्ये आणि टूल्स शिकायची आहेत ते निवडा. आम्ही तुमच्या गरजा पाहून तुम्हाला योग्य मार्गदर्शन आणि मोफत ऑटोमेशन टेम्पलेट्स देऊ.',
    'Current Profile / Profession': 'सध्याचे प्रोफाइल / व्यवसाय',
    'Select Enquiry Topic (Optional)': 'विषय निवडा (पर्यायी)',
    'Your Message / Workflow Challenge': 'तुमचा संदेश / कामातील आव्हान',
    'Answers Before You Ask': 'तुमच्या मनातील प्रश्नांची उत्तरे',
    'Select': 'Select (निवडा)',
    'Map': 'Map (मांडा)',
    'Automate': 'Automate (स्वयंचलित करा)',
    'Review': 'Review (तपासा)',
    'Transform': 'Transform (बदल घडवा)',
    'Identify a repetitive accounting task that is suitable for improvement.': 'दरमहा वारंवार करावे लागणारे लेखा किंवा डेटा काम ओळखा.',
    'Break down the existing process, understand the inputs and outputs, and identify where manual work occurs.': 'सध्याची कामाची पद्धत समजून घ्या आणि कुठे मॅन्युअल वेळ जातो ते शोधा.',
    'Apply suitable Excel, Power Query, or AI-assisted techniques to build a practical workflow.': 'Excel, Power Query किंवा सुरक्षित AI वापरून व्यावहारिक ऑटोमेशन तयार करा.',
    'Test the result, inspect the output, and refine the workflow. Accounting accuracy and appropriate human review remain essential.': 'आउटपुट आणि अचूकता तपासा. लेखा कामात मानवी पडताळणी (Maker-Checker) नेहमीच महत्त्वाची असते.',
    'Use the practical work to develop your digital skills, strengthen your professional profile, and explore a clearly defined freelance service.': 'या कौशल्यांचा वापर करून तुमची व्यावसायिक प्रोफाइल मजबूत करा आणि फ्रीलान्स संधींचा शोध घ्या.',
    '1. Accounting Workflow Audit': '१. अकाउंटिंग वर्कफ्लो ऑडिट',
    '2. Live Excel and Power Query Lab': '२. लाइव्ह Excel आणि Power Query लॅब',
    '3. AI for Accounting Toolkit (Safe & Masked)': '३. अकाउंटिंगसाठी सुरक्षित AI टूलकिट',
    '4. Power BI Starter Project': '४. Power BI स्टार्टर प्रोजेक्ट',
    '5. Freelance Service Blueprint': '५. फ्रीलान्स सर्व्हिस ब्लूप्रिंट',
    '6. Implementation Reviews': '६. अंमलबजावणी पुनरावलोकन (Reviews)',
    "Let's start with your workflow": "आम्ही तुमच्या कार्यप्रवाहास सुरुवात करूया",
    'About & Approach': 'बदल व दृष्टिकोन',
    'Contact': 'संपर्क',
    'Book My Free Clarity Call': 'मोफत स्पष्टता बोलण्यासाठी बुक करा',
    'Explore the 30-Day Program': '३० दिवसांचा कार्यक्रम शोधा',
    'Accounting Automation · Digital Skills · Professional Growth': 'लेखा स्वयंचलित · डिजिटल कौशल्य · व्यावसायिक वाढ',
    'Stop repeating the same accounting work. Start building smarter workflows.': 'एकाच लेखा कामाची पुनरावृत्ती थांबवा. अधिक स्मार्ट कार्यप्रवाह तयार करूया.',
    'Not sure which task to automate first? Start with a conversation about your current accounting work.': 'पहिले कोणता काम स्वयंचलित करायचे याबद्दल निश्चित नाही? तुमच्या सध्याच्या लेखा कामाबद्दल संभाषणास सुरुवात करा.',
    'Send My Enquiry': 'माझी विचारणा पाठवा',
    'Name': 'नाव',
    'Preferred contact method': 'पसंतीचे संपर्क माध्यम',
    'Email': 'ईमेल',
    'Phone': 'फोन',
    'What would you like help with?': 'तुम्हाला कशाबद्दल मदत हवी आहे?',
    'Please enter your name.': 'कृपया तुमचे नाव प्रविष्ट करा.',
    'Please select email or phone.': 'कृपया ईमेल किंवा फोन निवडा.',
    'Please enter a valid contact detail.': 'कृपया वैध संपर्क तपशील प्रविष्ट करा.',
    'Please tell us briefly what you would like help with.': 'कृपया संक्षिप्तपणे सांगा की तुम्हाला कशाबद्दल मदत हवी आहे.',
    'Sending your enquiry…': 'विचारणा पाठवत आहोत…',
    'Your enquiry has been submitted successfully.': 'तुमची विचारणा यशस्वीरित्या सादर केली आहे.',
    'Thank you for contacting Growth Circle. Your enquiry has been recorded.': 'ग्रोथ सर्कलशी संपर्क साधल्याबद्दल धन्यवाद. तुमची विचारणा नोंदवली आहे.',
    'We could not submit your enquiry.': 'आम्ही तुमची विचारणा सादर करू शकलो नाही.',
    'Your message has not been confirmed as submitted. Please try again or use a verified contact channel if one is available.': 'तुमचा संदेश सादर झाला असल्याचा कन्फर्म झाला नाही. कृपया पुन्हा प्रयत्न करा किंवा उपलब्ध असल्यास सत्यापित संपर्क माध्यम वापरा.',
    'Try Again': 'पुन्हा प्रयत्न करा',
    'Close': 'बंद करा',
    'Discuss My Automation Goals': 'स्वयंचलित उद्देशांबद्दल चर्चा करा',
    'Send an Enquiry': 'विचारणा पाठवा',
    'Privacy Information': 'गोपनीयता माहिती',
    'Terms & Conditions': 'अटी व शर्ती',
    'Suitability': 'योग्यता',
    'This program may suit you if:': 'कार्यक्रम तुमच्यासाठी योग्य असू शकतो जर:',
    'You may need a different solution if:': 'तुम्हाला वेगळा उपाय हवा असू शकतो जर:',
    'The best starting point is a real task you want to improve and a willingness to work through the process.': 'सुरुवात करण्यासाठी सर्वोत्तम ठिकाण हा एक वास्तविक काम आहे जो तुम्हाला सुधारायचाय आहे आणि प्रक्रियेद्वारे काम करण्याची इच्छा आहे.',
    'Growth Circle · 2026 · From idea to growth.': 'ग्रोथ सर्कल · २०२६ · कल्पनेपासून वाढ.',
    'Practical accounting automation skills for Indian accounting professionals.': 'भारतीय लेखा व्यावसायिकांसाठी व्यावहारिक लेखा स्वयंचलित कौशल्ये.',
    'Growth Circle &mdash; 30-Day Accounting Automation Program': 'ग्रोथ सर्कल &mdash; 30-दिवस लेखा स्वयंचलित कार्यक्रम',
    'Option 1 &mdash; One-time payment': 'पर्याय 1 &mdash; एकवेळ पेमेंट',
    'Option 2 &mdash; Two instalments': 'पर्याय 2 &mdash; दोन हप्ते',
    'Additional workflow-review support': 'अतिरिक्त कार्यप्रवाह-पुनरावलोकन समर्थन',
    'Workflow example': 'कार्यप्रवाह उदाहरण',
    'Practical deliverables': 'व्यावहारिक सुपुर्दगी',
    'Review and refinement': 'पुनरावलोकन व सुधारणा',
    'Program': 'कार्यक्रम',
    'Explore': 'शोधा',
    'Legal': 'कायदेशीर',
    'Send an Enquiry': 'विचारणा पाठवा',
    '30-Day Program': '30 दिवसांचा कार्यक्रम',
    'SMART Accounts Method': 'SMART खाते पद्धत',
    'Program Investment': 'कार्यक्रम गुंतवणूक',
    'Privacy Information': 'गोपनीयता माहिती',
    'Terms & Conditions': 'अटी व शर्ती',
    'Growth Circle · 2026 · From idea to growth.': 'ग्रोथ सर्कल · २०२६ · कल्पनेपासून वाढ.',
    'Does this sound familiar?': 'हे तुम्हाला परिचित वाटते का?',
    'Your accounting experience is valuable. Repetitive work shouldn&rsquo;t consume all your time.': 'तुमचे लेखा अनुभव मौल्यवान आहे. पुनरावृत्ती होणारे काम तुमचा सर्व वेळ घेत नये.',
    'You may already know how to prepare reconciliations, work with accounting data, manage GST-related tasks, and prepare reports. But when the same steps need to be repeated every month, it can be difficult to make time for learning new tools or exploring new opportunities.': 'तुम्हाला आधीच मिळवणी तयार करणे, लेखा डेटासह काम करणे, GST-संबंधित कार्ये करणे आणि अहवाल तयार करणे माहिती असू शकते. परंतु जेव्हा समान पायऱ्या प्रत्येक महिन्यात पुन्हा करायच्या असतात, तेव्हा नवीन साधने शिकण्यास किंवा नवीन संधी शोधण्यास वेळ काढणे कठीण होऊ शकते.',
    'You repeat the same tasks.': 'तुम्ही समान कामे पुन्हा पुन्हा करता.',
    'Reconciliations, data cleaning, spreadsheet preparation, and recurring reports can involve many manual steps.': 'मिळवणी, डेटा स्वच्छता, स्प्रेडशीट तयारी आणि पुनरावृत्ती होणारे अहवाल बरेच मॅन्युअल पायऱ्या समाविष्ट करू शकतात.',
    'You want to improve your digital skills.': 'तुम्हाला तुमची डिजिटल कौशल्ये सुधारायची आहेत.',
    'You may have heard about Excel automation, Power Query, AI, and Power BI but need practical guidance on where to begin.': 'तुम्हाला Excel स्वयंचलित, Power Query, AI, आणि Power BI बद्दल ऐकले असू शकते परंतु सुरुवात कुठून करायची याबद्दल व्यावहारिक मार्गदर्शनाची गरज आहे.',
    'You want to strengthen your professional profile.': 'तुम्हाला तुमची व्यावसायिक प्रतिमा मजबूत करायची आहे.',
    'You want to develop skills you can demonstrate through practical work, rather than collecting tools or tutorials without applying them.': 'तुम्हाला व्यावहारिक कामाद्वारे प्रदर्शित करू शकता अशी कौशल्ये विकसित करायची आहेत, साधने किंवा ट्युटोरियल्स गोळा करून त्यांचा उपयोग न केल्याप्रमाणे नाही.',
    'You are exploring freelance opportunities.': 'तुम्ही फ्रीलांस संधी शोधत आहात.',
    'You may want to test a service built around your existing accounting knowledge, without assuming that clients or income will automatically follow.': 'तुम्हाला तुमच्या सध्याच्या लेखा ज्ञानावर आधारित सेवा तपासायची असू शकते, ग्राहक किंवा उत्पन्न आपोआप मिळेल असा गृहीतक न घेता.',
    'You do not need to abandon your accounting experience. You need a practical way to build on it.': 'तुम्हाला तुमचा लेखा अनुभव सोडायची आवश्यकता नाही. तुम्हाला त्यावर आधारित बांधण्याचा व्यावहारिक मार्ग हवा आहे.',
    'What you will work toward': 'तुम्ही ज्या गोष्टींकडे काम करू इच्छिता',
    'Move from repetitive steps to reusable workflows.': 'पुनरावृत्ती होणाऱ्या पायऱ्यांपासून पुनर्वापरयोग्य कार्यप्रवाहाकडे जा.',
    'The aim is to help you apply modern tools to familiar accounting tasks and develop something practical that you can review, demonstrate, and refine.': 'उद्देश तुम्हाला परिचित लेखा कार्यांवर आधुनिक साधने लागू करण्यास आणि काहीतरी व्यावहारिक विकसित करण्यास मदत करणे आहे जे तुम्हाला पाहता येईल, प्रदर्शित करू शकाल आणि सुधारू शकाल.',
    'Our working framework': 'आमचे कार्यरत चौकट',
    'A five-step method for making accounting work smarter.': 'लेखा कार्य अधिक स्मार्ट करण्याची पाच-पायरीची पद्धत.',
    'The SMART Accounts Method provides a structured way to move from identifying repetitive work to testing an improved workflow.': 'SMART खाते पद्धत पुनरावृत्ती होणारे काम ओळखून ते सुधारलेले कार्यप्रवाह तपासण्यापर्यंत जाण्यासाठी एक संरचित मार्ग प्रदान करते.',
    'Start with one real accounting problem. Build a practical solution. Review it before moving forward.': 'एखाद्या वास्तविक लेखा समस्येने सुरुवात करा. एक व्यावहारिक उपाय तयार करा. पुढे जाण्यापूर्वी त्याचे पुनरावलोकन करा.',
    'The accounting automation program': 'लेखा स्वयंचलित कार्यक्रम',
    'A focused 30-day program built around practical implementation.': 'व्यावहारिक अंमलबजावणीभोवती बांधलेला एक केंद्रित 30-दिवस कार्यक्रम.',
    'Growth Circle combines workflow assessment, guided learning, practical projects, and implementation reviews to help you apply digital tools to accounting work.': 'ग्रोथ सर्कल कार्यप्रवाह मूल्यमापन, मार्गदर्शित शिक्षण, व्यावहारिक प्रकल्पे आणि अंमलबजावणी पुनरावलोकने मिसळते जेणेकरून तुम्हाला लेखा कार्यावर डिजिटल साधने लागू करण्यास मदत होईल.',
    'Additional resources': 'अतिरिक्त संसाधने',
    'Resources to support your next steps.': 'तुमच्या पुढील पायऱ्यांना समर्थन देण्यासाठी संसाधने.',
    'The program also includes three bonuses intended to support implementation, professional visibility, and service exploration.': 'कार्यक्रमामध्ये अंमलबजावणी, व्यावसायिक दृश्यमानता, आणि सेवा शोधण्यास समर्थन देण्यासाठी तीन बोनस समाविष्ट आहेत.',
    'The program experience': 'कार्यक्रम अनुभव',
    'Thirty days of guided progress.': 'मार्गदर्शित प्रगतीचे तीस दिवस.',
    'The program runs for 30 days and combines structured guidance with live learning and implementation support.': 'कार्यक्रम 30 दिवस चालतो आणि संरचित मार्गदर्शन, लाइव शिक्षण आणि अंमलबजावणी समर्थन मिसळतो.',
    'A practical approach': 'व्यावहारिक दृष्टिकोन',
    'See the work you will be building&mdash;not just the tools you will be learning.': 'तुम्ही जे काम बांधणार आहात ते पहा&mdash;फक्त तुम्ही शिकणार असलेल्या साधनांना नाही.',
    'This program is organized around practical accounting tasks, guided implementation, and reusable workflows.': 'हा कार्यक्रम व्यावहारिक लेखा कार्ये, मार्गदर्शित अंमलबजावणी आणि पुनर्वापरयोग्य कार्यप्रवाहभोवती आयोजित केला आहे.',
    'Is this right for you?': 'हे तुमच्यासाठी योग्य आहे का?',
    'Built for accounting professionals who want to apply what they learn.': 'त्यांना सांगितले जाते जे शिकलेली गोष्ट लागू करू इच्छितात असे लेखा व्यावसायिकांसाठी बांधलेले.',
    'Program investment': 'कार्यक्रम गुंतवणूक',
    'Invest in practical skills you can apply to accounting work.': 'लेखा कार्यावर लागू करू शकता असे व्यावहारिक कौशल्ये मिळवण्यास गुंतवणूक करा.',
    'Frequently asked questions': 'सामान्य विचारले जाणारे प्रश्न',
    'Answers before you ask.': 'तुम्हाला विचारता پیش पहिल्यादेच उत्तरे.',
    'Your next step': 'तुमची पुढची पायरी',
    'Start with one accounting task you wish you could simplify.': 'एखाद्या लेखा कार्याने सुरुवात करा जो तुम्हाला सोपा करायचाय आहे.',
    'You do not need to change your entire working process at once. Start by identifying a repetitive task, understanding how it works, and exploring whether Excel, Power Query, or AI can help.': 'तुम्हाला तुमची संपूर्ण कामाची प्रक्रिया एकाच वेळी बदलायची आवश्यकता नाही. एका पुनरावृत्ती होणाऱ्या कार्याची ओळख पाडून, ते कसे कार्य करते हे समजून, आणि Excel, Power Query, किंवा AI मदत करू शकते का ते शोधून सुरुवात करा.',
    'Let&rsquo;s identify which repetitive accounting tasks may be suitable for automation.': 'चला कोणत्या पुनरावृत्ती होणाऱ्या लेखा कार्यांना स्वयंचलित करण्यास योग्य असू शकते ते ओळखूया.',
    'The clarity call is intended to discuss your needs and program suitability. Do not imply that a call has been booked until the booking is actually confirmed.': 'स्पष्टता बोलण्याचा उद्देश तुमच्या गरजा आणि कार्यक्रमाची योग्यता चर्चा करण्याचा आहे. बुकिंग खरोखर पुष्टी झाल्यापर्यंत बुकिंग झालेला असल्याचा संकेत देऊ नका.',
    'Q7. What happens if I cannot complete a workflow?': 'Q7. मी कार्यप्रवाह पूर्ण करू शकलो नाही तर काय होते?',
    'Eligible participants who meet the published participation requirements but cannot complete one working workflow may receive up to two additional workflow-review sessions. The published participation requirements must be provided and reviewed before enrolment.': 'प्रकाशित सहभागीता आवश्यकतांचे पालन करणारे पात्र सहभागी परंतु एक कार्यशील कार्यप्रवाह पूर्ण करू शकले नाहीत त्यांना दोन पर्यंत अतिरिक्त कार्यप्रवाह-पुनरावलोकन सत्रे मिळू शकतात. नोंदणीपूर्वी प्रकाशित सहभागीता आवश्यकता पुरविल्या व पुनरावलोकन केल्या जाणे आवश्यक आहे.',
    'Q8. Can I pay in instalments?': 'Q8. मी हप्त्यांमध्ये पेमेंट करू शकतो का?',
    'The offer lists a one-time payment of &rsquo;9,999 or two instalments of approximately &rsquo;5,000 and &rsquo;4,999. Confirm the exact payment schedule and conditions before making payment.': 'ऑफरमध्ये एकवेळ पेमेंट &rsquo;9,999 किंवा दोन हप्ते अंदाजे &rsquo;5,000 आणि &rsquo;4,999 नमूद केले आहेत. पेमेंट करू नयेत पूर्वी अचूक पेमेंट वेळापत्रक व अटी確認 करा.',
    'Q9. Is this an advanced Power BI or AI certification program?': 'Q9. हे प्रगत Power BI किंवा AI प्रमाणन कार्यक्रम आहे का?',
    'The documented offer includes a Power BI Starter Project and practical accounting automation resources. An advanced certification or formal qualification is not specified.': 'दस्तऐवजीकृत ऑफरमध्ये Power Bi स्टार्टर प्रकल्प आणि व्यावहारिक लेखा स्वयंचलित संसाधने समाविष्ट आहेत. प्रगत प्रमाणन किंवा औपचारिक पात्रता नमूद केलेली नाही.',
    'Q10. How do I know which accounting task I should automate first?': 'Q10. मी कोणता लेखा कार्य पहिले स्वयंचलित करायचे हे कसे जाणून घेईन?',
    'Book a free Accounting Automation Clarity Call. Use the conversation to identify repetitive tasks in your current workflow and discuss whether the program is suitable for your needs.': 'मोफत लेखा स्वयंचलित स्पष्टता बोलण्याचे बुक करा. तुमच्या सध्याच्या कार्यप्रवाहातील पुनरावृत्ती होणाऱ्या कार्ये ओळखण्यासाठी संभाषणाचा उपयोग करा व कार्यक्रम तुमच्या गरजांसाठी योग्य आहे की नाही याबद्दल चर्चा करा.',
    'Tools & Dashboards': 'साधने व डॅशबोर्ड',
    'See the dashboards and charts you will work with.': 'तुम्ही ज्या डॅशबोर्ड व चार्टसोबत काम करू इच्छिता ती पहा.',
    'Illustrative visuals showing the types of outputs you will create during the program. Not actual client data.': 'कार्यक्रम दरम्यान तुम्ही तयार करू शकता असे प्रकार दर्शविणारे उदाहरणात्मक दृश्य. हे खरे क्लायंट डेटा नाहीत.',
    'Excel & Power Query Lab': 'Excel व Power Query प्रयोगशाळा',
    'Practice data cleaning, reconciliation, and automation with real-world accounting spreadsheets.': 'वास्तविक जगातील लेखा स्प्रेडशीट्ससह डेटा स्वच्छता, मिळवणी व स्वयंचलितची सराव करा.',
    'Power BI Starter Project': 'Power Bi स्टार्टर प्रकल्प',
    'Build interactive dashboards to visualize GST, revenue, and expense trends.': 'GST, महसूल व खर्च ट्रेंड्स दर्शविण्यासाठी संवादात्मक डॅशबोर्ड तयार करा.',
    'AI for Accounting Toolkit': 'लेखांसाठी AI साधने संच',
    'Explore AI-assisted categorization, anomaly detection, and report generation.': 'AI-सहाय्यित वर्गीकरण, विसंगती शोध व अहवाल तयारी शोधा.',
    'Images are illustrative examples only. Actual outputs depend on your data and implementation.': 'चित्र केवळ उदाहरणात्मक आहेत. खरेच आउटपुट तुमच्या डेटा व अंमलबजावणीवर अवलंबून असतात.',
  }
};

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('growthcircle_lang', lang);

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('lang-active');
    } else {
      btn.classList.remove('lang-active');
    }
  });

  // Set html lang attribute
  document.documentElement.lang = lang;
  document.documentElement.classList.remove('lang-en', 'lang-mr');
  document.documentElement.classList.add('lang-' + lang);

  // Translate elements with data-en and data-mr attributes
  document.querySelectorAll('[data-en], [data-mr]').forEach(el => {
    // Save original English HTML on first run so switching back to EN is 100% accurate
    if (!el.dataset.origEn) {
      el.dataset.origEn = el.innerHTML;
    }

    if (lang === 'en') {
      el.innerHTML = el.dataset.origEn;
    } else if (lang === 'mr') {
      const directMr = el.getAttribute('data-mr');
      const key = el.getAttribute('data-en');
      const dictMr = (key && translations.mr && translations.mr[key]) ? translations.mr[key] : null;
      if (directMr) {
        el.innerHTML = directMr;
      } else if (dictMr) {
        el.innerHTML = dictMr;
      }
    }
  });
}

function initLangSwitcher() {
  const savedLang = localStorage.getItem('growthcircle_lang') || 'en';
  setLang(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLang(lang);
    });
  });
}

/* ---------- Initialize Supabase (only if configured) ---------- */
function initSupabase() {
  const cfg = window.ACCOUNTPRO_CONFIG || {};
  const warning = document.getElementById('contact-config-warning');

  // Already initialized — reuse existing client, don't create a second one
  if (accountproSupabase) {
    if (warning) warning.style.display = 'none';
    return true;
  }

  if (cfg.ENABLE_SUPABASE && cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY) {
    if (window.supabase && window.supabase.createClient) {
      accountproSupabase = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
      if (warning) warning.style.display = 'none';
      return true;
    }
  }

  // Only show warning if NEITHER Supabase nor Formspree is configured
  const hasFormspree = Boolean(cfg.ENQUIRY_SUBMISSION_ENDPOINT);
  if (warning) warning.style.display = hasFormspree ? 'none' : 'block';
  return false;
}

/* ---------- Config-driven contact & legal links ---------- */
function applyContactConfig() {
  const cfg = window.ACCOUNTPRO_CONFIG || {};

  // Hide config warning when submission endpoint is configured
  const warning = document.getElementById('contact-config-warning');
  if (warning && cfg.ENQUIRY_SUBMISSION_ENDPOINT) {
    warning.style.display = 'none';
  }

  // Contact phone (handled directly via +919922045007 WhatsApp link)
  const phoneItem = document.getElementById('footer-phone-item');
  const phoneLink = document.getElementById('footer-phone-link');
  const phoneDisplay = document.getElementById('contact-phone-display');
  if (phoneItem) phoneItem.style.display = 'none';
  if (phoneDisplay) phoneDisplay.innerHTML = '';

  // Privacy / Terms links
  const privacyItem = document.getElementById('footer-privacy-item');
  const privacyLink = document.getElementById('footer-privacy-link');
  const termsItem = document.getElementById('footer-terms-item');
  const termsLink = document.getElementById('footer-terms-link');

  if (cfg.PRIVACY_INFORMATION_URL) {
    if (privacyItem) privacyItem.style.display = 'block';
    if (privacyLink) privacyLink.href = cfg.PRIVACY_INFORMATION_URL;
  }
  if (cfg.TERMS_URL) {
    if (termsItem) termsItem.style.display = 'block';
    if (termsLink) termsLink.href = cfg.TERMS_URL;
  }
}

/* ---------- Navigation ---------- */
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

function toggleMobileMenu() {
  const isOpen = navLinks.classList.contains('open');
  if (isOpen) { closeMobileMenu(); } else { openMobileMenu(); }
}
function openMobileMenu() {
  navLinks.classList.add('open');
  mobileMenuBtn.setAttribute('aria-expanded', 'true');
}
function closeMobileMenu() {
  navLinks.classList.remove('open');
  mobileMenuBtn.setAttribute('aria-expanded', 'false');
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}
if (navLinks) {
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu();
});
document.addEventListener('click', (e) => {
  if (navLinks && navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    closeMobileMenu();
  }
});

/* ---------- CTA Routing ---------- */
function getClarityCallDestination() {
  const cfg = window.ACCOUNTPRO_CONFIG || {};
  if (cfg.CLARITY_CALL_BOOKING_URL) {
    return cfg.CLARITY_CALL_BOOKING_URL;
  }
  return 'contact.html?topic=clarity-call';
}

function isBookingConfigured() {
  const cfg = window.ACCOUNTPRO_CONFIG || {};
  return Boolean(cfg.CLARITY_CALL_BOOKING_URL);
}

function routeClarityCall(event) {
  if (event) event.preventDefault();
  const dest = getClarityCallDestination();
  if (isBookingConfigured()) {
    window.open(dest, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = dest;
  }
}

function routeExploreProgram() {
  const el = document.getElementById('program');
  if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  else { window.location.href = 'index.html#program'; }
}

function routeDiscussGoals(event) {
  if (event) event.preventDefault();
  window.location.href = 'contact.html?topic=clarity-call';
}

function bindCtas() {
  const bind = (id, fn) => { const el = document.getElementById(id); if (el) el.addEventListener('click', fn); };

  bind('cta-book', routeClarityCall);
  bind('hero-cta-book', routeClarityCall);
  bind('hero-cta-explore', (e) => { e.preventDefault(); routeExploreProgram(); });
  bind('cta-discuss', routeDiscussGoals);
  bind('suitability-cta', routeClarityCall);
  bind('investment-cta', routeClarityCall);
  bind('final-cta-book', routeClarityCall);
  bind('about-cta-book', routeClarityCall);
  bind('about-final-cta-book', routeClarityCall);
  bind('footer-book', routeClarityCall);

  // Booking button visibility on each page
  updateBookingButtons();

  // Privacy / Terms links — only open verified destinations
  document.querySelectorAll('a[href*="privacy"], a[href*="terms"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.startsWith('#')) e.preventDefault();
    });
  });
}

function updateBookingButtons() {
  const configured = isBookingConfigured();
  document.querySelectorAll('[id$="-cta-book"], #cta-book, #footer-book, #hero-cta-book, #about-cta-book, #about-final-cta-book, #final-cta-book, #suitability-cta, #investment-cta').forEach(btn => {
    if (!configured) {
      // Route to contact page as a clear alternative contact option
      btn.removeEventListener('click', routeClarityCall);
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'contact.html?topic=clarity-call';
      });
      // Visual indicator that booking is not yet configured
      btn.classList.add('btn-not-configured');
      btn.title = 'Booking link not yet configured. This will open the Contact page instead.';
    } else {
      btn.classList.remove('btn-not-configured');
      btn.removeEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'contact.html?topic=clarity-call';
      });
      btn.addEventListener('click', routeClarityCall);
      btn.title = '';
    }
  });
}

/* ---------- Contact Form ---------- */
function showFormStatus(type) {
  const successEl = document.getElementById('form-success');
  const failureEl = document.getElementById('form-failure');
  const btn = document.getElementById('form-submit-btn');
  if (successEl) successEl.style.display = 'none';
  if (failureEl) failureEl.style.display = 'none';
  if (btn) btn.disabled = false;

  if (type === 'success' && successEl) {
    successEl.style.display = 'block';
    window.scrollTo({ top: successEl.offsetTop - 100, behavior: 'smooth' });
  }
  if (type === 'failure' && failureEl) {
    failureEl.style.display = 'block';
    window.scrollTo({ top: failureEl.offsetTop - 100, behavior: 'smooth' });
  }
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function validatePhone(value) {
  return /^[\d\s\+\-\(\)]{7,}$/.test(value.replace(/\s/g, ''));
}

function validateForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return true;
  let valid = true;

  const name = form.elements['name'];
  const errName = document.getElementById('error-name');
  if (!name.value.trim()) {
    name.parentElement.classList.add('invalid');
    if (errName) errName.style.display = 'block';
    valid = false;
  } else {
    name.parentElement.classList.remove('invalid');
    if (errName) errName.style.display = 'none';
  }

  const methodGroup = form.elements['contact_method'];
  const errMethod = document.getElementById('error-contact-method');
  const selectedMethod = Array.from(methodGroup).find(r => r.checked);
  if (!selectedMethod) {
    errMethod.style.display = 'block';
    valid = false;
  } else { errMethod.style.display = 'none'; }

  const detail = form.elements['contact_detail'];
  const errDetail = document.getElementById('error-contact-detail');
  const detailVal = detail.value.trim();
  if (!detailVal) {
    detail.parentElement.classList.add('invalid');
    if (errDetail) errDetail.style.display = 'block';
    valid = false;
  } else if (selectedMethod && selectedMethod.value === 'email' && !validateEmail(detailVal)) {
    detail.parentElement.classList.add('invalid');
    if (errDetail) errDetail.style.display = 'block';
    valid = false;
  } else if (selectedMethod && selectedMethod.value === 'phone' && !validatePhone(detailVal)) {
    detail.parentElement.classList.add('invalid');
    if (errDetail) errDetail.style.display = 'block';
    valid = false;
  } else {
    detail.parentElement.classList.remove('invalid');
    if (errDetail) errDetail.style.display = 'none';
  }

  const message = form.elements['message'];
  const errMessage = document.getElementById('error-message');
  if (!message.value.trim()) {
    message.parentElement.classList.add('invalid');
    if (errMessage) errMessage.style.display = 'block';
    valid = false;
  } else {
    message.parentElement.classList.remove('invalid');
    if (errMessage) errMessage.style.display = 'none';
  }

  return valid;
}

function preserveFormValues() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const values = {
    name: form.elements['name'].value,
    contact_detail: form.elements['contact_detail'].value,
    topic: form.elements['topic'].value,
    message: form.elements['message'].value,
    contact_method: Array.from(form.elements['contact_method']).find(r => r.checked)?.value
  };
  try { sessionStorage.setItem('accountpro_form_values', JSON.stringify(values)); } catch (e) {}
}

function restoreFormValues() {
  try {
    const raw = sessionStorage.getItem('accountpro_form_values');
    if (!raw) return;
    const values = JSON.parse(raw);
    const form = document.getElementById('enquiry-form');
    if (!form) return;
    if (values.name) form.elements['name'].value = values.name;
    if (values.contact_detail) form.elements['contact_detail'].value = values.contact_detail;
    if (values.topic) form.elements['topic'].value = values.topic;
    if (values.message) form.elements['message'].value = values.message;
    if (values.contact_method) {
      Array.from(form.elements['contact_method']).forEach(r => { r.checked = r.value === values.contact_method; });
    }
  } catch (e) {}
}

function clearFormValues() {
  try { sessionStorage.removeItem('accountpro_form_values'); } catch (e) {}
}

function preselectTopic() {
  const params = new URLSearchParams(window.location.search);
  const topic = params.get('topic');
  if (topic === 'clarity-call') {
    const select = document.getElementById('topic');
    if (select) select.value = 'clarity-call';
    const message = document.getElementById('message');
    if (message && !message.value.trim()) {
      message.value = 'I would like to book a free Accounting Automation Clarity Call to discuss which repetitive accounting tasks I can automate using Excel, Power Query, and AI.';
    }
  }
}

function isDuplicateSubmission() {
  const cfg = window.ACCOUNTPRO_CONFIG || {};
  const windowMs = cfg.DUPLICATE_SUBMIT_WINDOW_MS || 30000;
  const now = Date.now();
  if (now - lastSubmitTime < windowMs) return true;
  return false;
}

async function submitToSupabase(formData) {
  if (!accountproSupabase) throw new Error('Supabase client not initialized');

  const { error } = await accountproSupabase
    .from('enquiries')
    .insert([
      {
        name: formData.name,
        email: formData.contact_method === 'email' ? formData.contact_detail : null,
        phone: formData.contact_method === 'phone' ? formData.contact_detail : null,
        service_interest: formData.topic || null,
        message: formData.message,
        created_at: new Date().toISOString()
      }
    ]);

  if (error) throw error;
  return true;
}

async function submitToFormspree(formData) {
  const cfg = window.ACCOUNTPRO_CONFIG || {};
  const endpoint = cfg.ENQUIRY_SUBMISSION_ENDPOINT;
  if (!endpoint) throw new Error('No submission endpoint configured.');

  const body = {
    name: formData.name,
    role: formData.role || '',
    contact_method: formData.contact_method,
    contact_detail: formData.contact_detail,
    topic: formData.topic || '',
    message: formData.message
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || 'Formspree submission failed.');
  }
  return true;
}

async function submitEnquiry(formData) {
  const cfg = window.ACCOUNTPRO_CONFIG || {};
  const supabaseReady = initSupabase();

  // Try Supabase first if enabled and ready
  if (supabaseReady) {
    return await submitToSupabase(formData);
  }

  // Fallback: Formspree endpoint
  if (cfg.ENQUIRY_SUBMISSION_ENDPOINT) {
    return await submitToFormspree(formData);
  }

  throw new Error('No submission method configured. Set ENQUIRY_SUBMISSION_ENDPOINT or enable Supabase.');
}

function bindForm() {
  const form = document.getElementById('enquiry-form');
  const closeBtn = document.getElementById('form-close');
  const retryBtn = document.getElementById('form-retry');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => { document.getElementById('form-success').style.display = 'none'; });
  }
  if (retryBtn) {
    retryBtn.addEventListener('click', () => { document.getElementById('form-failure').style.display = 'none'; });
  }

  if (form) {
    form.addEventListener('input', preserveFormValues);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      if (isDuplicateSubmission()) {
        showFormStatus('failure');
        return;
      }

      formSubmitting = true;
      const btn = document.getElementById('form-submit-btn');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending your enquiry…'; }

      const formData = {
        name: form.elements['name'].value.trim(),
        role: form.elements['role'] ? form.elements['role'].value : null,
        contact_method: Array.from(form.elements['contact_method']).find(r => r.checked).value,
        contact_detail: form.elements['contact_detail'].value.trim(),
        topic: form.elements['topic'].value || null,
        message: form.elements['message'].value.trim()
      };

      try {
        lastSubmitTime = Date.now();
        await submitEnquiry(formData);
        showFormStatus('success');
        clearFormValues();
        form.reset();
      } catch (err) {
        console.error('Form submission error:', err);
        showFormStatus('failure');
      } finally {
        formSubmitting = false;
        if (btn) { btn.disabled = false; btn.textContent = 'Send My Enquiry'; }
      }
    });

    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.parentElement.classList.remove('invalid');
        const errEl = document.getElementById('error-' + field.name);
        if (errEl) errEl.style.display = 'none';
      });
    });
  }
}

/* ---------- UPI Payment Modal & Dynamic Links ---------- */
function initUpiPayment() {
  const payBtn = document.getElementById('btn-pay-now');
  const modal = document.getElementById('upi-modal');
  const closeBtn = document.getElementById('upi-close-btn');
  const copyBtn = document.getElementById('btn-copy-upi');
  const upiIdText = document.getElementById('upi-id-text');
  const qrImg = document.getElementById('upi-qr-img');
  const openUpiAppBtn = document.getElementById('btn-open-upi-app');
  const mobileBarCta = document.getElementById('mobile-bar-cta');

  const cfg = window.ACCOUNTPRO_CONFIG || {};
  const upiId = cfg.PAYMENT_UPI_ID || 's.giru07-4@oksbi';
  const qrImage = cfg.PAYMENT_QR_IMAGE || 'images/upi-qr-code.jpg';

  if (upiIdText) upiIdText.textContent = upiId;
  if (qrImg) {
    qrImg.src = qrImage;
  }
  if (openUpiAppBtn) {
    openUpiAppBtn.href = qrImage;
    openUpiAppBtn.setAttribute('download', 'Skillansh-GPay-QR-Code.jpg');
  }

  // Update WhatsApp community buttons dynamically if configured
  if (cfg.WHATSAPP_COMMUNITY_URL) {
    const heroCommBtn = document.getElementById('hero-community-btn');
    if (heroCommBtn) heroCommBtn.href = cfg.WHATSAPP_COMMUNITY_URL;
  }

  if (payBtn && modal) {
    payBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const homePayStep = document.getElementById('home-upi-payment-step');
      const homeAutoMsg = document.getElementById('home-upi-auto-msg');
      if (homePayStep && homeAutoMsg) {
        homePayStep.style.display = 'block';
        homeAutoMsg.style.display = 'none';
      }
      modal.classList.add('active');
    });
  }

  const homeConfirmPaidBtn = document.getElementById('btn-home-confirm-paid');
  if (homeConfirmPaidBtn) {
    homeConfirmPaidBtn.addEventListener('click', () => {
      const homePayStep = document.getElementById('home-upi-payment-step');
      const homeAutoMsg = document.getElementById('home-upi-auto-msg');
      const homeUtr = document.getElementById('home-upi-utr');
      const homeAutoBody = document.getElementById('home-auto-msg-body');
      const utrVal = homeUtr ? homeUtr.value.trim() : '';
      if (homeAutoBody && utrVal) {
        homeAutoBody.innerHTML = `Thank you for completing your payment (UPI Ref: <strong>${utrVal}</strong>)! Welcome to the <strong>Skillansh Growth Circle</strong>. Please click the link below to join our official WhatsApp Community Group.`;
      }
      if (homePayStep && homeAutoMsg) {
        homePayStep.style.display = 'none';
        homeAutoMsg.style.display = 'block';
      }
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (copyBtn && upiIdText) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(upiIdText.textContent.trim()).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy UPI ID'; }, 2000);
      });
    });
  }

  if (mobileBarCta) {
    mobileBarCta.addEventListener('click', (e) => {
      e.preventDefault();
      routeClarityCall();
    });
  }
}

/* ---------- Learner Requirements Form Handler ---------- */
function bindLearnerEnquiryForm() {
  const form = document.getElementById('learner-enquiry-form');
  const statusEl = document.getElementById('learner-form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerText = 'Submitting Your Requirements...';

      const selectedSkills = Array.from(form.querySelectorAll('input[name="skills"]:checked')).map(cb => cb.value);

      const roleEl = document.getElementById('learner-role');
      const payload = {
        form_type: 'learner_requirements_enquiry',
        name: document.getElementById('learner-name').value,
        whatsapp: document.getElementById('learner-whatsapp').value,
        email: document.getElementById('learner-email').value,
        role: roleEl ? roleEl.value : '',
        required_skills: selectedSkills.join(', '),
        workflow_details: document.getElementById('learner-details').value,
        submitted_at: new Date().toISOString()
      };

      const cfg = window.ACCOUNTPRO_CONFIG || {};
      const endpoint = cfg.ENQUIRY_SUBMISSION_ENDPOINT || 'https://formspree.io/f/xqppyvgd';

      try {
        const resp = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (resp.ok) {
          statusEl.style.display = 'block';
          statusEl.style.background = '#ECFDF5';
          statusEl.style.color = '#065F46';
          statusEl.style.border = '1px solid #10B981';
          statusEl.innerHTML = '🎉 <strong>Requirements received!</strong><br>We will review your requested topics (Advanced Excel / Power BI / AI) and share your personalized roadmap on WhatsApp.';
          form.reset();
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        statusEl.style.display = 'block';
        statusEl.style.background = '#FEF2F2';
        statusEl.style.color = '#991B1B';
        statusEl.style.border = '1px solid #EF4444';
        statusEl.innerHTML = '⚠️ Submission error. Please WhatsApp your requirements directly to +919922045007.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Submit Requirements →';
      }
    });
  }
}

/* ---------- FAQ Accordion Handler ---------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Optional: close other open FAQs for a clean minimal view
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isActive) {
          item.classList.remove('active');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
}

/* ---------- Diwali & Bhai Dooj Offer Countdown Timer ---------- */
function initDiwaliCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hrsEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');
  if (!hrsEl || !minsEl || !secsEl) return;

  // Bhai Dooj closing timestamp (Nov 11, 2026 23:59:59 IST)
  // If viewed after that date, falls back to a 4-day Bhai Dooj window from first visit
  const bhaiDoojTarget = new Date('2026-11-11T23:59:59+05:30').getTime();
  const storageKey = 'skillansh_bhaidooj_offer_end';
  let endTime = bhaiDoojTarget;

  if (Date.now() >= bhaiDoojTarget) {
    endTime = parseInt(localStorage.getItem(storageKey) || '0', 10);
    if (!endTime || endTime <= Date.now()) {
      endTime = Date.now() + (4 * 86400 + 11 * 3600 + 45 * 60) * 1000;
      try { localStorage.setItem(storageKey, String(endTime)); } catch (e) {}
    }
  }

  function updateClock() {
    let diff = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    const d = Math.floor(diff / 86400);
    const h = Math.floor((diff % 86400) / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    if (daysEl) daysEl.textContent = String(d).padStart(2, '0') + 'd';
    hrsEl.textContent = String(h).padStart(2, '0') + (daysEl ? 'h' : '');
    minsEl.textContent = String(m).padStart(2, '0') + (daysEl ? 'm' : '');
    secsEl.textContent = String(s).padStart(2, '0') + (daysEl ? 's' : '');
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
  initSupabase();
  applyContactConfig();
  bindCtas();
  bindForm();
  restoreFormValues();
  preselectTopic();
  initUpiPayment();
  bindLearnerEnquiryForm();
  initFaqAccordion();
  initDiwaliCountdown();
});
