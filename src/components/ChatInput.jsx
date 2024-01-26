function ChatInput() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("message sent");
    }


    return (
        <div id="chat-input">
            <div id="input-bar">
                <form id="form" onSubmit={handleSubmit}>
                    <input type="text" id="message-input" placeholder="type a message..." />
                    <button type="submit" id="send-button">send</button>
                </form>
            </div>
        </div>
    )
}

export default ChatInput