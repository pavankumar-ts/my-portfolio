import React from 'react';
import { useRouter } from 'next/router';
import { socialLinks } from '@/data/socialLinks';
import Link from 'next/link';

const ThankYou = () => {
  const router = useRouter();

  return (
    <div 
    style={{height: 'calc(100vh - 210px)'}}
    className="flex flex-col justify-between bg-bgColor text-textColor">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-16 flex-grow">
        {/* Animated Headline */}
        <h1 className="text-6xl font-bold mb-6 text-center animate-fade-in">
          Thank You.
        </h1>

        {/* Subtext */}
        <p className="text-lg text-center max-w-2xl mb-8 text-primary/80">
          Your submission has been received. I’ll get back to you shortly. If you have any urgent queries, feel free to reach out to me directly via email or phone.
        </p>

        {/* Additional Info */}
        <div className="text-center text-primary/60 mb-12">
          <p>
            You can contact me at{' '}
            <a
              href="mailto:contact@pavankumar.co"
              className="text-primary underline hover:text-primary/80"
            >
              contact@pavankumar.co
            </a>{' '}
            or call me at{' '}
            <a
              href="tel:9483262200"
              className="text-primary underline hover:text-primary/80"
            >
              9483262200
            </a>{' '}
            if you need additional assistance.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 mb-12">
          {socialLinks.map(({ name, url, Icon }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 hover:text-primary transition-colors"
              aria-label={name}
              title={name}
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-primary text-secondary shadow-md border-primary border-[1px] hover:shadow-lg hover:bg-transparent hover:text-primary"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;