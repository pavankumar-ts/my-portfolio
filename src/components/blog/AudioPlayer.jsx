// // components/blog/AudioPlayer.jsx
// 'use client';

// import React, { useState, useMemo } from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import { Volume2, Pause, VolumeX } from 'lucide-react';

// const AudioPlayer = ({ content }) => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const { speak, cancel, speaking, supported } = useSpeechSynthesis();

//     const processedText = useMemo(() => {
//         // Combine all content into one readable text
//         const text = `
//             ${content.introduction}
//             ${content.sections.map(section => {
//                 if (section.type === 'list') {
//                     return `${section.title}. ${section.items.join('. ')}`;
//                 }
//                 return `${section.title}. ${section.content}`;
//             }).join(' ')}
//             ${content.conclusion}
//         `;
//         return text;
//     }, [content]);

//     const handleToggle = () => {
//         if (speaking) {
//             cancel();
//             setIsPlaying(false);
//         } else {
//             speak({ text: processedText });
//             setIsPlaying(true);
//         }
//     };

//     if (!supported) {
//         return (
//             <button
//                 disabled
//                 className="fixed bottom-8 right-8 z-50 inline-flex items-center gap-2 px-6 py-3 bg-gray-400 text-white rounded-full shadow-xl"
//             >
//                 <VolumeX className="h-5 w-5" />
//                 <span className="font-medium">Not Supported</span>
//             </button>
//         );
//     }

//     return (
//         <button
//             onClick={handleToggle}
//             className="fixed bottom-8 right-8 z-50 inline-flex items-center gap-2 px-6 py-3 bg-logoColor hover:bg-logoColor/90 text-white rounded-full shadow-xl transition-all duration-300"
//         >
//             {speaking ? (
//                 <>
//                     <Pause className="h-5 w-5" />
//                     <span className="font-medium">Pause</span>
//                 </>
//             ) : (
//                 <>
//                     <Volume2 className="h-5 w-5" />
//                     <span className="font-medium">Listen</span>
//                 </>
//             )}
//         </button>
//     );
// };

// export default AudioPlayer;