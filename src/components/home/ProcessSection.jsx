import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProcessSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const steps = [
        {
            id: '01',
            title: 'Initial Discussion',
            description: "Start with a detailed discussion about your project requirements, goals, timeline, and technical preferences to ensure we're aligned on the vision."
        },
        {
            id: '02',
            title: 'Planning & Strategy',
            description: 'Create a comprehensive development plan including technology stack selection, architecture design, and project milestones to ensure efficient delivery.'
        },
        {
            id: '03',
            title: 'Design & Development',
            description: 'Work closely with designers to create the interface while implementing the technical solution. Regular updates and iterative feedback ensure project success.'
        },
        {
            id: '04',
            title: 'Testing & Launch',
            description: 'Thorough testing and optimization before launch. Provide ongoing support and maintenance to keep your application running optimally.'
        }
    ];

    return (
        <div ref={ref} className="container flex flex-col md:flex-row">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <div className="sticky top-32">
                    <h1 className="heading-xl whitespace-pre-line">
                        HOW{'\n'}I WORK
                    </h1>
                </div>
            </div>

            <div className="md:w-[50%] space-y-24">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`border-b border-primary/10 pb-12 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start justify-between">
                                <span className="text-sm font-medium text-primary">
                                    [STEP-{step.id}]
                                </span>
                                <div className="flex-1 ml-8">
                                    <h2 className="text-2xl font-semibold mb-4">
                                        {step.title}
                                    </h2>
                                    <p className="text-primary/60 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessSection;