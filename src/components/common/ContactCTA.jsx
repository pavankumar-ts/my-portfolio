// components/services/ServiceCTA.jsx
import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const ContactCTA = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="container py-32">
            <div className={`flex flex-col items-center text-center transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-2xl font-semibold mb-8">
                    Ready to start your project?
                </h2>
                <Link 
                    href="/contact"
                    className="px-8 py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                    Let's Talk
                    <span>→</span>
                </Link>
            </div>
        </div>
    );
};

export default ContactCTA;