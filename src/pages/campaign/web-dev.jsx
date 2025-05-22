import ContactSection from '@/components/campaign/webDev/ContactSection'
import CTASection from '@/components/campaign/webDev/CTASection'
import HeroSection from '@/components/campaign/webDev/HeroSection'
import Navbar from '@/components/campaign/webDev/Navbar'
import PricingSection from '@/components/campaign/webDev/PricingSection'
import ProcessSection from '@/components/campaign/webDev/ProcessSection'
import ProjectsSection from '@/components/campaign/webDev/ProjectsSection'
import ServicesSection from '@/components/campaign/webDev/ServicesSection'
import Head from 'next/head'
import React from 'react'

const WebDev = () => {
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Professional Website Designer & Developer in Bengaluru | Pavan Kumar</title>
                <meta 
                    name="description" 
                    content="Top-rated website designer & developer in Bengaluru. Affordable, responsive web design, eCommerce, and custom web solutions for businesses. Get a free consultation today." 
                />
                
                {/* Prevent Indexing */}
                <meta name="robots" content="noindex, nofollow" />
                
                {/* Additional Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Pavan Kumar" />
                <meta name="keywords" content="website designer, web developer, responsive web design, eCommerce website, custom web development, Bengaluru web designer, affordable website design, business website" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Professional Website Designer & Developer in Bengaluru | Pavan Kumar" />
                <meta property="og:description" content="Top-rated website designer & developer in Bengaluru. Affordable, responsive web design, eCommerce, and custom web solutions for businesses." />
                <meta property="og:locale" content="en_US" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Professional Website Designer & Developer in Bengaluru | Pavan Kumar" />
                <meta name="twitter:description" content="Top-rated website designer & developer in Bengaluru. Affordable, responsive web design, eCommerce, and custom web solutions for businesses." />
                
                {/* Canonical URL - Update this to your actual landing page URL */}
                <link rel="canonical" href="https://pavankumar.co/web-development" />
                
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <ProcessSection />
            <PricingSection />
            <CTASection />
            <ContactSection />
        </>
    )
}

export default WebDev