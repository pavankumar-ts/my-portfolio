// pages/contact.jsx
import { services } from '@/data/services';
import { socialLinks } from '@/data/socialLinks';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';

const ContactPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Head>
        <title>Contact | Your Name</title>
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
                    href="mailto:tspavan01@gmail.com"
                    className="text-primary/60 hover:text-primary block transition-colors"
                  >
                    tspavan01@gmail.com
                  </a>
                  <a
                    href="tel:+918197754321"
                    className="text-primary/60 hover:text-primary block transition-colors"
                  >
                    +91 81977 54321
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
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  placeholder="www.example.com"
                  className="bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <select
                className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors"
                defaultValue=""
              >
                <option value="" disabled>Select your services</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title} className="text-primary bg-secondary">
                    {service.title}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Project Description"
                rows={4}
                className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
              />

              <button
                type="submit"
                className="px-6 py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
              >
                Send it over
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