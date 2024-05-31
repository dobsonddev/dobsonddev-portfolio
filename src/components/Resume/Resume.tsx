import React from 'react';
import Image from "next/legacy/image"; // Import Next.js Image component
import { FaDownload } from 'react-icons/fa'; // Import the download icon

function Resume() {
    const resumePDFPath = '/resumepdf.pdf';
    const resumeIMGPath = '/resumeimg7.png';

    return (
        <div className="flex flex-col pb-12 min-h-screen items-center text-white px-4 border-t-4 border-custom-orange bg-gray-900 bg-opacity-80">
            <h2 className="p-2 text-3xl md:text-4xl lg:text-5xl py-6 font-bold underline z-0">Resume</h2>
            <div className="self-end sticky top-10 pr-4 md:pr-12 z-10 py-2"> {/* Sticky download button container */}
                <a
                    href={resumePDFPath}
                    download="John_Dobson_Dunavant_Jr_Resume.pdf"
                    className="bg-custom-orange hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg md:text-xl flex items-center justify-center"
                    title="Download Resume as PDF"
                >
                    <FaDownload className="md:hidden" /> {/* Show icon only on small screens */}
                    <span className="hidden md:inline">Download PDF</span> {/* Show text on medium screens and larger */}
                </a>
            </div>
            <div className="w-full flex justify-center">
                <div className="relative max-w-screen-sm md:max-w-screen-md w-full"> {/* Adjust max-width to match the image's width */}
                    <Image src={resumeIMGPath} alt="Dobson's Resume" aria-label="Dobson's Resume" layout="responsive" width={700} height={900} objectFit="contain" />
                </div>
            </div>
        </div>
    );
}

export default Resume;
