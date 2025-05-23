// src/contexts/PopupContext.jsx
import LeadPopup from '@/components/popup/LeadPopup';
import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup must be used within a PopupProvider');
    }
    return context;
};

export const PopupProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [popupTitle, setPopupTitle] = useState('Get Free Consultation');

    const openPopup = (title = 'Get Free Consultation') => {
        setPopupTitle(title);
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <PopupContext.Provider value={{ isOpen, openPopup, closePopup, popupTitle }}>
            {children}
            <LeadPopup />
        </PopupContext.Provider>
    );
};


// Example usage in any component:
/*
import { usePopup } from '@/contexts/PopupContext';

const AnyComponent = () => {
    const { openPopup } = usePopup();

    return (
        <button 
            onClick={() => openPopup('Get Your Free Quote')}
            className="bg-logoColor text-white px-6 py-3 rounded-lg"
        >
            Get Quote
        </button>
    );
};
*/