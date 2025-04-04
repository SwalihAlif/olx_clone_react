


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword,
    signOut} from "firebase/auth"
import {addDoc, 
    collection, 
    getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFgAIuWoeeJ3lwx2zb6mmtjxc9IxRaXPQ",
  authDomain: "olx-clone-react-7f17e.firebaseapp.com",
  projectId: "olx-clone-react-7f17e",
  storageBucket: "olx-clone-react-7f17e.firebasestorage.app",
  messagingSenderId: "775842813283",
  appId: "1:775842813283:web:cba728643e798959786f56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password, phone) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email, 
            phone,

        })
    } catch (error) {
        console.log(error);
        alert(error);

    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error)

    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signUp, logout}