import { useEffect, useState } from "react";
import ChatHistory from "./ChatHistory.jsx";
import ChatInput from "./ChatInput.jsx";
import { db } from "../../firebaseConfig.js";
import { ref, onValue, query, orderByKey, limitToLast } from 'firebase/database';

function ChatBox() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const messagesRef = ref(db, 'messages');
        const messagesQuery = query(messagesRef, orderByKey(), limitToLast(50));
        onValue(messagesQuery, (snapshot) => {
            const data = snapshot.val();
            const messagesArray = data ? Object.keys(data).map(key => data[key]) : [];
            setMessages(messagesArray);
        });
    }, []);

    return (
        <div className="chat-box">
            <ChatHistory messages={messages} />
            <ChatInput />
        </div>
    )
}

export default ChatBox