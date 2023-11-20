//this will be a button that will open the chatbot modal. It should be fixed to the bottom right of the screen. and have a background of custom-orange. it should also have a high z index so that it is always on top of everything else.

import React, { useState, useEffect } from 'react';

interface ChatbotProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

//continue
const ChatbotButton = ({ isOpen, setIsOpen }: ChatbotProps) => {

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

return (
    <div>
        <button onClick={toggleModal} className={`fixed bottom-3 right-3 p-2 rounded bg-custom-orange z-50 ${isOpen ? 'hidden' : ''}`}>Chat w/ MomoAI</button>
    </div>
)
}

export default ChatbotButton;