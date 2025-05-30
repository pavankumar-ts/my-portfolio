import React from 'react';
import Head from 'next/head';
import ServicesSection from '@/components/services/ServicesSection';
import ContactCTA from '@/components/common/ContactCTA';
import ProcessSection from '@/components/home/ProcessSection';
import TitleHeroSection from '@/components/common/TitleHeroSection';

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
                <meta property="og:image" content="https://www.pavankumar.co/og-image.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://www.pavankumar.co/services" />
                <meta property="og:site_name" content="Pavan Kumar - Web & Mobile Solutions" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Services | Pavan Kumar - Web & Mobile Solutions" />
                <meta name="twitter:description" content="Expert developer crafting modern web applications and mobile solutions. Specialized in React, Next.js, and React Native. Building scalable, high-performance digital experiences." />
                <meta name="twitter:image" content="https://www.pavankumar.co/og-image.png" />
                <meta name="twitter:creator" content="@pavankumarts26" />
                <meta name="twitter:site" content="@pavankumarts26" />
            </Head>
            <div className="container">
                <TitleHeroSection
                    title="WHAT'S"
                    title2="AVAILABLE?"
                />
            </div>
            <ServicesSection />
            <ProcessSection />
            <ContactCTA />

        </>
    );
};

export default ServicePage;