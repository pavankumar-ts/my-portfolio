// components/services/ServiceCTA.jsx
import React from 'react';
import Link from 'next/link';

const ContactCTA = () => {
    return (
        <div className="container py-32">
            <div className="flex flex-col items-center text-center">
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