// components/blog/BlogCard.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog, inView, categoryChanged, index }) => {
    if (!blog) return null;

    return (
        <Link
            href={`/blog/${blog.slug}`}
            className={`group transition-all duration-1000 transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${
                categoryChanged ? 'opacity-0 scale-95' : ''
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            <div className="relative aspect-video mb-6 h-[240px] w-full bg-gray-100 overflow-hidden">
                {blog.mainImg && (
                    <Image
                        src={blog.mainImg}
                        alt={blog.title || 'Blog post image'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}
            </div>

            <div className="space-y-4">
                <div className="flex flex-col gap-2">
                    {/* Meta information */}
                    <div className="flex items-center gap-3 text-sm text-primary/60">
                        {blog.date && <span>{blog.date}</span>}
                        {blog.date && blog.readTime && <span>•</span>}
                        {blog.readTime && <span>{blog.readTime}</span>}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                        {blog.title || 'Untitled Post'}
                    </h2>
                </div>

                {/* Description */}
                {blog.description && (
                    <p className="text-primary/60 leading-relaxed line-clamp-3">
                        {blog.description}
                    </p>
                )}

                {/* Read More Button */}
                <div className="inline-flex font-medium items-center gap-2 border border-primary/20 px-4 py-2 text-primary hover:bg-primary hover:text-secondary transition-colors duration-300">
                    Read Article
                    <span>→</span>
                </div>
            </div>
        </Link>
    );
};

BlogCard.defaultProps = {
    inView: false,
    categoryChanged: false,
    index: 0
};

export default BlogCard;