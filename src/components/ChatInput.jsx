function ChatInput() {
    return (
        <div id="chat-input">
            <div id="input-bar">
                <form id="form">
                    <input type="text" id="message-input" placeholder="type a message..." />
                    <button type="submit" id="send-button">send</button>
                </form>
            </div>
        </div>
    )
}

export default ChatInput