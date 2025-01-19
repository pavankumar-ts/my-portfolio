// pages/blog/[slug].jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Head from 'next/head';
import ContactCTA from '@/components/common/ContactCTA';
import BlogCard from '@/components/blog/BlogCard';
import BlogSection from '@/components/blog/BlogSection';
import { blogs } from '@/data/blog';


export default function BlogPost({ post, relatedPosts }) {
    if (!post) return null;

    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: relatedRef, inView: relatedInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Create a properly formatted JSON-LD object
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.pavankumar.co/blog/${post.slug}`
        },
        "headline": post.title,
        "description": post.description,
        "image": post.mainImg ? `https://www.pavankumar.co${post.mainImg}` : undefined,
        "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role,
            "image": `https://www.pavankumar.co${post.author.image}`,
            "url": "https://www.pavankumar.co"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Pavan Kumar",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.pavankumar.co/assets/logo.svg"
            }
        },
        "datePublished": post.date,
        "dateModified": post.dateModified || post.date,
        "keywords": post.tags ? post.tags.join(', ') : '',
        "articleBody": (() => {
            // Helper function to clean content
            const cleanContent = (text) => {
                if (!text) return '';
                return text
                    .replace(/\n+/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();
            };

            // Get introduction
            const introduction = cleanContent(post.content?.introduction);

            // Get section content, excluding code sections
            const sectionsContent = post.content?.sections
                ?.filter(section => section.type !== 'code') // Exclude code sections
                ?.map(section => {
                    if (section.type === 'list' && Array.isArray(section.items)) {
                        return section.items.join(', ');
                    }
                    return section.content;
                })
                ?.filter(Boolean)
                ?.map(cleanContent)
                ?.join('. ') || '';

            // Get conclusion
            const conclusion = cleanContent(post.content?.conclusion);

            return [introduction, sectionsContent, conclusion]
                .filter(Boolean)
                .join('. ')
                .trim();
        })(),
        "url": `https://www.pavankumar.co/blog/${post.slug}`,
        "articleSection": "Blog",
        "inLanguage": "en-US"
    };

    return (
        <>
            <Head>
                <title>{`${post.title} | Blog | Pavan Kumar`}</title>
                <meta name="description" content={post.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Primary Meta Tags */}
                <meta name="keywords" content={`${post.title}, ${post.tags?.join(', ') || ''}, web development, technical blog, software engineering, React, Next.js, development tips, coding tutorials, software development blog`} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Pavan Kumar" />
                <meta property="og:title" content={`${post.title} | Blog | Pavan Kumar`} />
                <meta property="og:description" content={post.description} />
                {post.mainImg && (
                    <>
                        <meta property="og:image" content={`https://www.pavankumar.co${post.mainImg}`} />
                        <meta property="og:image:secure_url" content={`https://www.pavankumar.co${post.mainImg}`} />
                        <meta property="og:image:width" content="1200" />
                        <meta property="og:image:height" content="630" />
                        <meta property="og:image:type" content="image/webp" />
                    </>
                )}
                <meta property="og:url" content={`https://www.pavankumar.co/blog/${post.slug}`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${post.title} | Blog | Pavan Kumar`} />
                <meta name="twitter:description" content={post.description} />
                {post.mainImg && (
                    <meta name="twitter:image" content={`https://www.pavankumar.co${post.mainImg}`} />
                )}

                {/* Additional Meta Tags */}
                <meta property="og:locale" content="en_US" />
                <link rel="canonical" href={`https://www.pavankumar.co/blog/${post.slug}`} />

                {/* Fixed JSON-LD Implementation */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd)
                    }}
                />
            </Head>

            <article className="min-h-screen bg-gradient-to-b from-transparent to-primary/5">
                <div className="container">


                    {/* Hero Section */}
                    <header
                        ref={heroRef}
                        className={`pb-6 sm:pb-8 transition-all duration-1000 transform ${
                            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        {/* Meta info */}
                        <div className="flex items-center justify-center gap-3 sm:gap-4 text-primary/60 mb-6 sm:mb-8 text-sm sm:text-base">
                            <span className="font-medium">{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>

                        {/* Title */}
                        <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-center max-w-[1200px] mx-auto mb-8 sm:mb-12">
                            {post.title}
                        </h1>

                        {/* Tags */}
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                            {post.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/5 text-primary/60 text-xs sm:text-sm rounded-full hover:bg-primary/10 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Author info */}
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden relative ring-4 ring-[#f16829c4]">
                                <Image
                                    src={post.author.image}
                                    alt={post.author.name}
                                    width={200}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="text-left">
                                <div className="font-semibold text-base sm:text-lg">{post.author.name}</div>
                                <div className="text-primary/60 text-sm sm:text-base">{post.author.role}</div>
                            </div>
                        </div>

                        {/* Main Image */}
                        {post.mainImg && (
                            <div className="relative w-fulloverflow-hidden ">
                                <Image
                                    src={post.mainImg}
                                    alt={post.title}
                                    width={1920}
                                    height={1080}
                                    className="object-contain mx-auto w-auto max-h-[500px] shadow-xl sm:shadow-2xl"
                                    priority
                                />
                            </div>
                        )}
                    </header>

                    {/* Content Section */}
                    <main
                        ref={contentRef}
                        className="max-w-3xl mx-auto py-12 sm:py-16 md:py-20"
                    >
                        {/* Introduction */}
                        {post.content?.introduction && (
                            <div
                                className={`mb-12 sm:mb-16 transition-all duration-1000 transform ${
                                    contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            >
                                <p className="text-lg sm:text-xl md:text-2xl text-primary/80 leading-relaxed">
                                    {post.content.introduction}
                                </p>
                            </div>
                        )}

                        {/* Content Sections */}
                        {post.content?.sections?.map((section, index) => (
                            <BlogSection
                                key={index}
                                section={section}
                                index={index}
                                inView={contentInView}
                            />
                        ))}

                        {/* Conclusion */}
                        {post.content?.conclusion && (
                            <div
                                className={`transition-all duration-1000 transform ${
                                    contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    transitionDelay: `${(post.content.sections?.length || 0) * 200}ms`
                                }}
                            >
                                <p className="text-lg sm:text-xl md:text-2xl text-primary/80 leading-relaxed">
                                    {post.content.conclusion}
                                </p>
                            </div>
                        )}
                    </main>
                </div>

                <ContactCTA />

                {/* Related Posts Section */}
                {relatedPosts?.length > 0 && (
                    <section
                        ref={relatedRef}
                        className={`container py-12 sm:py-16 md:py-20 transition-all duration-1000 transform ${
                            relatedInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
                            Related Articles
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {relatedPosts.map((relatedPost, index) => (
                                <BlogCard
                                    key={relatedPost.id}
                                    blog={relatedPost}
                                    inView={relatedInView}
                                    categoryChanged={false}
                                    index={index}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </>
    );
}

export async function getStaticPaths() {
    const paths = blogs.map((post) => ({
        params: { slug: post.slug }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const post = blogs.find(p => p.slug === params.slug);
    if (!post) {
        return { notFound: true };
    }

    const relatedPosts = blogs
        .filter(b => b.id !== post.id && post.relatedPosts?.includes(b.id))
        .slice(0, 3);

    return {
        props: {
            post,
            relatedPosts
        }
    };
}