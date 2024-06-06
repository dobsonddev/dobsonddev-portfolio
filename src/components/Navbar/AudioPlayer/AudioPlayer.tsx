import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
    src: string;
    title: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const handleEnded = () => {
            setIsPlaying(false);
        };
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.addEventListener('ended', handleEnded);
            return () => {
                audioElement.removeEventListener('ended', handleEnded);
            };
        }
    }, []);

    return (
        <div className="audio-player">
            <button onClick={togglePlay} className="play-button">
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <span className="track-title">{title}</span>
            <audio ref={audioRef} src={src} preload="none"></audio>
        </div>
    );
};

export default AudioPlayer;
