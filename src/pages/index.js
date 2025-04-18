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
        <title>Pavan Kumar | Software Developer & Digital Solutions Expert</title>
        <meta name="title" content="Pavan Kumar | Software Developer & Digital Solutions Expert" />
        <meta name="description" content="Expert in software development, specializing in React, Next.js, mobile apps, and no-code solutions. Delivering high-performance web applications, CMS solutions, and business automation tools with modern technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Pavan Kumar" />
        <meta name="keywords" content="Software Developer, React Developer, Next.js Expert, Mobile App Developer, No-Code Development, CMS Solutions, Web Applications, Business Applications, Backend Integration, SEO Optimization, React Native, Firebase, Supabase, WordPress, Shopify, Technical Consulting, Software Engineer, Digital Solutions, Pavan, Pavan Kumar" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pavankumar.co/" />
        <meta property="og:title" content="Pavan Kumar | Software Developer & Digital Solutions Expert" />
        <meta property="og:description" content="Expert in software development, specializing in React, Next.js, mobile apps, and no-code solutions. Delivering high-performance web applications, CMS solutions, and business automation tools with modern technologies." />
        <meta property="og:image" content="https://www.pavankumar.co/opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Pavan Kumar - Software Developer & Digital Solutions Expert" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.pavankumar.co/" />
        <meta name="twitter:title" content="Pavan Kumar | Software Developer & Digital Solutions Expert" />
        <meta name="twitter:description" content="Expert in software development, specializing in React, Next.js, mobile apps, and no-code solutions. Delivering high-performance web applications, CMS solutions, and business automation tools with modern technologies." />
        <meta name="twitter:image" content="https://www.pavankumar.co/opengraph-image.png" />
        <meta name="twitter:creator" content="@pavankumarts26" />

        {/* PWA Tags */}
        <meta name="application-name" content="Pavan Kumar" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Pavan Kumar" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="format-detection" content="telephone=no" />

        {/* Android Add to Home Screen Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-touch-icon.png" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Additional SEO Tags */}
        <link rel="canonical" href="https://www.pavankumar.co/" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
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