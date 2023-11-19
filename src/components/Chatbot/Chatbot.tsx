import React, { useState, useEffect } from 'react';

interface ChatbotProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Chatbot({ isOpen, setIsOpen }: ChatbotProps) {
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ role: string; content: string; }[]>([]);

    const handleUserMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!userMessage) return;

        // Adding the user's message to chat history
        setChatHistory(prev => [...prev, { role: 'user', content: userMessage }]);
        setUserMessage('');

        // Replace this with your actual chatbot API call logic
        const mockReply = "This is a mock reply from the chatbot.";
        setChatHistory(prev => [...prev, { role: 'assistant', content: mockReply }]);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && userMessage.trim()) {
            handleSendMessage();
        }
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 p-4 z-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="fixed right-1 bottom-1 bg-black border-light border-2 p-4 rounded shadow-md max-w-md mx-auto w-full">
                <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 mt-1 text-md mr-1 bg-gray-300 px-2 py-0.5 rounded text-black">X</button>
                <div className="chat-history overflow-y-auto h-80 mb-2 pt-5">
                    {chatHistory.map((message, index) => (
                        <div key={index} className={`message p-2 mb-1 flex rounded ${message.role === 'user' ? 'bg-blue-100 text-black ml-auto justify-end' : 'bg-gray-200 text-blue-800'}`}>
                            {message.content}
                        </div>
                    ))}
                </div>
                <div className="input-area flex">
                    <input
                        type="text"
                        placeholder="Ask a question about Dobson..."
                        value={userMessage}
                        onChange={handleUserMessageChange}
                        onKeyPress={handleKeyPress}  // Added key press handler here
                        className="flex-grow p-2 border border-gray-300 rounded-l-md"
                    />
                    <button onClick={handleSendMessage} className="bg-custom-orange text-white p-2 rounded-r-md">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
