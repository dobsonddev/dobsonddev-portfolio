///Users/dobsond/Documents/GitHub/old-dobsonddev-portfolio2/src/components/Chatbot/ChatbotButton.tsx

import React from 'react';

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
        <button onClick={toggleModal} className={`flex flex-row fixed text-light bottom-3 right-3 p-2 rounded bg-custom-orange z-50 ${isOpen ? 'hidden' : ''}`}>
            Chat w/ MomoAI
            <img src="/lemur.svg" alt="Momo" className="ml-4" style={{ height: '25px' }} />
        </button>
    </div>
)
}

export default ChatbotButton;
