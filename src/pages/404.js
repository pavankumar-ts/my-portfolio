import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404 - Page Not Found | Pavan Kumar</title>
                <meta name="description" content="The page you are looking for does not exist. Please return to the home page." />
            </Head>
            <div className="flex flex-col items-center justify-center min-h-[76vh] text-gray-900 dark:text-gray-100">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8 text-center">Oops! The page you are looking for does not exist.</p>
                <Link href="/" className="px-6 py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-all hover:translate-x-1">
                        Go Back Home
                </Link>
            </div>
        </>
    );
};

export default Custom404;