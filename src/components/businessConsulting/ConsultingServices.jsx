import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ConsultingServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const services = [
    {
      title: "Digital Transformation",
      description: "Develop comprehensive strategies to modernize your business operations and leverage digital technologies for competitive advantage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
        </svg>
      )
    },
    {
      title: "Process Automation",
      description: "Identify opportunities to streamline workflows and implement automation solutions that save time and reduce operational costs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M12 12h.01" />
        </svg>
      )
    },
    {
      title: "Technology Selection",
      description: "Navigate the complex landscape of technology options with expert guidance on selecting the right tools and platforms for your specific needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: { 
      y: -10,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2
      }
    },
    hover: { 
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { 
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="relative overflow-hidden py-24 bg-bgColor">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-textColor rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-textColor rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-textColor">
            Expert Consulting Services
          </h2>
          <p className="text-xl text-textColor/80 leading-relaxed">
            Guiding businesses through digital transformation, process automation, and technology stack selection to achieve optimal results and sustainable growth.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden group"
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Background subtle hover effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl blur-xl group-hover:opacity-75 transition duration-300 opacity-0"></div>
              
              {/* Service content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-900 shadow-md mr-4"
                    variants={iconVariants}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-textColor">{service.title}</h3>
                </div>
                
                <motion.p 
                  className="text-textColor/80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.description}
                </motion.p>
                
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary font-medium hover:opacity-80 transition-opacity duration-300"
                  >
                    Learn more
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </motion.div>
              </div>
              
              {/* Subtle dot pattern */}
              <div className="absolute bottom-2 right-2 grid grid-cols-3 gap-1 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-textColor"
                    animate={{
                      scale: activeIndex === index ? [1, 1.5, 1] : 1,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingServices;