import ContactCTA from '@/components/common/ContactCTA'
import ProjectsSection from '@/components/projects/ProjectsSection'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>Projects | Pavan Kumar - Web & Mobile App Solutions Portfolio</title>
                <meta name="description" content="Explore innovative web and mobile app projects built with React, Next.js, and React Native. Featuring high-performance applications, responsive designs, and scalable solutions." />

                {/* Primary Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="React projects, Next.js portfolio, mobile app projects, web application portfolio, React Native projects, frontend development portfolio, Android development, custom web solutions, technical portfolio" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Projects | Pavan Kumar - Web & Mobile App Solutions Portfolio" />
                <meta property="og:description" content="Explore innovative web and mobile app projects built with React, Next.js, and React Native. Featuring high-performance applications, responsive designs, and scalable solutions." />

                {/* Twitter */}
                <meta name="twitter:title" content="Projects | Pavan Kumar - Web & Mobile App Solutions Portfolio" />
                <meta name="twitter:description" content="Explore innovative web and mobile app projects built with React, Next.js, and React Native. Featuring high-performance applications, responsive designs, and scalable solutions." />
            </Head>
            <ProjectsSection />
            <ContactCTA />
        </>
    )
}

export default index