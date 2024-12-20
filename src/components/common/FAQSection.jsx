import React, { useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';

const FAQSection = () => {
    const faqs = [
        {
            id: 1,
            question: "What types of projects do you handle?",
            answer: "I handle full-stack web development, UI/UX design projects, web applications, and e-commerce platforms. From simple websites to complex applications, I ensure end-to-end project delivery with high-quality results."
        },
        {
            id: 2,
            question: "How do you handle both design and development?",
            answer: "I manage end-to-end project delivery, collaborating with skilled UI/UX designers when needed. While I focus on development, I work closely with trusted freelance designers to ensure a cohesive design-to-development workflow. This allows me to deliver complete solutions while maintaining direct project oversight."
        },
        {
            id: 3,
            question: "Can you handle UI/UX design projects?",
            answer: "Yes! For design projects, I collaborate with experienced UI/UX designers in my network. I oversee the entire process to ensure quality and consistency, while maintaining clear communication with you throughout the project lifecycle."
        },
        {
            id: 4,
            question: "What's your project management approach?",
            answer: "I personally manage every project from start to finish. This includes direct client communication, coordinating with designers when needed, handling development, and ensuring everything meets quality standards. You'll always have a single point of contact - me."
        },
        {
            id: 5,
            question: "Do you work with existing designs or start from scratch?",
            answer: "I'm flexible! Whether you need a design from scratch, have existing designs to implement, or need improvements to current designs, I can help. For new designs, I collaborate with skilled designers while personally handling the implementation."
        },
        {
            id: 6,
            question: "How do you handle feedback and revisions?",
            answer: "I maintain open communication throughout the project and welcome feedback at every stage. Since I personally oversee both design and development, I can efficiently implement revisions and ensure changes are executed exactly as needed."
        },
        {
            id: 7,
            question: "What do you need to get started?",
            answer: "To begin, I need your project requirements, timeline expectations, and any brand guidelines or preferences you have. We'll have an initial consultation to discuss your vision and determine the best approach for your specific needs."
        }
    ];

    const [openId, setOpenId] = useState(1);

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="container flex flex-col md:flex-row">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <div className="sticky top-32">
                    <h1 className="heading-xl">
                        FAQ
                    </h1>
                </div>
            </div>

            <div className="md:w-[50%] space-y-6">
                {faqs.map((faq, index) => (
                    <AnimatedSection key={faq.id} delayMultiplier={index * 200}>
                        <div className="border-b border-primary/10">
                            <button
                                className="w-full py-6 flex items-center justify-between text-left"
                                onClick={() => toggleFaq(faq.id)}
                            >
                                <span className="text-xl font-medium">{faq.question}</span>
                                <span className="text-2xl">
                                    {openId === faq.id ? '−' : '+'}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${openId === faq.id ? 'max-h-screen' : 'max-h-0'}`}
                            >
                                <p className="text-primary/60 pb-8 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;