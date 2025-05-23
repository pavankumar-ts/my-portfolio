// src/components/home/ServicesSection.jsx
import { usePopup } from '@/contexts/PopupContext';
import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            id: '01',
            title: 'Business Website Development',
            tech: 'Custom CMS • Content Management • SEO-Ready',
            description: 'Professional business websites designed for performance and scalability. Perfect for companies seeking a professional online presence with easy content management.'
        },
        {
            id: '02',
            title: 'CMS Development',
            tech: 'WordPress • Webflow • Wix',
            description: 'Expert development using popular content management systems like WordPress, Webflow, or Wix. Get a powerful, user-friendly website that you can easily update yourself.'
        },
        {
            id: '03',
            title: 'eCommerce Website Development',
            tech: 'Shopify • Online Stores • Payment Integrations',
            description: 'Complete eCommerce website development for businesses looking to sell products online. Includes product catalog management, payment gateway integration, and more.'
        },
        {
            id: '04',
            title: 'Custom Web Application Development',
            tech: 'Custom Solutions • Modern Frameworks • Advanced Functionality',
            description: 'Tailored web applications built with modern technologies. Ideal for businesses requiring specific functionality beyond standard website templates.'
        },
        {
            id: '05',
            title: 'Landing Page Design',
            tech: 'Conversion-Focused • A/B Testing • Lead Generation',
            description: 'High-converting landing pages designed to capture leads and drive conversions. Perfect for marketing campaigns, product launches, and special promotions.'
        },
        {
            id: '06',
            title: 'Website Maintenance & SEO',
            tech: 'Updates • Security • Performance Optimization',
            description: 'Ongoing website maintenance and SEO services to keep your site secure, updated, and performing optimally. Regular backups, security monitoring, and search engine optimization.'
        }
    ];

    const { openPopup } = usePopup();

    return (
        <section className="" id='services' >
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="max-w-[700px] mx-auto text-4xl lg:text-5xl font-bold mb-4 text-textColor">
                        Professional Web Design & Development Services
                    </h2>
                    <p className="text-lg text-textColor/70 max-w-4xl mx-auto">
                        Complete web solutions for every business size. From simple business websites to complex eCommerce platforms – all delivered with professional quality at affordable prices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            onClick={() => openPopup('Get A Free Consultation')}
                            key={service.id}
                            className="bg-bgColor border cursor-pointer border-primary/10 rounded-lg p-8 shadow-sm transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg"
                        >
                            <div className="text-sm font-semibold text-logoColor mb-4">
                                [{service.id}]
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-textColor">
                                {service.title}
                            </h3>
                            <div className="text-sm text-textColor/60 mb-4">
                                {service.tech}
                            </div>
                            <p className="text-textColor/70 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;