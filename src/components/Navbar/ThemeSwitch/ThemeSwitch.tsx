import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { FaTree, FaSun, FaWater, FaNetworkWired, FaPalette } from 'react-icons/fa';
import { TbVectorTriangle } from "react-icons/tb";

const ThemeSwitch = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
        setModalOpen(false);
    };

    return (
        <div>
            <button
                className="text-dark bg-white rounded text-xs md:text-sm lg:text-base py-1 px-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle"
                onClick={() => setModalOpen(!modalOpen)}
            >
                <div className="flex items-center">
                    <FaPalette className="mr-1" />
                    Theme
                </div>
            </button>
            {modalOpen && (
                <div className="absolute bg-white text-dark rounded shadow-lg">
                    <button onClick={() => changeTheme('light')} className="flex items-center p-2 hover:bg-gray-100">
                        <FaSun className="mr-2" /> Light
                    </button>
                    <button onClick={() => changeTheme('forest')} className="flex items-center p-2 hover:bg-gray-100">
                        <FaTree className="mr-2" /> Forest
                    </button>
                    <button onClick={() => changeTheme('fractal')} className="flex items-center p-2 hover:bg-gray-100">
                        <FaWater className="mr-2" /> Waves
                    </button>
                    <button onClick={() => changeTheme('vector')} className="flex items-center p-2 hover:bg-gray-100">
                        <TbVectorTriangle className="mr-2" /> Vector
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThemeSwitch;
