import { useEffect, useRef, useState } from 'react';

function ChatHistory({messages}) {
    const messagesEndRef = useRef(null);
    const [visibleMessages, setVisibleMessages] = useState([]);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleMessages(messages.map(() => true));
        }, 50);
        return () => clearTimeout(timer);
    }, [messages]);

    return (
        <div id="chat-history">
            <div id="chat-header">
                <h1>chat history</h1>
            </div>
            <div id="chat-message-content">
                <p><span className="blue">admin:</span> welcome to neo chat! say hello. :)</p>
                {messages.map((message, index) => (
                    <p key={index} className={`chat-message ${visibleMessages[index] ? 'visible' : ''}`}><span
                        className="blue">{message.userId}:</span> {message.text}</p>
                ))}
                <div ref={messagesEndRef}/>
            </div>
        </div>
    )
}

export default ChatHistory