// Importing auth modules
import 'firebase/auth';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

// This file will add users to firestore
export const addUserToDb = async (uid, displayName, email) => {
    // We will first get a reference to the user
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    // Checks if the user already exists
    if (docSnap.exists()) {
        console.log("User Already Exists");
        return "User Already Exists";
    }
    // If it doesnt exist, we will add the user to the db
    else {
        // It will try to add the doc to the db
        console.log("New User Detected");
        try {
            const docRef = await setDoc(doc(db, "users", uid), {
                email: email,
                name: displayName,
            });
            console.log("added");
            return "User Successfully Added";
        }
        catch(err) {
            //console.log(err);
            return err.message;
        }
    }
   
}

//const users = {uid: "123456", email: "asdfqwerty@gmail.com", name: "Aadeesh Sharma"};

//addUserToDb(users.uid, users.name, users.email);

