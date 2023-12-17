import React from 'react';
import Image from "next/legacy/image"; // Import Next.js Image component

function Resume() {
    const resumePDFPath = '/resumepdf.pdf';
    const resumeIMGPath = '/resumeimg7.png';

    return (
        <div className="flex flex-col min-h-screen items-center text-white py-16 px-4 border-t-4 border-custom-orange bg-gray-900 bg-opacity-80">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light underline mb-4 z-0">Resume</h2>
            <div className="self-end sticky top-20 pr-4 md:pr-12 z-10"> {/* Sticky download button container */}
                <a
                    href={resumePDFPath}
                    download="John_Dobson_Dunavant_Jr_Resume.pdf"
                    className="bg-custom-orange hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg md:text-xl"
                    title="Download Resume as PDF"
                >
                    Download as PDF
                </a>
            </div>
            <div className="w-full flex justify-center">
                <div className="relative max-w-screen-sm md:max-w-screen-md w-full"> {/* Adjust max-width to match the image's width */}
                    <Image src={resumeIMGPath} alt="Resume" layout="responsive" width={700} height={900} objectFit="contain" />
                </div>
            </div>
        </div>
    );
}

export default Resume;