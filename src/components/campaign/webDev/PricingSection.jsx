import React from 'react';

const PricingSection = () => {
    const pricingPlans = [
        {
            id: 1,
            name: 'Small Business Website',
            price: '₹25,000',
            period: '/one-time',
            description: 'Perfect for small businesses and startups',
            features: [
                'Professional Website',
                'Responsive Mobile Design',
                '5 Core Pages',
                'Basic SEO Setup',
                'Contact Form',
                '1 Month Support'
            ],
            popular: false
        },
        {
            id: 2,
            name: 'Business Website',
            price: '₹45,000',
            period: '/one-time',
            description: 'Ideal for growing businesses',
            features: [
                'Premium Website',
                'Responsive Web Design',
                '10 Custom Pages',
                'Advanced SEO Setup',
                'Contact & Booking Forms',
                'Social Media Integration',
                '3 Months Support'
            ],
            popular: true
        },
        {
            id: 3,
            name: 'Custom Web Development',
            price: 'Contact',
            period: '/for quote',
            description: 'Tailored solutions for unique needs',
            features: [
                'Custom Web Application',
                'Tailored to Your Requirements',
                'Backend Integration',
                'API Development',
                'Database Design',
                'User Authentication',
                '6 Months Support'
            ],
            popular: false
        }
    ];

    return (
        <section className="bg-bgColor">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-textColor">
                        Affordable Website Packages
                    </h2>
                    <p className="text-lg text-textColor/70 max-w-4xl mx-auto">
                        Transparent pricing with no hidden costs. Choose the web development package that best suits your business needs and budget.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative bg-bgColor border rounded-2xl p-8 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl ${plan.popular
                                ? 'border-logoColor shadow-logoColor/10'
                                : 'border-primary/10 hover:border-logoColor/30'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-logoColor text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-textColor mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-textColor/60 text-sm mb-4">
                                    {plan.description}
                                </p>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-textColor">
                                        {plan.price}
                                    </span>
                                    <span className="text-textColor/60 text-sm">
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-textColor/70 text-sm">
                                        <div className="w-5 h-5 bg-logoColor/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            <svg className="w-3 h-3 text-logoColor" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <a
                                href="#contact"
                                className={`block w-full text-center py-4 rounded-xl font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ${plan.popular
                                    ? 'bg-logoColor text-white hover:bg-logoColor/90'
                                    : 'bg-logoColor text-white hover:bg-logoColor/90'
                                    }`}
                            >
                                {plan.price === 'Contact' ? 'Get Quote' : 'Get Started'}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-16">
                    <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 text-textColor">
                            Need Something Different?
                        </h3>
                        <p className="text-textColor/70 mb-6">
                            Every project is unique. If none of our packages fit your specific requirements,
                            let's discuss a custom solution tailored just for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-logoColor text-white  font-medium duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                Discuss Custom Project
                            </a>
                            <a
                                href="#portfolio"
                                className="px-8 py-4 border border-logoColor text-logoColor font-medium duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                View Past Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;