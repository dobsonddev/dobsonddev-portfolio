// Contact.tsx
import React from 'react';

function Contact() {
    return (
        <div className="h-auto md:h-44 bg-gray-800 text-light p-2 flex flex-col items-center justify-center space-y-4 relative py-6">
            {/* Zigzag Border */}
            <div className="absolute top-0 left-0 w-full h-6 bg-no-repeat bg-top border-t-8"></div>

            <h2 className="text-xl md:text-2xl font-bold pt-1">Get in touch:</h2>

            <div>
                <a href="mailto:jdobsond3@gmail.com" className="block relative p-2">
                    <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
                    <span className="relative z-10 p-4">jdobsond3@gmail.com</span>
                </a>
            </div>

            <div className="flex space-x-3 md:space-x-8">
                {/* Example animated elements */}
                <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full animate-bounce"></div>
                <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full animate-ping"></div>
                <div className="w-2 h-4 md:w-3 md:h-6 bg-white rounded-full animate-spin"></div>
            </div>
        </div>
    );
}

export default Contact;
