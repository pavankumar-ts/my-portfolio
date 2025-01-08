// pages/blog/index.js
import Head from 'next/head';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import BlogCard from '@/components/blog/BlogCard';
import ContactCTA from '@/components/common/ContactCTA';
import TitleHeroSection from '@/components/common/TitleHeroSection';
import { blogs, blogCategories } from '@/data/blog';

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(1); // Default to 'All Posts'
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [categoryChanged, setCategoryChanged] = useState(false);

    const handleCategoryChange = (categoryId) => {
        setCategoryChanged(true);
        setSelectedCategory(categoryId);
        setTimeout(() => setCategoryChanged(false), 500);
    };

    const filteredBlogs = selectedCategory === 1
        ? blogs
        : blogs.filter(blog => blog.category.includes(selectedCategory));

    return (
        <>
            <Head>
                <title>Blog | Pavan Kumar - Web Development Insights & Technical Articles</title>
                <meta name="description" content="Explore articles about web development, React, Next.js, and software engineering best practices. Learn about modern development techniques and industry insights." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="React development blog, Next.js tutorials, web development articles, software engineering insights, technical blog, frontend development tips" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog | Pavan Kumar - Web Development Insights & Technical Articles" />
                <meta property="og:description" content="Explore articles about web development, React, Next.js, and software engineering best practices. Learn about modern development techniques and industry insights." />
                <meta name="twitter:title" content="Blog | Pavan Kumar - Web Development Insights & Technical Articles" />
                <meta name="twitter:description" content="Explore articles about web development, React, Next.js, and software engineering best practices. Learn about modern development techniques and industry insights." />
            </Head>

            <div ref={ref} className="container">
                {/* Section Title */}
                <TitleHeroSection
                    title="LATEST"
                    title2="ARTICLES"
                />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {blogCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id)}
                            className={`px-6 py-2 border transition-colors ${
                                selectedCategory === category.id
                                    ? 'bg-primary text-secondary'
                                    : 'border-primary/10 hover:border-primary/50'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
                    {filteredBlogs.map((blog, index) => (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                            inView={inView}
                            categoryChanged={categoryChanged}
                            index={index}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredBlogs.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
                        <p className="text-primary/60">Try selecting a different category</p>
                    </div>
                )}
            </div>

            <ContactCTA />
        </>
    );
};

export default BlogPage;