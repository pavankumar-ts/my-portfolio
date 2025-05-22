import React from 'react';

const HeroSection = () => {
    return (
        <div className="container min-h-[80vh] flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-textColor" style={{ lineHeight: '1.3' }}>
                        Top-Rated Website Designer & Developer in Bengaluru
                    </h1>
                    <p className="text-lg mb-8 leading-relaxed text-textColor/70">
                        Professional, affordable, and responsive web design services for businesses of all sizes.
                        Specializing in custom web applications, responsive designs, and eCommerce website development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#services"
                            className="inline-block px-8 py-4  font-medium text-center transition-all duration-300 hover:transform  hover:shadow-lg  hover:-translate-y-1 bg-textColor text-bgColor"
                        >
                            Explore Our Services
                        </a>
                        <a
                            href="#portfolio"
                            className="inline-block px-8 py-4  font-medium text-center border border-primary/20 transition-all duration-300 bg-bgColor  hover:shadow-lg  text-textColor  hover:transform hover:-translate-y-1"
                        >
                            View Portfolio
                        </a>
                    </div>
                </div>

                {/* Right Form */}
                <div className="w-full">
                    <div className="p-8 shadow-xl bg-bgColor border border-primary/10">
                        <h3 className="text-2xl font-semibold mb-5 text-center text-logoColor">
                            Get A Free Website Consultation
                        </h3>
                        <form className="space-y-5">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name*"
                                    required
                                    className="w-full p-4  focus:outline-none transition-colors text-base border border-primary/20 bg-bgColor text-textColor focus:border-logoColor"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number*"
                                    required
                                    className="w-full p-4  focus:outline-none transition-colors text-base border border-primary/20 bg-bgColor text-textColor focus:border-logoColor"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    className="w-full p-4 min-h-[70px] max-h-[120px] focus:outline-none transition-colors text-base border border-primary/20 bg-bgColor text-textColor focus:border-logoColor"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full p-4  font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg text-base bg-logoColor text-secondary"
                            >
                                Book My Free Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;