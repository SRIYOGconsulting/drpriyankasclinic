import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';

// Blog data - in a real app, this would come from an API
export const blogPosts = [
  {
    id: 'understanding-hpv',
    title: 'Understanding HPV and Prevention',
    image: '/images/services/hpv-vaccination.jpg',
    readTime: '5 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Women\'s Health',
    content: [
      'Human Papillomavirus (HPV) is the most common sexually transmitted infection. Most sexually active people will get HPV at some point in their lives, though they may never know it. While most HPV infections go away on their own, some can lead to serious health problems including genital warts and certain cancers.',
      'The good news is that HPV vaccines can prevent the most common types of HPV that cause health problems. The vaccine is recommended for preteens (both boys and girls) at age 11 or 12, but can be given as early as age 9 and until age 45.',
      'Regular screening tests can help detect abnormal cell changes caused by HPV before they turn into cancer. For women, the Pap test (or Pap smear) and the HPV test are the best ways to find early signs of cervical cancer.',
      'Practicing safe sex and limiting your number of sexual partners can also help reduce your risk of getting HPV. However, because HPV is so common and often has no symptoms, vaccination and regular screening are the most effective prevention methods.'
    ],
    relatedPosts: [1, 2, 3, 4]
  },
  {
    id: 'regular-checkups',
    title: 'Importance of Regular Check-ups',
    image: '/images/services/family-planning-counseling.jpg',
    readTime: '4 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Preventive Care',
    content: [
      'Regular health check-ups are a crucial part of maintaining good health and preventing diseases. For women, these visits are especially important as they provide an opportunity to detect potential health issues early when they are most treatable.',
      'A typical well-woman exam may include a physical exam, breast exam, pelvic exam, Pap test, and various screenings based on your age and risk factors. These exams can help detect conditions like breast cancer, cervical cancer, and sexually transmitted infections early.',
      'Beyond physical health, regular check-ups allow you to discuss any concerns with your healthcare provider, including birth control options, menstrual problems, sexual health, and menopause symptoms. Your provider can also offer personalized advice on maintaining a healthy lifestyle.'
    ],
    relatedPosts: [0, 2, 5, 7]
  },
  {
    id: 'pregnancy-care-guide',
    title: 'Pregnancy Care Guide',
    image: '/images/services/high-risk-pregnancy.jpg',
    readTime: '7 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Pregnancy',
    content: [
      'Pregnancy is an exciting journey that brings many physical and emotional changes. Proper prenatal care is essential for the health of both mother and baby throughout this special time.',
      'During the first trimester, you\'ll have monthly visits to monitor your health and the baby\'s development. These visits will include physical exams, blood tests, and ultrasounds. You may experience morning sickness, fatigue, and breast tenderness during this time.',
      'The second trimester is often the most comfortable period of pregnancy. You\'ll start to feel the baby move, and your healthcare provider will monitor your weight gain, blood pressure, and the baby\'s growth. This is also when you can typically find out the baby\'s gender if you choose to.',
      'In the third trimester, your visits will become more frequent. You\'ll be monitored for signs of preterm labor and other potential complications. This is the time to prepare for labor and delivery, and to take childbirth education classes if you haven\'t already.'
    ],
    relatedPosts: [0, 1, 6, 8]
  },
  {
    id: 'breast-health-awareness',
    title: 'Breast Health: Early Detection Saves Lives',
    image: '/images/blog/breast-ultrasound.jpg',
    readTime: '6 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Women\'s Health',
    content: [
      'Breast health is a crucial aspect of women\'s overall well-being. Regular breast self-exams, clinical breast exams, and mammograms are essential tools for early detection of breast cancer, which significantly improves treatment outcomes.',
      'Women should perform monthly breast self-exams to become familiar with how their breasts normally look and feel. This makes it easier to notice any changes. The best time to do a self-exam is a few days after your period ends when your breasts are least likely to be tender or swollen.',
      'Clinical breast exams should be part of your regular check-up with your healthcare provider. Mammograms are recommended starting at age 40 for most women, but those with a family history of breast cancer may need to start earlier.',
      'Maintaining a healthy lifestyle can also help reduce your risk of breast cancer. This includes maintaining a healthy weight, exercising regularly, limiting alcohol, and not smoking. If you notice any changes in your breasts, such as lumps, pain, or nipple discharge, be sure to contact your healthcare provider right away.'
    ],
    relatedPosts: [0, 1, 5, 9]
  },
  {
    id: 'managing-menopause',
    title: 'Managing Menopause: Symptoms and Solutions',
    image: '/images/blog/menopause-care.jpg',
    readTime: '8 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Women\'s Health',
    content: [
      'Menopause is a natural biological process that marks the end of a woman\'s reproductive years, typically occurring in their late 40s to early 50s. While it\'s a normal part of aging, the symptoms can significantly impact quality of life.',
      'Common symptoms include hot flashes, night sweats, mood swings, sleep disturbances, vaginal dryness, and changes in libido. These symptoms are caused by fluctuating hormone levels, particularly estrogen and progesterone.',
      'There are several treatment options available to manage menopausal symptoms. Hormone replacement therapy (HRT) can be effective for many women, but it\'s not suitable for everyone. Non-hormonal treatments include lifestyle changes, such as regular exercise, a balanced diet rich in calcium and vitamin D, and stress reduction techniques.',
      'Alternative therapies like acupuncture, herbal supplements, and mind-body practices may also provide relief for some women. It\'s important to discuss all options with your healthcare provider to determine the best approach for your individual needs and medical history.'
    ],
    relatedPosts: [0, 1, 3, 7]
  },
  {
    id: 'nutrition-womens-health',
    title: 'Essential Nutrition for Women at Every Age',
    image: '/images/blog/nutrition.jpg',
    readTime: '7 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Nutrition',
    content: [
      'Proper nutrition is fundamental to women\'s health at every stage of life. Women have unique nutritional needs that change throughout their lifespan, from adolescence through pregnancy, breastfeeding, and menopause.',
      'Calcium and vitamin D are essential for maintaining strong bones and preventing osteoporosis. Good sources include dairy products, leafy greens, and fortified foods. Iron is another critical nutrient, especially for women of childbearing age who lose iron during menstruation. Iron-rich foods include lean meats, beans, and fortified cereals.',
      'Folate is particularly important for women who are pregnant or planning to become pregnant, as it helps prevent birth defects. Excellent sources include leafy greens, citrus fruits, and fortified grains. Omega-3 fatty acids, found in fatty fish, flaxseeds, and walnuts, support heart and brain health.',
      'A balanced diet that includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats is the best way to ensure you\'re getting all the nutrients you need. Remember to stay hydrated and limit processed foods, added sugars, and excessive caffeine and alcohol.'
    ],
    relatedPosts: [1, 2, 4, 6]
  },
  {
    id: 'exercise-women',
    title: 'The Importance of Exercise for Women\'s Health',
    image: '/images/blog/women-exercise.jpg',
    readTime: '6 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Fitness',
    content: [
      'Regular physical activity is one of the most important things women can do for their health. Exercise offers numerous benefits, including reducing the risk of chronic diseases, improving mental health, and maintaining a healthy weight.',
      'Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity each week, along with muscle-strengthening activities on two or more days per week. This can include activities like brisk walking, swimming, cycling, or dancing.',
      'For women, strength training is particularly important as it helps maintain bone density and muscle mass, which naturally decline with age. Exercises that improve balance and flexibility, such as yoga or tai chi, can also help prevent falls and maintain mobility as you age.',
      'It\'s never too late to start exercising, and any amount of physical activity is better than none. Find activities you enjoy and make them part of your regular routine. Remember to listen to your body and consult with your healthcare provider before starting any new exercise program, especially if you have any health concerns.'
    ],
    relatedPosts: [2, 3, 5, 8]
  },
  {
    id: 'mental-health-matters',
    title: 'Mental Health Awareness for Women',
    image: '/images/blog/mental-health.jpg',
    readTime: '5 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Mental Health',
    content: [
      'Mental health is just as important as physical health, yet it often doesn\'t receive the same attention. Women are nearly twice as likely as men to experience depression and anxiety, making mental health awareness crucial.',
      'Common mental health challenges for women include postpartum depression, anxiety disorders, and eating disorders. Hormonal changes during menstruation, pregnancy, and menopause can also affect mental health.',
      'It\'s important to recognize the signs of mental health issues, which may include persistent sadness, excessive worry, changes in sleep or appetite, loss of interest in activities, and difficulty concentrating. If you experience these symptoms for more than two weeks, it\'s important to seek help from a healthcare professional.',
      'Self-care practices like regular exercise, adequate sleep, healthy eating, and stress management techniques can support mental well-being. Don\'t hesitate to reach out to friends, family, or mental health professionals for support when needed. Remember, seeking help is a sign of strength, not weakness.'
    ],
    relatedPosts: [1, 4, 5, 9]
  },
  {
    id: 'contraceptive-options',
    title: 'Understanding Your Contraceptive Options',
    image: '/images/blog/contraception.jpg',
    readTime: '7 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Family Planning',
    content: [
      'Choosing the right contraceptive method is an important decision that depends on various factors including your health, lifestyle, and family planning goals. There are numerous options available, each with its own benefits and considerations.',
      'Hormonal methods include birth control pills, patches, vaginal rings, injections, and implants. These methods are highly effective when used correctly but may have side effects. Barrier methods like condoms and diaphragms offer protection against sexually transmitted infections (STIs) in addition to preventing pregnancy.',
      'Long-acting reversible contraceptives (LARCs), such as IUDs and implants, are over 99% effective and can last for several years. Permanent options like tubal ligation or vasectomy (for male partners) are available for those who are certain they don\'t want children in the future.',
      'It\'s important to discuss your options with your healthcare provider to determine the best method for your individual needs. Factors to consider include effectiveness, convenience, potential side effects, and whether you want to have children in the future.'
    ],
    relatedPosts: [0, 1, 2, 6]
  },
  {
    id: 'preventing-cervical-cancer',
    title: 'Preventing Cervical Cancer: What Every Woman Should Know',
    image: '/images/blog/cervical-cancer.jpg',
    readTime: '6 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Women\'s Health',
    content: [
      'Cervical cancer is one of the most preventable and treatable forms of cancer when detected early. The primary cause is persistent infection with high-risk types of human papillomavirus (HPV), a common sexually transmitted infection.',
      'The HPV vaccine is the most effective way to prevent cervical cancer. It\'s recommended for both girls and boys starting at age 11 or 12, but can be given as early as age 9 and up to age 45. The vaccine is most effective when given before becoming sexually active.',
      'Regular screening with Pap tests (or Pap smears) and HPV tests can detect precancerous changes in the cervix before they develop into cancer. Women should start getting Pap tests at age 21 and continue as recommended by their healthcare provider based on their age and risk factors.',
      'Other preventive measures include practicing safe sex, not smoking, and maintaining a healthy immune system. If you experience symptoms like abnormal vaginal bleeding, pain during sex, or unusual discharge, see your healthcare provider right away.'
    ],
    relatedPosts: [0, 1, 3, 5]
  },
  {
    id: 'managing-pcos',
    title: 'Understanding and Managing PCOS',
    image: '/images/blog/pcos.jpg',
    readTime: '8 min read',
    author: 'Dr. Priyanka Katwal',
    authorImage: '/images/home/drpriyanka.png',
    category: 'Women\'s Health',
    content: [
      'Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting 1 in 10 women of childbearing age. It\'s characterized by irregular periods, excess androgen levels, and polycystic ovaries, but symptoms can vary widely among women.',
      'Common symptoms include irregular or absent periods, excessive hair growth (hirsutism), acne, weight gain, and difficulty getting pregnant. Women with PCOS also have a higher risk of developing type 2 diabetes, high blood pressure, and heart disease.',
      'While there\'s no cure for PCOS, symptoms can be managed through lifestyle changes and medications. A healthy diet low in processed foods and regular exercise can help regulate menstrual cycles and improve insulin resistance. Weight loss of just 5-10% can significantly improve symptoms for overweight women.',
      'Treatment options vary depending on whether a woman is trying to get pregnant. Birth control pills can help regulate periods and reduce androgen levels, while fertility treatments may be needed for those trying to conceive. Metformin and other medications can help with insulin resistance. It\'s important to work closely with your healthcare provider to develop a personalized treatment plan.'
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

          <div className="relative rounded-xl overflow-hidden mb-8">
            <img 
              className="w-full h-auto object-cover" 
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
