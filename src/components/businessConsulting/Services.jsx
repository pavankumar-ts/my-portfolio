import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef(null);
  const serviceRefs = useRef([]);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const services = [
    {
      title: "Digital Transformation Strategy",
      description: "Develop a roadmap for digital evolution that aligns with your business goals and market demands.",
      details: "We assess your current systems, identify opportunities for innovation, and create a tailored strategy that prioritizes initiatives based on business impact and feasibility.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Web & App Development Roadmap",
      description: "Strategic planning for web applications and software development projects with clear milestones.",
      details: "Our development roadmaps provide structured guidance through ideation, design, development, testing, and deployment phases, ensuring alignment with business objectives at every step.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="12" y1="2" x2="12" y2="22"></line>
        </svg>
      )
    },
    {
      title: "No-Code & Low-Code Implementation",
      description: "Guidance on leveraging no-code and low-code platforms to accelerate development and reduce costs.",
      details: "We identify suitable no-code and low-code solutions for your business needs, creating implementation strategies that maximize efficiency while ensuring scalability and integration with existing systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="8" y1="12" x2="16" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="16"></line>
        </svg>
      )
    },
    {
      title: "Performance & SEO Optimization",
      description: "Enhance your digital presence with strategies to improve website performance and search engine visibility.",
      details: "Our comprehensive approach addresses technical performance optimization, content strategy, and search engine best practices to improve user experience, increase conversion rates, and drive organic traffic.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      title: "Tech Stack Selection & Guidance",
      description: "Expert advice on choosing the right technologies and frameworks for your specific business requirements.",
      details: "We evaluate your project needs against current and emerging technologies, providing unbiased recommendations that balance innovation, stability, cost-effectiveness, and long-term maintainability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      )
    },
    {
      title: "Mobile App Strategy",
      description: "Develop a comprehensive mobile strategy that enhances user engagement and extends your digital reach.",
      details: "We help determine the optimal approach for your mobile presence—whether native, hybrid, or progressive web apps—and create implementation plans that prioritize user experience and business value.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    }
  ];

  // Initialize refs array for each service section
  useEffect(() => {
    serviceRefs.current = Array(services.length)
      .fill()
      .map((_, i) => serviceRefs.current[i] || React.createRef());
  }, [services.length]);

  // Handle scroll to determine active service
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find the service that is currently in view
      let currentIndex = 0;
      serviceRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const element = ref.current;
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset;
          const elementBottom = bottom + window.pageYOffset;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentIndex = index;
          }
        }
      });
      
      setActiveService(currentIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on component mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to service when clicking on navigation
  const scrollToService = (index) => {
    if (serviceRefs.current[index] && serviceRefs.current[index].current) {
      serviceRefs.current[index].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section className="relative py-20 bg-bgColor" ref={containerRef}>
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="relative h-full">
              <div className="absolute right-0 top-0 bottom-0 w-px bg-textColor/5 h-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="mb-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-textColor inline-block relative">
            Services Offered
            
          </h2>
          <p className="text-xl text-textColor/80">
            Comprehensive consulting services tailored to your business needs and growth objectives.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto relative">
          {/* Left fixed sidebar navigation */}
          <div className="lg:w-1/3 lg:pr-8 lg:sticky lg:top-24 lg:self-start mb-8 lg:mb-0">
            <div className="hidden lg:block border-l-2 border-gray-200 dark:border-gray-700">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToService(index)}
                    className={`w-full text-left p-4 pl-6 mb-2 transition-all duration-300 relative flex items-center ${
                      activeService === index ? 'text-primary font-medium' : 'text-textColor/70 hover:text-textColor'
                    }`}
                  >
                    {activeService === index && (
                      <motion.div 
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary h-full"
                        layoutId="activeIndicator"
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                      ></motion.div>
                    )}

                    <div className={`mr-4 p-2 rounded-md ${
                      activeService === index 
                        ? 'bg-primary/10' 
                        : 'bg-gray-100 dark:bg-gray-800'
                    }`}>
                      {service.icon}
                    </div>
                    
                    <span>{service.title}</span>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile horizontal scrolling tabs */}
            <div className="lg:hidden overflow-x-auto pb-4 no-scrollbar">
              <div className="flex space-x-4 min-w-max">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToService(index)}
                    className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'bg-gray-100 dark:bg-gray-800 text-textColor/70'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right scrollable service content */}
          <div className="w-full lg:w-2/3">
            {services.map((service, index) => (
              <div 
                key={index}
                ref={serviceRefs.current[index]}
                className="mb-16 scroll-mt-24 relative"
              >
                <motion.div
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-all duration-500 ${
                    activeService === index ? 'ring-2 ring-primary/30 transform-gpu scale-100' : 'scale-95 opacity-50'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { 
                    opacity: activeService === index ? 1 : 0.5, 
                    y: 0,
                    scale: activeService === index ? 1 : 0.95
                  } : { opacity: 0, y: 50 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                >
                  <div className="mb-6 flex items-center">
                    <div className="p-3 bg-primary/10 rounded-xl mr-5">
                      <motion.div
                        animate={{ 
                          scale: activeService === index ? [1, 1.2, 1] : 1,
                          rotate: activeService === index ? [0, -10, 10, -5, 0] : 0
                        }}
                        transition={{ 
                          duration: 0.5,
                          times: [0, 0.2, 0.4, 0.6, 1],
                          ease: "easeInOut"
                        }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-bold text-textColor">{service.title}</h3>
                  </div>

                  <p className="text-lg text-textColor/90 mb-6 font-medium">{service.description}</p>
                  <p className="text-textColor/80 mb-8">{service.details}</p>
                  
                  <div className="flex flex-wrap gap-4 pt-5 border-t border-gray-200 dark:border-gray-700">
                    <motion.a
                      href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-6 py-3 bg-primary text-white rounded-lg inline-flex items-center font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                    
                    <motion.a
                      href={`#learn-more-about-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-textColor rounded-lg inline-flex items-center font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.a>
                  </div>
                </motion.div>

                {/* Progress indicator line */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px h-full bg-gray-200 dark:bg-gray-700 -ml-4">
                  {activeService === index && (
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-primary absolute left-1/2 transform -translate-x-1/2"
                      initial={{ top: 0 }}
                      animate={{ top: '50%' }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add some custom styling for removing scrollbars but keeping functionality */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;