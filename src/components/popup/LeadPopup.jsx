import { usePopup } from "@/contexts/PopupContext";
import { useState } from "react";

// src/components/common/LeadPopup.jsx
const LeadPopup = () => {
    const { isOpen, closePopup, popupTitle } = usePopup();
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
        closePopup();
        // Reset form
        setFormData({ name: '', phone: '' });
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
                    {/* <div className="w-16 h-16 bg-logoColor/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-logoColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div> */}
                    <h3 className="text-2xl font-bold text-textColor mb-2">{popupTitle}</h3>
                    <p className="text-textColor/70">
                        Fill in your details and I'll call you back within 24 hours.
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
                        className="w-full p-4 bg-logoColor text-white rounded-lg font-medium transition-all duration-300 hover:bg-logoColor/90 hover:transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        Request Callback
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