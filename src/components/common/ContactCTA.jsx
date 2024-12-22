// components/services/ServiceCTA.jsx
import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Button from './Button';

const ContactCTA = () => {
  return (
    <div className="container py-32">
      <AnimatedSection className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Ready to start your project?
        </h2>
        <Button href='/contact' > Let's Talk</Button>
      </AnimatedSection>
    </div>
  );
};

export default ContactCTA;