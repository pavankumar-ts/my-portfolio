// pages/contact.jsx
import { services } from '@/data/services';
import { socialLinks } from '@/data/socialLinks';
import React from 'react';
import Head from 'next/head';
import emailjs from 'emailjs-com';
import TitleHeroSection from '@/components/common/TitleHeroSection';

const ContactPage = () => {
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
        e.target.reset(); // Clear the input fields
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
        <title>Contact | Pavan Kumar - Let's Build Something Amazing</title>
        <meta name="description" content="Get in touch to transform your ideas into powerful web and mobile solutions. Expert in React, Next.js, and React Native development. Let's create exceptional digital experiences together." />
        <meta name="keywords" content="contact Pavan Kumar, hire React developer, Next.js developer, mobile app developer, web application development, React Native developer, frontend developer, custom web solutions, mobile app development, technical consultation" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | Pavan Kumar - Let's Build Something Amazing" />
        <meta property="og:description" content="Get in touch to transform your ideas into powerful web and mobile solutions. Expert in React, Next.js, and React Native development. Let's create exceptional digital experiences together." />

        {/* Twitter */}
        <meta name="twitter:title" content="Contact | Pavan Kumar - Let's Build Something Amazing" />
        <meta name="twitter:description" content="Get in touch to transform your ideas into powerful web and mobile solutions. Expert in React, Next.js, and React Native development. Let's create exceptional digital experiences together." />
      </Head>
      <div className="container ">
        {/* Hero Title */}
        <TitleHeroSection
          title="LET'S WORK"
          title2="TOGETHER"
        />
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