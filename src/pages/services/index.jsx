import React from 'react';
import Head from 'next/head';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesSection from '@/components/services/ServicesSection';
import ContactCTA from '@/components/common/ContactCTA';
import ProcessSection from '@/components/home/ProcessSection';

const ServicePage = () => {
    return (
        <>
            <Head>
                <title>Services | Pavan Kumar - Web & Mobile Solutions</title>
                <meta name="description" content="Expert developer crafting modern web applications and mobile solutions. Specialized in React, Next.js, and React Native. Building scalable, high-performance digital experiences." />
                <meta name="keywords" content="React developer, Next.js development, mobile app development, React Native, web applications, frontend development, Android development, custom CMS solutions, modern web development, technical SEO, performance optimization, Firebase integration, Supabase" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Services | Pavan Kumar - Web & Mobile Solutions" />
                <meta property="og:description" content="Expert developer crafting modern web applications and mobile solutions. Specialized in React, Next.js, and React Native. Building scalable, high-performance digital experiences." />

                {/* Twitter */}
                <meta name="twitter:title" content="Services | Pavan Kumar - Web & Mobile Solutions" />
                <meta name="twitter:description" content="Expert developer crafting modern web applications and mobile solutions. Specialized in React, Next.js, and React Native. Building scalable, high-performance digital experiences." />
            </Head>
            <ServiceHero />
            <ServicesSection />
            <ProcessSection />
            <ContactCTA />

        </>
    );
};

export default ServicePage;