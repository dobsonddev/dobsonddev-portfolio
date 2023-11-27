import React, { useState, useEffect } from 'react';

interface ChatbotProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

function ChatbotModal({ isOpen, setIsOpen }: ChatbotProps) {
    const defaultBotMessage: Message = {
        text: "Hello! My name is Momo, I'm here to aid you in learning about Dobson. Ask away!",
        sender: 'bot'
    };

    const [messages, setMessages] = useState<Message[]>([defaultBotMessage]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false); // Track if a message is being processed
    const [questionCount, setQuestionCount] = useState(0);

    useEffect(() => {
        const storedCount = parseInt(localStorage.getItem('questionCount') || '0', 10);
        setQuestionCount(storedCount);
    }, []);

    const updateQuestionCount = (newCount: number) => {
        localStorage.setItem('questionCount', newCount.toString());
        setQuestionCount(newCount);
    };

    const handleUserMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!input.trim()) return;
        if (input.split(' ').length > 15) {
            alert('Please limit your question to 30 words.');
            return;
        }
        if (questionCount >= 10) {
            alert('You have reached the maximum number of questions.');
            return;
        }

        setIsProcessing(true); // Start processing

        const userMessage: Message = { text: input, sender: 'user' };
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });
            const data = await response.json();
            const botMessage: Message = { text: data.message.content, sender: 'bot' };

            setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
            setInput('');
            updateQuestionCount(questionCount + 1);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsProcessing(false); // End processing
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && input.trim()) {
            handleSendMessage();
        }
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 p-4 z-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md w-full bg-black border-light border-2 p-4 rounded-t-md shadow-md md:rounded md:right-1 md:bottom-1">
                <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 mt-1 text-md mr-1 bg-gray-300 px-2 py-0.5 rounded text-black">X</button>
                <div className="chat-history overflow-y-auto mb-4 pt-5" style={{ maxHeight: '70vh' }}>
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-1 flex p-1 rounded-lg ${message.sender === 'user' ? 'bg-midlight text-black justify-end' : 'bg-gray-300 text-black self-start'}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="input-area flex items-center">
                    <input
                        type="text"
                        placeholder="Ask a question about Dobson..."
                        value={input}
                        onChange={handleUserMessageChange}
                        onKeyPress={handleKeyPress}
                        className="flex-grow p-2 mr-1 border border-gray-300 rounded-l-md text-black"
                    />
                    {isProcessing ? (
                        <div className="w-3 h-6 ml-2 md:w-3 md:h-6 bg-white rounded-full animate-spin"></div>
                    ) : (
                        <button onClick={handleSendMessage} className="bg-custom-orange text-white p-1 md:p-2 rounded-r-md">
                            Ask
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChatbotModal;
