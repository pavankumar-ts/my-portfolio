// src/data/ai.js

// AI Services list for hero section (compact version)
export const aiServices = [
    { id: 1, name: 'AI Strategy', icon: '/assets/ai/icons/strategy.png' },
    { id: 2, name: 'Workflow Automation', icon: '/assets/ai/icons/automation.png' },
    { id: 3, name: 'AI Analytics', icon: '/assets/ai/icons/analytics.png' },
    { id: 4, name: 'AI Integration', icon: '/assets/ai/icons/integration.png' },
];

// AI Tools/Technologies
export const aiTools = [
    { id: 1, name: 'OpenAI', logo: '/assets/projects/technology-logos/nextjs.svg' },
    { id: 2, name: 'Zapier', logo: '/assets/projects/technology-logos/android_studio.svg' },
    { id: 3, name: 'Make.com', logo: '/assets/projects/technology-logos/firebase.svg' },
    { id: 4, name: 'LangChain', logo: '/assets/projects/technology-logos/framer.svg' },
    { id: 5, name: 'Streamlit', logo: '/assets/projects/technology-logos/wordpress.svg' },
    { id: 6, name: 'Retool', logo: '/assets/projects/technology-logos/react.svg' },
    { id: 7, name: 'Supabase', logo: '/assets/projects/technology-logos/tailwindcss.svg' },
    { id: 8, name: 'Claude', logo: '/assets/projects/technology-logos/shopify.svg' },
    { id: 9, name: 'Notion', logo: '/assets/projects/technology-logos/notion.svg' },
    { id: 10, name: 'Miro', logo: '/assets/projects/technology-logos/miro.svg' },
    { id: 11, name: 'Google Sheets', logo: '/assets/projects/technology-logos/google.svg' },
    { id: 12, name: 'ChatGPT', logo: '/assets/projects/technology-logos/openai.svg' },
    { id: 13, name: 'Gemini', logo: '/assets/projects/technology-logos/gemini.svg' },
    { id: 14, name: 'UiPath', logo: '/assets/projects/technology-logos/uipath.svg' },
    { id: 15, name: 'N8N', logo: '/assets/projects/technology-logos/n8n.svg' },
    { id: 16, name: 'Python', logo: '/assets/projects/technology-logos/python.svg' },
    { id: 17, name: 'Power BI', logo: '/assets/projects/technology-logos/powerbi.svg' },
    { id: 18, name: 'Google Data Studio', logo: '/assets/projects/technology-logos/datastudio.svg' },
    { id: 19, name: 'Hugging Face', logo: '/assets/projects/technology-logos/huggingface.svg' },
    { id: 20, name: 'Firebase', logo: '/assets/projects/technology-logos/firebase.svg' },
    { id: 21, name: 'Node.js', logo: '/assets/projects/technology-logos/nodejs.svg' },
];

// Detailed AI Services data for the services section
export const aiServicesDetailed = [
    {
        id: '01',
        title: 'AI Strategy & Consultation',
        tags: ['Planning', 'Assessment', 'Roadmap'],
        description: 'Help businesses understand how AI can benefit them and build a roadmap. I conduct AI readiness audits, identify high-potential use cases, and develop implementation strategies that align with your business goals and resources.',
        whatYouDo: ['AI readiness audit', 'Use case identification', 'ROI modeling'],
        toolIds: [9, 10, 11, 12, 13, 8], // Notion, Miro, Google Sheets, ChatGPT, Gemini, Claude
        toolsDescription: 'for mapping, planning, and brainstorming ideas'
    },
    {
        id: '02',
        title: 'Workflow Automation (RPA + AI)',
        tags: ['Process Optimization', 'Efficiency', 'Time-Saving'],
        description: 'Streamline repetitive business processes using automation and AI. I design and implement intelligent workflows that reduce manual effort, minimize errors, and free up your team to focus on higher-value activities.',
        useCases: ['Invoice processing', 'HR automation', 'Lead qualification'],
        toolIds: [3, 2, 14, 15, 1, 4], // Make.com, Zapier, UiPath, N8N, OpenAI, LangChain
        toolsDescription: 'for building automated workflows with AI capabilities'
    },
    {
        id: '03',
        title: 'AI-Powered Dashboards & Analytics',
        tags: ['Data Insights', 'Visualization', 'Prediction'],
        description: 'Turn data into insights using ML or predictive models. I create interactive dashboards and analytics solutions that help you understand trends, segment customers, predict outcomes, and make data-driven decisions.',
        useCases: ['Customer segmentation', 'Sales prediction', 'Churn analysis'],
        toolIds: [16, 7, 6, 5, 17, 18], // Python, Supabase, Retool, Streamlit, Power BI, Google Data Studio
        toolsDescription: 'for data analysis, visualization, and ML model creation'
    },
    {
        id: '04',
        title: 'AI Model Integration & APIs',
        tags: ['Implementation', 'Connection', 'Development'],
        description: 'Integrate AI into existing software or create microservices. I develop API wrappers, connectors, and custom integrations that bring AI capabilities to your existing applications and digital touchpoints.',
        useCases: ['AI-powered CRM', 'AI recommendations on e-commerce', 'Form summarization'],
        toolIds: [1, 8, 19, 20, 7, 21], // OpenAI, Claude, Hugging Face, Firebase, Supabase, Node.js
        toolsDescription: 'for API development and system integration'
    }
];

// Industry use cases
export const industryUseCases = [
    {
        id: '01',
        title: 'E-commerce & Retail',
        description: 'Elevate customer experience and streamline operations with AI-powered recommendation engines, inventory forecasting, and automated customer support.',
        examples: [
            'Product recommendation engine using customer behavior data',
            'Inventory forecasting to reduce stockouts and overstock',
            'Order processing automation with invoice analysis',
            'Customer support chatbot for common inquiries'
        ]
    },
    {
        id: '02',
        title: 'Professional Services',
        description: 'Transform client management, document processing, and knowledge work with intelligent automation tools.',
        examples: [
            'Client intake automation with smart form processing',
            'Document analysis and information extraction',
            'Meeting summary generation and action item tracking',
            'Knowledge base search enhancement'
        ]
    },
    {
        id: '03',
        title: 'Marketing & Media',
        description: 'Amplify content creation and campaign performance with AI-powered analytics and automation.',
        examples: [
            'Audience segmentation and campaign performance analysis',
            'Content topic research and generation assistance',
            'Social media sentiment analysis and trend detection',
            'Email campaign optimization and personalization'
        ]
    },
    {
        id: '04',
        title: 'Healthcare & Wellness',
        description: 'Improve patient care and operational efficiency with AI solutions that automate administrative tasks.',
        examples: [
            'Appointment scheduling automation and reminders',
            'Patient intake form processing',
            'Health trend analysis and visualization',
            'Medical document summarization'
        ]
    }
];

// AI development process steps
export const aiProcessSteps = [
    {
        id: '01',
        title: 'Discovery & Assessment',
        description: 'We begin with a thorough understanding of your business challenges and goals. I evaluate your current processes, data assets, and technical infrastructure to identify where AI can create the most value.',
        icon: '/assets/projects/technology-logos/nextjs.svg'
    },
    {
        id: '02',
        title: 'Solution Design',
        description: 'Based on our discovery findings, I design a practical AI solution tailored to your specific needs, selecting the right tools and technologies and defining clear success metrics.',
        icon: '/assets/projects/technology-logos/nextjs.svg'
    },
    {
        id: '03',
        title: 'Rapid Prototyping',
        description: 'I build a working prototype to validate the concept quickly, allowing us to test assumptions, gather early feedback, and make adjustments before investing in full development.',
        icon: '/assets/projects/technology-logos/nextjs.svg'
    },
    {
        id: '04',
        title: 'Implementation',
        description: 'With an approved prototype, I develop the complete solution and integrate it with your existing systems and workflows, including thorough testing and documentation.',
        icon: '/assets/projects/technology-logos/nextjs.svg'
    },
    {
        id: '05',
        title: 'Training & Handover',
        description: 'I provide comprehensive training for your team to ensure they understand how to use and maintain the new AI solution, empowering them to get the most value from your investment.',
        icon: '/assets/projects/technology-logos/nextjs.svg'
    }
];