import React, { useState } from 'react';

const ProjectEmbed = ({ link }) => {
    const [viewMode, setViewMode] = useState('desktop');

    const viewModes = {
        desktop: { 
            width: '100%', 
            height: '600px',
            // maxWidth: '1200px',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
        mobile: { 
            width: '375px', 
            height: '812px', 
            borderRadius: '36px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '8px solid #111',
            position: 'relative',
            overflow: 'hidden'
        }
    };

    return (
        <div className="w-full mb-20 flex flex-col items-center">
            <div className="flex justify-center mb-6 bg-gray-100 rounded-full p-1 space-x-2">
                <button 
                    onClick={() => setViewMode('desktop')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                        viewMode === 'desktop' 
                        ? 'bg-primary text-secondary shadow-md' 
                        : 'text-primary/60 hover:bg-primary/5'
                    }`}
                >
                    Desktop
                </button>
                <button 
                    onClick={() => setViewMode('mobile')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                        viewMode === 'mobile' 
                        ? 'bg-primary text-secondary shadow-md' 
                        : 'text-primary/60 hover:bg-primary/5'
                    }`}
                >
                    Mobile
                </button>
            </div>
            <div 
                className="w-full flex justify-center transition-all duration-500 ease-in-out"
                style={{
                    ...(viewMode === 'mobile' && {
                        position: 'relative',
                        '::before': {
                            content: '""',
                            position: 'absolute',
                            top: '-15px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '50%',
                            height: '30px',
                            background: '#000',
                            borderRadius: '0 0 20px 20px'
                        }
                    })
                }}
            >
                <embed
                    src={link}
                    style={{
                        ...viewModes[viewMode],
                        objectFit: 'cover',
                        transition: 'all 0.5s ease-in-out'
                    }}
                    className="border border-gray-200/50 "
                />
            </div>
        </div>
    );
};

export default ProjectEmbed;