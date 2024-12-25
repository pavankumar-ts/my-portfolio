// data/projects.js

export const technologyLogos = [
    {
        id: 1,
        name: 'Next.js',
        url: '/assets/projects/technology-logos/nextjs.svg'
    },
    {
        id: 2,
        name: 'React',
        url: '/assets/projects/technology-logos/react.svg'
    },
    {
        id: 3,
        name: 'TailwindCSS',
        url: '/assets/projects/technology-logos/tailwindcss.svg'
    },
    {
        id: 4,
        name: 'JavaScript ES6+',
        url: '/assets/projects/technology-logos/javascript.svg'
    },
    {
        id: 5,
        name: 'CSS Modules',
        url: '/assets/projects/technology-logos/css.svg'
    },
    {
        id: 6,
        name: 'Drupal CMS',
        url: '/assets/projects/technology-logos/drupal.svg'
    },
];

export const projectCategories = [
    { id: 1, name: 'All Projects' },
    { id: 2, name: 'Web Application' },
    { id: 3, name: 'Frontend Development' },
    { id: 4, name: 'UI/UX Design' },
    { id: 5, name: 'E-Commerce' }
];

export const projects = [
    {
        id: 1,
        slug: 'bricstal-tech',
        title: 'Bricstal Tech',
        description: 'A comprehensive web application for an IT consulting firm, showcasing industry-specific solutions and innovative technology services.',
        category: [2, 5], // Referencing category IDs
        technologies: [1, 2, 3, 4, 5, 6],
        link: 'https://www.bricstaltech.com/',
        year: '2023',
        client: 'Bricstal Tech',
        mainImg: '/assets/projects/bricstal_tech.png',
        features: [
            'Server-side rendering with Next.js',
            'Responsive design implementation',
            'Image optimization for performance',
            'SEO optimization',
            'Modular CSS architecture',
            'Cross-browser compatibility'
        ],
        overview: 'Bricstal Tech required a modern web application to showcase their diverse range of IT consulting services. The project emphasizes innovation, efficiency, and industry-specific solutions while providing an engaging and informative user experience.',
        challenge: `The main challenges included:
            • Creating a fast, responsive website that effectively communicates complex services
            • Implementing a modular, maintainable codebase
            • Ensuring optimal performance across all devices
            • Developing reusable components for various industry solutions
            • Optimizing for search engines and user engagement`,
        solution: `The solution involved building a comprehensive web application using Next.js and React, with a focus on:
            • Implementing server-side rendering for improved performance
            • Creating modular, reusable components for different sections
            • Using CSS Modules for maintainable styling
            • Optimizing images and assets for faster load times
            • Developing industry-specific solution pages with detailed insights`,
        screenshots: [
            {
                url: '/assets/projects/bricstal_tech.png',
                caption: 'Industry-specific solutions with interactive components'
            },
            {
                url: '/assets/projects/bricstal_tech_phone.png',
                caption: 'About page with company insights and expertise'
            },
        ],
        results: [
            'Improved website loading speed by 40% through optimized assets and SSR',
            'Increased mobile user engagement with responsive design',
            'Enhanced SEO rankings through proper meta tags and semantic HTML',
            'Streamlined user experience with intuitive navigation',
            'Implemented reusable components reducing development time',
            'Achieved 95+ Google Lighthouse scores'
        ],
        testimonial: {
            text: 'Working with this team was a fantastic experience. They delivered beyond our expectations and were always available for support.',
            author: 'John Doe',
            role: 'CEO, Bricstal Tech'
        }
    },
    {
        id: 2,
        slug: "yuvi-builders",
        title: "Yuvi Builders",
        description: "An advanced web platform for Yuvi Builders, a real estate and construction firm, built with Next.js and integrated with Drupal CMS for content management. The platform includes dynamic product listing with features like filtering, sorting, and categorization to showcase their projects efficiently.",
        category: [2, 5], // Referencing category IDs
        technologies: [1, 2, 3, 4],
        link: "https://www.yuvibuilders.com/",
        year: "2024",
        client: "Yuvi Builders",
        mainImg: "/assets/projects/yuvibuilders.png",
        features: [
            "Dynamic product listing with filtering and sorting options for projects",
            "Integration with Drupal CMS for centralized content management",
            "Static Site Generation (SSG) for enhanced performance and SEO optimization",
            "Responsive design ensuring seamless user experience across all devices",
            "Optimized images and assets for faster load times",
            "Intuitive navigation for easy access to project details and categories"
        ],
        overview: "Yuvi Builders required a modern and feature-rich website to showcase their real estate and construction projects. The platform was developed using Next.js with a focus on performance and SEO, while Drupal CMS enabled easy content updates. A robust product listing feature with filtering and sorting ensures users can explore projects effortlessly.",
        challenge: "The main challenges included: \n        • Developing a fast-loading, SEO-optimized platform with dynamic product listing features, \n        • Integrating Drupal CMS for efficient content management and updates, \n        • Designing a responsive and user-friendly interface to enhance user engagement, \n        • Implementing filtering and sorting functionality for easy navigation of projects, \n        • Ensuring scalability to accommodate future additions and updates",
        solution: "The solution focused on leveraging Next.js and Drupal CMS to deliver: \n        • A high-performance platform with Static Site Generation (SSG) for speed and SEO, \n        • Dynamic project listing with advanced filtering, sorting, and categorization options, \n        • A visually appealing, responsive design built with Tailwind CSS, \n        • Drupal CMS integration for centralized content updates and management, \n        • Modular and reusable components for scalability and future enhancements",
        screenshots: [
            {
                url: "/assets/projects/yuvibuilders.png",
                caption: "Homepage showcasing Yuvi Builders’ projects and services"
            },
            {
                url: "/assets/projects/yuvibuilders_phone.png",
                caption: "Product listing page with filtering and sorting options"
            }
        ],
        results: [
            "Improved user experience with dynamic filtering and sorting for project exploration",
            "Faster page loads and better SEO performance using Static Site Generation",
            "Streamlined content management through Drupal CMS, enabling quick updates",
            "Enhanced user engagement with a responsive and intuitive interface",
            "Positive client feedback on functionality and aesthetics"
        ],
        testimonial: {
            text: "The new website has transformed how we showcase our projects. The filtering and sorting options make it so easy for our clients to find what they need. Great job!",
            author: "Prakash Shetty",
            role: "CEO, Yuvi Builders"
        }
    },
    {
        id: 3,
        slug: 'tuff-ppf',
        title: 'TUFF PPF',
        description: 'A feature-rich corporate website for TUFF PPF, a leading manufacturer of Paint Protection Films, showcasing their products, technical expertise, and commitment to quality.',
        category: [2, 4], // Referencing category IDs
        technologies: [1, 2, 3, 4, 5, 6],
        link: 'https://tuffppf.com/',
        year: '2024',
        client: 'TUFF PPF',
        mainImg: '/assets/projects/tuff_ppf.png',
        features: [
            'Customized design built with Elementor for flexible, user-friendly page layouts',
            'Advanced on-page SEO optimization using Yoast SEO',
            'Seamless navigation with mega menu integration',
            'Engaging product sliders created using Slider Revolution',
            'Interactive contact and inquiry forms with Contact Form 7',
            'Plugin-based optimizations for faster loading times'
        ],
        overview: 'TUFF PPF required a high-performance website to showcase their diverse range of paint protection films while enhancing online visibility. The project aimed to establish a strong online presence, ensure effortless user navigation, and provide detailed insights into their products.',
        challenge: `The main challenges included:
            • Creating a visually appealing and dynamic product showcase using Elementor
            • Ensuring on-page SEO optimization for better search engine rankings
            • Designing forms for seamless client interaction and lead generation
            • Achieving optimal performance and responsiveness across devices
            • Implementing structured navigation for easy access to information`,
        solution: `The solution was crafted using WordPress with Elementor for a custom design experience, focusing on:
            • Developing intuitive, visually appealing layouts with Elementor
            • Enhancing SEO visibility using Yoast SEO for optimized meta tags and structured content
            • Building custom contact and inquiry forms using Contact Form 7
            • Integrating sliders and animations via Slider Revolution for better engagement
            • Leveraging performance plugins to improve page speed and user experience`,
        screenshots: [
            {
                url: '/assets/projects/tuff_ppf.png',
                caption: 'Industry-specific solutions with interactive components'
            },
            {
                url: '/assets/projects/tuff_ppf_phone.png',
                caption: 'About page with company insights and expertise'
            },
        ],
        results: [
            'Improved SEO rankings and increased organic traffic by 45%',
            'Enhanced user engagement with optimized navigation and dynamic sliders',
            'Increased inquiries through well-designed contact forms',
            'Achieved a responsive design with consistent performance across devices',
            'Positive feedback from the client on the site\'s visual appeal and usability'
        ],
        testimonial: {
            text: 'The team delivered an exceptional website that perfectly aligns with our brand identity. It has significantly improved our online presence and customer engagement.',
            author: 'Jane Smith',
            role: 'Marketing Director, TUFF PPF'
        }
    },
    {
        id: 4,
        slug: 'bangalore-gastro-centre',
        title: 'Bangalore Gastro Centre',
        description: 'A comprehensive website for the Bangalore Gastro Centre, featuring information about the center, specialities, doctors, appointment booking, blogs, courses, media & events, awards, outreach programs, careers, and research. The team has access to edit the content via Drupal CMS, which reflects on the website.',
        category: [2, 5], // Referencing category IDs
        technologies: [1, 6], // Referencing technology IDs
        link: 'https://bangalore-gastro-centre.vercel.app/',
        year: '2024',
        client: 'Bangalore Gastro Centre',
        mainImg: '/assets/projects/bgc_phone.png',
        features: [
            'Comprehensive content management using Drupal CMS',
            'Information about specialities and list of doctors',
            'Appointment booking system',
            'Blogs and courses',
            'Media & events updates',
            'Awards and outreach programs',
            'Careers and research information',
            'API call integration for dynamic content updates'
        ],
        overview: 'The Bangalore Gastro Centre website provides detailed information about the center, its specialities, doctors, and various services. The project focuses on delivering a user-friendly experience with dynamic content management through Drupal CMS.',
        challenge: `The main challenges included:
            • Implementing a comprehensive content management system
            • Ensuring user-friendly navigation for various sections
            • Integrating an appointment booking system
            • Providing dynamic updates for blogs, media, and events
            • Maintaining a scalable and secure platform`,
        solution: `The solution was developed using Drupal CMS for content management, combined with React.js for the front-end, focusing on:
            • Creating a modular and scalable content management system
            • Building intuitive navigation for easy access to information
            • Integrating an appointment booking system with real-time updates
            • Developing sections for blogs, courses, media, and events
            • Ensuring secure and efficient API call integration for dynamic content`,
        screenshots: [
            {
                url: '/assets/projects/bgc.png',
                caption: 'Dashboard for managing content and updates'
            },
            {
                url: '/assets/projects/bgc_phone.png',
                caption: 'User-friendly interface for accessing information and booking appointments'
            }
        ],
        results: [
            'Efficient content management achieved with Drupal CMS, enabling faster updates',
            'Improved user experience with intuitive navigation and dynamic content',
            'Increased engagement through blogs, courses, and media updates',
            'Streamlined appointment booking process',
            'Positive feedback from clients on the platform’s usability and scalability'
        ],
        testimonial: {
            text: 'The platform has exceeded our expectations in managing content dynamically and ensuring a user-friendly experience. The use of Drupal CMS has made updates seamless and efficient.',
            author: 'Dr. Rahul Mehta',
            role: 'Director, Bangalore Gastro Centre'
        }
    },
    {
        id: 5,
        slug: 'harvis-infra',
        title: 'Harvis Infra',
        description: 'A dynamic web platform for Harvis Infra, designed to showcase their expertise in project development and infrastructure solutions through a modern and interactive interface built with Next.js.',
        category: [2, 5], // Referencing category IDs
        technologies: [1, 4, 3], // Referencing technology IDs
        link: 'https://www.harvisinfra.com/',
        year: '2024',
        client: 'Harvis Infra',
        mainImg: '/assets/projects/harvis.png',
        features: [
            'Server-Side Rendering (SSR) for improved performance and SEO',
            'Responsive design ensuring seamless user experience across devices',
            'Custom-built layouts tailored to highlight Harvis Infra’s services and projects',
            'Optimized image loading for faster performance using Next.js Image component',
            'Intuitive navigation structure for easy access to information',
            'Modern UI/UX design implemented with Tailwind CSS'
        ],
        overview: 'Harvis Infra required a modern website to highlight their project development capabilities and infrastructure expertise. Built using Next.js, the platform emphasizes performance, scalability, and user engagement while ensuring a sleek and professional design.',
        challenge: `The main challenges included:
            • Creating a fast-loading website optimized for performance and SEO
            • Designing a layout that effectively showcases their projects and services
            • Ensuring responsiveness and cross-browser compatibility
            • Implementing a modern and clean design that aligns with the company’s brand identity`,
        solution: `The solution was developed using Next.js for its robust performance and SEO capabilities, with a focus on:
            • Leveraging Server-Side Rendering (SSR) to ensure optimal loading times and SEO ranking
            • Designing responsive layouts with Tailwind CSS for a consistent user experience across devices
            • Using the Next.js Image component to optimize images for faster loading
            • Creating modular and reusable components for scalability and maintainability
            • Implementing a professional design to enhance user engagement`,
        screenshots: [
            {
                url: '/assets/projects/harvis.png',
                caption: 'Homepage showcasing Harvis Infra’s core services and expertise'
            },
            {
                url: '/assets/projects/harvis_phone.png',
                caption: 'Project portfolio page highlighting completed and ongoing infrastructure projects'
            }
        ],
        results: [
            'Improved website loading speed and SEO rankings with Next.js SSR',
            'Increased user engagement through responsive and intuitive design',
            'Streamlined project showcase with custom-built layouts',
            'Enhanced brand presence with a modern and professional website',
            'Positive feedback from stakeholders on the website’s functionality and design'
        ],
        testimonial: {
            text: 'The new website perfectly represents our brand and has significantly enhanced our online presence. The performance and design are top-notch.',
            author: 'Amit Khanna',
            role: 'Managing Director, Harvis Infra'
        }
    },
    {
        id: 6,
        slug: 'snip-dark-salon-spa',
        title: 'Snip Dark Salon Spa',
        description: 'A premium website for Snip Dark Salon Spa, showcasing their luxury spa services, ambiance, and expertise with a sleek design built on WordPress for easy content management and customization.',
        category: [4, 3], // Referencing category IDs
        technologies: [1, 2, 3, 4], // Referencing technology IDs
        link: 'https://snipdark.com/',
        year: '2024',
        client: 'Snip Dark Salon Spa',
        mainImg: '/assets/projects/snipdark_phone.png',
        features: [
            'Customized layouts using Elementor for flexible and visually stunning page designs',
            'Integrated WooCommerce for managing spa product sales and bookings',
            'Advanced SEO optimization using Yoast SEO for better visibility',
            'Responsive design for seamless browsing across mobile, tablet, and desktop devices',
            'Engaging gallery and service pages highlighting the spa\'s luxurious ambiance and offerings',
            'User-friendly CMS for easy updates and content management'
        ],
        overview: 'Snip Dark Salon Spa required a website that reflects its premium services and sophisticated ambiance. Built on WordPress, the platform is designed to enhance online presence, facilitate bookings, and promote spa products with a user-friendly interface and seamless functionality.',
        challenge: `The main challenges included:
            • Creating a visually stunning website that reflects the spa's luxury and sophistication
            • Ensuring easy navigation and responsive design for all devices
            • Integrating a booking system for spa services and an e-commerce solution for products
            • Optimizing the site for SEO to attract more organic traffic`,
        solution: `The solution was developed using WordPress with Elementor and WooCommerce, focusing on:
            • Crafting custom layouts with Elementor to align with the spa’s brand identity
            • Setting up WooCommerce for managing product sales and online bookings
            • Optimizing site content and metadata with Yoast SEO for higher search engine rankings
            • Ensuring responsive design and smooth navigation for an enhanced user experience
            • Integrating visually engaging elements to showcase the spa's ambiance and offerings`,
        screenshots: [
            {
                url: '/assets/projects/snipdark.png',
                caption: 'Homepage highlighting premium spa services and luxury ambiance'
            },
            {
                url: '/assets/projects/snipdark_phone.png',
                caption: 'Service page detailing various spa treatments with a booking option'
            }
        ],
        results: [
            'Increased website traffic and visibility with advanced SEO techniques',
            'Enhanced customer engagement through a visually appealing and responsive design',
            'Streamlined service bookings and product sales via WooCommerce',
            'Positive feedback from clients on the site’s elegance and functionality',
            'Improved brand presence as a luxury spa destination'
        ],
        testimonial: {
            text: 'The website beautifully captures our brand\'s essence. It has helped us attract more clients and manage bookings effortlessly. Fantastic work!',
            author: 'Priya Sharma',
            role: 'Owner, Snip Dark Salon Spa'
        }
    },
    {
        id: 7,
        slug: "neo-leather",
        title: "Neo Leather",
        description: "A modern web platform for Neo Leather, showcasing their personalized leather furniture offerings with a static, high-performance website developed using Next.js to ensure speed, scalability, and SEO optimization.",
        category: [4, 3],
        technologies: [1],
        link: "https://neoleather.in/",
        year: "2024",
        client: "Neo Leather",
        mainImg: "/assets/projects/neoleather.png",
        features: [
            "Static Site Generation (SSG) for faster load times and superior SEO performance",
            "Fully responsive design to provide seamless user experiences across all devices",
            "Tailored product showcase layout for highlighting personalized leather furniture",
            "Optimized images using Next.js Image component for enhanced performance",
            "Modular and reusable components for easy scalability and maintenance",
            "SEO-friendly structure with semantic HTML and meta tag optimization"
        ],
        overview: "Neo Leather needed a sleek and high-performance website to display their customized leather furniture offerings. Built with Next.js, the platform leverages Static Site Generation (SSG) to ensure rapid load times, superior SEO, and an engaging user experience.",
        challenge: "The main challenges included: \n        • Developing a high-performance, SEO-optimized platform to highlight premium leather furniture, \n        • Ensuring static page generation for faster page loads and efficient scalability, \n        • Designing a responsive interface that showcases the products elegantly across devices, \n        • Creating reusable components for consistency and scalability",
        solution: "The solution involved building the website with Next.js, focusing on: \n        • Utilizing Static Site Generation (SSG) to deliver lightning-fast load times and improve SEO, \n        • Designing a visually appealing, mobile-first layout with Tailwind CSS, \n        • Implementing optimized image handling using the Next.js Image component, \n        • Developing modular, reusable components for scalable future enhancements, \n        • Structuring the website to maximize search engine visibility and user engagement",
        screenshots: [
            {
                url: "/assets/projects/neoleather.png",
                caption: "Homepage featuring Neo Leather’s premium leather furniture and craftsmanship"
            },
            {
                url: "/assets/projects/neoleather_phone.png",
                caption: "Product showcase page with detailed descriptions and high-quality visuals"
            }
        ],
        results: [
            "Achieved faster load times with Next.js Static Site Generation, improving user retention",
            "Enhanced SEO rankings through optimized static content and meta data structure",
            "Delivered a seamless, responsive user experience across all devices",
            "Improved product visibility and brand identity with a sleek, modern design",
            "Positive feedback from customers on the site's performance and aesthetics"
        ],
        testimonial: {
            text: "Neo Leather’s website exceeded our expectations. It’s fast, visually stunning, and perfectly showcases our products. Our customers love it!",
            author: "Ravi Kumar",
            role: "Founder, Neo Leather"
        }
    },
    {
        id: 8,
        slug: "charge-infra",
        title: "Charge Infra",
        description: "A cutting-edge web platform for Charge Infra, designed to showcase their construction and infrastructure development services with a focus on performance and scalability using Next.js.",
        category: [2], // Referencing category IDs
        technologies: [1, 4, 3], // Referencing technology IDs
        link: "https://www.chargeinfra.com/",
        year: "2024",
        client: "Charge Infra",
        mainImg: "/assets/projects/chargeinfra.png",
        features: [
            "Static Site Generation (SSG) for faster load times and improved SEO",
            "Responsive and modern design for an optimal user experience across devices",
            "Tailored sections for highlighting services, projects, and client testimonials",
            "Optimized images using Next.js Image component for enhanced performance",
            "Intuitive navigation structure for seamless information access",
            "Modular and reusable components for easy maintenance and scalability"
        ],
        overview: "Charge Infra required a high-performance, scalable website to highlight their expertise in construction and infrastructure development. The platform was built with Next.js, leveraging Static Site Generation (SSG) for optimal performance and an engaging user experience.",
        challenge: "The main challenges included: \n        • Developing a fast and SEO-friendly website to showcase their services and projects, \n        • Ensuring seamless performance and responsiveness across devices, \n        • Designing a layout that effectively communicates their expertise and industry credibility, \n        • Creating reusable components for scalable future enhancements",
        solution: "The solution was developed using Next.js, focusing on: \n        • Implementing Static Site Generation (SSG) to deliver fast-loading pages and better SEO rankings, \n        • Crafting a responsive, mobile-first design with Tailwind CSS, \n        • Building modular and reusable components to streamline development and maintenance, \n        • Utilizing the Next.js Image component for optimized image loading, \n        • Structuring content to emphasize Charge Infra's expertise and project success stories",
        screenshots: [
            {
                url: "/assets/projects/chargeinfra.png",
                caption: "Homepage showcasing Charge Infra’s core services and mission"
            },
            {
                url: "/assets/projects/chargeinfra_phone.png",
                caption: "Projects page detailing completed and ongoing infrastructure projects"
            }
        ],
        results: [
            "Improved website performance with faster load times through SSG",
            "Enhanced user experience with a responsive and modern design",
            "Increased brand visibility and credibility with optimized SEO structure",
            "Streamlined project showcase with a clean and professional layout",
            "Positive feedback from stakeholders on the site’s design and functionality"
        ],
        testimonial: {
            text: "The new website perfectly represents our brand and has greatly improved our online presence. It’s fast, responsive, and beautifully designed!",
            author: "Arjun Nair",
            role: "CEO, Charge Infra"
        }
    },
    {
        id: 9,
        slug: "neo-heights",
        title: "Neo Heights",
        description: "A modern and high-performance website for Neo Heights, a construction company specializing in industrial and commercial projects. Built with Next.js and exported to static pages for speed and SEO optimization, with Drupal CMS for efficient content management.",
        category: [2], // Referencing category IDs
        technologies: [1, 4, 3], // Referencing technology IDs
        link: "https://neoheights.com/",
        year: "2024",
        client: "Neo Heights",
        mainImg: "/assets/projects/neoheights.png",
        features: [
            "Static Site Generation (SSG) for faster load times and superior SEO performance",
            "Integrated Drupal CMS for seamless content management and updates",
            "Responsive and modern design for a seamless user experience on all devices",
            "Tailored sections for showcasing projects, services, and company vision",
            "Optimized images using Next.js Image component for better performance",
            "User-friendly navigation structure with a focus on accessibility"
        ],
        overview: "Neo Heights needed a high-performance, scalable website to represent their expertise in industrial and commercial construction. The project utilized Next.js for development and static site generation, combined with Drupal CMS to allow easy management of content and updates.",
        challenge: "The main challenges included: \n        • Combining the performance benefits of static pages with dynamic content management via Drupal CMS, \n        • Designing a responsive, professional website to highlight Neo Heights' expertise, \n        • Optimizing page load speeds and ensuring high SEO performance, \n        • Creating a scalable structure for future enhancements and new content",
        solution: "The solution involved building the website using Next.js and Drupal CMS, focusing on: \n        • Leveraging Static Site Generation (SSG) for improved page speed and SEO, \n        • Integrating Drupal CMS for centralized and efficient content updates, \n        • Crafting a visually appealing and responsive design with Tailwind CSS, \n        • Optimizing images and assets for better performance, \n        • Structuring the content to highlight Neo Heights’ projects and industry credibility",
        screenshots: [
            {
                url: "/assets/projects/neoheights.png",
                caption: "Homepage featuring Neo Heights’ industrial and commercial construction expertise"
            },
            {
                url: "/assets/projects/neoheights_phone.png",
                caption: "Projects page showcasing completed and ongoing construction projects"
            }
        ],
        results: [
            "Enhanced website performance with static pages and optimized assets",
            "Improved SEO rankings with fast-loading static content and optimized metadata",
            "Streamlined content updates via Drupal CMS, enabling quick and efficient changes",
            "Positive client feedback on the design and functionality",
            "Increased user engagement and lead generation through a professional and user-friendly interface"
        ],
        testimonial: {
            text: "The new website has significantly improved our online presence. It’s fast, easy to manage, and perfectly represents our brand. Great work!",
            author: "Sandeep Rao",
            role: "Managing Director, Neo Heights"
        }
    },

];

export const getProjectsByCategory = (category) => {
    if (category === 'All Projects') return projects;
    return projects.filter(project => project.category.includes(category));
};

// New helper function for getting related projects
export const getRelatedProjects = (currentProject, limit = 3) => {
    let relatedProjects = projects
        .filter(project =>
            project.id !== currentProject.id &&
            Array.isArray(project.category) &&
            project.category.some(cat => currentProject.category.includes(cat))
        );

    if (relatedProjects.length === 0) {
        relatedProjects = projects.filter(project =>
            project.id !== currentProject.id &&
            Array.isArray(project.category) &&
            project.category.includes(currentProject.category[0])
        );
    }

    if (relatedProjects.length === 1) {
        return relatedProjects;
    }

    if (relatedProjects.length === 0) {
        relatedProjects = projects.filter(project => project.id !== currentProject.id);
    }

    return relatedProjects.slice(0, limit);
};

// Helper function to get technology details by ID
export const getTechnologyById = (id) => {
    return technologyLogos.find(tech => tech.id === id);
};