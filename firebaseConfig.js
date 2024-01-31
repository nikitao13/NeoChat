import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCraexqUJ9fVBx8iusoT0-OKeWUWJJ7UjE",
    authDomain: "neo-chat-d6971.firebaseapp.com",
    databaseURL: "https://neo-chat-d6971-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "neo-chat-d6971",
    storageBucket: "neo-chat-d6971.appspot.com",
    messagingSenderId: "995656076070",
    appId: "1:995656076070:web:42b0cc87fc3373a4b04fe7",
    measurementId: "G-D5SKH52SX2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };