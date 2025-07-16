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
            className="px-4 sm:px-6 md:px-8 lg:px-12 min-h-[100vh] sm:min-h-[90vh] pb-8 sm:pb-12 md:pb-16 lg:mb-[10rem] flex flex-col justify-center items-center relative"
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
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="order-1 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                            Ready to Take Your{' '}
                            <span
                                className="relative inline-block"
                                style={{
                                    backgroundImage: 'url("/assets/campaign/paint_stroke.png")',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <span className="text-white px-2 sm:px-3 py-1 sm:py-2">Business</span>
                            </span>{' '}
                            Online? Start Here.
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed text-white/90 max-w-2xl mx-auto lg:mx-0">
                            Professional website development for businesses taking their first step online. From idea to live website, including everything you need to succeed online.
                        </p>
                        <div className="flex flex-row sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <a
                                href="#services"
                                className="px-4 sm:px-4 py-3 sm:py-3 font-medium text-center transition-all duration-300 hover:transform hover:shadow-lg hover:-translate-y-1 bg-transparent border-2 border-white text-white text-sm sm:text-base rounded-none"
                            >
                                Explore Services
                            </a>
                            <a
                                href="#projects"
                                className="px-4 sm:px-4 py-3 sm:py-3 font-medium text-center border border-primary/20 transition-all duration-300 bg-bgColor hover:shadow-lg text-textColor hover:transform hover:-translate-y-1 text-sm sm:text-base rounded-none"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="order-2 w-full flex justify-center">
                        <div className="w-full max-w-[500px] mx-auto p-4 sm:p-6 md:p-8 shadow-2xl bg-bgColor border border-primary/10 rounded-none">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-logoColor">
                                Get a Free Consultation
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name*"
                                        required
                                        disabled={isSending}
                                        className="w-full p-3 sm:p-4 focus:outline-none transition-colors text-sm sm:text-base border border-primary/20 bg-bgColor text-textColor focus:border-logoColor disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
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
                                        className="w-full p-3 sm:p-4 focus:outline-none transition-colors text-sm sm:text-base border border-primary/20 bg-bgColor text-textColor focus:border-logoColor disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        disabled={isSending}
                                        rows={3}
                                        className="w-full p-3 sm:p-4 min-h-[80px] max-h-[120px] focus:outline-none transition-colors text-sm sm:text-base border border-primary/20 bg-bgColor text-textColor focus:border-logoColor disabled:opacity-50 disabled:cursor-not-allowed rounded-none resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`w-full p-3 sm:p-4 font-medium transition-all duration-300 text-sm sm:text-base rounded-none ${
                                        isSending
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