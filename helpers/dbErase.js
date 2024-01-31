import { getDatabase, ref, remove } from 'firebase/database';

function eraseAllMessages() {
    const db = getDatabase();
    const messagesRef = ref(db, 'messages');
    remove(messagesRef)
        .then(() => {
            console.log("messages removed successfully.");
        })
        .catch((error) => {
            console.error("error removing messages: ", error);
        });
}

export default eraseAllMessages;