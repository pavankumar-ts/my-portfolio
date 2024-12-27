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
  const siteUrl = "https://www.pavankumar.co/";
  const siteTitle = "Pavan Kumar | Software Developer & Digital Solutions Expert";
  const siteDescription = "Expert in software development, specializing in React, Next.js, mobile apps, and no-code solutions. Delivering high-performance web applications, CMS solutions, and business automation tools with modern technologies.";
  const keywords = "Software Developer, React Developer, Next.js Expert, Mobile App Developer, No-Code Development, CMS Solutions, Web Applications, Business Applications, Backend Integration, SEO Optimization, React Native, Firebase, Supabase, WordPress, Shopify, Technical Consulting, Software Engineer, Digital Solutions, Pavan, Pavan Kumar";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="title" content={siteTitle} />
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Pavan Kumar" />
        <meta name="keywords" content={keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={`${siteUrl}opengraph-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Pavan Kumar - Digital Solutions" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${siteUrl}opengraph-image.png`} />
        <meta name="twitter:creator" content="@pavankumarts26" />

        {/* Mobile App Capability Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Pavan Kumar - Digital Solutions" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Pavan Kumar - Digital Solutions" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional SEO Tags */}
        <link rel="canonical" href={siteUrl} />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

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