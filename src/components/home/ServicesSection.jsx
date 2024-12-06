import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            id: '01',
            title: 'Frontend Development',
            tags: ['React.js', 'Next.js', 'TailwindCSS'],
            description: 'Delivering high-performance web applications with modern React frameworks. Specializing in server-side rendering, responsive layouts, and maintainable component architecture to create exceptional user experiences.'
        },
        {
            id: '02',
            title: 'No-Code Development',
            tags: ['Webflow', 'Bubble', 'Framer'],
            description: 'Creating sophisticated web applications and websites using cutting-edge no-code platforms. Leveraging the power of visual development tools to rapidly build and deploy professional solutions while maintaining flexibility for future scaling.'
        },
        {
            id: '03',
            title: 'CMS Solutions',
            tags: ['WordPress', 'Shopify', 'Custom CMS'],
            description: 'Building and customizing content management systems and e-commerce platforms. Developing tailored solutions for businesses, from company websites to full-featured online stores, with focus on usability and scalability.'
        },
        {
            id: '04',
            title: 'Business Applications',
            tags: ['Zoho Creator', 'Airtable', 'Automation'],
            description: 'Developing custom business applications and workflow automation solutions. Creating efficient systems that streamline operations, manage data, and improve productivity using powerful low-code platforms and integration tools.'
        },
        {
            id: '05',
            title: 'Backend Integration',
            tags: ['Firebase', 'Supabase', 'REST APIs'],
            description: 'Implementing robust backend solutions with modern serverless technologies. Seamlessly integrating authentication, databases, and API services to create full-stack applications without traditional backend infrastructure.'
        },
        {
            id: '06',
            title: 'Performance & SEO',
            tags: ['Speed Optimization', 'Analytics', 'Technical SEO'],
            description: 'Optimizing web applications for peak performance and search engine visibility. Implementing technical SEO best practices, performance monitoring, and analytics to drive meaningful business results.'
        }
    ];

    return (
        <div className="container flex flex-col md:flex-row ">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <h1 className="heading-xl sticky top-32">
                    SERVICES
                </h1>
            </div>

            <div className="md:w-[50%] space-y-14">
                {services.map((service) => (
                    <div key={service.id} className="border-b border-primary/10 pb-14">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-medium w-12">[{service.id}]</span>
                                <h2 className="text-2xl font-semibold">{service.title}</h2>
                            </div>

                            <div className="flex gap-2 items-center ml-[72px]">
                                {service.tags.map((tag, index) => (
                                    <React.Fragment key={tag}>
                                        <span className="text-primary/60">{tag}</span>
                                        {index !== service.tags.length - 1 && (
                                            <span className="text-primary/60">•</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            <p className="text-primary/60 leading-relaxed ml-[72px]">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;