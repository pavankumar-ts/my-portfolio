// src/pages/ai-services.js
import Head from "next/head";
import AIServicesHero from "@/components/ai-services/AIServicesHero";
import AIServicesList from "@/components/ai-services/AIServicesList";
import AIServiceProcess from "@/components/ai-services/AIServiceProcess";
import AIUseCasesSection from "@/components/ai-services/AIUseCasesSection";
import FAQSection from "@/components/common/FAQSection";
import ContactCTA from "@/components/common/ContactCTA";
import { aiFaqs } from "@/data/aiFaqs";

export default function AIServices() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>AI Services | Pavan Kumar - Software Developer & Digital Solutions</title>
        <meta name="title" content="AI Services | Pavan Kumar - Software Developer & Digital Solutions" />
        <meta name="description" content="Explore cutting-edge AI solutions including AI-powered applications, ML integration, chatbots, and predictive analytics. Leverage artificial intelligence to transform your business with custom solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Pavan Kumar" />
        <meta name="keywords" content="AI Services, Machine Learning, Chatbots, Predictive Analytics, AI Integration, Natural Language Processing, Computer Vision, AI Applications, AI Solutions, Pavan Kumar, Software Developer" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pavankumar.co/ai-services" />
        <meta property="og:title" content="AI Services | Pavan Kumar - Software Developer & Digital Solutions" />
        <meta property="og:description" content="Explore cutting-edge AI solutions including AI-powered applications, ML integration, chatbots, and predictive analytics. Leverage artificial intelligence to transform your business with custom solutions." />
        <meta property="og:image" content="https://www.pavankumar.co/opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Pavan Kumar - Software Developer & Digital Solutions Expert" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.pavankumar.co/ai-services" />
        <meta name="twitter:title" content="AI Services | Pavan Kumar - Software Developer & Digital Solutions" />
        <meta name="twitter:description" content="Explore cutting-edge AI solutions including AI-powered applications, ML integration, chatbots, and predictive analytics. Leverage artificial intelligence to transform your business with custom solutions." />
        <meta name="twitter:image" content="https://www.pavankumar.co/opengraph-image.png" />
        <meta name="twitter:creator" content="@pavankumarts26" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.pavankumar.co/ai-services" />
      </Head>

      <main>
        <AIServicesHero />
        <AIServicesList />
        <AIUseCasesSection />
        <AIServiceProcess />
        <FAQSection 
        faqs={aiFaqs}
        />
        <ContactCTA />
      </main>
    </>
  );
}