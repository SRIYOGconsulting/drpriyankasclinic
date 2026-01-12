import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';

// Blog data - in a real app, this would come from an API
export const blogPosts = [
  {
    id: 'understanding-hpv',
    title: 'HPV: Prevention & Protection Guide',
    excerpt: 'Learn how to protect yourself from HPV, understand vaccination options, and the importance of regular screenings for early detection and prevention of related health issues.',
    image: '/images/services/hpv-vaccination.jpg',
    readTime: '7 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Women\'s Health',
    content: [
      'Human Papillomavirus (HPV) is the most common sexually transmitted infection, with over 100 different types, about 40 of which can infect the genital area. Most sexually active individuals will contract at least one type of HPV during their lifetime, though they may never show symptoms. While the immune system typically clears most HPV infections within two years, persistent infections with high-risk types can lead to serious health complications including genital warts and various cancers such as cervical, anal, and oropharyngeal cancers.',
      'The introduction of HPV vaccines has been a major breakthrough in preventive healthcare. These vaccines target the most dangerous HPV types, including types 16 and 18, which cause approximately 70% of cervical cancers. The CDC recommends routine vaccination for all preteens at age 11-12, but it can be administered as early as age 9. Catch-up vaccination is recommended for everyone through age 26, and some adults aged 27-45 may benefit from vaccination after discussing with their healthcare provider. The vaccine is most effective when administered before potential exposure to HPV through sexual contact.',
      'Regular screening remains a cornerstone of HPV-related cancer prevention. For women, the Pap test (or Pap smear) has been instrumental in reducing cervical cancer rates by detecting precancerous changes in cervical cells. The HPV test, which can identify the presence of high-risk HPV types, is another valuable screening tool. Current guidelines recommend that women aged 21-29 should have a Pap test every three years, while women aged 30-65 have the option of a Pap test every three years, an HPV test every five years, or both tests every five years. These screening intervals may vary based on individual risk factors and medical history.',
      'Beyond vaccination and screening, several lifestyle factors can influence HPV risk and persistence. Practicing safe sex by using condoms consistently and correctly can reduce, though not eliminate, the risk of HPV transmission. Limiting your number of sexual partners and being in a mutually monogamous relationship can also lower your risk. Smoking cessation is particularly important, as tobacco use can make it harder for the body to clear an HPV infection. Maintaining a healthy immune system through balanced nutrition, regular exercise, and adequate sleep can also help your body fight off HPV infections more effectively.',
      'For those diagnosed with an HPV-related condition, regular follow-up care is essential. This may include more frequent Pap tests, colposcopy (a procedure to examine the cervix more closely), or treatment for precancerous changes if needed. It\'s important to remember that most HPV infections clear on their own, and having HPV doesn\'t mean you\'ll develop cancer. With proper vaccination, regular screening, and healthy lifestyle choices, the risks associated with HPV can be significantly reduced.'
    ],
    relatedPosts: [1, 2, 3, 4]
  },
  {
    id: 'regular-checkups',
    title: 'Regular Health Check-ups Guide',
    excerpt: 'Discover why regular health check-ups are essential for early detection and prevention of potential health issues at every stage of a woman\'s life.',
    image: '/images/services/family-planning-counseling.jpg',
    readTime: '7 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Preventive Care',
    content: [
      'Regular health check-ups serve as the cornerstone of preventive healthcare, offering a proactive approach to maintaining optimal well-being throughout a woman\'s life. These appointments are not just about addressing existing health concerns but are primarily focused on early detection and prevention of potential health issues. For women, these visits are particularly crucial as they provide a comprehensive assessment of reproductive health, hormonal balance, and age-specific health risks that may not present obvious symptoms in their early stages.',
      'A comprehensive well-woman exam typically includes several key components. The physical examination assesses your overall health status, including blood pressure, heart rate, and body mass index (BMI). A thorough breast exam helps detect any unusual lumps or changes in breast tissue that might require further investigation. The pelvic exam allows for evaluation of reproductive organs, while the Pap test screens for cervical cancer by collecting cells from the cervix. Additional screenings, such as cholesterol checks, diabetes screening, and bone density tests, are recommended at specific ages or based on individual risk factors. These tests can detect conditions like breast cancer, cervical cancer, sexually transmitted infections, osteoporosis, and cardiovascular disease in their earliest, most treatable stages.',
      'The benefits of regular check-ups extend far beyond physical health assessments. These appointments provide a valuable opportunity to establish an ongoing relationship with your healthcare provider, creating a comfortable space to discuss sensitive topics. You can address concerns about birth control options, menstrual irregularities, sexual health, fertility issues, perimenopause, and menopause symptoms. Your provider can also offer personalized guidance on nutrition, exercise, stress management, and other lifestyle factors that impact your health. These discussions can be particularly helpful for women navigating different life stages, from adolescence through childbearing years and beyond.',
      'Preventive screenings are tailored to your age and risk factors. In your 20s and 30s, focus is often on reproductive health, STI screening, and establishing baseline health metrics. As you enter your 40s and beyond, screenings for breast cancer, heart disease, and bone health become increasingly important. Regular check-ups also provide an opportunity to update vaccinations, review family medical history, and adjust preventive care strategies as needed. Many chronic conditions, when caught early through regular monitoring, can be managed effectively, significantly improving long-term health outcomes and quality of life.',
      'To make the most of your check-ups, come prepared with a list of questions or concerns, bring a record of any symptoms you\'ve been experiencing, and be honest about your lifestyle habits. Remember that no concern is too small to discuss with your healthcare provider. Regular check-ups are an investment in your long-term health, helping to detect potential issues early when they are most treatable and providing you with the knowledge and resources to make informed decisions about your health and well-being.'
    ],
    relatedPosts: [0, 2, 5, 7]
  },
  {
    id: 'pregnancy-care-guide',
    title: 'Pregnancy Care Essentials',
    excerpt: 'A complete guide to pregnancy care, covering essential health tips, nutrition, and medical check-ups for a healthy pregnancy journey from conception to delivery.',
    image: '/images/services/high-risk-pregnancy.jpg',
    readTime: '10 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Pregnancy',
    content: [
      'Pregnancy is a transformative journey that brings profound physical and emotional changes, requiring specialized care to ensure the health and well-being of both mother and baby. This comprehensive guide will walk you through the essential aspects of prenatal care, helping you navigate each trimester with confidence. The moment you suspect you might be pregnant, schedule your first prenatal visit with your healthcare provider. Early and regular prenatal care significantly reduces the risk of complications and promotes a healthy pregnancy outcome.',
      'The first trimester (weeks 1-12) is a critical period of rapid development for your baby. During this time, you\'ll have your initial prenatal visit, which typically includes a thorough medical history, physical examination, blood tests, and possibly your first ultrasound. Your healthcare provider will calculate your due date, check for any potential risk factors, and recommend prenatal vitamins containing folic acid to prevent neural tube defects. Common first-trimester symptoms include morning sickness (which can occur at any time of day), fatigue, breast tenderness, and frequent urination. While these symptoms can be challenging, they often subside as you enter the second trimester. It\'s crucial to avoid alcohol, tobacco, and certain medications during this time, and to discuss any medications or supplements with your healthcare provider.',
      'The second trimester (weeks 13-27) is often called the "golden period" of pregnancy, as many women experience increased energy and relief from early pregnancy symptoms. During this time, you\'ll start feeling your baby\'s first movements (quickening), typically between 16-25 weeks. Your healthcare provider will monitor your weight gain, blood pressure, and the baby\'s growth through regular check-ups. The anatomy scan, usually performed around 18-22 weeks, allows your doctor to check your baby\'s development and, if you choose, reveal the baby\'s sex. This is also when you might consider prenatal classes to prepare for childbirth, breastfeeding, and newborn care. Common second-trimester symptoms include back pain, leg cramps, nasal congestion, and skin changes like the "pregnancy glow" or linea nigra.',
      'The third trimester (weeks 28-40+) brings you closer to meeting your baby but also comes with its own set of challenges. Your prenatal visits will become more frequent, typically every two weeks from 28-36 weeks, then weekly until delivery. Your healthcare provider will monitor your baby\'s position, check for signs of preterm labor, and perform group B strep testing. You might experience increased fatigue, shortness of breath, heartburn, and difficulty sleeping as your baby grows larger. This is the time to finalize your birth plan, pack your hospital bag, and install your baby\'s car seat. Be aware of warning signs that require immediate medical attention, such as severe headaches, vision changes, sudden swelling, or decreased fetal movement.',
      'Throughout your pregnancy, maintaining a healthy lifestyle is paramount. Focus on a balanced diet rich in fruits, vegetables, whole grains, and lean proteins, and stay well-hydrated. Regular, moderate exercise (with your doctor\'s approval) can help manage weight gain, improve sleep, and prepare your body for labor. Pay attention to your mental health as well, as pregnancy can bring about mood swings and anxiety. Don\'t hesitate to discuss any concerns with your healthcare provider, and consider joining a prenatal support group to connect with other expectant parents. Remember, every pregnancy is unique, so trust your instincts and maintain open communication with your healthcare team throughout this incredible journey.'
    ],
    relatedPosts: [0, 1, 6, 8]
  },
  {
    id: 'breast-health-awareness',
    title: 'Breast Health: A Comprehensive Guide to Early Detection and Prevention',
    image: '/images/blog/breast-ultrasound.jpg',
    readTime: '8 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Women\'s Health',
    content: [
      'Breast health is a vital component of every woman\'s overall well-being, and understanding how to properly care for your breasts can significantly impact your long-term health outcomes. The importance of breast health awareness cannot be overstated, as early detection of abnormalities, particularly breast cancer, dramatically improves treatment success rates and survival outcomes. This comprehensive guide will walk you through the essential aspects of breast health, including self-examination techniques, clinical screenings, risk factors, and preventive measures to help you take an active role in maintaining your breast health throughout your life.',
      'Regular breast self-examinations (BSE) are a fundamental practice for early detection of any changes in breast tissue. Women should become familiar with the normal look and feel of their breasts so they can promptly identify any unusual changes. The ideal time to perform a self-exam is about 3-5 days after your menstrual period ends, when breasts are least likely to be swollen or tender. For postmenopausal women, choosing a consistent day each month is recommended. During the exam, look for any changes in size, shape, or symmetry, and feel for any lumps, thickening, or hardened knots. Also, check for any changes in the skin texture, dimpling, puckering, or changes in the nipples. Remember that most breast lumps are not cancerous, but any persistent changes should be evaluated by a healthcare professional.',
      'Clinical breast exams (CBEs) performed by healthcare providers are another critical component of breast health. The American Cancer Society recommends that women in their 20s and 30s should have a clinical breast exam as part of a periodic health exam, preferably at least every three years. After age 40, women should have a clinical breast exam every year. During this exam, your healthcare provider will carefully feel your breast tissue and the lymph nodes in your underarm area for any abnormalities. They will also examine your breasts for any skin changes, nipple discharge, or other concerning signs. This professional assessment is particularly valuable because healthcare providers are trained to detect subtle changes that might be missed during self-exams.',
      'Mammography remains the gold standard for breast cancer screening in women at average risk. The American College of Radiology recommends that women with an average risk of breast cancer begin annual mammograms at age 40. However, women with a family history of breast cancer or other risk factors may need to begin screening earlier or have additional imaging tests such as breast ultrasound or MRI. Digital mammography, including 3D mammography (tomosynthesis), has significantly improved the detection of breast cancer, especially in women with dense breast tissue. It\'s important to discuss your individual risk factors with your healthcare provider to develop a personalized screening plan that\'s right for you.',
      'Beyond screenings, several lifestyle factors can influence breast cancer risk. Maintaining a healthy weight is crucial, as excess body weight, especially after menopause, increases breast cancer risk. Regular physical activity (at least 150 minutes of moderate exercise per week) has been shown to reduce breast cancer risk by 10-20%. Limiting alcohol consumption to no more than one drink per day (or less) is recommended, as alcohol is a known risk factor for breast cancer. A diet rich in fruits, vegetables, whole grains, and lean proteins provides essential nutrients and antioxidants that support overall breast health. Additionally, breastfeeding has been shown to offer protective benefits against breast cancer, particularly when continued for a year or longer. If you have a family history of breast or ovarian cancer, consider genetic counseling to assess your risk and discuss potential preventive strategies.'
    ],
    relatedPosts: [0, 1, 5, 9]
  },
  {
    id: 'managing-menopause',
    title: 'Navigating Menopause: A Comprehensive Guide to Symptoms, Treatments',
    image: '/images/blog/menopause-care.jpg',
    readTime: '10 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Women\'s Health',
    content: [
      'Menopause is a significant biological milestone that marks the end of a woman\'s reproductive years, typically occurring between the ages of 45 and 55, with the average age being 51 in most developed countries. This natural transition is defined as occurring 12 months after a woman\'s last menstrual period and is preceded by perimenopause, which can last anywhere from a few months to several years. While menopause is a normal part of aging, the physical and emotional symptoms can significantly impact a woman\'s quality of life, relationships, and overall well-being. Understanding what to expect and knowing how to manage symptoms can make this transition much smoother and more comfortable.',
      'The symptoms of menopause vary widely among women but commonly include vasomotor symptoms like hot flashes and night sweats, which can range from mild to severe and may persist for several years. Many women experience sleep disturbances, mood swings, irritability, and difficulty concentrating, often referred to as \'brain fog.\' Physical changes include vaginal dryness, decreased libido, urinary incontinence, and changes in skin elasticity. Some women may also notice weight gain, particularly around the abdomen, and changes in hair texture or thickness. It\'s important to note that these symptoms are caused by the natural decline in reproductive hormones, particularly estrogen and progesterone, which affects nearly every system in a woman\'s body. The duration and intensity of these symptoms can vary significantly from one woman to another, influenced by factors such as genetics, lifestyle, and overall health status.',
      'Hormone Replacement Therapy (HRT) remains one of the most effective treatments for managing moderate to severe menopausal symptoms, particularly hot flashes and vaginal discomfort. HRT involves taking medications containing female hormones to replace those the body no longer makes after menopause. However, HRT isn\'t suitable for everyone, especially women with a history of certain cancers, blood clots, or cardiovascular disease. For those who cannot or choose not to take hormones, non-hormonal prescription medications like low-dose antidepressants, gabapentin, or clonidine may help manage hot flashes. Vaginal estrogen, available as creams, tablets, or rings, can effectively treat vaginal dryness and discomfort with minimal systemic absorption. Lifestyle modifications play a crucial role in symptom management, including regular weight-bearing exercise to maintain bone density, strength training to preserve muscle mass, and a diet rich in calcium and vitamin D to support bone health.',
      'Complementary and alternative therapies can also provide relief for some women experiencing menopausal symptoms. Phytoestrogens found in soy products, flaxseeds, and legumes may help alleviate mild hot flashes for some women. Black cohosh, evening primrose oil, and red clover are among the herbal supplements that some women find helpful, though scientific evidence supporting their efficacy is limited. Mind-body practices such as yoga, tai chi, and meditation can help manage stress, improve sleep, and enhance overall well-being during this transition. Acupuncture has shown promise in reducing the frequency and severity of hot flashes for some women. It\'s crucial to discuss any complementary therapies with your healthcare provider, as some may interact with medications or have side effects. Cognitive behavioral therapy (CBT) has also been shown to be effective in managing mood swings, anxiety, and sleep disturbances associated with menopause.',
      'Maintaining a proactive approach to health during and after menopause is essential for long-term well-being. Regular health screenings, including mammograms, bone density tests, and cardiovascular assessments, become increasingly important as women age. A heart-healthy diet rich in fruits, vegetables, whole grains, and lean proteins can help manage weight and reduce the risk of heart disease, which increases after menopause. Staying socially connected and engaged in meaningful activities can help combat feelings of isolation or depression that some women experience during this life transition. Many women find that menopause, while challenging, can also be a time of personal growth and renewed focus on self-care. With the right information, support, and healthcare guidance, women can navigate this transition with confidence and embrace this new chapter of life with vitality and optimism.'
    ],
    relatedPosts: [0, 1, 3, 7]
  },
  {
    id: 'nutrition-women',
    title: 'Women\'s Nutrition Guide',
    excerpt: 'Explore essential nutritional needs for women at different life stages, including key vitamins, minerals, and dietary recommendations for optimal health and wellness.',
    image: '/images/blog/nutrition.jpg',
    readTime: '8 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Nutrition',
    content: [
      'Nutrition plays a pivotal role in women\'s health, with specific dietary needs evolving throughout different life stages. From the rapid growth of adolescence to the reproductive years, pregnancy, breastfeeding, and the postmenopausal phase, a woman\'s body requires varying nutrients to maintain optimal health. Understanding these changing nutritional requirements is essential for preventing chronic diseases, maintaining energy levels, and supporting overall well-being. This comprehensive guide will explore the key nutrients women need at different stages of life, along with practical dietary recommendations to help you make informed choices for your health.',
      'During the reproductive years (late teens to early 40s), women need to pay special attention to iron and folate intake. Iron is crucial due to monthly menstrual blood loss, with the recommended daily intake being 18 mg for women aged 19-50. Excellent sources include lean red meat, poultry, fish, lentils, spinach, and iron-fortified cereals. Pairing these with vitamin C-rich foods like citrus fruits, bell peppers, or tomatoes can enhance iron absorption. Folate (or folic acid in supplement form) is another critical nutrient during these years, with a recommended daily intake of 400-800 mcg for women of childbearing age. Leafy greens, citrus fruits, beans, and fortified grains are excellent sources. Adequate folate intake before and during early pregnancy significantly reduces the risk of neural tube defects in developing babies, making it a crucial consideration for all women who might become pregnant.',
      'Calcium and vitamin D become increasingly important as women age, particularly to maintain bone health and prevent osteoporosis. Women aged 19-50 need about 1,000 mg of calcium daily, increasing to 1,200 mg after age 50. Dairy products like milk, yogurt, and cheese are excellent sources, but calcium can also be obtained from fortified plant milks, tofu, almonds, and leafy greens like kale and bok choy. Vitamin D, which aids calcium absorption, is equally important, with a recommended daily intake of 600-800 IU. While sunlight triggers vitamin D production in the skin, dietary sources include fatty fish, egg yolks, and fortified foods. Many women, especially those with limited sun exposure or darker skin, may benefit from vitamin D supplements to maintain optimal levels. Regular weight-bearing exercise, along with adequate calcium and vitamin D intake, forms the foundation of strong bone health throughout a woman\'s life.',
      'Omega-3 fatty acids, particularly DHA and EPA, play a crucial role in brain health, heart health, and reducing inflammation. These essential fats are particularly important during pregnancy and breastfeeding for fetal brain development. Fatty fish like salmon, mackerel, and sardines are excellent sources of these beneficial fats. For those who don\'t eat fish, plant-based sources like flaxseeds, chia seeds, walnuts, and algae-based supplements can provide the plant form of omega-3s (ALA), though conversion to the more active forms (DHA and EPA) in the body is limited. The American Heart Association recommends eating at least two servings of fatty fish per week. For women who are pregnant or planning to become pregnant, it\'s important to choose fish lower in mercury, such as salmon, sardines, and trout, while limiting high-mercury fish like swordfish, king mackerel, and tilefish.',
      'As women transition through menopause and beyond, their nutritional needs shift once again. Phytoestrogens found in soy products, flaxseeds, and whole grains may help alleviate some menopausal symptoms. Fiber becomes increasingly important for digestive health and maintaining a healthy weight, with a recommendation of 25 grams per day for women. Whole grains, fruits, vegetables, and legumes are excellent sources. Hydration is also crucial, as the sensation of thirst may diminish with age. Aim for at least 8-10 cups of water daily, more if you\'re physically active. Protein needs may increase slightly to help maintain muscle mass, with lean sources like poultry, fish, beans, and low-fat dairy being ideal choices. Finally, limiting processed foods, added sugars, and excessive alcohol can help prevent weight gain and reduce the risk of chronic diseases that become more prevalent with age.'
    ],
    relatedPosts: [1, 2, 4, 6]
  },
  {
    id: 'exercise-women',
    title: 'Exercise for Women\'s Health',
    excerpt: 'Discover the benefits of regular exercise for women, including improved heart health, stronger bones, better mood, and reduced risk of chronic diseases.',
    image: '/images/blog/women-exercise.jpg',
    readTime: '6 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Fitness',
    content: [
      'Regular physical activity is essential for women\'s health, offering benefits that extend beyond weight management. Exercise helps prevent chronic conditions like heart disease, type 2 diabetes, and osteoporosis. It also boosts mood, reduces stress, and improves sleep quality. The endorphins released during physical activity act as natural painkillers and mood elevators, helping combat anxiety and depression.',
      'The World Health Organization recommends at least 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity aerobic activity weekly, plus muscle-strengthening exercises twice a week. Moderate activities include brisk walking, water aerobics, or cycling. Vigorous activities might include running, swimming laps, or high-intensity interval training (HIIT).',
      'Strength training is particularly important for women as it helps maintain muscle mass and bone density, which naturally decline with age. Weight-bearing exercises like squats, lunges, and push-ups are excellent choices. Balance and flexibility exercises, such as yoga or tai chi, can improve stability and reduce the risk of falls, especially important as women age.',
      'For women going through life transitions like pregnancy or menopause, exercise can provide significant benefits. During pregnancy, appropriate exercise helps manage weight gain, reduces back pain, and may lead to shorter labor. Post-menopause, regular physical activity helps maintain a healthy weight, reduces the risk of heart disease, and improves bone density. Always consult with your healthcare provider before starting any new exercise program, especially if you have any pre-existing health conditions or concerns.'
    ],
    relatedPosts: [2, 3, 5, 8]
  },
  {
    id: 'mental-health-matters',
    title: 'Women\'s Mental Health',
    excerpt: 'Understanding mental health challenges specific to women, recognizing symptoms, and learning effective strategies for maintaining emotional well-being.',
    image: '/images/blog/mental-health.jpg',
    readTime: '5 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Mental Health',
    content: [
      'Mental health is a critical aspect of overall well-being that deserves equal attention to physical health. Women face unique mental health challenges, being nearly twice as likely as men to experience depression and anxiety. Biological factors like hormonal fluctuations during menstruation, pregnancy, and menopause, combined with social and cultural pressures, contribute to this disparity. Common conditions affecting women include postpartum depression, which affects 1 in 7 new mothers, and anxiety disorders that often manifest in early adulthood.',
      'Recognizing the signs of mental health issues is crucial for early intervention. Symptoms may include persistent sadness or hopelessness, excessive worry or fear, significant changes in sleep patterns or appetite, loss of interest in previously enjoyed activities, difficulty concentrating, and physical symptoms like headaches or stomachaches. These symptoms can vary in intensity and duration, but if they persist for more than two weeks and interfere with daily functioning, professional help should be sought.',
      'Effective management of mental health involves a combination of professional treatment and self-care strategies. Cognitive-behavioral therapy (CBT) and other forms of talk therapy have proven highly effective. In some cases, medication may be recommended. Equally important are self-care practices: maintaining a regular sleep schedule, engaging in physical activity, practicing mindfulness or meditation, and nurturing social connections. Nutrition also plays a vital role, with a balanced diet rich in omega-3 fatty acids, whole grains, and fresh produce supporting brain health.',
      'Breaking the stigma around mental health is essential. Many women hesitate to seek help due to fear of judgment or the misconception that they should be able to handle everything on their own. It\'s important to remember that mental health conditions are medical issues, not personal failings. Support groups, both in-person and online, can provide valuable connections with others facing similar challenges. If you or someone you know is struggling, reaching out to a mental health professional is a courageous first step toward healing and well-being.'
    ],
    relatedPosts: [1, 4, 5, 9]
  },
  {
    id: 'contraceptive-options',
    title: 'Contraceptive Options',
    excerpt: 'A comprehensive overview of birth control methods, their effectiveness, and how to choose the right option based on your health and lifestyle needs.',
    image: '/images/blog/contraception.jpg',
    readTime: '7 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Family Planning',
    content: [
      'Navigating the world of contraception can be overwhelming, but understanding your options is the first step toward making an informed decision that aligns with your health needs and life goals. Modern contraceptive methods offer a range of choices, each with varying levels of effectiveness, side effects, and convenience. The right choice depends on multiple factors including your medical history, lifestyle, relationship status, and future family planning objectives. It\'s essential to have an open discussion with your healthcare provider to evaluate which method best suits your individual circumstances.',
      'Hormonal contraceptives, including combination pills, progestin-only pills, patches, vaginal rings, and injections, work by regulating hormones to prevent ovulation. These methods are highly effective when used correctly, with typical use effectiveness rates between 91-99%. However, they may cause side effects such as mood changes, weight fluctuations, and an increased risk of blood clots in some individuals. The birth control pill, one of the most common methods, requires daily attention, while options like the patch (changed weekly) or vaginal ring (changed monthly) offer less frequent maintenance.',
      'Long-acting reversible contraceptives (LARCs) include intrauterine devices (IUDs) and contraceptive implants. These methods are the most effective reversible options, with over 99% effectiveness rates. Hormonal IUDs can last 3-7 years, while copper IUDs provide protection for up to 10 years. The contraceptive implant, a small rod placed in the upper arm, works for up to 3 years. Though the initial insertion requires a healthcare provider, LARCs are low-maintenance and reversible at any time, making them ideal for women who want reliable, long-term pregnancy prevention without daily or monthly attention.',
      'Barrier methods, including male and female condoms, diaphragms, cervical caps, and contraceptive sponges, provide physical barriers to prevent pregnancy. These methods have the added benefit of protecting against sexually transmitted infections (STIs), a crucial consideration for those not in mutually monogamous relationships. Emergency contraception, available as pills or copper IUDs, can prevent pregnancy after unprotected sex but should not be used as a regular method. For those certain they don\'t want children in the future, permanent options like tubal ligation or vasectomy (for male partners) offer a one-time solution with high effectiveness rates.'
    ],
    relatedPosts: [0, 1, 2, 6]
  },
  {
    id: 'preventing-cervical-cancer',
    title: 'Cervical Cancer Prevention',
    excerpt: 'Essential information about cervical cancer prevention, including HPV vaccination, regular screenings, and early detection methods for better health outcomes.',
    image: '/images/blog/cervical-cancer.jpg',
    readTime: '6 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Women\'s Health',
    content: [
      'Cervical cancer, once one of the most common causes of cancer death for women, is now highly preventable and treatable when detected early. The primary cause is persistent infection with high-risk types of human papillomavirus (HPV), a common virus that affects nearly all sexually active individuals at some point. While most HPV infections clear on their own, persistent infections with high-risk types can lead to cervical cancer over time. Understanding the risk factors, which include early sexual activity, multiple sexual partners, smoking, a weakened immune system, and long-term use of oral contraceptives, can help women take proactive steps toward prevention.',
      'The HPV vaccine represents a groundbreaking advancement in cervical cancer prevention. Recommended for both girls and boys starting at age 11-12 (though it can be given as early as age 9), the vaccine is most effective when administered before potential exposure to HPV through sexual contact. The current vaccines protect against the HPV types that cause most cervical cancers and genital warts. Catch-up vaccination is recommended for everyone through age 26, and some adults aged 27-45 may benefit after discussing with their healthcare provider. It\'s important to note that while the vaccine significantly reduces risk, it doesn\'t eliminate the need for regular cervical cancer screening.',
      'Regular cervical cancer screening is a critical component of women\'s preventive healthcare. The Pap test (or Pap smear) has been instrumental in reducing cervical cancer rates by detecting precancerous changes in cervical cells. Current guidelines recommend that women begin Pap testing at age 21, with those aged 21-29 receiving a Pap test every three years. For women 30-65, options include a Pap test every three years, an HPV test every five years, or both tests together every five years. Women with certain risk factors, such as a history of cervical cancer or a weakened immune system, may need more frequent screening. These tests are typically quick and can be performed during a routine pelvic exam.',
      'Lifestyle modifications can significantly reduce cervical cancer risk. Smoking cessation is particularly important, as tobacco use weakens the immune system\'s ability to fight HPV infections. Practicing safe sex by using condoms and limiting sexual partners can reduce HPV exposure. Maintaining a healthy immune system through a balanced diet rich in fruits and vegetables, regular exercise, and adequate sleep supports the body\'s ability to clear HPV infections. Women should be aware of potential symptoms like abnormal vaginal bleeding, unusual discharge, pain during sex, or pelvic pain, though early cervical cancer often has no symptoms. Regular check-ups and open communication with your healthcare provider are essential for maintaining cervical health.'
    ],
    relatedPosts: [0, 1, 3, 5]
  },
  {
    id: 'managing-pcos',
    title: 'PCOS Management Guide',
    excerpt: 'Comprehensive information about Polycystic Ovary Syndrome, including symptoms, diagnosis, and effective treatment options for better quality of life.',
    image: '/images/blog/pcos.jpg',
    readTime: '8 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Women\'s Health',
    content: [
      'Polycystic Ovary Syndrome (PCOS) is one of the most common endocrine disorders affecting women of reproductive age, with prevalence estimates ranging from 5-15% globally. This complex condition is characterized by a combination of symptoms including irregular or absent menstrual periods, excess androgen levels (leading to hirsutism and acne), and polycystic ovaries visible on ultrasound. However, PCOS is a highly heterogeneous condition, meaning no two women experience it exactly the same way. The exact cause remains unclear, but research suggests a combination of genetic predisposition, insulin resistance, and low-grade inflammation play significant roles in its development.',
      'The symptoms of PCOS typically emerge during puberty or early adulthood and can have far-reaching effects on a woman\'s physical and emotional well-being. Beyond the hallmark symptoms, many women with PCOS experience weight gain, particularly around the abdomen, and have difficulty losing weight. Skin issues like acne, oily skin, and dark patches of skin (acanthosis nigricans) are common. Hair thinning or male-pattern baldness may occur alongside excessive hair growth on the face, chest, and back. Women with PCOS also face an increased risk of developing serious health conditions including type 2 diabetes, high blood pressure, high cholesterol, sleep apnea, and endometrial cancer. The emotional impact, including increased rates of anxiety and depression, should not be overlooked.',
      'Lifestyle modifications form the cornerstone of PCOS management. A balanced, nutrient-dense diet focusing on low-glycemic index foods, lean proteins, healthy fats, and plenty of fiber can help manage insulin resistance and support weight management. Regular physical activity, ideally a combination of aerobic exercise and strength training, improves insulin sensitivity and can help regulate menstrual cycles. Even modest weight loss of 5-10% of body weight can lead to significant improvements in symptoms and hormone levels. Stress management techniques such as yoga, meditation, or mindfulness can help lower cortisol levels, which may be contributing to hormonal imbalances. Adequate sleep is also crucial, as poor sleep can exacerbate insulin resistance and hunger hormones.',
      'Medical treatment for PCOS is tailored to the individual\'s symptoms and reproductive goals. For women not trying to conceive, hormonal birth control (pills, patches, or rings) can regulate menstrual cycles and reduce androgen-related symptoms. Anti-androgen medications may be prescribed for severe hirsutism or acne. Metformin, a medication that improves insulin sensitivity, is often used to manage insulin resistance. For women trying to conceive, fertility medications like letrozole or clomiphene citrate may be recommended to induce ovulation. In some cases, assisted reproductive technologies like in vitro fertilization (IVF) may be necessary. Regular monitoring for potential complications, such as diabetes and cardiovascular disease, is an important part of long-term PCOS management. With proper treatment and lifestyle adjustments, most women with PCOS can effectively manage their symptoms and reduce their risk of associated health problems.'
    ],
    relatedPosts: [1, 4, 5, 7]
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts
  const relatedPosts = post.relatedPosts.map(index => blogPosts[index]);

  return (
    <div className="bg-white">
      <PageBanner 
        title={post.title}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/#blog' },
          { name: post.title, href: `#` }
        ]}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-pink max-w-none">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
              {post.category}
            </span>
            <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center">
              <div className="flex-shrink-0">
                {post.authorImage ? (
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="h-10 w-10 rounded-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/services/placeholder.jpg';
                    }}
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {post.author}
                </p>
                <div className="text-sm text-gray-500">
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden mb-8 h-96 w-full">
            <img 
              className="w-full h-full object-cover" 
              src={post.image} 
              alt={post.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/services/placeholder.jpg';
              }}
            />
          </div>

          <div className="prose prose-pink prose-lg text-gray-500 max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {post.authorImage ? (
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="h-10 w-10 rounded-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/services/placeholder.jpg';
                    }}
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">{post.author}</p>
                <p className="text-base text-gray-500">Gynecologist</p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles - Show only first 3 */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((relatedPost, index) => (
                <Link 
                  key={index} 
                  to={`/blog/${relatedPost.id}`}
                  className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/services/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {relatedPost.content[0].length > 150 ? `${relatedPost.content[0].substring(0, 150)}...` : relatedPost.content[0]}
                    </p>
                    <div className="mt-3 text-sm text-gray-500">
                      {relatedPost.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
