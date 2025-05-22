import React from 'react';

const ContactSection = () => {
    return (
        <section className="" id="contact">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-textColor">
                            Hire a Professional Web Developer in Bengaluru
                        </h2>
                        <p className="text-lg text-textColor/70 mb-8 leading-relaxed">
                            Fill out the form and I'll get back to you within 24 hours to discuss your web design and development needs.
                            Whether you need a small business website, eCommerce solution, or custom web application, I'm here to help.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-logoColor/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-logoColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-medium text-textColor">Phone</div>
                                    <div className="text-textColor/70">+91 948262200</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-logoColor/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-logoColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-medium text-textColor">Email</div>
                                    <div className="text-textColor/70">contact@pavankumar.co</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-logoColor/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-logoColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-medium text-textColor">Location</div>
                                    <div className="text-textColor/70">Bengaluru, Karnataka, India</div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="mt-8 p-6 bg-bgColor rounded-xl border border-primary/10">
                            <h3 className="font-semibold text-textColor mb-3">Why Choose Me?</h3>
                            <ul className="space-y-2 text-sm text-textColor/70">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-logoColor rounded-full"></div>
                                    Fast turnaround times
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-logoColor rounded-full"></div>
                                    Transparent pricing
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-logoColor rounded-full"></div>
                                    Post-launch support
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-logoColor rounded-full"></div>
                                    SEO-optimized websites
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div>
                        <div className="bg-bgColor border border-primary/10 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-textColor">
                                Let's Discuss Your Project
                            </h3>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-textColor mb-2">
                                        Full Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full p-4 border border-primary/20 rounded-lg focus:outline-none focus:border-logoColor transition-colors bg-bgColor text-textColor"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-textColor mb-2">
                                        Email Address*
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full p-4 border border-primary/20 rounded-lg focus:outline-none focus:border-logoColor transition-colors bg-bgColor text-textColor"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-textColor mb-2">
                                        Phone Number*
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full p-4 border border-primary/20 rounded-lg focus:outline-none focus:border-logoColor transition-colors bg-bgColor text-textColor"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-textColor mb-2">
                                        Website Service Interested In
                                    </label>
                                    <select
                                        name="service"
                                        className="w-full p-4 border border-primary/20 rounded-lg focus:outline-none focus:border-logoColor transition-colors bg-bgColor text-textColor appearance-none"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' fill='rgba(0,0,0,0.5)'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 15px center',
                                            backgroundSize: '20px'
                                        }}
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="business">Business Website</option>
                                        <option value="cms">CMS Development</option>
                                        <option value="ecommerce">eCommerce Website</option>
                                        <option value="custom">Custom Web Application</option>
                                        <option value="responsive">Responsive Web Design</option>
                                        <option value="seo">SEO Services</option>
                                        <option value="maintenance">Website Maintenance</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-textColor mb-2">
                                        Project Details
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Tell us about your project requirements..."
                                        className="w-full p-4 border border-primary/20 rounded-lg focus:outline-none focus:border-logoColor transition-colors bg-bgColor text-textColor resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full p-4 bg-logoColor text-white rounded-lg font-medium transition-all duration-300 hover:bg-logoColor/90 hover:transform hover:-translate-y-1 hover:shadow-lg"
                                >
                                    Request Free Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;