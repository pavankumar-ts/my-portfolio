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
                <title>Services | Your Name</title>
                <meta name="description" content="Comprehensive web development and design services" />
                <meta name="keywords" content="services, web development, web design, portfolio" />
            </Head>
            <ServiceHero />
            <ServicesSection />
            <ProcessSection />
            <ContactCTA />

        </>
    );
};

export default ServicePage;