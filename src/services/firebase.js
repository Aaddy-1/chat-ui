import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

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

// Sign in with google function
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
        console.log(res.user);
    }).catch((err) => {
        console.log(err.message);
    })
}

export const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        
    // ...
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    // ..
    })
}

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
        console.log(res.user);
        console.log("SIGN IN SUCCESSFUL");
    }).catch((err) => {
        console.log(err.message);
    })
}