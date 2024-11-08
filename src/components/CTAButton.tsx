import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactCTA = () => {
    const handleCall = () => {
        window.location.href = 'tel:+1 (236) 238-1642';
    };

    const handleEmail = () => {
        window.location.href = 'mailto:admin@tecklo.co';
    };

    return (
        <div className='bg-gradient-to-tr   from-[#766fffe8] to-[#00276b]'>
            <div className="p-6  flex py-20 flex-col lg:flex-row justify-between items-center max-w-5xl mx-auto">
                <div className='max-w-xl text-white mx-auto text-center lg:text-start'>
                    <h2 className="text-xl lg:text-5xl font-semibold mb-4">Get in Touch with Us!</h2>
                    <p className="mb-4 text-sm">
                        Whether you have questions, need assistance, or want to discuss your project,
                        we&apos;re here to help! Reach out to us through the options below, and our team will
                        get back to you as soon as possible.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <button
                        onClick={handleCall}
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-200 hover:bg-green-600 flex items-center"
                    >
                        <FaPhoneAlt className="mr-2" />
                        Call Us: +1 (236) 238-1642
                    </button>
                    <button
                        onClick={handleEmail}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-200 hover:bg-blue-600 flex items-center"
                    >
                        <FaEnvelope className="mr-2" />
                        Email Us: admin@tecklo.co
                    </button>
                </div>
            </div>
       </div>
    );
};

export default ContactCTA;
