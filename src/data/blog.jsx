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
        category: [2, 6],
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
                    title: 'AI-Powered Design Tools',
                    content: 'Artificial Intelligence (AI) has become a cornerstone in web design, automating tasks such as layout creation, color scheme selection, and content optimization. AI-driven tools enable designers to craft personalized user experiences efficiently.'
                },
                {
                    type: 'default',
                    title: 'Immersive 3D Visuals',
                    content: 'The incorporation of 3D elements adds depth and realism to websites, captivating users and encouraging interaction. Advances in web technologies have made it feasible to integrate high-quality 3D graphics without compromising performance.'
                },
                {
                    type: 'default',
                    title: 'Dark Mode Standardization',
                    content: 'Dark mode designs have gained popularity due to their aesthetic appeal and ability to reduce eye strain. In 2025, more websites are offering dark mode options, providing users with a choice that enhances comfort and accessibility.'
                },
                {
                    type: 'default',
                    title: 'Custom Illustrations and Typography',
                    content: 'Unique illustrations and bespoke typography help brands stand out, conveying personality and authenticity. Custom visuals create a memorable identity and enhance brand recognition.'
                },
                {
                    type: 'default',
                    title: 'Advanced Scroll Animations',
                    content: 'Innovative scroll effects, such as parallax scrolling and dynamic content loading, create a more interactive experience. These animations guide users through the narrative of the website smoothly.'
                },
                {
                    type: 'default',
                    title: 'Minimalistic and Clean Layouts',
                    content: 'Minimalism continues to dominate web design, focusing on simplicity and functionality. Clean layouts with ample white space enhance readability and direct user attention to essential elements.'
                },
                {
                    type: 'default',
                    title: 'Micro-Interactions',
                    content: 'Subtle animations and micro-interactions provide feedback to users, making interfaces more intuitive and engaging. These small details contribute significantly to the overall user experience.'
                },
                {
                    type: 'default',
                    title: 'Sustainable and Eco-Friendly Design',
                    content: 'Eco-conscious design practices are on the rise, with websites optimizing for energy efficiency and incorporating sustainable themes. This trend reflects a growing awareness of environmental issues in the digital space.'
                },
                {
                    type: 'default',
                    title: 'Personalized User Experiences with Data',
                    content: 'Leveraging user data to create personalized web experiences has become a significant trend. From tailored content recommendations to adaptive interfaces, websites are using analytics and user behavior insights to make interactions more relevant and engaging. This level of personalization enhances user satisfaction and loyalty.'
                },
                {
                    type: 'default',
                    title: 'Dynamic Content and Real-Time Updates',
                    content: 'Dynamic content that adapts to user inputs or updates in real-time is reshaping the way websites interact with visitors. Real-time features such as live feeds, notifications, and collaborative tools ensure that users receive timely and relevant information, boosting engagement and usability.'
                }
            ],
            conclusion: 'Embracing these web design trends of 2025 can significantly enhance user engagement and satisfaction. By integrating AI technologies, immersive visuals, and sustainable practices, designers can create websites that are not only visually appealing but also functional and responsible.'
        }
    },
    {
        id: 6,
        slug: 'react-hooks-complete-guide-2025',
        title: 'React Hooks Complete Guide: From Basics to Advanced Patterns in 2025',
        description: 'Master React Hooks with this comprehensive guide covering useState, useEffect, custom hooks, and advanced patterns. Learn best practices, performance optimization, and real-world examples.',
        category: [2, 3, 5],
        date: 'January 20, 2025',
        readTime: '15 min read',
        author,
        mainImg: '/assets/blog/react-hooks-guide.webp',
        tags: ['React', 'Hooks', 'JavaScript', 'Web Development', 'Frontend', 'State Management'],
        content: {
            introduction: "React Hooks revolutionized how we write React components, providing a more intuitive way to manage state and side effects in functional components. This comprehensive guide covers everything from basic hooks to advanced patterns and performance optimization techniques.",
            sections: [
                {
                    type: 'default',
                    title: 'Understanding React Hooks Fundamentals',
                    content: "React Hooks are functions that allow you to use state and other React features in functional components. Introduced in React 16.8, hooks have become the standard way to write React applications, offering better code reusability and easier testing."
                },
                {
                    type: 'list',
                    title: 'Essential Built-in Hooks',
                    items: [
                        'useState - Managing component state effectively',
                        'useEffect - Handling side effects and lifecycle events',
                        'useContext - Consuming React context values',
                        'useReducer - Managing complex state logic',
                        'useMemo - Optimizing expensive calculations',
                        'useCallback - Preventing unnecessary re-renders',
                        'useRef - Accessing DOM elements and persisting values'
                    ]
                },
                {
                    type: 'code',
                    title: 'useState Hook Example',
                    content: `import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState('');\n\n  const increment = () => setCount(count + 1);\n  const decrement = () => setCount(count - 1);\n\n  return (\n    <div>\n      <h2>Count: {count}</h2>\n      <button onClick={increment}>+</button>\n      <button onClick={decrement}>-</button>\n      \n      <input \n        type="text" \n        value={name} \n        onChange={(e) => setName(e.target.value)}\n        placeholder="Enter your name"\n      />\n      <p>Hello, {name}!</p>\n    </div>\n  );\n}`
                },
                {
                    type: 'code',
                    title: 'Custom Hook for API Data Fetching',
                    content: `import { useState, useEffect } from 'react';\n\nfunction useApiData(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        setLoading(true);\n        const response = await fetch(url);\n        if (!response.ok) {\n          throw new Error('Network response was not ok');\n        }\n        const result = await response.json();\n        setData(result);\n      } catch (err) {\n        setError(err.message);\n      } finally {\n        setLoading(false);\n      }\n    };\n\n    fetchData();\n  }, [url]);\n\n  return { data, loading, error };\n}\n\n// Usage\nfunction UserProfile({ userId }) {\n  const { data: user, loading, error } = useApiData(\`/api/users/\${userId}\`);\n\n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n  \n  return (\n    <div>\n      <h1>{user.name}</h1>\n      <p>{user.email}</p>\n    </div>\n  );\n}`
                },
                {
                    type: 'default',
                    title: 'Performance Optimization with Hooks',
                    content: "Performance optimization is crucial when using hooks. The useMemo and useCallback hooks help prevent unnecessary re-renders by memoizing values and functions. Understanding when and how to use these optimization hooks can significantly improve your application's performance."
                },
                {
                    type: 'code',
                    title: 'useMemo and useCallback Example',
                    content: `import React, { useState, useMemo, useCallback } from 'react';\n\nfunction ExpensiveComponent({ items, onItemClick }) {\n  const [filter, setFilter] = useState('');\n\n  // Memoize expensive calculation\n  const filteredItems = useMemo(() => {\n    return items.filter(item => \n      item.name.toLowerCase().includes(filter.toLowerCase())\n    );\n  }, [items, filter]);\n\n  // Memoize callback function\n  const handleItemClick = useCallback((item) => {\n    onItemClick(item);\n  }, [onItemClick]);\n\n  return (\n    <div>\n      <input \n        value={filter} \n        onChange={(e) => setFilter(e.target.value)}\n        placeholder="Filter items..."\n      />\n      {filteredItems.map(item => (\n        <div key={item.id} onClick={() => handleItemClick(item)}>\n          {item.name}\n        </div>\n      ))}\n    </div>\n  );\n}`
                },
                {
                    type: 'quote',
                    content: "Hooks don't replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know.",
                    author: 'React Documentation'
                }
            ],
            conclusion: 'React Hooks have transformed how we build React applications, making them more readable, reusable, and performant. By mastering both basic and advanced hook patterns, you can write cleaner, more maintainable code while leveraging React\'s full potential. Remember to follow the rules of hooks and use optimization techniques judiciously for the best results.'
        }
    },
    {
        id: 7,
        slug: 'web-accessibility-complete-guide-2025',
        title: 'Web Accessibility Complete Guide: Building Inclusive Websites in 2025',
        description: 'Learn how to create accessible websites that work for everyone. This comprehensive guide covers WCAG guidelines, ARIA attributes, testing tools, and best practices for inclusive web design.',
        category: [2, 6],
        date: 'January 21, 2025',
        readTime: '14 min read',
        author,
        mainImg: '/assets/blog/web-accessibility-guide.webp',
        tags: ['Accessibility', 'WCAG', 'Inclusive Design', 'Web Development', 'ARIA', 'UX'],
        content: {
            introduction: "Web accessibility ensures that websites and applications are usable by people with disabilities. Creating accessible web experiences is not just a legal requirement in many jurisdictions—it's a fundamental aspect of inclusive design that benefits all users and improves overall user experience.",
            sections: [
                {
                    type: 'default',
                    title: 'Understanding Web Accessibility Principles',
                    content: "Web accessibility is built on four fundamental principles known as POUR: Perceivable, Operable, Understandable, and Robust. These principles form the foundation of the Web Content Accessibility Guidelines (WCAG) and guide developers in creating inclusive digital experiences."
                },
                {
                    type: 'list',
                    title: 'WCAG 2.1 Key Guidelines',
                    items: [
                        'Perceivable - Information must be presentable in ways users can perceive',
                        'Operable - Interface components must be operable by all users',
                        'Understandable - Information and UI operation must be understandable',
                        'Robust - Content must be robust enough for various assistive technologies',
                        'Keyboard Navigation - All functionality available via keyboard',
                        'Color Contrast - Sufficient contrast ratios for text and backgrounds',
                        'Alternative Text - Descriptive alt text for images and media'
                    ]
                },
                {
                    type: 'code',
                    title: 'Semantic HTML and ARIA Attributes',
                    content: `<!-- Proper semantic structure -->\n<header>\n  <nav aria-label="Main navigation">\n    <ul>\n      <li><a href="/" aria-current="page">Home</a></li>\n      <li><a href="/about">About</a></li>\n      <li><a href="/contact">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h1>Article Title</h1>\n    <p>Article content...</p>\n    \n    <!-- Interactive elements with proper ARIA -->\n    <button \n      aria-expanded="false" \n      aria-controls="dropdown-menu"\n      id="menu-button"\n    >\n      Options\n    </button>\n    \n    <ul id="dropdown-menu" aria-labelledby="menu-button" hidden>\n      <li><a href="#option1">Option 1</a></li>\n      <li><a href="#option2">Option 2</a></li>\n    </ul>\n  </article>\n</main>\n\n<aside aria-label="Related articles">\n  <h2>Related Content</h2>\n  <nav>\n    <ul>\n      <li><a href="/related-1">Related Article 1</a></li>\n      <li><a href="/related-2">Related Article 2</a></li>\n    </ul>\n  </nav>\n</aside>`
                },
                {
                    type: 'code',
                    title: 'Accessible Form Implementation',
                    content: `<form>\n  <fieldset>\n    <legend>Personal Information</legend>\n    \n    <div class="form-group">\n      <label for="full-name">Full Name *</label>\n      <input \n        type="text" \n        id="full-name" \n        name="fullName"\n        required\n        aria-describedby="name-help name-error"\n      />\n      <div id="name-help" class="help-text">\n        Enter your first and last name\n      </div>\n      <div id="name-error" class="error-message" aria-live="polite">\n        <!-- Error message appears here -->\n      </div>\n    </div>\n    \n    <div class="form-group">\n      <label for="email">Email Address *</label>\n      <input \n        type="email" \n        id="email" \n        name="email"\n        required\n        aria-describedby="email-help"\n      />\n      <div id="email-help" class="help-text">\n        We'll never share your email with anyone\n      </div>\n    </div>\n    \n    <fieldset>\n      <legend>Preferred Contact Method</legend>\n      <div class="radio-group">\n        <input type="radio" id="contact-email" name="contact" value="email">\n        <label for="contact-email">Email</label>\n      </div>\n      <div class="radio-group">\n        <input type="radio" id="contact-phone" name="contact" value="phone">\n        <label for="contact-phone">Phone</label>\n      </div>\n    </fieldset>\n  </fieldset>\n  \n  <button type="submit">Submit Application</button>\n</form>`
                },
                {
                    type: 'default',
                    title: 'Testing for Accessibility',
                    content: "Regular accessibility testing is essential for maintaining inclusive websites. Use a combination of automated tools, manual testing, and user testing with people who use assistive technologies. Popular testing tools include axe-core, WAVE, and Lighthouse accessibility audits."
                },
                {
                    type: 'list',
                    title: 'Essential Accessibility Testing Tools',
                    items: [
                        'axe DevTools - Browser extension for automated testing',
                        'WAVE Web Accessibility Evaluator - Visual feedback tool',
                        'Lighthouse - Built-in Chrome accessibility audit',
                        'Screen Reader Testing - NVDA, JAWS, VoiceOver',
                        'Keyboard Navigation Testing - Tab through all functionality',
                        'Color Contrast Analyzers - WebAIM, Colour Contrast Analyser',
                        'Focus Management Tools - Check focus indicators and order'
                    ]
                },
                {
                    type: 'image',
                    title: 'Accessibility Testing in Action',
                    content: 'Regular testing with various tools and assistive technologies ensures your website works for all users. Screen readers, keyboard navigation, and color contrast tools are essential for comprehensive accessibility testing.',
                    image: '/assets/blog/accessibility-testing.webp'
                },
                {
                    type: 'quote',
                    content: "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.",
                    author: 'Tim Berners-Lee, W3C Director and inventor of the World Wide Web'
                }
            ],
            conclusion: 'Building accessible websites is an ongoing commitment that requires understanding user needs, implementing best practices, and continuous testing. By following WCAG guidelines, using semantic HTML, and incorporating ARIA attributes appropriately, you can create inclusive digital experiences that work for everyone. Remember that accessibility benefits all users and often leads to better overall design and usability.'
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