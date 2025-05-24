import React from 'react';

const HeroSection = () => {
    return (
        <div className="container min-h-[80vh] flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    {/* Option 1 */}
                    {/* <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-textColor  " style={{ lineHeight: '1.3' }}>
                        Still Losing <span
                            className="relative inline-block"
                            style={{
                                backgroundImage: 'url("/assets/campaign/paint_stroke.png")',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <span className="text-white px-3 py-2">Customers</span>
                        </span> to Competitors With Better Websites?
                    </h1> */}
                    {/* Option 2 */}
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-textColor  " style={{ lineHeight: '1.3' }}>
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
                    <p className="text-lg mb-8 leading-relaxed text-textColor/70">
                        Professional website development for businesses taking their first step online. From idea to live website, including everything you need to succeed online.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#services"
                            className="inline-block px-8 py-4  font-medium text-center transition-all duration-300 hover:transform  hover:shadow-lg  hover:-translate-y-1 bg-textColor text-bgColor"
                        >
                            Explore Services
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
                            Get A Free Consultation
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