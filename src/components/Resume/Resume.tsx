import React from 'react';
import Image from "next/legacy/image"; // Import Next.js Image component
import { FaDownload } from 'react-icons/fa'; // Import the download icon

function Resume() {
    const resumePDFPath = '/Dobson_Dunavant_Resume.pdf';
    const resumeIMGPath = '/Dobson_Dunavant_Resume.webp';

    return (
        <div className="flex flex-col sm:min-h-screen items-center text-light px-4 pb-12 bg-gray-900 bg-opacity-80">
            <div className="relative w-full flex justify-center py-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold underline z-0">Resume</h2>
                <a
                    href={resumePDFPath}
                    download="Dobson_Dunavant_Resume.pdf"
                    className="absolute right-0 bg-custom-orange hover:bg-blue-700 text-light font-bold rounded text-lg md:text-xl px-4 py-2 flex items-center"
                    title="Download Resume as PDF"
                >
                    <FaDownload className="inline-block mr-1" />
                    <span className="hidden md:inline">Download PDF</span>
                </a>
            </div>
            <div className="w-full flex justify-center">
                <div className="relative max-w-6xl w-full"> {/* Adjust max-width to match the image's width */}
                    <Image src={resumeIMGPath} alt="Dobson's Resume" aria-label="Dobson's Resume" layout="responsive" width={700} height={900} objectFit="contain" />
                </div>
            </div>
        </div>
    );
}

export default Resume;
