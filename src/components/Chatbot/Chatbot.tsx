import React, { useState, useEffect } from 'react';

interface ChatbotProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Chatbot({ isOpen, setIsOpen }: ChatbotProps) {
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ role: string; content: string; }[]>([]);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleUserMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!userMessage) return;

        setChatHistory([...chatHistory, { role: 'user', content: userMessage }]);
        setUserMessage('');

        // Send the user's message to your server for processing
        const response = await fetch('/api/chatbot', {
            method: 'POST',
            body: JSON.stringify({ message: userMessage }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const responseData = await response.json();
            const assistantMessage = responseData?.choices?.[0]?.message?.content || "I'm sorry, I couldn't understand your request.";
            setChatHistory([...chatHistory, { role: 'assistant', content: assistantMessage }]);
        }
    };

    useEffect(() => {
        if (isOpen) {
            // You can add logic here to focus on the input field when the chatbox opens
        }
    }, [isOpen]);

    return (
        <div>
            <button onClick={toggleModal} className={`fixed bottom-0 right-0 p-4 z-50 ${isOpen ? 'hidden' : ''}`}>Open Chat</button>
            <div className={`fixed bottom-0 right-0 z-50 ${isOpen ? '' : 'hidden'}`}>
                <div className="bg-white p-4 rounded-lg shadow-md w-80">
                    <div className="chat-history">
                        {chatHistory.map((message, index) => (
                            <div key={index} className={`message ${message.role}`}>
                                {message.content}
                            </div>
                        ))}
                    </div>
                    <div className="input-area">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={userMessage}
                            onChange={handleUserMessageChange}
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
