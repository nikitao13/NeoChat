import {useState} from "react";
import { db } from "../../firebaseConfig.js";
import { push, ref } from 'firebase/database';

function ChatInput() {
    const [latestMsg, setLatestMsg] = useState("");

    const handleChange = (e) => {
        setLatestMsg(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedMsg = latestMsg.trim();
        if (trimmedMsg !== "") {
            try {
                const messagesRef = ref(db, 'messages');
                await push(messagesRef, {
                    text: trimmedMsg,
                    timestamp: new Date().toISOString(),
                    userId: "user1" // TODO: replace with user id
                });
            } catch (e) {
                console.error("error adding document: ", e);
            }
        }
        console.log("message sent: " + latestMsg);
        setLatestMsg("");
    }

    return (
        <div id="chat-input">
            <div id="input-bar">
                <form id="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="message-input"
                        placeholder="type a message..."
                        onChange={handleChange}
                        value={latestMsg}
                        autoComplete="off"
                        required
                    />
                    <button
                        type="submit" id="send-button">send</button>
                </form>
            </div>
        </div>
    )
}

export default ChatInput