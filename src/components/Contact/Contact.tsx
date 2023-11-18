// Contact.tsx
import React from 'react';

function Contact() {
    return (
        <div className="h-56 bg-darkGreen text-white flex flex-col items-center justify-center space-y-3 relative">
            {/* Zigzag Bordasdasdaser */}
            <div className="absolute top-0 left-0 w-full h-6 bg-no-repeat bg-top border-t-8"></div>

            <h2 className="text-2xl font-bold pt-6">Get in touch:</h2>


            <div className="space-y-1">
                <a href="mailto:jdobsond3@gmail.com" className="block relative animate-pulse p-2">
                    <span className="absolute inset-0 w-full h-full border-2 border-white animate-pulse"></span>
                    <span className="relative z-10  p-4">jdobsond3@gmail.com</span>
                </a>
            </div>

            <div className="flex space-x-6">
                {/* Example animated elements */}
                <div className="w-6 h-6 bg-white rounded-full animate-bounce"></div>
                <div className="w-6 h-6 bg-white rounded-full animate-ping"></div>
                <div className="w-3 h-6 bg-white rounded-full animate-spin"></div>
            </div>
        </div>
    );
}

export default Contact;
