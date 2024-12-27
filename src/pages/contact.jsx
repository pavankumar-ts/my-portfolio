// pages/contact.jsx
import { services } from '@/data/services';
import { socialLinks } from '@/data/socialLinks';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [buttonText, setButtonText] = React.useState('Send it over');
  const [isSending, setIsSending] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText('Sending...');

    emailjs.sendForm('my_portfolio', 'my_portfolio_template', e.target, 'envDnIzt4XmWq_8T9')
      .then((result) => {
          console.log(result.text);
          setButtonText('Sent');
      }, (error) => {
          console.log(error.text);
          setButtonText('Send it over');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <Head>
        <title>Contact | Pavan Kumar</title>
        <meta name="description" content="Get in touch with me for web development and design services." />
        <meta name="keywords" content="contact, web development, web design, portfolio" />
      </Head>
      <div className="container ">
        {/* Hero Title */}
        <div ref={ref} className="text-center mb-12">
          <h1 className={`text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tight leading-none transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            CONTACT ME
          </h1>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left Section - Contact Info */}
          <div className="md:w-[40%]">
            <div className="sticky top-32 space-y-8">
              <div className="border-l-2 border-primary/10 pl-6">
                <h3 className="text-xl font-semibold mb-4">Let's Talk</h3>
                <div className="space-y-2">
                  <a
                    href="mailto:contact@pavankumar.co"
                    className="text-primary/60 hover:text-primary block transition-colors"
                  >
                    contact@pavankumar.co
                  </a>
                  <a
                    href="tel:+919483262200"
                    className="text-primary/60 hover:text-primary block transition-colors"
                  >
                    +91 9483262200
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-primary/10 pl-6">
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-3 text-primary/60">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="md:w-[60%]">
            <form className="space-y-8" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name *"
                  className="bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address *"
                  className="bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  name="website"
                  placeholder="www.example.com"
                  className="bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <select
                name="service"
                className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors"
                defaultValue=""
                required
              >
                <option value="" disabled>Select your services *</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title} className="text-primary bg-secondary">
                    {service.title}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Project Description"
                rows={4}
                className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                
              />

              <button
                type="submit"
                className="px-6 py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
                disabled={isSending}
              >
                {buttonText}
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;