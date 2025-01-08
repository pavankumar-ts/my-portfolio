// src/data/blog.js

export const blogCategories = [
    { id: 1, name: 'All Posts' },
    { id: 2, name: 'Development' },
    { id: 3, name: 'React' },
    { id: 4, name: 'Next.js' },
    { id: 5, name: 'Performance' }
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
        date: 'March 15, 2024',
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
];

export const getRelatedBlogPosts = (post) => {
    return blogs
        .filter(b => b.id !== post.id && post.relatedPosts.includes(b.id))
        .slice(0, 3);
};

export const getBlogBySlug = (slug) => {
    return blogs.find(post => post.slug === slug);
};