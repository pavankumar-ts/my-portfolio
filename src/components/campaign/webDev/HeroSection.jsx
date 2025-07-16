import React, { useState } from 'react';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';

const HeroSection = () => {
    const router = useRouter();
    const [buttonText, setButtonText] = useState('Book Free Consultation');
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setButtonText('Sending...');

        // Send email using EmailJS
        emailjs.sendForm('my_portfolio', 'my_portfolio_template', e.target, 'envDnIzt4XmWq_8T9')
            .then((result) => {
                console.log(result.text);
                setButtonText('Sent');
                router.push('/thank-you?campaign=web-dev&form=hero');
                e.target.reset(); // Clear the input fields
                setFormData({ name: '', phone: '', message: '' }); // Reset state
            }, (error) => {
                console.log(error.text);
                setButtonText('Book My Free Consultation');
                alert('Failed to send message. Please try again.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div
            className="px-4 md:px-12 min-h-[89vh] mb-16 md:mb-[10rem] flex flex-col justify-center items-center relative"
            style={{
                backgroundImage: 'url("/assets/campaign/hero.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Background overlay for opacity control */}
            <div
                className="absolute inset-0 bg-black"
                style={{ opacity: 0.6 }}
            ></div>

            {/* Content wrapper with relative positioning */}
            <div className="relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white  " style={{ lineHeight: '1.3' }}>
                            Ready to Take Your <span
                                className="relative inline-block"
                                style={{
                                    backgroundImage: 'url("/assets/campaign/paint_stroke.png")',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <span className="text-white px-3 py-2">Business </span>
                            </span>Online? Start Here.
                        </h1>
                        <p className="text-lg mb-8 leading-relaxed text-white">
                            Professional website development for businesses taking their first step online. From idea to live website, including everything you need to succeed online.
                        </p>
                        <div className="flex flex-row gap-3 sm:gap-4">
                            <a
                                href="#services"
                                className=" px-4 sm:px-8 py-4 font-medium text-center transition-all duration-300 hover:transform hover:shadow-lg hover:-translate-y-1 bg-transparent border-2 text-bgColor text-sm sm:text-base"
                            >
                                Explore Services
                            </a>
                            <a
                                href="#projects"
                                className=" px-4 sm:px-8 py-4 font-medium text-center border border-primary/20 transition-all duration-300 bg-bgColor hover:shadow-lg text-textColor hover:transform hover:-translate-y-1 text-sm sm:text-base"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>
                    {/* Right Form - Now with max width and centered */}
                    <div className="w-full flex justify-center">
                        <div className="w-full  max-w-[520px] p-4 md:p-8 shadow-xl bg-bgColor border border-primary/10">
                            <h3 className="text-2xl font-semibold mb-5 text-center text-logoColor">
                                Get a Free Consultation
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name*"
                                        required
                                        disabled={isSending}
                                        className="w-full p-4  focus:outline-none transition-colors text-base border border-primary/20 bg-bgColor text-textColor focus:border-logoColor disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number*"
                                        required
                                        disabled={isSending}
                                        className="w-full p-4  focus:outline-none transition-colors text-base border border-primary/20 bg-bgColor text-textColor focus:border-logoColor disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        disabled={isSending}
                                        className="w-full p-4 min-h-[70px] max-h-[120px] focus:outline-none transition-colors text-base border border-primary/20 bg-bgColor text-textColor focus:border-logoColor disabled:opacity-50 disabled:cursor-not-allowed"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`w-full p-4 font-medium transition-all duration-300 text-base ${isSending
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-logoColor hover:transform hover:-translate-y-1 hover:shadow-lg'
                                        } text-secondary`}
                                >
                                    {buttonText}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;