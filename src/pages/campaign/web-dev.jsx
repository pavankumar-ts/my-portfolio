import ContactSection from '@/components/campaign/webDev/ContactSection'
import CTASection from '@/components/campaign/webDev/CTASection'
import HeroSection from '@/components/campaign/webDev/HeroSection'
import Navbar from '@/components/campaign/webDev/Navbar'
import PricingSection from '@/components/campaign/webDev/PricingSection'
import ProcessSection from '@/components/campaign/webDev/ProcessSection'
import ProjectsSection from '@/components/campaign/webDev/ProjectsSection'
import ServicesSection from '@/components/campaign/webDev/ServicesSection'
import { PopupProvider } from '@/contexts/PopupContext'
import Head from 'next/head'
import React from 'react'

const WebDev = () => {
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Website Designer & Developer in Bengaluru - Get Your Business Online | Pavan Kumar</title>
                <meta
                    name="description"
                    content="Expert website design & development in Bengaluru. Affordable solutions to get your business online - from simple websites to full eCommerce platforms. Free consultation today."
                />

                {/* Prevent Indexing - Remove this when ready to go live */}
                <meta name="robots" content="noindex, nofollow" />

                {/* Additional Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Pavan Kumar" />
                <meta name="keywords" content="website designer Bengaluru, web developer Bangalore, create business website, first website, affordable website design, small business website, eCommerce website development, get business online, website cost Bangalore, professional web design" />

                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Website Designer & Developer in Bengaluru - Get Your Business Online" />
                <meta property="og:description" content="Launch your business online with professional website design. Affordable packages. Free consultation for Bengaluru businesses." />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content="Pavan Kumar - Web Developer" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Get Your Business Online - Website Designer in Bengaluru" />
                <meta name="twitter:description" content="Professional websites for Bengaluru businesses. Simple process, affordable pricing, complete support. Book your free consultation today." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://pavankumar.co/web-development" />

                {/* Additional SEO Tags */}
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Bengaluru" />
                <meta name="geo.position" content="12.9716;77.5946" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PopupProvider>
                <Navbar />
                <HeroSection />
                <ServicesSection />
                <ProjectsSection />
                <ProcessSection />
                <PricingSection />
                <CTASection />
                <ContactSection />
            </PopupProvider>
        </>
    )
}

export default WebDev