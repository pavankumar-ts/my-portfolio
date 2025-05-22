import ContactSection from '@/components/campaign/webDev/ContactSection'
import CTASection from '@/components/campaign/webDev/CTASection'
import HeroSection from '@/components/campaign/webDev/HeroSection'
import Navbar from '@/components/campaign/webDev/Navbar'
import PricingSection from '@/components/campaign/webDev/PricingSection'
import ProcessSection from '@/components/campaign/webDev/ProcessSection'
import ProjectsSection from '@/components/campaign/webDev/ProjectsSection'
import ServicesSection from '@/components/campaign/webDev/ServicesSection'
import React from 'react'

const WebDev = () => {
    return (
        <>
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