// data/projects.js


export const projects = [
    {
        id: 1,
        slug: 'bricstal-tech',
        title: 'Bricstal Tech',
        description: 'A comprehensive web application for an IT consulting firm, showcasing industry-specific solutions and innovative technology services.',
        category: 'Web Application',
        technologies: ['Next.js', 'React', 'TailwindCSS', 'JavaScript ES6+', 'CSS Modules'],
        link: 'https://www.bricstaltech.com/',
        year: '2023',
        client: 'Bricstal Tech',
        role: 'Frontend Developer',
        mainImg: '/assets/projects/bricstaltech02.webp',
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
                url: '/assets/projects/bricstaltech01.webp',
                caption: 'Homepage showcasing key services and industry solutions'
            },
            {
                url: '/assets/projects/mockup.png',
                caption: 'Industry-specific solutions with interactive components'
            },
            {
                url: '/assets/projects/mockupPhone.png',
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
            text: "The website perfectly represents our brand and has significantly improved our online presence. The modern design and optimal performance have helped us better showcase our services to potential clients.",
            author: "Client Name",
            role: "CEO, Bricstal Tech"
        },
        keyFeatures: {
            industrySpecific: [
                'Healthcare technology solutions',
                'Education and EdTech integration',
                'Energy and resource management',
                'Retail and consumer solutions',
                'Automotive sector expertise',
                'Engineering and construction solutions'
            ],
            components: [
                'Interactive cards and carousels',
                'Case study showcases',
                'Detailed service listings',
                'Responsive navigation system'
            ]
        }
    }
];

export const projectCategories = [
    'All Projects',
    'Web Application',
    'Frontend Development',
    'UI/UX Design',
    'E-Commerce'
];


export const getProjectsByCategory = (category) => {
    if (category === 'All Projects') return projects;
    return projects.filter(project => project.category === category);
};

// New helper function for getting related projects
export const getRelatedProjects = (currentProject, limit = 3) => {
    return projects
        .filter(project => 
            project.id !== currentProject.id && 
            project.category === currentProject.category
        )
        .slice(0, limit);
};