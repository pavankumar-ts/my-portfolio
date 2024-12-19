// pages/about.jsx
import AboutHero from '@/components/about/AboutHero';
import AboutSkills from '@/components/about/AboutSkills';
import AboutValues from '@/components/about/AboutValues';
import AboutExperience from '@/components/about/AboutExperience';
import Head from 'next/head';

const AboutPage = () => {
    return (
        <>
        <Head>
            <title>About</title>
        </Head>
            <AboutHero />
            <AboutSkills />
            <AboutValues />
            <AboutExperience />
        </>
    );
};

export default AboutPage;