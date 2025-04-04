import React, {createContext, useContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, EmailAuthCredential, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut } from "firebase/auth";

import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

// Creating Context
const AuthContext = createContext();



// Provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Signup
    const signUp = async (email, password, username, phone) => {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = res.user;

        //Save to Firestore
        await addDoc(collection(db, 'user'), {
            uid: newUser.uid,
            email,
            username,
            phone,
            authProvider: 'local' 
        });
        setUser(newUser);
        return newUser;
    }


    // Login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    
    // Logout
    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);


    return (
        <AuthContext.Provider value={{user, signUp, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);

