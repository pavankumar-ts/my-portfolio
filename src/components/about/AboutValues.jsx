// components/about/AboutValues.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';

const AboutValues = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const values = [
        {
            id: '01',
            title: 'User-Centric Approach',
            description: 'Every line of code and design decision is made with the end-user in mind. I believe in creating intuitive, accessible, and enjoyable digital experiences that solve real problems.'
        },
        {
            id: '02',
            title: 'Clean & Maintainable Code',
            description: 'Writing clean, well-documented, and maintainable code is not just a practice but a responsibility. This ensures scalability and makes future updates and collaborations smoother.'
        },
        {
            id: '03',
            title: 'Continuous Learning',
            description: 'The tech world evolves rapidly, and I embrace this change. I consistently learn new technologies and best practices to deliver cutting-edge solutions to my clients.'
        },
        {
            id: '04',
            title: 'Effective Communication',
            description: 'Clear communication and transparency are crucial for project success. I maintain regular updates and ensure all stakeholders are aligned throughout the development process.'
        }
    ];

    return (
        <>
            <Head>
                <title>About Values | Pavan Kumar</title>
                <meta name="description" content="Discover the core values of Pavan Kumar, focusing on user-centric approach, clean code, continuous learning, and effective communication." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div ref={ref} className="container flex flex-col md:flex-row pt-32">
                <div className="md:w-[50%] pb-12 md:pb-0">
                    <div className="sticky top-32">
                        <h2 className="heading-xl whitespace-pre-line">
                            MY <br className='md:block hidden' />VALUES
                        </h2>
                    </div>
                </div>

                <div className="md:w-[50%] space-y-7 md:space-y-14">
                    {values.map((value, index) => (
                        <div
                            key={value.id}
                            className={`border-b border-primary/10 pb-7 md:pb-14 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start justify-between">
                                    <span className="text-sm font-medium text-primary/60">[{value.id}]</span>
                                    <div className="flex-1 ml-8">
                                        <h3 className="text-2xl font-semibold mb-4">
                                            {value.title}
                                        </h3>
                                        <p className="text-primary/60 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutValues;