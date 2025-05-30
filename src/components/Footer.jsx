// components/common/Footer.jsx
import React from 'react';
import Link from 'next/link';
import { socialLinks } from '@/data/socialLinks';
import Image from 'next/image';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10">
      <div className="max-w-[1200px] mx-auto py-12 pb-1 md:pb-12 md:px-[3rem] px-[1rem]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-end items-center gap-4 md:gap-8">
            {/* Logo */}
            <Link href="/">
              <Image
                src={isDarkMode ? '/assets/logo_white.svg' : '/assets/logo.svg'}
                alt='Pavan'
                width={1000}
                height={1000}
                className='h-[30px] w-auto object-contain'
              />
            </Link>
            <div className="flex items-center h-full gap-4">
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
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 md:mt-0 text-primary/60">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;