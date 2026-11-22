/* Site Scripts */
/* Centralized configuration is loaded from config.js before this script. */

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
    'Thank you for contacting us. Your enquiry has been recorded.': 'Thank you for contacting us. Your enquiry has been recorded.',
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
    '2026 · From idea to growth.': '2026 · From idea to growth.'
  },
  mr: {
    'Our approach': 'आमचा दृष्टिकोन',
    'Build on your accounting knowledge. Develop the skills to work differently.': 'तुमच्या लेखा ज्ञानावर आधारित राहा. वेगळ्या पद्धतीने काम करण्याचे कौशल्य विकसित करूया.',
    'Home': 'होम',
    'Live Workshop': 'लाइव्ह कार्यशाळा',
    'Live Workshop & Masterclass': 'लाइव्ह कार्यशाळा व मास्टरक्लास',
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
    'Thank you for contacting us. Your enquiry has been recorded.': 'आमच्याशी संपर्क साधल्याबद्दल धन्यवाद. तुमची विचारणा नोंदवली आहे.',
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
    '2026 · From idea to growth.': '२०२६ · कल्पनेपासून वाढ.',
    'Practical accounting automation skills for Indian accounting professionals.': 'भारतीय लेखा व्यावसायिकांसाठी व्यावहारिक लेखा स्वयंचलित कौशल्ये.',
    '30-Day Accounting Automation Program': '३०-दिवस लेखा स्वयंचलित कार्यक्रम',
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
    '2026 · From idea to growth.': '२०२६ · कल्पनेपासून वाढ.',
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
    'This program combines workflow assessment, guided learning, practical projects, and implementation reviews to help you apply digital tools to accounting work.': 'हा कार्यक्रम कार्यप्रवाह मूल्यमापन, मार्गदर्शित शिक्षण, व्यावहारिक प्रकल्पे आणि अंमलबजावणी पुनरावलोकने मिसळते जेणेकरून तुम्हाला लेखा कार्यावर डिजिटल साधने लागू करण्यास मदत होईल.',
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

  // Translate inputs with data-placeholder-en and data-placeholder-mr
  document.querySelectorAll('[data-placeholder-en], [data-placeholder-mr]').forEach(el => {
    if (lang === 'en') {
      const enPh = el.getAttribute('data-placeholder-en');
      if (enPh) el.placeholder = enPh;
    } else if (lang === 'mr') {
      const mrPh = el.getAttribute('data-placeholder-mr');
      if (mrPh) el.placeholder = mrPh;
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
      message.value = 'I would like to book a 1-on-1 Clarity Call to discuss my career goals and practical data skills.';
    }
  } else if (topic === 'workshop') {
    const select = document.getElementById('topic');
    if (select) select.value = 'workshop';
    const message = document.getElementById('message');
    if (message && !message.value.trim()) {
      message.value = 'I have an enquiry regarding the Live Practical Masterclass and next batch schedule.';
    }
  } else if (topic === 'program') {
    const select = document.getElementById('topic');
    if (select) select.value = 'program';
    const message = document.getElementById('message');
    if (message && !message.value.trim()) {
      message.value = 'I would like more information on enrolling in the 30-Day Practical Data & Automation Cohort.';
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

  // 1. Post to Google Sheets Webhook
  const googleSheetUrl = cfg.GOOGLE_SHEET_WEBHOOK_URL;
  if (googleSheetUrl) {
    try {
      const parts = (formData.name || '').trim().split(' ');
      const fn = parts[0] || '';
      const ln = parts.slice(1).join(' ') || '';
      const isEmail = formData.contact_method === 'email' || (formData.contact_detail || '').includes('@');
      
      const sheetPayload = {
        name: formData.name,
        fullName: formData.name,
        firstName: fn,
        firstname: fn,
        first_name: fn,
        surname: ln,
        lastname: ln,
        last_name: ln,
        email: isEmail ? formData.contact_detail : '',
        whatsapp: !isEmail ? formData.contact_detail : '',
        phone: !isEmail ? formData.contact_detail : '',
        mobile: !isEmail ? formData.contact_detail : '',
        plan: `Enquiry: ${formData.topic || formData.role || 'General Guidance'}`,
        promoCode: formData.message || 'General Enquiry',
        message: formData.message || 'General Enquiry',
        topic: formData.topic || 'General Enquiry',
        role: formData.role || '',
        source: 'Contact Page Form',
        submitted_at: new Date().toISOString()
      };

      fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(sheetPayload)
      }).catch(err => console.warn('Google Sheet contact sync notice:', err));
    } catch (e) {
      console.warn('Google Sheet contact sync notice:', e);
    }
  }

  // 2. Formspree endpoint (email alert)
  if (cfg.ENQUIRY_SUBMISSION_ENDPOINT) {
    try {
      return await submitToFormspree(formData);
    } catch (err) {
      console.warn('Formspree notification notice (Google Sheet already recorded lead):', err);
      return true;
    }
  }

  return true;
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
  const upiId = cfg.PAYMENT_UPI_ID || '';
  const qrImage = cfg.PAYMENT_QR_IMAGE || '';

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
        homeAutoBody.innerHTML = `Thank you for completing your payment (UPI Ref: <strong>${utrVal}</strong>)! Please click the link below to join our official WhatsApp Community Group.`;
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

/* ---------- FAQ Accordion Handler ---------- */
function filterFaq(category) {
  const buttons = document.querySelectorAll('.faq-filter-btn');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });
  const items = document.querySelectorAll('.faq-grid .faq-item');
  items.forEach(item => {
    const cat = item.getAttribute('data-category');
    const show = (category === 'all' || cat === category);
    item.classList.toggle('faq-hidden', !show);
    if (!show && item.classList.contains('active')) {
      item.classList.remove('active');
      const btn = item.querySelector('.faq-question-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  });
}
window.filterFaq = filterFaq;

function initFaqFilters() {
  const filterBtns = document.querySelectorAll('.faq-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';
      filterFaq(filter);
    });
  });
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other open FAQs for a clean minimal view
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

/* ---------- Countdown Timer (No-op) ---------- */
function initCountdown() {
  // Campaign closed
}

/* ---------- Init ---------- */

/* ---------- Global Enrolment & Navigation Helpers ---------- */
function scrollToCohort(event) {
  if (event && event.preventDefault) event.preventDefault();
  const el = document.getElementById('program');
  if (el) {
    const nav = document.querySelector('header');
    const navOffset = (nav ? nav.offsetHeight : 70) + 15;
    const elTop = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: elTop, behavior: 'smooth' });
  } else {
    window.location.href = 'index.html#program';
  }
}
window.scrollToCohort = scrollToCohort;

function openEnrolModal(event, courseOrPlan) {
  if (event && event.preventDefault) event.preventDefault();
  const targetCourse = courseOrPlan || 'package';
  window.location.href = `enroll.html?course=${encodeURIComponent(targetCourse)}`;
}
window.openEnrolModal = openEnrolModal;

function closeEnrolModal() {
  const overlay = document.getElementById('enrol-modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}
window.closeEnrolModal = closeEnrolModal;

/* ---------- Razorpay Enrolment Modal (Mandatory Learner Details & Plans) ---------- */
function initEnrolModal() {
  const overlay = document.getElementById('enrol-modal-overlay');
  const closeBtn = document.getElementById('enrol-modal-close');
  const form = document.getElementById('enrol-checkout-form');
  const redirectBox = document.getElementById('enrol-redirect-box');
  const submitBtn = document.getElementById('enrol-submit-btn');
  const btnText = document.getElementById('enrol-btn-text');

  if (!overlay) return;

  const cfg = window.ACCOUNTPRO_CONFIG || {};
  const plans = cfg.PAYMENT_PLANS || {
    pkg_full: { id: 'pkg_full', name: 'Complete 4-Course Package (ADHAAR + DRISHTI + PRAVAH + BODH) – Option A: Full Payment', amount: 14999, totalPackageAmount: 14999, balanceDueAfter: 0, unlockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'BODH'], paymentStatusOnSuccess: 'PAID', link: 'https://rzp.io/rzp/BVYNZBfG' },
    pkg_inst1: { id: 'pkg_inst1', name: 'Complete 4-Course Package – Option B: 1st Instalment (Unlocks ADHAAR)', amount: 2000, totalPackageAmount: 16999, balanceDueAfter: 14999, unlockedCourses: ['ADHAAR'], paymentStatusOnSuccess: 'PARTIALLY_PAID', link: 'https://razorpay.me/@skillansh' },
    pkg_inst2: { id: 'pkg_inst2', name: 'Complete 4-Course Package – Option B: 2nd Instalment Balance (Unlocks DRISHTI, PRAVAH & BODH)', amount: 14999, totalPackageAmount: 16999, balanceDueAfter: 0, unlockedCourses: ['ADHAAR', 'DRISHTI', 'PRAVAH', 'BODH'], paymentStatusOnSuccess: 'PAID', link: 'https://rzp.io/rzp/BVYNZBfG' },
    adhaar: { id: 'adhaar', name: 'ADHAAR – Excel Foundation', amount: 1999, totalPackageAmount: 1999, balanceDueAfter: 0, unlockedCourses: ['ADHAAR'], paymentStatusOnSuccess: 'PAID', link: 'https://razorpay.me/@skillansh' },
    drishti: { id: 'drishti', name: 'DRISHTI – MIS & Dashboards', amount: 3999, totalPackageAmount: 3999, balanceDueAfter: 0, unlockedCourses: ['DRISHTI'], paymentStatusOnSuccess: 'PAID', link: 'https://razorpay.me/@skillansh' },
    pravah: { id: 'pravah', name: 'PRAVAH – Power Query', amount: 6999, totalPackageAmount: 6999, balanceDueAfter: 0, unlockedCourses: ['PRAVAH'], paymentStatusOnSuccess: 'PAID', link: 'https://razorpay.me/@skillansh' },
    bodh: { id: 'bodh', name: 'BODH – Power BI & AI', amount: 7999, totalPackageAmount: 7999, balanceDueAfter: 0, unlockedCourses: ['BODH'], paymentStatusOnSuccess: 'PAID', link: 'https://razorpay.me/@skillansh' },
    kriya: { id: 'kriya', name: 'KRIYA – VBA & Automation (Standalone Course)', amount: 4999, totalPackageAmount: 4999, balanceDueAfter: 0, unlockedCourses: ['KRIYA'], paymentStatusOnSuccess: 'PAID', link: 'https://razorpay.me/@skillansh' }
  };

  let selectedPlanId = 'pkg_full';
  let appliedPromoCode = '';

  const openButtons = document.querySelectorAll('#open-enrol-modal-btn, .cohort-enrol-btn, [data-open-enrol-modal]');
  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openEnrolModal(e);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeEnrolModal);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeEnrolModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeEnrolModal();
    }
  });

  // Function to update submit button label based on plan and language
  function updateButtonLabel() {
    if (!btnText) return;
    const plan = plans[selectedPlanId] || plans.full;
    const isMr = (typeof currentLang !== 'undefined' && currentLang === 'mr') || document.documentElement.lang === 'mr';
    const amountStr = Number(plan.amount).toLocaleString('en-IN');
    if (isMr) {
      btnText.textContent = `Razorpay वर ₹${amountStr} भरण्यासाठी पुढे जा →`;
    } else {
      btnText.textContent = `Proceed to Pay ₹${amountStr} on Razorpay →`;
    }
  }

  // Plan Selection Cards Logic
  const planRadios = form ? form.querySelectorAll('input[name="payment_plan"]') : [];
  planRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      selectedPlanId = radio.value;
      document.querySelectorAll('.enrol-plan-card').forEach(card => card.classList.remove('active'));
      const activeCard = document.getElementById(`card-plan-${selectedPlanId}`);
      if (activeCard) activeCard.classList.add('active');
      updateButtonLabel();
    });
  });

  // Make whole plan card clickable
  document.querySelectorAll('.enrol-plan-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio && !radio.checked) {
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
      }
    });
  });

  // Promo Code Application Logic (Secret Unlock for SPECIAL5999)
  const promoInput = document.getElementById('enrol-promo-input');
  const promoBtn = document.getElementById('enrol-promo-btn');
  const promoFeedback = document.getElementById('enrol-promo-feedback');
  const cardSpecial = document.getElementById('card-plan-special');

  function applyPromoCode() {
    if (!promoInput || !promoFeedback) return;
    const entered = promoInput.value.trim().toUpperCase();
    const isMr = (typeof currentLang !== 'undefined' && currentLang === 'mr') || document.documentElement.lang === 'mr';

    if (!entered) {
      promoFeedback.style.display = 'block';
      promoFeedback.className = 'enrol-promo-feedback error';
      promoFeedback.textContent = isMr ? 'कृपया प्रोमो कोड प्रविष्ट करा.' : 'Please enter a promo code.';
      return;
    }

    const promoConfig = cfg.PROMO_CODES || {};
    const matched = promoConfig[entered];

    if (entered === 'SPECIAL5999' || matched) {
      appliedPromoCode = entered;
      // Unlock secret special offer card
      if (cardSpecial) {
        cardSpecial.style.display = 'flex';
      }
      // Check the special offer radio
      const specialRadio = document.querySelector('input[name="payment_plan"][value="special"]');
      if (specialRadio) {
        specialRadio.checked = true;
        specialRadio.dispatchEvent(new Event('change'));
      }

      // Show success feedback
      promoFeedback.style.display = 'block';
      promoFeedback.className = 'enrol-promo-feedback success';
      if (isMr) {
        promoFeedback.innerHTML = (matched && matched.messageMr) ? matched.messageMr : '🎉 <strong>स्कॉलरशिप कोड लागू झाला!</strong> ₹५,००० सवलतीसह ऑल-इन-वन प्रोग्राम ऑफर (₹९,९९९) सुरू झाली आहे!';
      } else {
        promoFeedback.innerHTML = (matched && matched.messageEn) ? matched.messageEn : '🎉 <strong>Scholarship code applied!</strong> Live Session Offer (₹9,999) unlocked with ₹5,000 savings!';
      }

      if (promoBtn) {
        promoBtn.classList.add('applied');
        promoBtn.textContent = isMr ? 'लागू झाले ✓' : 'Applied ✓';
        promoBtn.disabled = true;
      }
      promoInput.disabled = true;
    } else {
      promoFeedback.style.display = 'block';
      promoFeedback.className = 'enrol-promo-feedback error';
      promoFeedback.textContent = isMr 
        ? 'अवैध प्रोमो कोड. कृपया तपासून पुन्हा प्रयत्न करा.' 
        : 'Invalid promo code. Please check and try again.';
    }
  }

  if (promoBtn) {
    promoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      applyPromoCode();
    });
  }

  if (promoInput) {
    promoInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyPromoCode();
      }
    });
  }

  // Real-time input clearing
  const inputs = form ? form.querySelectorAll('input') : [];
  inputs.forEach(inp => {
    inp.addEventListener('input', () => {
      inp.classList.remove('has-error');
      const err = document.getElementById(`err-${inp.name}`);
      if (err) err.style.display = 'none';
    });
  });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const fn = document.getElementById('enrol-firstname');
      const ln = document.getElementById('enrol-lastname');
      const em = document.getElementById('enrol-email');
      const ph = document.getElementById('enrol-phone');

      let isValid = true;

      // 1. First Name
      if (!fn.value.trim()) {
        fn.classList.add('has-error');
        document.getElementById('err-firstname').style.display = 'block';
        isValid = false;
      }

      // 2. Surname / Last Name
      if (!ln.value.trim()) {
        ln.classList.add('has-error');
        document.getElementById('err-lastname').style.display = 'block';
        isValid = false;
      }

      // 3. Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!em.value.trim() || !emailRegex.test(em.value.trim())) {
        em.classList.add('has-error');
        document.getElementById('err-email').style.display = 'block';
        isValid = false;
      }

      // 4. Phone (at least 10 digits)
      const phoneDigits = ph.value.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        ph.classList.add('has-error');
        document.getElementById('err-phone').style.display = 'block';
        isValid = false;
      }

      if (!isValid) return;

      // All mandatory details valid -> Proceed to Razorpay!
      const currentPlan = plans[selectedPlanId] || plans.full;
      const isMr = (typeof currentLang !== 'undefined' && currentLang === 'mr') || document.documentElement.lang === 'mr';

      if (btnText) {
        btnText.textContent = isMr ? 'माहिती सेव्ह होत आहे व जोडत आहोत...' : 'Saving Details & Connecting...';
      }
      submitBtn.disabled = true;

      const payload = {
        name: `${fn.value.trim()} ${ln.value.trim()}`,
        firstname: fn.value.trim(),
        firstName: fn.value.trim(),
        lastname: ln.value.trim(),
        surname: ln.value.trim(),
        email: em.value.trim(),
        phone: ph.value.trim(),
        whatsapp: ph.value.trim(),
        planId: currentPlan.id,
        planName: currentPlan.name,
        amount: currentPlan.amount,
        plan: `${currentPlan.name} (₹${Number(currentPlan.amount).toLocaleString('en-IN')})`,
        promoCode: appliedPromoCode || 'NONE',
        topic: '30-Day Cohort Enrolment',
        source: 'Home Page Cohort Card',
        submitted_at: new Date().toISOString()
      };

      // 1. Request Razorpay Order ID & Unique Registration ID from Server-Side Authoritative Catalogue
      const googleSheetUrl = cfg.GOOGLE_SHEET_WEBHOOK_URL;
      let orderData = {
        registrationId: 'SKL-REG-' + new Date().toISOString().slice(0, 10).replace(/-/g, '') + '-' + Math.floor(1000 + Math.random() * 9000),
        learnerId: 'SKL-LRN-' + phoneDigits.slice(-6) + '-' + Math.floor(100 + Math.random() * 900),
        keyId: cfg.RAZORPAY_KEY_ID || 'rzp_test_TxynQtDHnvxC1V',
        orderId: '',
        amountInr: currentPlan.amount,
        amountPaise: Number(currentPlan.amount) * 100
      };

      if (googleSheetUrl) {
        try {
          const ordResp = await fetch(googleSheetUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
              action: 'create_order',
              firstName: fn.value.trim(),
              surname: ln.value.trim(),
              email: em.value.trim(),
              whatsapp: phoneDigits.slice(-10),
              planId: currentPlan.id,
              promoCode: appliedPromoCode || 'NONE',
              emailConsent: document.getElementById('enrol-consent-email') ? document.getElementById('enrol-consent-email').checked : true,
              whatsappConsent: document.getElementById('enrol-consent-whatsapp') ? document.getElementById('enrol-consent-whatsapp').checked : true
            })
          });
          const ordJson = await ordResp.json();
          if (ordJson && ordJson.status === 'success') {
            orderData = Object.assign(orderData, ordJson);
          }
        } catch (err) {
          console.warn('Order API notice (using Standard Checkout):', err);
        }
      }

      // 2. Send backup notification to Formspree
      const endpoint = cfg.ENQUIRY_SUBMISSION_ENDPOINT || 'https://formspree.io/f/xqppyvgd';
      try {
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(Object.assign({}, payload, { registrationId: orderData.registrationId, learnerId: orderData.learnerId }))
        }).catch(() => {});
      } catch (err) {}

      // 3. Launch Razorpay Standard Checkout Automatically (Paise conversion + prefill + verification handler)
      if (typeof window.Razorpay === 'function') {
        const rzpOpts = {
          key: orderData.keyId || cfg.RAZORPAY_KEY_ID,
          amount: orderData.amountPaise,
          currency: 'INR',
          name: 'Skillansh',
          description: `${currentPlan.name} (${orderData.registrationId})`,
          image: 'https://www.skillansh.com/skillansh-logo.png',
          prefill: {
            name: `${fn.value.trim()} ${ln.value.trim()}`,
            email: em.value.trim(),
            contact: '+91' + phoneDigits.slice(-10)
          },
          notes: {
            registration_id: orderData.registrationId,
            learner_id: orderData.learnerId,
            plan_id: currentPlan.id
          },
          theme: { color: '#1E3A5F' },
          handler: async function (rzpResponse) {
            if (btnText) btnText.textContent = 'Verifying Payment & Activating LMS...';
            if (googleSheetUrl) {
              try {
                await fetch(googleSheetUrl, {
                  method: 'POST',
                  headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                  body: JSON.stringify({
                    action: 'verify_payment',
                    registrationId: orderData.registrationId,
                    learnerId: orderData.learnerId,
                    planId: currentPlan.id,
                    learnerName: `${fn.value.trim()} ${ln.value.trim()}`,
                    firstName: fn.value.trim(),
                    surname: ln.value.trim(),
                    email: em.value.trim(),
                    whatsapp: phoneDigits.slice(-10),
                    razorpay_order_id: rzpResponse.razorpay_order_id || orderData.orderId || '',
                    razorpay_payment_id: rzpResponse.razorpay_payment_id || '',
                    razorpay_signature: rzpResponse.razorpay_signature || ''
                  })
                });
              } catch (vErr) {
                console.warn('Payment verification sync notice:', vErr);
              }
            }
            window.location.href = `enroll.html?regId=${encodeURIComponent(orderData.registrationId)}`;
          },
          modal: {
            ondismiss: function () {
              submitBtn.disabled = false;
              updateButtonLabel();
            }
          }
        };
        if (orderData.orderId) {
          rzpOpts.order_id = orderData.orderId;
        }
        const rzp = new window.Razorpay(rzpOpts);
        rzp.open();
        return;
      }

      // Fallback if checkout.js blocked by adblocker: redirect to enroll.html
      window.location.href = `enroll.html?plan=${encodeURIComponent(currentPlan.id)}`;
    });
  }
}

/* ---------- Quick Enquiry Modal (Option A) ---------- */
function ensureQuickEnquiryModalInjected() {
  if (!document.getElementById('open-quick-enquiry-btn')) {
    const navWrap = document.querySelector('.nav-wrap');
    const mobileMenuBtn = document.getElementById('mobile-menu');
    if (navWrap) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'nav-enquiry-btn';
      btn.id = 'open-quick-enquiry-btn';
      btn.setAttribute('aria-label', 'Quick Enquiry');
      btn.innerHTML = '<span class="nav-enquiry-icon">✉️</span><span data-en="Quick Enquiry" data-mr="त्वरित विचारणा">Quick Enquiry</span>';
      if (mobileMenuBtn) {
        navWrap.insertBefore(btn, mobileMenuBtn);
      } else {
        navWrap.appendChild(btn);
      }
    }
  }

  const navLinks = document.getElementById('nav-links');
  if (navLinks && !document.getElementById('open-quick-enquiry-mobile-btn')) {
    const li = document.createElement('li');
    li.className = 'mobile-menu-cta';
    li.innerHTML = '<button type="button" class="nav-enquiry-btn" id="open-quick-enquiry-mobile-btn" style="width:100%; justify-content:center; padding:0.65rem 1rem; font-size:0.92rem; min-height:42px;"><span class="nav-enquiry-icon">✉️</span><span data-en="Quick Enquiry" data-mr="त्वरित विचारणा">Quick Enquiry</span></button>';
    navLinks.appendChild(li);
  }

  if (!document.getElementById('quick-enquiry-overlay')) {
    const modalWrapper = document.createElement('div');
    modalWrapper.className = 'quick-enquiry-overlay';
    modalWrapper.id = 'quick-enquiry-overlay';
    modalWrapper.setAttribute('role', 'dialog');
    modalWrapper.setAttribute('aria-modal', 'true');
    modalWrapper.setAttribute('aria-labelledby', 'quick-enquiry-title');
    modalWrapper.style.display = 'none';
    modalWrapper.innerHTML = `
    <div class="quick-enquiry-box">
      <button type="button" class="quick-enquiry-close" id="quick-enquiry-close" aria-label="Close enquiry popup">&times;</button>
      <div class="quick-enquiry-header">
        <span class="quick-enquiry-badge" data-en="⚡ Fast Response" data-mr="⚡ जलद प्रतिसाद">⚡ Fast Response</span>
        <h3 id="quick-enquiry-title" data-en="Enquiry" data-mr="विचारणा करा">Enquiry</h3>
        <p class="quick-enquiry-sub" data-en="Have questions about the 30-Day Cohort, Live Workshop, batch timing, or fees? Send your details and our mentor team will connect with you." data-mr="३०-दिवसीय कोहॉर्ट, लाइव्ह कार्यशाळा, बॅचची वेळ किंवा शुल्काबद्दल काही प्रश्न आहेत? तुमची माहिती पाठवा, आमची मेंटर टीम संपर्क करेल.">Have questions about the 30-Day Cohort, Live Workshop, batch timing, or fees? Send your details and our mentor team will connect with you.</p>
      </div>
      <form id="quick-enquiry-form" novalidate>
        <div class="qe-form-row">
          <div class="qe-form-group">
            <label for="qe-firstname" data-en="First Name *" data-mr="नाव *">First Name *</label>
            <input type="text" id="qe-firstname" name="firstname" required placeholder="e.g. Rahul" autocomplete="given-name">
            <span class="qe-field-error" id="err-qe-firstname" data-en="Please enter your first name." data-mr="कृपया तुमचे नाव प्रविष्ट करा.">Please enter your first name.</span>
          </div>
          <div class="qe-form-group">
            <label for="qe-lastname" data-en="Surname / Last Name *" data-mr="आडनाव *">Surname / Last Name *</label>
            <input type="text" id="qe-lastname" name="lastname" required placeholder="e.g. Sharma" autocomplete="family-name">
            <span class="qe-field-error" id="err-qe-lastname" data-en="Please enter your surname." data-mr="कृपया तुमचे आडनाव प्रविष्ट करा.">Please enter your surname.</span>
          </div>
        </div>
        <div class="qe-form-row">
          <div class="qe-form-group">
            <label for="qe-phone" data-en="WhatsApp / Phone *" data-mr="व्हॉट्सॲप / मोबाइल नंबर *">WhatsApp / Phone *</label>
            <input type="tel" id="qe-phone" name="phone" required placeholder="+91 98765 43210" autocomplete="tel">
            <span class="qe-field-error" id="err-qe-phone" data-en="Please enter a valid 10-digit number." data-mr="कृपया वैध १०-अंकी मोबाइल नंबर प्रविष्ट करा.">Please enter a valid 10-digit number.</span>
          </div>
          <div class="qe-form-group">
            <label for="qe-email" data-en="Email Address (Optional)" data-mr="ईमेल पत्ता (ऐच्छिक)">Email Address (Optional)</label>
            <input type="email" id="qe-email" name="email" placeholder="name@example.com" autocomplete="email">
            <span class="qe-field-error" id="err-qe-email" data-en="Please enter a valid email." data-mr="कृपया वैध ईमेल प्रविष्ट करा.">Please enter a valid email.</span>
          </div>
        </div>
        <div class="qe-form-group">
          <label for="qe-topic" data-en="What are you enquiring about?" data-mr="तुम्हाला कशाबद्दल विचारणा करायची आहे?">What are you enquiring about?</label>
          <select id="qe-topic" name="topic" class="qe-select">
            <option value="30-Day Practical Cohort" selected data-en="30-Day Practical Cohort (Excel, Automation &amp; MIS)" data-mr="३०-दिवसीय प्रॅक्टिकल कोहॉर्ट (Excel, ऑटोमेशन व MIS)">30-Day Practical Cohort (Excel, Automation &amp; MIS)</option>
            <option value="Weekend Masterclass / Workshop" data-en="Weekend Masterclass / Workshop" data-mr="वीकेंड मास्टरक्लास / कार्यशाळा">Weekend Masterclass / Workshop</option>
            <option value="Fees, Installments &amp; Offers" data-en="Fees, Installments &amp; Offers" data-mr="फी, हप्ते व विशेष ऑफर्स">Fees, Installments &amp; Offers</option>
            <option value="Curriculum &amp; Syllabus Details" data-en="Curriculum &amp; Syllabus Details" data-mr="अभ्यासक्रम व सिलॅबस माहिती">Curriculum &amp; Syllabus Details</option>
            <option value="1-on-1 Career Consultation" data-en="1-on-1 Career Consultation" data-mr="१-ऑन-१ करिअर मार्गदर्शन">1-on-1 Career Consultation</option>
            <option value="General Query" data-en="Other Questions" data-mr="इतर प्रश्न">Other Questions</option>
          </select>
        </div>
        <div class="qe-form-group">
          <label for="qe-message" data-en="Your Question / Message *" data-mr="तुमचा प्रश्न / संदेश *">Your Question / Message *</label>
          <textarea id="qe-message" name="message" rows="3" required placeholder="Type your question or query here..." data-placeholder-en="Type your question or query here..." data-placeholder-mr="तुमचा प्रश्न किंवा विचारणा येथे टाईप करा..."></textarea>
          <span class="qe-field-error" id="err-qe-message" data-en="Please write your question." data-mr="कृपया तुमचा प्रश्न लिहा.">Please write your question.</span>
        </div>
        <div class="qe-trust-note">
          <span data-en="🔒 Direct to Google Sheets &middot; 100% Privacy Protected" data-mr="🔒 थेट गुगल शीटमध्ये सुरक्षित &middot; १००% गोपनीयता">🔒 Direct to Google Sheets &middot; 100% Privacy Protected</span>
        </div>
        <button type="submit" class="qe-submit-btn" id="qe-submit-btn">
          <span id="qe-btn-text" data-en="Submit Enquiry &rarr;" data-mr="विचारणा पाठवा &rarr;">Submit Enquiry &rarr;</span>
        </button>
      </form>
      <div class="qe-contact-link-row">
        <span data-en="Need more options or detailed form?" data-mr="अधिक पर्याय किंवा सविस्तर फॉर्म हवा आहे?">Need more options or detailed form?</span>
        <a href="contact.html" class="qe-contact-page-link" data-en="Go to Full Contact Page &rarr;" data-mr="संपूर्ण संपर्क पेजवर जा &rarr;">Go to Full Contact Page &rarr;</a>
      </div>
      <div class="qe-success-box" id="qe-success-box" style="display:none;">
        <div style="font-size:2.5rem; margin-bottom:0.4rem;">🎉</div>
        <h4 style="color:#065F46; font-size:1.25rem; font-weight:800; margin-bottom:0.35rem;" data-en="Enquiry Submitted Successfully!" data-mr="विचारणा यशस्वीरित्या पाठवली!">Enquiry Submitted Successfully!</h4>
        <p style="color:#047857; font-size:0.88rem; line-height:1.55; margin-bottom:1.15rem;" data-en="Thank you! Your enquiry has been recorded in our system. Our mentor team will connect with you shortly on WhatsApp or phone." data-mr="धन्यवाद! तुमची विचारणा आमच्या सिस्टीममध्ये नोंदवली गेली आहे. आमची मेंटर टीम लवकरच तुमच्याशी व्हॉट्सॲप किंवा फोनवर संपर्क साधेल.">Thank you! Your enquiry has been recorded in our system. Our mentor team will connect with you shortly on WhatsApp or phone.</p>
        <button type="button" class="qe-done-btn" id="qe-done-btn" data-en="Close" data-mr="बंद करा">Close</button>
      </div>
    </div>`;
    document.body.appendChild(modalWrapper);
  }
}

function initQuickEnquiryModal() {
  ensureQuickEnquiryModalInjected();
  const openDesktopBtn = document.getElementById('open-quick-enquiry-btn');
  const openMobileBtn = document.getElementById('open-quick-enquiry-mobile-btn');
  const overlay = document.getElementById('quick-enquiry-overlay');
  const closeBtn = document.getElementById('quick-enquiry-close');
  const doneBtn = document.getElementById('qe-done-btn');
  const form = document.getElementById('quick-enquiry-form');
  const successBox = document.getElementById('qe-success-box');
  const submitBtn = document.getElementById('qe-submit-btn');
  const btnText = document.getElementById('qe-btn-text');

  if (!overlay) return;

  function openModal() {
    overlay.style.display = 'flex';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    const firstInput = document.getElementById('qe-firstname');
    if (firstInput) setTimeout(() => firstInput.focus(), 150);
  }

  function closeModal() {
    overlay.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (openDesktopBtn) {
    openDesktopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (openMobileBtn) {
    openMobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const navLinks = document.getElementById('nav-links');
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
      }
      openModal();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (doneBtn) doneBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Real-time error clearing
  const inputs = form ? form.querySelectorAll('input, select, textarea') : [];
  inputs.forEach(inp => {
    inp.addEventListener('input', () => {
      inp.classList.remove('has-error');
      const err = document.getElementById(`err-${inp.id}`);
      if (err) err.style.display = 'none';
    });
  });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const fnEl = document.getElementById('qe-firstname');
      const lnEl = document.getElementById('qe-lastname');
      const phoneEl = document.getElementById('qe-phone');
      const emailEl = document.getElementById('qe-email');
      const topicEl = document.getElementById('qe-topic');
      const msgEl = document.getElementById('qe-message');

      let isValid = true;

      // 1. First Name validation
      if (!fnEl || !fnEl.value.trim()) {
        if (fnEl) fnEl.classList.add('has-error');
        const err = document.getElementById('err-qe-firstname');
        if (err) err.style.display = 'block';
        isValid = false;
      }

      // 2. Surname / Last Name validation
      if (!lnEl || !lnEl.value.trim()) {
        if (lnEl) lnEl.classList.add('has-error');
        const err = document.getElementById('err-qe-lastname');
        if (err) err.style.display = 'block';
        isValid = false;
      }

      // 3. Phone validation (at least 10 digits)
      const phoneDigits = phoneEl ? phoneEl.value.replace(/\D/g, '') : '';
      if (!phoneEl || phoneDigits.length < 10) {
        if (phoneEl) phoneEl.classList.add('has-error');
        const err = document.getElementById('err-qe-phone');
        if (err) err.style.display = 'block';
        isValid = false;
      }

      // 4. Email validation (if provided)
      if (emailEl && emailEl.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailEl.value.trim())) {
          emailEl.classList.add('has-error');
          const err = document.getElementById('err-qe-email');
          if (err) err.style.display = 'block';
          isValid = false;
        }
      }

      // 5. Message validation
      if (!msgEl || !msgEl.value.trim()) {
        if (msgEl) msgEl.classList.add('has-error');
        const err = document.getElementById('err-qe-message');
        if (err) err.style.display = 'block';
        isValid = false;
      }

      if (!isValid) return;

      const isMr = (typeof currentLang !== 'undefined' && currentLang === 'mr') || document.documentElement.lang === 'mr';
      if (btnText) {
        btnText.textContent = isMr ? 'विचारणा पाठवत आहोत...' : 'Sending Enquiry...';
      }
      submitBtn.disabled = true;

      const fn = fnEl.value.trim();
      const ln = lnEl.value.trim();
      const fullName = `${fn} ${ln}`.trim();
      const phoneVal = phoneEl.value.trim();
      const emailVal = emailEl ? emailEl.value.trim() : '';
      const topicVal = topicEl ? topicEl.value : 'General Guidance';
      const msgVal = msgEl.value.trim();

      const payload = {
        firstName: fn,
        firstname: fn,
        first_name: fn,
        surname: ln,
        lastname: ln,
        last_name: ln,
        name: fullName,
        fullName: fullName,
        email: emailVal,
        phone: phoneVal,
        whatsapp: phoneVal,
        mobile: phoneVal,
        plan: `Enquiry: ${topicVal}`,
        topic: topicVal,
        message: msgVal,
        promoCode: msgVal,
        source: 'Home Navbar Enquiry Modal',
        submitted_at: new Date().toISOString()
      };

      const cfg = window.ACCOUNTPRO_CONFIG || {};

      // 1. Post to Google Sheets Webhook
      const googleSheetUrl = cfg.GOOGLE_SHEET_WEBHOOK_URL;
      if (googleSheetUrl) {
        try {
          fetch(googleSheetUrl, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
          }).catch(err => console.warn('Google Sheet enquiry sync notice:', err));
        } catch (sheetErr) {
          console.warn('Google Sheet enquiry sync notice:', sheetErr);
        }
      }

      // 2. Backup to Formspree endpoint if configured
      if (cfg.ENQUIRY_SUBMISSION_ENDPOINT) {
        try {
          fetch(cfg.ENQUIRY_SUBMISSION_ENDPOINT, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: fn,
              surname: ln,
              name: fullName,
              phone: phoneVal,
              whatsapp: phoneVal,
              email: emailVal,
              topic: `Enquiry: ${topicVal}`,
              message: `${msgVal}${emailVal ? ' | Email: ' + emailVal : ''}`
            })
          }).catch(err => console.warn('Formspree enquiry notice:', err));
        } catch (fpErr) {
          console.warn('Formspree enquiry notice:', fpErr);
        }
      }

      setTimeout(() => {
        form.style.display = 'none';
        if (successBox) successBox.style.display = 'block';
        submitBtn.disabled = false;
        if (btnText) {
          btnText.textContent = isMr ? 'विचारणा पाठवा \u2192' : 'Submit Enquiry \u2192';
        }
      }, 350);
    });
  }
}

function initContentCopyProtection() {
  const showSecurityShieldNotice = (reason) => {
    let badge = document.getElementById('skillansh-security-toast');
    if (!badge) {
      badge = document.createElement('div');
      badge.id = 'skillansh-security-toast';
      badge.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#0F172A;color:#F8FAFC;border:1.5px solid #F59E0B;padding:0.65rem 1.25rem;border-radius:999px;font-size:0.82rem;font-weight:700;z-index:999999;box-shadow:0 10px 25px rgba(15,23,42,0.45);pointer-events:none;opacity:0;transition:opacity 0.2s ease;';
      document.body.appendChild(badge);
    }
    badge.textContent = reason || '🔒 Protected Curriculum © Skillansh (www.skillansh.com) — Copying & Screenshots Restricted';
    badge.style.opacity = '1';
    clearTimeout(window.__skillanshToastTimer);
    window.__skillanshToastTimer = setTimeout(() => {
      if (badge) badge.style.opacity = '0';
    }, 2600);
  };

  const triggerCurriculumBlurFlash = (holdUntilFocus) => {
    document.body.classList.add('skillansh-capture-shield');
    showSecurityShieldNotice('🔒 Screenshot & Screen Capture Restricted — © Skillansh Practical Curriculum');
    clearTimeout(window.__skillanshBlurTimer);
    if (!holdUntilFocus) {
      window.__skillanshBlurTimer = setTimeout(() => {
        if (document.hasFocus()) {
          document.body.classList.remove('skillansh-capture-shield');
        }
      }, 2200);
    }
  };

  // Instant Snipping Tool / External Snapshot App Shield:
  // When user clicks Snipping Tool, Lightshot, or presses Win+Shift+S, the browser window loses focus (blur).
  // Immediately blur all curriculum cards while the browser is unfocused, and unblur when user clicks back!
  window.addEventListener('blur', () => {
    document.body.classList.add('skillansh-capture-shield');
  });

  window.addEventListener('focus', () => {
    clearTimeout(window.__skillanshBlurTimer);
    document.body.classList.remove('skillansh-capture-shield');
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.body.classList.add('skillansh-capture-shield');
    } else if (document.hasFocus()) {
      document.body.classList.remove('skillansh-capture-shield');
    }
  });

  // 1. Block Right-Click & Image/Card Dragging on Curriculum Sections
  document.addEventListener('contextmenu', (e) => {
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return;
    }
    if (target && target.closest && target.closest('.protected-copy-zone, .bento-card, .cohort-split-layout, .smart-visible-card, .curriculum-card-stage')) {
      e.preventDefault();
      showSecurityShieldNotice('🔒 Curriculum Protected © Skillansh (www.skillansh.com)');
    }
  });

  document.addEventListener('dragstart', (e) => {
    const target = e.target;
    if (target && (target.tagName === 'IMG' || (target.closest && target.closest('.bento-card, .smart-visible-card, .cohort-split-layout')))) {
      e.preventDefault();
    }
  });

  // 2. Intercept Copy event — replace any copied curriculum text with copyright attribution
  document.addEventListener('copy', (e) => {
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return;
    }
    const sel = window.getSelection ? window.getSelection().toString() : '';
    if (sel && sel.length > 60) {
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', 'Protected 5-Step Practical Curriculum © Skillansh (www.skillansh.com) by Girish Shelar. Unauthorized reproduction prohibited.');
        e.preventDefault();
        showSecurityShieldNotice('🔒 Copying Restricted — © Skillansh (www.skillansh.com)');
      }
    }
  });

  // 3. Detect PrintScreen, Snipping shortcuts (Win+Shift+S, Cmd+Shift+3/4), Ctrl+P, Ctrl+S, Ctrl+U
  document.addEventListener('keydown', (e) => {
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return;
    }
    const key = (e.key || '').toLowerCase();
    if (e.key === 'PrintScreen' || e.keyCode === 44) {
      triggerCurriculumBlurFlash();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('Protected Content © Skillansh (www.skillansh.com)').catch(() => {});
      }
      return;
    }
    // Windows Snipping Tool (Meta+Shift+S) or Mac Screenshot (Meta+Shift+3/4/5) or Alt+PrintScreen
    if (e.key === 'Meta' || e.key === 'OS' || (e.metaKey && e.shiftKey) || (e.altKey && e.key === 'PrintScreen')) {
      triggerCurriculumBlurFlash();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && (key === 'u' || key === 's' || key === 'p')) {
      e.preventDefault();
      triggerCurriculumBlurFlash();
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen' || e.keyCode === 44) {
      triggerCurriculumBlurFlash();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('Protected Content © Skillansh (www.skillansh.com)').catch(() => {});
      }
    }
  });
}

function initAll() {
  ensureQuickEnquiryModalInjected();
  initLangSwitcher();
  applyContactConfig();
  bindCtas();
  bindForm();
  restoreFormValues();
  preselectTopic();
  initFaqAccordion();
  initFaqFilters();
  initCountdown();
  initEnrolModal();
  initQuickEnquiryModal();
  initContentCopyProtection();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
