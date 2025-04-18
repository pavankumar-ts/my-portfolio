import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import CalEmbed from '../common/CalEmbed';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectDetails: ''
    });
    const [showCalendar, setShowCalendar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.send(
                'my_portfolio',
                'template_pricing',
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.projectDetails,
                },
                'envDnIzt4XmWq_8T9'
            );

            setStatus({
                type: 'success',
                message: 'Thank you! Your consultation request has been received.'
            });
            
            // Show calendar after successful form submission
            setTimeout(() => {
                setShowCalendar(true);
            }, 1500);
            
        } catch (error) {
            console.error('Submission failed:', error);
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or contact us directly.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Clear success message after some time
    useEffect(() => {
        let timer;
        if (status.type === 'success' && !showCalendar) {
            timer = setTimeout(() => {
                setStatus({ type: '', message: '' });
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [status, showCalendar]);

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    const contentItems = [
        { icon: "🎯", text: "Strategic Business Planning", description: "Get expert guidance on aligning your technology with business objectives" },
        { icon: "💡", text: "Technical Guidance", description: "Navigate complex technical decisions with confidence" },
        { icon: "⚡", text: "Implementation Support", description: "Turn strategies into actionable plans with dedicated support" }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-[var(--bg-color)] to-[var(--bg-color)]/95 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.7, 
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                        className="max-w-xl"
                    >
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-color)]"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Ready to transform your business?
                        </motion.h2>
                        
                        <motion.p 
                            className="text-xl text-[var(--text-color)]/80 mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Book a free 1:1 consultation to discuss your business needs and discover how our consulting services can help you achieve your goals.
                        </motion.p>

                        <motion.div 
                            className="space-y-6 mb-10"
                            variants={formVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {contentItems.map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex items-start p-4 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] shadow-sm"
                                    variants={itemVariants}
                                    whileHover={{ 
                                        scale: 1.02, 
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="text-3xl mr-4 p-2 bg-primary/10 rounded-lg">{item.icon}</span>
                                    <div>
                                        <h3 className="font-semibold text-lg text-[var(--text-color)]">{item.text}</h3>
                                        <p className="text-[var(--text-color)]/70 mt-1">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.7, 
                            ease: [0.25, 0.1, 0.25, 1] 
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {!showCalendar ? (
                                <motion.div 
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="bg-[var(--bg-color)] p-8 rounded-xl border border-[var(--border-color)] shadow-lg"
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-[var(--text-color)]">Book Your Consultation</h3>
                                    
                                    <AnimatePresence>
                                        {status.message && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className={`p-4 mb-6 rounded-lg text-center ${
                                                    status.type === 'success'
                                                    ? 'bg-green-100/10 text-green-500 border border-green-500/20'
                                                    : 'bg-red-100/10 text-red-500 border border-red-500/20'
                                                }`}
                                            >
                                                {status.message}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <motion.div variants={itemVariants}>
                                            <label htmlFor="name" className="block text-[var(--text-color)]/80 mb-2 text-sm">Your Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full p-3 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                            />
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label htmlFor="email" className="block text-[var(--text-color)]/80 mb-2 text-sm">Email Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Enter your email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full p-3 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                            />
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label htmlFor="projectDetails" className="block text-[var(--text-color)]/80 mb-2 text-sm">Project Details</label>
                                            <textarea
                                                id="projectDetails"
                                                name="projectDetails"
                                                required
                                                placeholder="Describe your project goals and challenges"
                                                value={formData.projectDetails}
                                                onChange={handleChange}
                                                rows={5}
                                                className="w-full p-3 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                            />
                                        </motion.div>

                                        <motion.button
                                            type="submit"
                                            disabled={isLoading}
                                            className={`w-full py-4 px-6 bg-primary text-white rounded-lg font-medium transition-all ${
                                                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 hover:shadow-lg'
                                            }`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin" />
                                                    Processing...
                                                </span>
                                            ) : (
                                                'Book Consultation'
                                            )}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="calendar"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="bg-[var(--bg-color)] p-6 rounded-xl border border-[var(--border-color)] shadow-lg"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-2xl font-bold text-[var(--text-color)]">Schedule Your Meeting</h3>
                                        <button 
                                            onClick={() => {
                                                setShowCalendar(false);
                                                setFormData({ name: '', email: '', projectDetails: '' });
                                                setStatus({ type: '', message: '' });
                                            }}
                                            className="text-[var(--text-color)]/50 hover:text-[var(--text-color)] transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="h-[600px] overflow-y-auto rounded-lg border border-[var(--border-color)]">
                                        <CalEmbed />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;