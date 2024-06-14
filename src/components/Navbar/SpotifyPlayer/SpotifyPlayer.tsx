import React, { useState, useRef } from 'react';
import { FaMusic } from 'react-icons/fa';

const SpotifyPlayer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const togglePlayer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={togglePlayer}
                className="mx-2 py-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1"
            >
                <div className="flex items-center">
                    <FaMusic size="1.6em" className="mr-2" />
                    <span className="hidden md:inline">{isOpen ? 'Music' : 'Music'}</span>
                </div>
            </button>
            <div className="fixed top-16 right-5 z-30">
                <iframe
                    ref={iframeRef}
                    style={{ borderRadius: '16px', display: isOpen ? 'block' : 'none' }}
                    src="https://open.spotify.com/embed/playlist/0HrIRrRqoziosnjirLgBfD?utm_source=generator&theme=0"
                    width="100%"
                    height="362"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="eager"
                ></iframe>
            </div>
        </div>
    );
};

export default SpotifyPlayer;
