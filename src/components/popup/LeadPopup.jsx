import { usePopup } from "@/contexts/PopupContext";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRouter } from "next/router";

// src/components/common/LeadPopup.jsx
const LeadPopup = () => {
    const { isOpen, closePopup, popupTitle } = usePopup();
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });
    const [buttonText, setButtonText] = useState('Request Callback');
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setButtonText('Sending...');

        // Send email using EmailJS
        emailjs.sendForm('my_portfolio', 'my_portfolio_template', e.target, 'envDnIzt4XmWq_8T9')
            .then((result) => {
                console.log(result.text);
                setButtonText('Sent');
                router.push('/thank-you');
                // Close popup after successful submission
                setTimeout(() => {
                    closePopup();
                    // Reset form and button state
                    setFormData({ name: '', phone: '' });
                    setButtonText('Request Callback');
                }, 0);
                
                e.target.reset(); // Clear the input fields
            }, (error) => {
                console.log(error.text);
                setButtonText('Request Callback');
                alert('Failed to send message. Please try again.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={closePopup}
            ></div>
            
            {/* Popup Content */}
            <div className="relative bg-bgColor rounded-lg p-8 shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
                {/* Close Button */}
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-textColor mb-2">{popupTitle}</h3>
                    <p className="text-textColor/70">
                        Submit your details and receive a call back within 24 hours.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-textColor mb-2">
                            Your Name*
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border border-primary/20 rounded-lg focus:outline-none focus:border-logoColor transition-colors bg-bgColor text-textColor"
                            placeholder="Enter your full name"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-textColor mb-2">
                            Phone Number*
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border border-primary/20 rounded-lg focus:outline-none focus:border-logoColor transition-colors bg-bgColor text-textColor"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className={`w-full p-4 rounded-lg font-medium transition-all duration-300 ${
                            isSending 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-logoColor hover:bg-logoColor/90 hover:transform hover:-translate-y-1 hover:shadow-lg'
                        } text-white`}
                    >
                        {buttonText}
                    </button>
                </form>

                {/* Trust Message */}
                <p className="text-xs text-textColor/60 text-center mt-4">
                   Your privacy is respected. All information remains secure and confidential.
                </p>
            </div>
        </div>
    );
};

export default LeadPopup;