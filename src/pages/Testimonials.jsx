import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { FaQuoteLeft, FaStar, FaTimes } from 'react-icons/fa';

// Function to generate placeholder avatar with initials
const getInitialsAvatar = (name, size = 100, bgColor = 'f3f4f6', textColor = '9ca3af') => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
  
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=${bgColor}&color=${textColor}&size=${size}`;
};

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    role: 'Patient',
    content: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const textTestimonials = [
    {
      id: 1,
      name: 'Ramesh Shrestha',
      role: 'Patient',
      content: 'Dr. Priyanka provided excellent care during my treatment. Her expertise and compassionate approach made me feel comfortable throughout my recovery. The clinic staff was always friendly and professional, and I never had to wait long for my appointments.',
      rating: 5,
      date: '2 weeks ago',
      treatment: 'General Checkup',
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
      icon: '👨‍💼'
    },
    {
      id: 2,
      name: 'Sunita Gurung',
      role: 'Patient',
      content: 'The team at Dr. Priyanka\'s clinic is amazing. They were very professional and caring during my entire treatment process. The doctor took the time to explain everything clearly and made sure all my concerns were addressed. I highly recommend this clinic!',
      rating: 5,
      date: '1 month ago',
      treatment: 'Prenatal Care',
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
      icon: '👩‍⚕️'
    },
    {
      id: 3,
      name: 'Amit Sharma',
      role: 'Patient',
      content: 'I highly recommend Dr. Priyanka for her exceptional medical care and friendly staff. The clinic is well-maintained and has a welcoming atmosphere. The doctor is very knowledgeable and takes the time to listen to all my concerns. The online appointment system is very convenient too!',
      rating: 4,
      date: '3 weeks ago',
      treatment: 'Diabetes Management',
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
      icon: '👨‍💼'
    },
    {
      id: 4,
      name: 'Anjali Rai',
      role: 'Patient',
      content: 'Outstanding experience! Dr. Priyanka is very thorough and takes the time to explain everything in detail. The clinic is clean and modern, and the staff is very friendly. I appreciate the follow-up calls to check on my progress after the visit.',
      rating: 5,
      date: '1 week ago',
      treatment: 'Pediatric Care',
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
      icon: '👩‍👧'
    },
    {
      id: 5,
      name: 'Rajesh Thapa',
      role: 'Patient',
      content: 'Professional and caring staff. The doctor was very patient and answered all my questions. The clinic has a very calming environment which helped ease my anxiety. The online prescription refill system is very convenient and saves a lot of time.',
      rating: 4,
      date: '2 days ago',
      treatment: 'Cardiac Consultation',
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
      icon: '👨‍⚕️'
    },
    {
      id: 6,
      name: 'Meera Karki',
      role: 'Patient',
      content: 'I\'ve been a patient here for years and I wouldn\'t go anywhere else. Dr. Priyanka and her team provide exceptional care. They remember personal details and make you feel valued. The clinic has extended hours which is very helpful for working professionals.',
      rating: 5,
      date: '5 days ago',
      treatment: 'Annual Physical',
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
      icon: '👵'
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.rating) newErrors.rating = 'Please select a rating';
    if (!formData.content.trim()) newErrors.content = 'Review content is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send the data to your backend here
      console.log('Submitting review:', formData);
      
      setSubmitSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          rating: 0,
          role: 'Patient',
          content: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating, interactive = false) => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const renderInteractiveStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => handleRatingClick(star)}
        className={`text-2xl focus:outline-none ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
        aria-label={`Rate ${star} out of 5`}
      >
        <FaStar className="w-6 h-6" />
      </button>
    ));
  };

  return (
    <div className="bg-white">
      <PageBanner 
        title="Patient Testimonials"
        description="Hear what our patients have to say about their experiences at our clinic."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Testimonials' }
        ]}
        bgImage="/assets/home/slider/1.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Text Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What Our Patients Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {textTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <div className="relative mb-6">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-gray-100 text-4xl -z-10" />
                  <p className="text-gray-600 relative z-10">"{testimonial.content}"</p>
                </div>
                
                {/* User Info */}
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center text-3xl overflow-hidden mr-4">
                      <img 
                        src={getInitialsAvatar(testimonial.name)} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = getInitialsAvatar(testimonial.name);
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {testimonial.rating}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800">{testimonial.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{testimonial.role}</span>
                      {testimonial.treatment && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{testimonial.treatment}</span>
                        </>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 flex items-center mt-1">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {testimonial.date}
                    </div>
                    <div className="mt-1 flex items-center text-xs text-pink-500">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Patient
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-pink-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">Share Your Experience</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We value your feedback! Share your experience with us and help others learn about the quality of care we provide.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 inline-flex items-center"
            aria-label="Leave a review"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
            Leave a Review
          </button>
        </section>
      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800">Share Your Experience</h3>
                <button 
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmitSuccess(false);
                    setErrors({});
                  }}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your review has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500`}
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500`}
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Rating *
                    </label>
                    <div className="flex items-center space-x-4">
                      <div className="flex">
                        {renderInteractiveStars()}
                      </div>
                      <span className="text-sm text-slate-500">
                        {formData.rating > 0 ? `${formData.rating} star${formData.rating > 1 ? 's' : ''}` : 'Select rating'}
                      </span>
                    </div>
                    {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating}</p>}
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">
                      You are a *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      disabled={isSubmitting}
                    >
                      <option value="Patient">Patient</option>
                      <option value="Family Member">Family Member</option>
                      <option value="Visitor">Visitor</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Review *
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      rows="4"
                      value={formData.content}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        errors.content ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500`}
                      placeholder="Share your experience with us..."
                      disabled={isSubmitting}
                    ></textarea>
                    {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full ${
                        isSubmitting 
                          ? 'bg-pink-400 cursor-not-allowed' 
                          : 'bg-pink-600 hover:bg-pink-700'
                      } text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit Review'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
