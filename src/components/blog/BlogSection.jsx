// components/blog/BlogSection.jsx
import React from 'react';
import Image from 'next/image';

const BlogSection = ({ section, index, inView }) => {
  if (!section) return null;

  const renderContent = () => {
    if (!section.type) return null;

    switch (section.type) {
      case 'default':
        return (
          <div className="text-primary/70 leading-relaxed prose prose-lg">
            {section.content && <p>{section.content}</p>}
          </div>
        );

      case 'image':
        return (
          <>
            {section.content && (
              <div className="text-primary/70 leading-relaxed prose prose-lg">
                <p>{section.content}</p>
              </div>
            )}
            {section.image && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mt-8">
                <Image
                  src={section.image}
                  alt={section.title || 'Blog section image'}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </>
        );

      case 'list':
        return section.items?.length > 0 ? (
          <ul className="space-y-4">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary/40">•</span>
                <span className="text-primary/70">{item}</span>
              </li>
            ))}
          </ul>
        ) : null;

      case 'quote':
        return section.content ? (
          <blockquote className="border-l-4 border-primary/20 pl-6 py-4 my-8">
            <p className="text-xl italic text-primary/70">{section.content}</p>
            {section.author && (
              <footer className="mt-2 text-sm text-primary/60">
                — {section.author}
              </footer>
            )}
          </blockquote>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div
      className={`group border-b border-primary/10 pb-12 sm:pb-16 mb-12 sm:mb-16 hover:border-primary transition-all duration-1000 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex items-start gap-4 sm:gap-8">
        <span className="text-xs sm:text-sm font-medium text-primary/40 group-hover:text-primary/60 transition-colors pt-2">
          [{String(index + 1).padStart(2, '0')}]
        </span>
        <div className="space-y-6 sm:space-y-8 flex-1">
          {section.title && (
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {section.title}
            </h2>
          )}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;