import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


// This is the config setting for firebase
const firebaseConfig = {
    apiKey: "AIzaSyAG1cVbxuBw6T2MnrDhqI8VUxqbWfRJIYE",
    authDomain: "chat-ui-9c645.firebaseapp.com",
    projectId: "chat-ui-9c645",
    storageBucket: "chat-ui-9c645.appspot.com",
    messagingSenderId: "62802116552",
    appId: "1:62802116552:web:83af76c43e33296b298afd",
    measurementId: "G-ZKT5ZV8JW5"
};

// Initializing our app
export const app = initializeApp(firebaseConfig);

// This auth is important for all other auths
export const auth = getAuth(app);

// We need this in order to authenticate with google
export const provider = new GoogleAuthProvider();

// Greating our database object
export const db = getFirestore(app);