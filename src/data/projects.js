// data/projects.js

export const projects = [
    {
        id: 1,
        title: 'Brander',
        description: 'Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.',
        image: '/assets/projects/project01.webp',
        category: 'UI/UX Design',
        technologies: ['React', 'Next.js', 'TailwindCSS'],
        link: '/projects/brander',
        year: '2024',
        client: 'Brander Inc.',
        role: 'Lead Frontend Developer',
        duration: '3 months',
        features: [
            'Responsive design implementation',
            'User engagement analytics',
            'Performance optimization',
            'Cross-browser compatibility'
        ]
    },
    {
        id: 2,
        title: 'Zephyr',
        description: 'Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.',
        image: '/assets/projects/project01.webp',
        category: 'Web Application',
        technologies: ['React', 'Firebase', 'Framer Motion'],
        link: '/projects/zephyr',
        year: '2024',
        client: 'Zephyr Technologies',
        role: 'Frontend Developer',
        duration: '4 months',
        features: [
            'Real-time data synchronization',
            'Authentication system',
            'Interactive animations',
            'Mobile-first design'
        ]
    },
    {
        id: 3,
        title: 'E-Commerce Platform',
        description: 'Developed a modern e-commerce platform with seamless payment integration and inventory management capabilities.',
        image: '/assets/projects/project01.webp',
        category: 'E-Commerce',
        technologies: ['Next.js', 'Stripe', 'Supabase'],
        link: '/projects/ecommerce',
        year: '2023',
        client: 'Retail Solutions',
        role: 'Full Stack Developer',
        duration: '6 months',
        features: [
            'Payment processing',
            'Inventory management',
            'Order tracking',
            'Customer dashboard'
        ]
    },
    {
        id: 4,
        title: 'Portfolio Generator',
        description: 'Created a dynamic portfolio generator allowing users to showcase their work with customizable templates.',
        image: '/assets/projects/project01.webp',
        category: 'Web Tool',
        technologies: ['React', 'TailwindCSS', 'Firebase'],
        link: '/projects/portfolio-generator',
        year: '2023',
        client: 'Freelance Project',
        role: 'Frontend Developer',
        duration: '2 months',
        features: [
            'Custom template system',
            'Image optimization',
            'SEO integration',
            'Analytics dashboard'
        ]
    }
];

export const projectCategories = [
    'All projects',
    'UI/UX Design',
    'Web Application',
    'E-Commerce',
    'Web Tool'
];

export const getProjectBySlug = (slug) => {
    return projects.find(project =>
        project.title.toLowerCase().replace(/ /g, '-') === slug
    );
};

export const getProjectsByCategory = (category) => {
    if (category === 'All projects') return projects;
    return projects.filter(project => project.category === category);
};