import 'firebase/auth';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from './firebase';


// Sign in using google account
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
        console.log(res.user);
    }).catch((err) => {
        console.log(err.message);
    })
}

// Sign in using email
export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
        console.log(res.user);
        console.log("SIGN IN SUCCESSFUL");
    }).catch((err) => {
        console.log(err.message);
    })
}

// Sign up new users
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