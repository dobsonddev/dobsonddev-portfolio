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