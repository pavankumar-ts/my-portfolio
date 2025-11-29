// data/projects.js
export const technologyLogos = [
    {
        id: 1,
        name: 'Next.js',
        url: '/assets/projects/technology-logos/nextjs.svg',
        isDark: true
    },
    {
        id: 2,
        name: 'Android Studio',
        url: '/assets/projects/technology-logos/android_studio.svg'
    },
    {
        id: 3,
        name: 'Firebase',
        url: '/assets/projects/technology-logos/firebase.svg'
    },
    {
        id: 4,
        name: 'Framer',
        url: '/assets/projects/technology-logos/framer.svg'
    },
    {
        id: 5,
        name: 'WordPress',
        url: '/assets/projects/technology-logos/wordpress.svg',
        isDark: true
    },
    {
        id: 6,
        name: 'React',
        url: '/assets/projects/technology-logos/react.svg'
    },
    {
        id: 7,
        name: 'TailwindCSS',
        url: '/assets/projects/technology-logos/tailwindcss.svg'
    },
    {
        id: 8,
        name: 'Shopify',
        url: '/assets/projects/technology-logos/shopify.svg'
    },
    {
        id: 9,
        name: 'Elementor',
        url: '/assets/projects/technology-logos/elementor.svg'
    },
    {
        id: 10,
        name: 'Java',
        url: '/assets/projects/technology-logos/java.svg'
    },
    {
        id: 11,
        name: 'JavaScript',
        url: '/assets/projects/technology-logos/javascript.svg'
    },
    {
        id: 12,
        name: 'Drupal',
        url: '/assets/projects/technology-logos/drupal.svg'
    },
    {
        id: 13,
        name: 'Supabase',
        url: '/assets/projects/technology-logos/supabase.svg'
    },
    {
        id: 14,
        name: 'CSS',
        url: '/assets/projects/technology-logos/css.svg'
    },
    {
        id: 15,
        name: 'Webflow',
        url: '/assets/projects/technology-logos/webflow.svg'
    }
];

export const projectCategories = [
    { id: 1, name: 'All Projects' },
    { id: 2, name: 'Business Websites' },
    { id: 3, name: 'Web Application' },
    { id: 4, name: 'Mobile App' },
];

export const projects = [
    {
        id: 1,
        slug: 'bangalore-gastro-centre',
        home: true,
        title: 'Bangalore Gastro Centre',
        description: 'A comprehensive website for the Bangalore Gastro Centre, featuring information about the center, specialities, doctors, appointment booking, blogs, courses, media & events, awards, outreach programs, careers, and research. The team has access to edit the content via Drupal CMS, which reflects on the website.',
        category: [3],
        technologies: [1, 6, 12, 14],
        link: 'https://bangaloregastrocentre.com/',
        year: '2024',
        client: 'Bangalore Gastro Centre',
        mainImg: '/assets/projects/bgc_phone.webp',
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
                url: '/assets/projects/bgc.webp',
                caption: 'Dashboard for managing content and updates'
            },
            {
                url: '/assets/projects/bgc_phone.webp',
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
        id: 2,
        slug: "yuvi-builders",
        home: true,
        title: "Yuvi Builders",
        description: "An advanced web platform for Yuvi Builders, a real estate and construction firm, built with Next.js and integrated with Drupal CMS for content management. The platform includes dynamic product listing with features like filtering, sorting, and categorization to showcase their projects efficiently.",
        category: [3],
        technologies: [1, 6, 12, 14],
        link: "https://www.yuvibuilders.com/",
        year: "2024",
        client: "Yuvi Builders",
        mainImg: "/assets/projects/yuvibuilders.webp",
        features: [
            "Dynamic product listing with filtering and sorting options for projects",
            "Integration with Drupal CMS for centralized content management",
            "Responsive design ensuring seamless user experience across all devices",
            "Optimized images and assets for faster load times",
            "Intuitive navigation for easy access to project details and categories",
            "Interactive and modular architecture for future scalability"
        ],
        overview: "Yuvi Builders required a modern and feature-rich website to showcase their real estate and construction projects. The platform was developed using Next.js with a focus on dynamic content delivery and SEO optimization. Drupal CMS enabled seamless content updates, while robust product listing features with filtering and sorting ensured effortless project exploration for users.",
        challenge: `The main challenges included: 
        • Developing a fast-loading, SEO-optimized platform with dynamic product listing features,
        • Integrating Drupal CMS for efficient content management and updates,
        • Designing a responsive and user-friendly interface to enhance user engagement,
        • Implementing filtering and sorting functionality for easy navigation of projects,
        • Ensuring scalability to accommodate future additions and updates`,
        solution: `The solution focused on leveraging Next.js and Drupal CMS to deliver:
        • A high-performance platform for dynamic content delivery and SEO optimization,
        • Dynamic project listing with advanced filtering, sorting, and categorization options,
        • Drupal CMS integration for centralized content updates and management,
        • Modular and reusable components for scalability and future enhancements`,
        screenshots: [
            {
                url: "/assets/projects/yuvibuilders.webp",
                caption: "Homepage showcasing Yuvi Builders’ projects and services"
            },
            {
                url: "/assets/projects/yuvibuilders_phone.webp",
                caption: "Product listing page with filtering and sorting options"
            }
        ],
        results: [
            "Improved user experience with dynamic filtering and sorting for project exploration",
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
        category: [2],
        technologies: [5, 9, 14],
        link: 'https://tuffppf.com/',
        year: '2024',
        client: 'TUFF PPF',
        mainImg: '/assets/projects/tuff_ppf.webp',
        features: [
            'Customized design built with Elementor for flexible, user-friendly page layouts',
            'Advanced on-page SEO optimization using Yoast SEO',
            'Seamless navigation with mega menu integration',
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
                url: '/assets/projects/tuff_ppf.webp',
                caption: 'Industry-specific solutions with interactive components'
            },
            {
                url: '/assets/projects/tuff_ppf_phone.webp',
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
        id: 16,
        slug: 'samagra-interiors',
        title: 'Samagra Interiors',
        description: 'A comprehensive web platform for Samagra Interiors, a premium interior design firm specializing in residential and commercial spaces across Bangalore and Kerala. The website showcases their design philosophy of creating aesthetically pleasing environments with affordable, package-based solutions.',
        category: [2],
        technologies: [1, 6, 7],
        link: 'https://www.samagrainteriors.com/',
        year: '2025',
        client: 'Samagra Interiors',
        mainImg: '/assets/projects/samagra_interiors_phone.webp',
        features: [
            'Interactive design portfolio showcasing residential and commercial projects',
            'Package-based service offerings with transparent pricing',
            'Custom inquiry forms for personalized design consultations',
            'Design philosophy and process showcase',
            'Before-and-after project galleries',
            'Service area mapping and local expertise highlighting'
        ],
        overview: 'Samagra Interiors required a sophisticated web platform to showcase their expertise in transforming interior spaces across Bangalore and Kerala. The website emphasizes their core philosophy that "designing is an art of transforming building interiors to aesthetically pleasing environments" while highlighting their affordable, package-based approach to interior design.',
        challenge: `The main challenges included:
        • Creating a platform that effectively communicates their design philosophy and artistic approach
        • Showcasing diverse projects across two major regions (Bangalore and Kerala)
        • Implementing a clear package-based service structure for easy client understanding
        • Balancing aesthetic appeal with functional information presentation
        • Highlighting their expertise in both residential and commercial interior spaces
        • Creating seamless inquiry and consultation booking systems`,
        solution: `The solution was developed using WordPress with Elementor for flexible design capabilities, focusing on:
        • Custom portfolio layouts showcasing the harmony and balance in their design projects
        • Package presentation system with clear pricing and service inclusions
        • Regional service area highlighting with location-specific project showcases
        • Streamlined consultation booking system with personalized inquiry forms
        • SEO optimization for regional searches in Bangalore and Kerala markets`,
        screenshots: [
            {
                url: '/assets/projects/samagra_interiors.webp',
                caption: 'Homepage featuring design philosophy and premium interior transformation showcases'
            },
            {
                url: '/assets/projects/samagra_interiors_phone.webp',
                caption: 'Mobile view of service packages and consultation booking system'
            },
        ],
        results: [
            'Enhanced online presence across Bangalore and Kerala markets',
            'Streamlined client inquiry process through package-based service presentation',
            'Increased consultation bookings with clear service offerings',
            'Improved project showcase leading to higher client engagement',
            'Better regional SEO performance for interior design searches',
            'Positive client feedback on the clarity of design process and pricing'
        ],
        testimonial: {
            text: 'The new website perfectly captures our design philosophy and has made it much easier for clients to understand our services. The package-based presentation has significantly improved our consultation booking rate.',
            author: 'Design Team',
            role: 'Samagra Interiors'
        }
    },
    {
        id: 1,
        home: true,
        slug: 'bricstal-tech',
        title: 'Bricstal Tech',
        description: 'A comprehensive web application for an IT consulting firm, showcasing industry-specific solutions and innovative technology services.',
        category: [2],
        technologies: [1, 6, 14],
        link: 'https://www.bricstaltech.com/',
        year: '2023',
        client: 'Bricstal Tech',
        mainImg: '/assets/projects/bricstal_tech.webp',
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
                url: '/assets/projects/bricstal_tech.webp',
                caption: 'Industry-specific solutions with interactive components'
            },
            {
                url: '/assets/projects/bricstal_tech_phone.webp',
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
        id: 5,
        slug: 'harvis-infra',
        title: 'Harvis Infra',
        description: 'A dynamic web platform for Harvis Infra, designed to showcase their expertise in project development and infrastructure solutions through a modern and interactive interface built with Next.js.',
        category: [2],
        technologies: [1, 6, 14],
        link: 'https://www.harvisinfra.com/',
        year: '2024',
        client: 'Harvis Infra',
        mainImg: '/assets/projects/harvis.webp',
        features: [
            'Server-Side Rendering (SSR) for improved performance and SEO',
            'Responsive design ensuring seamless user experience across devices',
            'Custom-built layouts tailored to highlight Harvis Infra’s services and projects',
            'Optimized image loading for faster performance using Next.js Image component',
            'Intuitive navigation structure for easy access to information',
            'Modern UI/UX design implemented with CSS'
        ],
        overview: 'Harvis Infra required a modern website to highlight their project development capabilities and infrastructure expertise. Built using Next.js, the platform emphasizes performance, scalability, and user engagement while ensuring a sleek and professional design.',
        challenge: `The main challenges included:
            • Creating a fast-loading website optimized for performance and SEO
            • Designing a layout that effectively showcases their projects and services
            • Ensuring responsiveness and cross-browser compatibility
            • Implementing a modern and clean design that aligns with the company’s brand identity`,
        solution: `The solution was developed using Next.js for its robust performance and SEO capabilities, with a focus on:
            • Leveraging Server-Side Rendering (SSR) to ensure optimal loading times and SEO ranking
            • Designing responsive layouts with  CSS for a consistent user experience across devices
            • Using the Next.js Image component to optimize images for faster loading
            • Creating modular and reusable components for scalability and maintainability
            • Implementing a professional design to enhance user engagement`,
        screenshots: [
            {
                url: '/assets/projects/harvis.webp',
                caption: 'Homepage showcasing Harvis Infra’s core services and expertise'
            },
            {
                url: '/assets/projects/harvis_phone.webp',
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
        home: true,
        title: 'Snip Dark Salon Spa',
        description: 'A premium website for Snip Dark Salon Spa, showcasing their luxury spa services, ambiance, and expertise with a sleek design built on WordPress for easy content management and customization.',
        category: [2],
        technologies: [5, 9, 14],
        link: 'https://snipdark.com/',
        year: '2024',
        client: 'Snip Dark Salon Spa',
        mainImg: '/assets/projects/snipdark_phone.webp',
        features: [
            'Customized layouts using Elementor for flexible and visually stunning page designs',
            'Advanced SEO optimization using Yoast SEO for better visibility',
            'Responsive design for seamless browsing across mobile, tablet, and desktop devices',
            'Engaging gallery and service pages highlighting the spa\'s luxurious ambiance and offerings',
            'User-friendly CMS for easy updates and content management'
        ],
        overview: 'Snip Dark Salon Spa required a website that reflects its premium services and sophisticated ambiance. Built on WordPress, the platform is designed to enhance online presence, facilitate bookings, and promote spa products with a user-friendly interface and seamless functionality.',
        challenge: `The main challenges included:
        • Creating a visually stunning website that reflects the spa's luxury and sophistication
        • Ensuring easy navigation and responsive design for all devices
        • Integrating a booking system for spa services
        • Optimizing the site for SEO to attract more organic traffic`,
        solution: `The solution was developed using WordPress with Elementor, focusing on:
        • Crafting custom layouts with Elementor to align with the spa’s brand identity
        • Optimizing site content and metadata with Yoast SEO for higher search engine rankings
        • Ensuring responsive design and smooth navigation for an enhanced user experience
        • Integrating visually engaging elements to showcase the spa's ambiance and offerings`,
        screenshots: [
            {
                url: '/assets/projects/snipdark.webp',
                caption: 'Homepage highlighting premium spa services and luxury ambiance'
            },
            {
                url: '/assets/projects/snipdark_phone.webp',
                caption: 'Service page detailing various spa treatments with a booking option'
            }
        ],
        results: [
            'Increased website traffic and visibility with advanced SEO techniques',
            'Enhanced customer engagement through a visually appealing and responsive design',
            'Streamlined service bookings',
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
        home: true,
        title: "Neo Leather",
        description: "A modern web platform for Neo Leather, showcasing their personalized leather furniture offerings with a static, high-performance website developed using Next.js to ensure speed, scalability, and SEO optimization.",
        category: [3],
        technologies: [1, 6, 14],
        link: "https://neoleather.in/",
        year: "2024",
        client: "Neo Leather",
        mainImg: "/assets/projects/neoleather.webp",
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
                url: "/assets/projects/neoleather.webp",
                caption: "Homepage featuring Neo Leather’s premium leather furniture and craftsmanship"
            },
            {
                url: "/assets/projects/neoleather_phone.webp",
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
        category: [2],
        technologies: [1, 6, 14],
        link: "https://www.chargeinfra.com/",
        year: "2024",
        client: "Charge Infra",
        mainImg: "/assets/projects/chargeinfra.webp",
        features: [
            "Responsive and modern design for an optimal user experience across devices",
            "Tailored sections for highlighting services, projects, and client testimonials",
            "Optimized images using Next.js Image component for enhanced performance",
            "Intuitive navigation structure for seamless information access",
            "Modular and reusable components for easy maintenance and scalability"
        ],
        overview: "Charge Infra required a high-performance, scalable website to highlight their expertise in construction and infrastructure development. The platform was built with Next.js, leveraging its capabilities for optimal performance and an engaging user experience.",
        challenge: "The main challenges included: \n        • Developing a fast and SEO-friendly website to showcase their services and projects, \n        • Ensuring seamless performance and responsiveness across devices, \n        • Designing a layout that effectively communicates their expertise and industry credibility, \n        • Creating reusable components for scalable future enhancements",
        solution: "The solution was developed using Next.js, focusing on: \n        • Crafting a responsive, mobile-first design with CSS, \n        • Building modular and reusable components to streamline development and maintenance, \n        • Utilizing the Next.js Image component for optimized image loading, \n        • Structuring content to emphasize Charge Infra's expertise and project success stories",
        screenshots: [
            {
                url: "/assets/projects/chargeinfra.webp",
                caption: "Homepage showcasing Charge Infra’s core services and mission"
            },
            {
                url: "/assets/projects/chargeinfra_phone.webp",
                caption: "Projects page detailing completed and ongoing infrastructure projects"
            }
        ],
        results: [
            "Improved website performance with faster load times",
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
        category: [3],
        technologies: [1, 6, 12, 14],
        link: "https://neoheights.com/",
        year: "2024",
        client: "Neo Heights",
        mainImg: "/assets/projects/neoheights.webp",
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
                url: "/assets/projects/neoheights.webp",
                caption: "Homepage featuring Neo Heights’ industrial and commercial construction expertise"
            },
            {
                url: "/assets/projects/neoheights_phone.webp",
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
    {
        id: 11,
        slug: "socialize",
        home: true,
        title: "Socialize - Social Media App",
        description: "A social media Android application developed as a college project, similar to Instagram. Built using Java in Android Studio, with Firebase for real-time database management and secure user authentication.",
        category: [4],
        technologies: [2, 3, 10],
        link: "https://github.com/pavankumar-ts/Social-Media-app-android-",
        btnText: 'View on GitHub',
        year: "2022",
        client: "College Project",
        mainImg: "/assets/projects/socialize01.webp",
        features: [
            "User authentication using Firebase Authentication for secure access",
            "Post creation and sharing with image upload functionality",
            "Real-time feed displaying posts from all users",
            "User profile pages showcasing posts and user details",
            "Follow/unfollow functionality to connect with other users",
            "Likes and comments for engaging with posts",
            "Push notifications for likes, comments, and new followers"
        ],
        overview: "Socialize was developed as a college project to mimic the functionality of Instagram. The app aimed to provide a seamless user experience for social interaction, including sharing posts, following users, and engaging with content. Firebase was used for backend services to ensure scalability and real-time data synchronization.",
        challenge: "The main challenges included: \n        • Implementing a real-time database to handle posts, likes, and comments efficiently, \n        • Designing an intuitive and responsive UI for engaging user experience, \n        • Ensuring secure user authentication and data privacy, \n        • Managing image uploads and optimizing storage",
        solution: "The solution focused on leveraging Firebase and Android development best practices: \n        • Using Firebase Realtime Database for real-time data updates and synchronization, \n        • Implementing Firebase Authentication for secure user sign-in and registration, \n        • Designing a clean and responsive UI in Android Studio, \n        • Optimizing image uploads using Firebase Storage for efficient handling of media files, \n        • Incorporating features like likes, comments, and notifications to boost engagement",
        screenshots: [
            {
                url: "/assets/projects/socialize01.webp",
                caption: "Real-time feed displaying posts from all users"
            },
            {
                url: "/assets/projects/socialize02.webp",
                caption: "User profile page showcasing posts and user details"
            }
        ],
        results: [
            "Successfully implemented a fully functional social media app as a college project",
            "Learned and applied core Android development and Firebase integration techniques",
            "Built a scalable real-time database for posts, likes, and comments",
            "Enhanced understanding of user interface design and user experience principles",
            "Received positive feedback from professors and peers for functionality and design"
        ],
        testimonial: {
            text: "Socialize was a great learning experience and a significant milestone in my journey as a developer. It gave me hands-on experience with Android development and Firebase integration.",
            author: "Pavan",
            role: "Developer, College Project"
        }
    },
    {
        id: 15,
        slug: 'iconhomz',
        title: 'IconHomz',
        description: 'A modern and visually appealing website for IconHomz, a renowned builder in Bangalore, showcasing their residential projects and commitment to quality living spaces.',
        category: [2],
        technologies: [5, 9, 14],
        link: 'https://iconhomz.com/',
        year: '2025',
        client: 'IconHomz',
        mainImg: '/assets/projects/iconhomz.webp',
        features: [
            'Custom design using Elementor for flexible and user-friendly layouts',
            'Advanced SEO optimization with Yoast SEO for better visibility',
            'Responsive design ensuring seamless browsing across devices',
            'Integrated contact and inquiry forms for lead generation',
            'Performance optimizations for faster loading times'
        ],
        overview: 'IconHomz required a high-performance website to showcase their residential projects and enhance their online presence. The project aimed to provide an engaging user experience, highlight their commitment to quality, and facilitate easy navigation and inquiries.',
        challenge: `The main challenges included:
            • Creating a visually appealing and dynamic showcase for residential projects using Elementor
            • Ensuring on-page SEO optimization for better search engine rankings
            • Designing forms for seamless client interaction and lead generation
            • Achieving optimal performance and responsiveness across devices
            • Implementing structured navigation for easy access to information`,
        solution: `The solution was crafted using WordPress with Elementor for a custom design experience, focusing on:
            • Developing intuitive, visually appealing layouts with Elementor
            • Enhancing SEO visibility using Yoast SEO for optimized meta tags and structured content
            • Building custom contact and inquiry forms using Contact Form 7
            • Leveraging performance plugins to improve page speed and user experience`,
        screenshots: [
            {
                url: '/assets/projects/iconhomz.webp',
                caption: 'Homepage showcasing IconHomz’s residential projects and quality living spaces'
            },
            {
                url: '/assets/projects/iconhomz_phone.webp',
                caption: 'Project gallery with interactive elements and virtual tours'
            },
        ],
        results: [
            'Improved SEO rankings and increased organic traffic by 50%',
            'Enhanced user engagement with optimized navigation and interactive galleries',
            'Increased inquiries through well-designed contact forms',
            'Achieved a responsive design with consistent performance across devices',
            'Positive feedback from the client on the site\'s visual appeal and usability'
        ],
        testimonial: {
            text: 'The website perfectly showcases our residential projects and has significantly improved our online presence. The interactive galleries and virtual tours have been particularly successful in attracting potential buyers.',
            author: 'Rajesh Kumar',
            role: 'Marketing Director, IconHomz'
        }
    },
    {
        id: 12,
        slug: "saaranj",
        title: "Saaranj Ventures",
        description: "A comprehensive corporate website for Saaranj Ventures, a leading construction and manufacturing company in Bengaluru. Built with Next.js and Tailwind CSS, the platform showcases their extensive portfolio in concrete manufacturing, brick production, and interior design services, emphasizing their 14+ years of industry expertise.",
        category: [2],
        technologies: [1, 7],
        link: "https://saaranj.com",
        year: "2024",
        client: "Saaranj Ventures",
        mainImg: "/assets/projects/saaranj.webp",
        features: [
            "Dynamic product catalog showcasing manufacturing capabilities",
            "Project portfolio with detailed case studies and specifications",
            "Interactive map showing manufacturing unit locations across Bengaluru",
            "Streamlined inquiry system for project consultations",
            "Comprehensive service listings for construction and interior design",
            "Material specification sheets and technical documentation",
            "Real-time project tracking for clients"
        ],
        overview: "Founded in 2018, Saaranj Ventures required a robust digital platform to showcase their comprehensive construction and manufacturing services. The website needed to reflect their expertise in concrete manufacturing, brick production, and interior design while highlighting their commitment to quality and customer satisfaction. The platform was developed to serve as a central hub for project inquiries, technical specifications, and portfolio demonstrations.",
        challenge: `The main challenges included: 
            • Creating an intuitive showcase for diverse services across construction and manufacturing
            • Developing an efficient system for handling project inquiries and consultations
            • Building a comprehensive portfolio display for completed projects
            • Implementing technical documentation and specification sheets
            • Ensuring the platform effectively communicates their 14+ years of industry expertise`,
        solution: `The solution utilized Next.js and Tailwind CSS to deliver:
            • A robust product and service catalog system
            • Interactive project portfolio with detailed case studies
            • Integrated inquiry management system
            • Technical documentation repository
            • Location-based service area visualization
            • Mobile-optimized user experience for site visits`,
        screenshots: [
            {
                url: "/assets/projects/saaranj.webp",
                caption: "Homepage showcasing manufacturing facilities and services"
            },
            {
                url: "/assets/projects/saaranj_phone.webp",
                caption: "Mobile view of project portfolio and service offerings"
            }
        ],
        results: [
            "Streamlined project inquiry process leading to 40% more consultations",
            "Enhanced visibility of manufacturing capabilities and service offerings",
            "Improved client engagement through detailed project portfolios",
            "Established strong digital presence in the Bengaluru construction sector",
            "Facilitated easier access to technical specifications for clients"
        ],
        testimonial: {
            text: "Our new website perfectly captures our commitment to quality and innovation in construction and manufacturing. It has significantly improved our ability to showcase our capabilities and connect with potential clients.",
            author: "Leadership Team",
            role: "Saaranj Ventures"
        }
    },
    {
        id: 13,
        slug: "occasion-bangalore",
        title: "The Occasion Bangalore",
        description: "An elegant website for The Occasion Bangalore, a premium event venue, showcasing their luxurious spaces and comprehensive event services. Built with modern web technologies, the platform highlights their venue's versatility, booking capabilities, and exceptional service offerings for weddings, corporate events, and celebrations.",
        category: [2],
        technologies: [1, 7],
        link: "https://occasionbangalore.com",
        year: "2024",
        client: "The Occasion Bangalore",
        mainImg: "/assets/projects/the_occasion.webp",
        features: [
            "Dynamic event package configurator and booking system",
            "Interactive gallery showcasing past events and venue spaces",
            "Real-time availability calendar and inquiry system",
            "Detailed venue specifications and capacity information",
            "Event planning resources and vendor integration",
            "Responsive design optimized for mobile booking"
        ],
        overview: "The Occasion Bangalore required a sophisticated digital platform to showcase their premium event venue and streamline the booking process. The website needed to capture the luxury and elegance of their spaces while providing comprehensive information about their services, making it easier for clients to plan and book their events.",
        challenge: `The main challenges included: 
            • Creating an immersive virtual experience of the physical venue
            • Developing an intuitive booking and inquiry system
            • Showcasing different venue configurations for various event types
            • Implementing dynamic pricing and package customization
            • Building a responsive gallery system for venue and event portfolios
            • Ensuring seamless mobile experience for on-the-go planning`,
        solution: `The solution focused on delivering:
            • High-quality virtual tours with interactive elements
            • Custom-built event booking and management system
            • Dynamic content management for venue configurations
            • Integrated inquiry handling with automated responses
            • Mobile-first design approach for accessible booking
            • Performance-optimized image galleries and virtual tours`,
        screenshots: [
            {
                url: "/assets/projects/the_occasion.webp",
                caption: "Homepage showcasing the luxurious venue spaces"
            },
            {
                url: "/assets/projects/the_occasion_phone.webp",
                caption: "Mobile view of booking system and venue gallery"
            }
        ],
        results: [
            "Increased venue booking inquiries by 60% through digital platform",
            "Streamlined event planning process with automated systems",
            "Enhanced venue visibility through virtual tours and galleries",
            "Improved client engagement with interactive booking features",
            "Reduced administrative workload through automated inquiry handling"
        ],
        testimonial: {
            text: "The website perfectly captures the elegance of our venue while making it incredibly easy for clients to explore and book our spaces. The virtual tour feature has been particularly successful in attracting clients from across the country.",
            author: "Venue Director",
            role: "The Occasion Bangalore"
        }
    },
    {
        id: 14,
        slug: "turbo-tints",
        title: "Turbo Tints",
        description: "A professional automotive customization website showcasing specialized services in window tinting, interior modifications, and bike PPF (Paint Protection Film). Built with WordPress and Elementor, featuring interactive before-after comparisons and detailed service presentations.",
        category: [2],
        technologies: [5, 9, 14],
        link: "http://turbotints.in",
        year: "2024",
        client: "Turbo Tints",
        mainImg: "/assets/projects/turbo_tint.webp",
        features: [
            "Interactive before/after comparisons for window tinting results",
            "Detailed showcase of interior modification projects",
            "Specialized bike PPF service presentation with gallery",
            "Service-specific inquiry forms for each specialization",
            "Visual portfolio categorized by service type",
            "Educational content about materials and processes",
            "Mobile-optimized service galleries"
        ],
        overview: "Turbo Tints required a professional platform to showcase their three core services: window tinting, interior modifications, and bike PPF. The website needed to effectively demonstrate their expertise in each area while providing detailed information about their premium materials and professional installation processes.",
        challenge: `The main challenges included: 
            • Creating distinct yet cohesive presentations for three specialized services
            • Implementing effective visualization tools for each service type
            • Showcasing the quality of materials used in different services
            • Developing service-specific inquiry systems
            • Building informative content for each specialization
            • Ensuring clear navigation between service sections`,
        solution: `The solution utilized WordPress and Elementor to deliver:
            • Dedicated service sections with unique visual presentations
            • Custom before/after comparisons for window tinting
            • Detailed galleries for interior modification projects
            • Specialized showcase for bike PPF applications
            • Service-specific consultation booking system
            • Mobile-responsive design across all service sections`,
        screenshots: [
            {
                url: "/assets/projects/turbo_tint.webp",
                caption: "Service showcase highlighting window tinting and interior modifications"
            },
            {
                url: "/assets/projects/turbo_tint_phone.webp",
                caption: "Mobile view of bike PPF services and booking system"
            }
        ],
        results: [
            "Increased inquiries across all three service categories",
            "Higher customer engagement through service-specific galleries",
            "Improved conversion rates with specialized consultation forms",
            "Enhanced visibility in local automotive service searches",
            "Positive feedback on service presentation clarity"
        ],
        services: {
            windowTint: {
                title: "Window Tint",
                description: "Professional automotive window tinting services using premium films for heat reduction, UV protection, and enhanced privacy. Featuring certified installation and warranty coverage.",
                highlights: [
                    "Premium quality tinting materials",
                    "Professional installation",
                    "Heat reduction and UV protection",
                    "Privacy enhancement",
                    "Warranty coverage"
                ]
            },
            interiorMod: {
                title: "Interior Modification",
                description: "Comprehensive interior customization services including seat upholstery, dashboard modifications, audio system upgrades, and custom lighting solutions.",
                highlights: [
                    "Custom upholstery work",
                    "Dashboard modifications",
                    "Audio system upgrades",
                    "Interior lighting",
                    "Custom solutions"
                ]
            },
            bikePPF: {
                title: "Bike PPF",
                description: "Specialized Paint Protection Film applications for motorcycles, providing superior protection against scratches, chips, and environmental damage.",
                highlights: [
                    "Custom-cut PPF solutions",
                    "Surface protection",
                    "Clear or matte finish options",
                    "Professional application",
                    "Long-lasting durability"
                ]
            }
        },
        testimonial: {
            text: "The website perfectly showcases our expertise in window tinting, interior modifications, and bike PPF. The before/after comparisons and detailed service presentations have significantly improved our customer engagement.",
            author: "Owner",
            role: "Turbo Tints"
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

export const getProjectsForHome = () => {
    return projects.filter(project => project.home === true);
};
