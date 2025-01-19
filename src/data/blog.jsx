// src/data/blog.js

export const blogCategories = [
    { id: 1, name: 'All Posts' },
    { id: 2, name: 'Development' },
    { id: 3, name: 'React' },
    { id: 4, name: 'Next.js' },
    { id: 5, name: 'Performance' },
    { id: 6, name: 'Design' },
];

const author = {
    name: 'Pavan Kumar',
    image: '/assets/pavan-kumar.webp',
    role: 'Software Developer'
};

export const blogs = [
    {
        id: 1,
        slug: 'nextjs-performance-optimization',
        title: 'Next.js Performance Optimization Techniques',
        description: 'A comprehensive guide to optimizing Next.js applications for better performance, covering built-in optimizations, core web vitals, and best practices for faster load times.',
        category: [2, 4, 5],
        date: 'January 6, 2025',
        readTime: '8 min read',
        author,
        mainImg: '/assets/blog/performance.webp',
        tags: ['Next.js', 'Performance', 'Web Development', 'React', 'Optimization'],
        content: {
            introduction: "As web applications grow in complexity, optimizing performance becomes crucial for maintaining excellent user experience. Next.js provides several built-in features and optimization techniques that can significantly improve your application's performance.",
            sections: [
                {
                    type: 'default',
                    title: 'Understanding Next.js Performance',
                    content: "Next.js provides several built-in features and optimization techniques that can significantly improve your application's performance. These optimizations are designed to enhance both the developer experience and end-user performance."
                },
                {
                    type: 'list',
                    title: 'Key Performance Features',
                    items: [
                        'Automatic Image Optimization with next/image',
                        'Built-in Code Splitting for optimal loading',
                        'Server-Side Rendering (SSR) capabilities',
                        'Static Site Generation (SSG) for fast page loads',
                        'Incremental Static Regeneration (ISR)'
                    ]
                },
                {
                    type: 'image',
                    title: 'Image Optimization in Action',
                    content: 'The Next.js Image component automatically optimizes images in your application, providing features like lazy loading and preventing layout shift.',
                    image: '/assets/blog/image_optimization.webp'
                },
                {
                    type: 'image',
                    title: 'Resource Loading',
                    content: 'Optimizing resource loading is crucial for better performance. Properly sized and formatted images can significantly improve load times.',
                    image: '/assets/blog/loading.webp'
                },
                {
                    type: 'quote',
                    content: "Performance isn't about making your site fast for a small subset of users, but about making it fast for any user, on any device, anywhere in the world.",
                    author: 'Next.js Documentation'
                }
            ],
            conclusion: 'Optimizing a Next.js application involves leveraging built-in features, implementing proper monitoring, and following best practices for asset management and performance optimization. By focusing on these key areas, you can create fast, efficient applications that provide excellent user experience and maintain high search engine rankings.'
        },
    },
    {
        id: 2,
        slug: 'nextjs-seo-optimization-techniques',
        title: 'Next.js SEO Optimization Techniques',
        description: 'Learn how to enhance the visibility of your Next.js applications in search engines using advanced SEO techniques, from metadata management to performance optimization.',
        category: [1, 5],
        date: 'January 7, 2025',
        readTime: '9 min read',
        author,
        mainImg: '/assets/blog/seo.webp',
        tags: ['Next.js', 'SEO', 'Web Development', 'Optimization', 'Technical SEO'],
        content: {
            introduction: "Search engine optimization (SEO) is critical for driving organic traffic to your web applications. Next.js offers tools and techniques to help you implement effective SEO strategies without compromising performance.",
            sections: [
                {
                    type: 'default',
                    title: 'Understanding SEO in Next.js',
                    content: "SEO involves optimizing your application to ensure it ranks higher in search engine results. With server-side rendering and static generation, Next.js provides a solid foundation for achieving better SEO."
                },
                {
                    type: 'list',
                    title: 'Essential SEO Features in Next.js',
                    items: [
                        'Customizable Head Tags with next/head',
                        'Dynamic Routing with Search-Friendly URLs',
                        'Optimized Performance Metrics',
                        'Structured Data Implementation',
                        'Canonical Tags for Avoiding Duplicate Content'
                    ]
                },
                {
                    type: 'code',
                    title: 'Adding Meta Tags with next/head',
                    content: `import Head from 'next/head';\n\nexport default function Home() {\n  return (\n    <>\n      <Head>\n        <title>Next.js SEO Optimization</title>\n        <meta name=\"description\" content=\"Learn effective SEO techniques for Next.js applications.\" />\n        <link rel=\"canonical\" href=\"https://yourwebsite.com/nextjs-seo-optimization\" />\n      </Head>\n      <main>\n        <h1>Welcome to Next.js SEO Optimization</h1>\n      </main>\n    </>\n  );\n}`
                },
                {
                    type: 'code',
                    title: 'Structured Data in Next.js',
                    content: `import Head from 'next/head';\n\nexport default function Home() {\n  return (\n    <>\n      <Head>\n        <script type="application/ld+json">\n          {JSON.stringify({\n            "@context": "https://schema.org",\n            "@type": "WebPage",\n            "name": "Structured Data in Next.js",\n            "description": "Implementing structured data helps search engines understand your content better, improving visibility and rankings.",\n            "url": "https://yourwebsite.com/structured-data-nextjs"\n          })}\n        </script>\n      </Head>\n      <main>\n        <h1>Learn Structured Data in Next.js</h1>\n      </main>\n    </>\n  );\n}`
                },
                {
                    type: 'quote',
                    content: "SEO is not just about improving rankings; it's about delivering the right content to the right audience efficiently.",
                    author: 'Google Webmaster Guidelines'
                }
            ],
            conclusion: 'By leveraging Next.js features like next/head, structured data, and performance optimizations, you can significantly improve your web application’s SEO. Coupled with a focus on user experience, these techniques ensure your application stands out in search results.'
        },
    },
    {
        id: 3,
        slug: 'best-practices-no-code-development',
        title: 'Best Practices for No-Code Development',
        description: 'Explore essential best practices to maximize the efficiency and success of your no-code development projects, ensuring robust and scalable applications.',
        category: [2, 4, 5],
        date: 'January 8, 2025',
        readTime: '7 min read',
        author,
        mainImg: '/assets/blog/no-code-preview.webp',
        tags: ['No-Code', 'Development', 'Best Practices', 'Web Development', 'Optimization'],
        content: {
            introduction: "No-code development empowers individuals to create applications without traditional programming, accelerating the development process. Adhering to best practices ensures that these applications are efficient, scalable, and maintainable.",
            sections: [
                {
                    type: 'default',
                    title: 'Understanding No-Code Development',
                    content: "No-code platforms provide visual interfaces that allow users to build applications through drag-and-drop functionalities, eliminating the need for extensive coding knowledge. This democratizes software development, enabling faster prototyping and deployment."
                },
                {
                    type: 'list',
                    title: 'Key Best Practices',
                    items: [
                        'Clearly Define Your Project Requirements',
                        'Choose the Right No-Code Platform',
                        'Maintain Consistent Design Standards',
                        'Implement Robust Data Management',
                        'Ensure Security and Compliance',
                        'Plan for Scalability',
                        'Regularly Test and Iterate'
                    ]
                },
                {
                    type: 'image',
                    title: 'Choosing the Right No-Code Platform',
                    content: 'Selecting a platform that aligns with your project needs is crucial. Consider factors like scalability, integration capabilities, and user support.',
                    image: '/assets/blog/no-code-platform.webp'
                },
                {
                    type: 'quote',
                    content: "The success of a no-code project hinges not just on the platform, but on the practices implemented throughout the development process.",
                    author: 'No-Code Development Expert'
                }
            ],
            conclusion: 'By following these best practices, you can leverage no-code development to rapidly build effective applications while ensuring quality and scalability. Staying informed about the latest trends and continuously refining your approach will lead to sustained success in your no-code projects.'
        }
    },
    {
        id: 5,
        slug: 'top-10-web-design-trends-2025',
        title: 'Top 10 Web Design Trends of the Year 2025',
        description: 'Explore the most influential web design trends of 2025, including AI integration, immersive 3D elements, and eco-friendly designs, to enhance user experience and engagement.',
        category: [2,6],
        date: 'January 19, 2025',
        readTime: '12 min read',
        author,
        mainImg: '/assets/blog/top10_web_design_trends_of_2025.webp',
        tags: ['Web Design', '2025 Trends', 'UI/UX', 'Web Development'],
        content: {
            introduction: 'As we step into 2025, the digital landscape continues to evolve, bringing forth innovative web design trends that prioritize user experience, accessibility, and aesthetics. Staying abreast of these trends is essential for businesses and designers aiming to create engaging and future-proof websites.',
            sections: [
                {
                    type: 'default',
                    title: '1. AI-Powered Design Tools',
                    content: 'Artificial Intelligence (AI) has become a cornerstone in web design, automating tasks such as layout creation, color scheme selection, and content optimization. AI-driven tools enable designers to craft personalized user experiences efficiently.'
                },
                {
                    type: 'default',
                    title: '2. Immersive 3D Visuals',
                    content: 'The incorporation of 3D elements adds depth and realism to websites, captivating users and encouraging interaction. Advances in web technologies have made it feasible to integrate high-quality 3D graphics without compromising performance.'
                },
                {
                    type: 'default',
                    title: '3. Dark Mode Standardization',
                    content: 'Dark mode designs have gained popularity due to their aesthetic appeal and ability to reduce eye strain. In 2025, more websites are offering dark mode options, providing users with a choice that enhances comfort and accessibility.'
                },
                {
                    type: 'default',
                    title: '4. Custom Illustrations and Typography',
                    content: 'Unique illustrations and bespoke typography help brands stand out, conveying personality and authenticity. Custom visuals create a memorable identity and enhance brand recognition.'
                },
                {
                    type: 'default',
                    title: '5. Advanced Scroll Animations',
                    content: 'Innovative scroll effects, such as parallax scrolling and dynamic content loading, create a more interactive experience. These animations guide users through the narrative of the website smoothly.'
                },
                {
                    type: 'default',
                    title: '6. Minimalistic and Clean Layouts',
                    content: 'Minimalism continues to dominate web design, focusing on simplicity and functionality. Clean layouts with ample white space enhance readability and direct user attention to essential elements.'
                },
                {
                    type: 'default',
                    title: '7. Micro-Interactions',
                    content: 'Subtle animations and micro-interactions provide feedback to users, making interfaces more intuitive and engaging. These small details contribute significantly to the overall user experience.'
                },
                {
                    type: 'default',
                    title: '8. Sustainable and Eco-Friendly Design',
                    content: 'Eco-conscious design practices are on the rise, with websites optimizing for energy efficiency and incorporating sustainable themes. This trend reflects a growing awareness of environmental issues in the digital space.'
                },
            ],
            conclusion: 'Embracing these web design trends of 2025 can significantly enhance user engagement and satisfaction. By integrating AI technologies, immersive visuals, and sustainable practices, designers can create websites that are not only visually appealing but also functional and responsible.'
        }
    },
];

export const getRelatedBlogPosts = (post) => {
    return blogs
        .filter(b => b.id !== post.id && post.relatedPosts.includes(b.id))
        .slice(0, 3);
};

export const getBlogBySlug = (slug) => {
    return blogs.find(post => post.slug === slug);
};