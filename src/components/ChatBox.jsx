import ChatHistory from "./ChatHistory.jsx";
import ChatInput from "./ChatInput.jsx";

function ChatBox() {
    return (
        <div className="chat-box">
            <ChatHistory />
            <ChatInput />
        </div>
    )
}

export default ChatBox