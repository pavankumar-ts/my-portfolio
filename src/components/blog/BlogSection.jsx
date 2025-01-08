// components/blog/BlogSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FiMaximize, FiMinimize } from 'react-icons/fi';

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
        const [isFullscreen, setIsFullscreen] = useState(false);
        const fullscreenRef = useRef(null);

        const toggleFullscreen = () => {
          const element = fullscreenRef.current;

          if (!element) return;

          if (!isFullscreen) {
            // Enter fullscreen
            if (element.requestFullscreen) {
              element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
              element.webkitRequestFullscreen(); // Safari
            } else if (element.msRequestFullscreen) {
              element.msRequestFullscreen(); // IE
            }
          } else {
            // Exit fullscreen
            if (document.fullscreenElement || document.webkitFullscreenElement) {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen(); // Safari
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen(); // IE
              }
            }
          }
        };

        useEffect(() => {
          const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
          };

          // Add event listener
          document.addEventListener('fullscreenchange', handleFullscreenChange);
          document.addEventListener('webkitfullscreenchange', handleFullscreenChange); // Safari

          // Cleanup event listener
          return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
          };
        }, []);

        return (
          <>
            {section.content && (
              <div className="text-primary/70 leading-relaxed prose prose-lg">
                <p>{section.content}</p>
              </div>
            )}
            {section.image && (
              <div
                ref={fullscreenRef}
                className="relative w-full aspect-video mt-8 overflow-hidden"
              >
                <Image
                  src={section.image}
                  alt={section.title || 'Blog section image'}
                  width={1200}
                  height={675}
                  className={`object-contain w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover'}`}
                />
                <button
                  className="absolute top-4 right-4 p-2 bg-primary/10 text-primary/70 hover:text-primary/90 rounded-full z-50"
                  onClick={toggleFullscreen}
                >
                  {isFullscreen ? <FiMinimize size={24} /> : <FiMaximize size={24} />}
                </button>
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

      case 'code':
        const [copied, setCopied] = useState(false);

        const handleCopy = () => {
          navigator.clipboard.writeText(section.content);
          setCopied(true);

          // Reset the text back to "Copy" after 2 seconds
          setTimeout(() => setCopied(false), 2000);
        };

        return section.content ? (
          <div className="relative group">
            {/* Code block container */}
            <div className="bg-gray-900 text-gray-100 rounded-md overflow-hidden shadow-md">
              <div className="flex justify-between items-center bg-gray-800 text-gray-400 text-xs px-4 py-2">
                <span>Code Snippet</span>
                <button
                  onClick={handleCopy}
                  className={`px-3 py-1 text-sm rounded transition-all ${copied
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    }`}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div className="overflow-x-auto">
                <pre className="px-4 py-3 text-sm font-mono whitespace-pre-wrap break-all">
                  <code className="text-primary/90">{section.content}</code>
                </pre>
              </div>
            </div>
          </div>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div
      className={`group border-b border-primary/10 pb-12 sm:pb-16 mb-12 sm:mb-16 hover:border-primary transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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