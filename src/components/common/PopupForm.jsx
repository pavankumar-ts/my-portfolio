import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';

const PopupForm = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Check if on excluded pages
    if (router.pathname === '/get-quote' || router.pathname === '/contact') {
      return;
    }

    // Check if user has already seen the popup
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (hasSeenPopup) {
      return;
    }

    emailjs.init("envDnIzt4XmWq_8T9");

    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowContent(true), 100);
      // Mark that user has seen the popup
      sessionStorage.setItem('hasSeenPopup', 'true');
    }, 20000);

    return () => clearTimeout(timer);
  }, [router.pathname]);

  const handleClose = () => {
    setIsClosing(true);
    setShowContent(false);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      setSubmitStatus(null);
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        'my_portfolio',
        'my_portfolio_template',
        formData
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Don't render if on excluded pages or popup shouldn't be visible
  if (!isVisible || router.pathname === '/get-quote' || router.pathname === '/contact') return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Backdrop with blur */}
      <div
        className={`absolute inset-0 backdrop-blur-sm transition-all duration-500
          ${showContent ? 'opacity-100' : 'opacity-0'}
          ${isClosing ? 'opacity-0' : ''}`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        onClick={handleClose}
      />

      {/* Form container */}
      <div
        className={`relative w-full max-w-md mx-4 p-8  shadow-2xl transform transition-all duration-500 ease-out
          ${showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-95'}
          ${isClosing ? 'translate-y-full opacity-0 scale-95' : ''}`}
        style={{
          backgroundColor: 'var(--bg-color)',
          border: '1px solid var(--border-color)',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 hover:rotate-90 transition-transform duration-300"
          style={{ color: 'var(--text-color)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: 'var(--primary-color)' }}
        >
          GET IN TOUCH
        </h2>

        <p
          className="mb-6"
          style={{ color: 'var(--text-color)' }}
        >
          Feel free to reach out to me. I'm always open to discuss new projects.
        </p>

        {submitStatus === 'success' ? (
          <div className="text-green-500 text-center py-8">
            Message sent successfully! Thank you for reaching out.
          </div>
        ) : submitStatus === 'error' ? (
          <div className="text-red-500 text-center py-8">
            Failed to send message. Please try again later.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {['name', 'email', 'phone'].map((field) => (
              <input
                key={field}
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                name={field}
                placeholder={`What is your ${field}?`}
                required
                className="w-full p-3"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-color)',
                }}
                value={formData[field]}
                onChange={handleChange}
              />
            ))}

            <textarea
              name="message"
              placeholder="Would you like to leave a message?"
              className="w-full p-3 h-24"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--border-color)',
                color: 'var(--text-color)',
              }}
              value={formData.message}
              onChange={handleChange}
            />

            <div className="flex items-center space-x-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-2 font-bold transition-transform duration-300 text-white bg-logoColor w-full
                  ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
              >
                {isLoading ? 'SENDING...' : 'SEND'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PopupForm;