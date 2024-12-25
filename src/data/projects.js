// data/projects.js

const technologyLogos = [
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
        id: 3,
        slug: 'bangalore-gastro-centre',
        title: 'Bangalore Gastro Centre',
        description: 'A comprehensive website for the Bangalore Gastro Centre, featuring information about the center, specialities, doctors, appointment booking, blogs, courses, media & events, awards, outreach programs, careers, and research. The team has access to edit the content via Drupal CMS, which reflects on the website.',
        category: [2, 5], // Referencing category IDs
        technologies: [1,6], // Referencing technology IDs
        link: 'https://bangalore-gastro-centre.vercel.app/',
        year: '2024',
        client: 'Bangalore Gastro Centre',
        mainImg: '/assets/projects/bgc.png',
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
];



export const getProjectsByCategory = (category) => {
    if (category === 'All Projects') return projects;
    return projects.filter(project => project.category.includes(category));
};

// New helper function for getting related projects
export const getRelatedProjects = (currentProject, limit = 3) => {
    return projects
        .filter(project =>
            project.id !== currentProject.id &&
            project.category.some(cat => currentProject.category.includes(cat))
        )
        .slice(0, limit);
};

// Helper function to get technology details by ID
export const getTechnologyById = (id) => {
    return technologyLogos.find(tech => tech.id === id);
};