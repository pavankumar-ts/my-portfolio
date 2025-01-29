import { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import React from "react";

const BookCall = ({ isDarkMode }) => {
    const calApiRef = useRef(null);

    useEffect(() => {
        let isSubscribed = true;

        const initializeCalendar = async () => {
            if (!calApiRef.current) {
                const cal = await getCalApi({ namespace: "15min" });
                if (isSubscribed) {
                    calApiRef.current = cal;
                    cal("ui", {
                        hideEventTypeDetails: false,
                        layout: "month_view",
                        theme: isDarkMode ? "dark" : "light",
                    });
                }
            } else {
                calApiRef.current("ui", {
                    theme: isDarkMode ? "dark" : "light",
                });
            }
        };

        initializeCalendar();

        return () => {
            isSubscribed = false;
        };
    }, [isDarkMode]);

    return (
        <div className={`
            rounded-xl p-8 transition-all duration-200 border-[1px] border-primary/40 
            lg:w-[90%] 
            ${isDarkMode
                ? 'bg-[#000000] shadow-lg shadow-white/20'
                : 'bg-white shadow-lg shadow-gray-200/60'
            }
        `}>
            <div className="space-y-6">
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold transition-colors duration-200">
                        15 min Call
                    </h3>
                    <p className="text-sm transition-colors duration-200">
                        Let's talk for 15 minutes and see how my offer aligns with your goals
                    </p>
                </div>


                <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="relative">
                        <Image
                            src="/assets/pavan-kumar.webp"
                            alt="Avatar"
                            width={200}
                            height={200}
                            className={`
                                h-16 w-16 object-cover rounded-full transition-all duration-200
                                ring-2 ring-offset-2
                                ${isDarkMode
                                    ? 'ring-gray-700 ring-offset-gray-900'
                                    : 'ring-gray-100 ring-offset-white'
                                }
                            `}
                        />
                        <div className={`
                            absolute -bottom-1 -right-1 h-4 w-4 
                            rounded-full bg-green-500 transition-all duration-200
                            ring-2 
                            ${isDarkMode ? 'ring-gray-900' : 'ring-white'}
                        `} />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="space-y-1 text-center lg:text-left">
                                <span className="block font-medium transition-colors duration-200">
                                    Schedule Free Consultation
                                </span>
                                <span className="text-xs transition-colors duration-200">
                                    Pick a time that works for you!
                                </span>
                            </div>

                            <button
                                data-cal-namespace="15min"
                                data-cal-link="pavan-kumar-ts/15min"
                                data-cal-config={`{
                                    "layout":"month_view", 
                                    "theme":"${isDarkMode ? 'dark' : 'light'}"
                                }`}
                                className={`
                                    flex h-12 w-12 items-center justify-center 
                                    rounded-full transition-all duration-200
                                    ${isDarkMode
                                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }
                                `}
                                aria-label="Schedule meeting"
                            >
                                <span className="font-semibold">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCall;
