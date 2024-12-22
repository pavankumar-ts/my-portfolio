import React from 'react';
import Link from 'next/link';

const Button = ({ href, children, ...props }) => {
    return (
        <Link
            href={href}
            {...props}
            className="group px-4 md:px-6 py-2 md:py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-all hover:translate-x-1"
        >
            {children}
            <span className="arrow">→</span>
        </Link>
    );
};

export default Button;
