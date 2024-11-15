"use client";

import { useEffect, useState } from "react";
import { GrContact } from "react-icons/gr";

const PopupComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const closePopup = (): void => {
        setIsOpen(false);
        if (typeof window !== "undefined") {
            localStorage.setItem("popupShown", "true");
        }
    };

    const openPopup = (): void => {
        setIsOpen(true);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const popupShown = localStorage.getItem("popupShown");
            if (!popupShown) {
                setIsOpen(true);
            }
        }
    }, []);

    return (
        <div className="px-5">
            {/* Fixed Button */}
            <button
                className="fixed bottom-10 lg:bottom-24 right-5 bg-purple-500 text-white rounded-[8px] p-2 shadow-lg hover:bg-purple-600 transition-all z-50"
                onClick={openPopup}
            >
                <GrContact className="w-8 h-8"/>
            </button>

            {/* Popup Container */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closePopup} // Close popup when clicking outside
                >
                    {/* Popup Content */}
                    <div
                        className="bg-white rounded-[8px] shadow-lg p-6 relative max-w-md w-full mx-2"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-3 left-4 bg-black text-white rounded-[8px] px-3 py-1"
                        >
                            &times;
                        </button>

                        {/* Embed the Form */}
                        <iframe
                            src="https://api.mybusinesspilot.com/widget/form/ovvzNK5ZnmipUdkbqDJG"
                            style={{
                                display: "block",
                                width: "100%",
                                height: "400px",
                                border: "none",
                                borderRadius: "4px",
                                
                            }}
                            id="polite-slide-in-right-ovvzNK5ZnmipUdkbqDJG"
                            data-layout="{'id':'POLITE_SLIDE_IN','minimizedTitle':'','isLeftAligned':false,'isRightAligned':true,'allowMinimize':true}"
                            data-trigger-type="showAfter"
                            data-trigger-value="3"
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="leadCollected"
                            data-deactivation-value=""
                            data-form-name="B-011-LM. Opt in-1"
                            data-height="352"
                            data-layout-iframe-id="polite-slide-in-right-ovvzNK5ZnmipUdkbqDJG"
                            data-form-id="ovvzNK5ZnmipUdkbqDJG"
                            title="B-011-LM. Opt in-1"
                        />
                        {/* <script src="https://api.mybusinesspilot.com/js/form_embed.js" />    */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupComponent;
