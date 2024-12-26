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
            <title>About</title>
            <meta name="description" content="Learn more about me, my skills, values, and experience." />
            <meta name="keywords" content="about, skills, values, experience, portfolio" />
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