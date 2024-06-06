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
        <button onClick={toggleModal} className={`flex flex-col fixed text-light items-center text-lg bottom-3 right-3 p-3 rounded bg-custom-orange z-50 ${isOpen ? 'hidden' : ''}`}>
            <img src="/lemur.svg" alt="Momo" className="mb-2" style={{ height: '65px' }} />
            MomoAI
        </button>
    </div>
)
}

export default ChatbotButton;
