import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { socialLinks } from '@/data/socialLinks';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

const ThankYou = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Thank You - Pavan Kumar</title>
        <meta name="robots" content="noindex, nofollow" />

      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ height: 'calc(100vh - 210px)' }}
        className="flex flex-col justify-between bg-bgColor text-textColor"
      >
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center px-6 py-16 flex-grow">
          {/* Animated Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold mb-6 text-center"
          >
            Thank You.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-center max-w-2xl mb-8 text-primary/80"
          >
            Your submission has been received. Expect a response within 24 hours. For urgent queries, please use the direct contact options below.
          </motion.p>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center text-primary/60 mb-12"
          >
            <p>
              For assistance, contact{' '}
              <a
                href="mailto:contact@pavankumar.co"
                className="text-primary underline hover:text-primary/80 transition-colors"
                aria-label="Send email"
              >
                contact@pavankumar.co
              </a>{' '}
              or call{' '}
              <a
                href="tel:9483262200"
                className="text-primary underline hover:text-primary/80 transition-colors"
                aria-label="Call phone number"
              >
                9483262200
              </a>{' '}
              {/* if you need additional assistance. */}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6 mb-12"
          >
            {socialLinks.map(({ name, url, Icon }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/60 hover:text-primary transition-colors"
                aria-label={name}
                title={name} // This adds the hover name
              >
                <Icon
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
              </Link>
            ))}
          </motion.div>

          {/* Back to Home Button */}
          <motion.div variants={itemVariants}>
            <Link
              href='/'
              className="px-6 py-3 bg-primary text-secondary shadow-md border-primary border-[1px] 
              hover:shadow-lg hover:bg-transparent hover:text-primary 
              transition-all duration-300 ease-in-out 
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Return to home page"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ThankYou;