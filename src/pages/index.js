import Head from "next/head";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import NumbersSection from "@/components/home/NumbersSection";
import ProcessSection from "@/components/home/ProcessSection";
import FAQSection from "@/components/common/FAQSection";
import ContactCTA from "@/components/common/ContactCTA";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Pavan Kumar | Frontend Developer & Mobile App Developer</title>
        <meta name="title" content="Pavan Kumar | Frontend Developer & Mobile App Developer" />
        <meta name="description" content="Specialist in Frontend & Mobile App Development. Building high-performance web applications with React, Next.js, and native mobile apps with React Native, Android." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Pavan Kumar" />
        <meta name="keywords" content="Frontend Developer, Mobile App Developer, React Native Developer, Android Development, React Developer, Next.js, Web Development, Software Engineer, UI/UX, Web Applications, JavaScript Developer, Full Stack Developer" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pavankumar.co/" />
        <meta property="og:title" content="Pavan Kumar | Frontend & Mobile App Developer" />
        <meta property="og:description" content="Specialist in Frontend & Mobile App Development. Crafting high-performance web applications and native mobile apps with modern technologies like React, Next.js, React Native, and Android." />
        <meta property="og:image" content="https://www.pavankumar.co/opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Pavan Kumar Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.pavankumar.co/" />
        <meta name="twitter:title" content="Pavan Kumar | Frontend & Mobile App Developer" />
        <meta name="twitter:description" content="Specialist in Frontend & Mobile App Development. Crafting high-performance web applications and native mobile apps with modern technologies like React, Next.js, React Native, and Android." />
        <meta name="twitter:image" content="https://www.pavankumar.co/opengraph-image.png" />
        <meta name="twitter:creator" content="@pavankumarts26" />

        {/* Mobile App Capability Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Pavan Kumar" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Pavan Kumar" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color */}
        <meta name="theme-color" content="#fff" />
        <meta name="msapplication-TileColor" content="#fff" />
      </Head>

      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyChooseSection />
        <ExperienceSection />
        <NumbersSection />
        <ProcessSection />
        <FAQSection />
        <ContactCTA />
      </main>
    </>
  );
}