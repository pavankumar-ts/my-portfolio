import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/pavankumar-ts' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pavan-kumar-ts/' },
    { name: 'Twitter', url: 'https://x.com/pavankumarts26' }
  ];

  return (
    <footer className="border-t border-primary/10">
      <div className="max-w-[1200px] mx-auto py-12 md:px-[3rem] px-[1rem] ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-2xl font-bold">Pavan</span>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/60 hover:text-primary transition-colors"
                >
                  {link.name}
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