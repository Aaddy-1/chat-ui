import 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, getRedirectResult, updateProfile } from 'firebase/auth';
import { addUserToDb } from './addUserToDb';
import { auth, provider } from './firebase';


// Sign in using google account
export const signInWithGoogle = () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
    .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const user = res.user;
        // const user = user.
        // alert(user.uid);
        console.log(user.uid);
        //console.log(res.user.uid);
    })
    .catch((err) => {
        console.log(err.message);
    })
}

// Sign in using email
export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
        console.log(res.user);
        const user = res.user
        console.log("SIGN IN SUCCESSFUL");
        // alert(user.uid);
        addUserToDb(user.uid, user.displayName, user.email);
    }).catch((err) => {
        console.log(err.message);
    })
}

// Sign up new users
// TODO: SEND AN ERROR MESSAGE IF THE EMAIL ALREADY EXISTS
export const signUp = (email, password, userName) => {
    let returnError = "";
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(userName);
        // Updating the user profile with their userName
        updateProfile(user, {
            displayName: userName,
        })
        // After that we add him to the db
        .then(() => {
            addUserToDb(user.uid, user.displayName, user.email);
        })
        
        return user;
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("=====");
        console.log(errorCode);
        console.log("=====");
        returnError = errorCode;
    // ..
    })
    console.log(returnError);
    return returnError;
}
