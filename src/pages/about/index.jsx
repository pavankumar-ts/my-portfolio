// pages/about.jsx
import AboutHero from '@/components/about/AboutHero';
import AboutSkills from '@/components/about/AboutSkills';
import AboutValues from '@/components/about/AboutValues';
import AboutExperience from '@/components/about/AboutExperience';
import Head from 'next/head';
import ContactCTA from '@/components/common/ContactCTA';

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About | Pavan Kumar - Software Developer</title>
                <meta name="description" content="Software Developer with over 2+ years of experience building scalable web and mobile applications. Specialized in React, Next.js, and React Native development with a focus on performance and user experience." />
                <meta name="keywords" content="about Pavan Kumar, software developer background, development experience, technical expertise, React developer portfolio, Next.js expert, React Native specialist, professional background, developer skills, software engineering values" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About | Pavan Kumar - Software Developer" />
                <meta property="og:description" content="Software Developer with over 2+ years of experience building scalable web and mobile applications. Specialized in React, Next.js, and React Native development with a focus on performance and user experience." />
                <meta property="og:image" content="https://www.pavankumar.co/opengraph-image.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://www.pavankumar.co/about" />
                <meta property="og:site_name" content="Pavan Kumar - Software Developer" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About | Pavan Kumar - Software Developer" />
                <meta name="twitter:description" content="Software Developer with over 2+ years of experience building scalable web and mobile applications. Specialized in React, Next.js, and React Native development with a focus on performance and user experience." />
                <meta name="twitter:image" content="https://www.pavankumar.co/opengraph-image.png" />
                <meta name="twitter:creator" content="@pavankumarts26" />
                <meta name="twitter:site" content="@pavankumarts26" />
            </Head>
            <AboutHero />
            <AboutSkills />
            <AboutValues />
            <AboutExperience />
            <ContactCTA />
        </>
    );
};

export default AboutPage;