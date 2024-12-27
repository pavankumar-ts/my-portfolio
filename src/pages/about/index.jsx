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
                <meta name="description" content="Expert developer specializing in modern web and mobile app solutions with React, Next.js, and React Native. Crafting high-performance digital experiences that deliver results." />
                <meta name="keywords" content="React developer, Next.js developer, mobile app developer, React Native developer, web application development, Android development, frontend developer, full stack developer, software engineer" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About | Pavan Kumar - Software Developer" />
                <meta property="og:description" content="Expert developer specializing in modern web and mobile app solutions with React, Next.js, and React Native. Crafting high-performance digital experiences that deliver results." />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About | Pavan Kumar - Software Developer" />
                <meta name="twitter:description" content="Expert developer specializing in modern web and mobile app solutions with React, Next.js, and React Native. Crafting high-performance digital experiences that deliver results." />
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