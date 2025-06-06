// src/components/common/Navbar.jsx

import { usePopup } from "@/contexts/PopupContext";
import Link from "next/link";

const Navbar = () => {
    const { openPopup } = usePopup();

    return (
        <nav className="w-full z-50 transition-all duration-300 ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between py-5">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center">
                            <img
                                src="/assets/logo.svg"
                                alt="Pavan Kumar - Web Developer"
                                className="h-[30px] w-auto"
                            />
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg">
                        <div
                            onClick={() => openPopup('Get A Free Consultation')}
                            className="px-2 md:px-6 py-2 md:py-3 bg-logoColor text-white  font-medium cursor-pointer"
                        >
                            Free Consultation
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;