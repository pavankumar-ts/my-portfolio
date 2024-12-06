import Head from "next/head";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import NumbersSection from "@/components/home/NumbersSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pavan Kumar | Software Developer</title>
        <meta name="description" content="Software Developer specializing in React, Next.js, and modern web technologies. Creating responsive and performant web applications with a focus on user experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Pavan Kumar | Software Developer" />
        <meta property="og:description" content="Software Developer specializing in React, Next.js, and modern web technologies. Creating responsive and performant web applications with a focus on user experience." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pavan-kumar-ts.vercel.app/opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://pavan-kumar-ts.vercel.app/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pavan Kumar | Software Developer" />
        <meta name="twitter:description" content="Software Developer specializing in React, Next.js, and modern web technologies. Creating responsive and performant web applications with a focus on user experience." />
        <meta name="twitter:image" content="https://pavan-kumar-ts.vercel.app/opengraph-image.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyChooseSection />
        <ExperienceSection />
        <NumbersSection />
      </main>
    </>
  );
}