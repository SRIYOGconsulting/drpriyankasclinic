import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { FaQuoteLeft, FaStar, FaTimes } from 'react-icons/fa';

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
      content: 'Dr. Priyanka provided excellent care during my treatment. Her expertise and compassionate approach made me feel comfortable throughout my recovery.',
      rating: 5,
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='
    },
    {
      id: 2,
      name: 'Sunita Gurung',
      role: 'Patient',
      content: 'The team at Dr. Priyanka\'s clinic is amazing. They were very professional and caring during my entire treatment process.',
      rating: 5,
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='
    },
    {
      id: 3,
      name: 'Amit Sharma',
      role: 'Patient',
      content: 'I highly recommend Dr. Priyanka for her exceptional medical care and friendly staff. The clinic is well-maintained and has a welcoming atmosphere.',
      rating: 4,
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='
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
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {textTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22%23f3f4f6%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%22%20font-size%3D%2230%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%20fill%3D%22%239ca3af%22%3E{testimonial.name.charAt(0)}%3C%2Ftext%3E%3C%2Fsvg%3E';
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800">{testimonial.name}</h3>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-pink-200 text-3xl absolute -top-2 -left-2" />
                  <p className="text-slate-700 italic pl-6 relative z-10">
                    {testimonial.content}
                  </p>
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
