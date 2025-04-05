import React, { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore"; // Corrected Firestore methods

// Creating Context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Signup - Save user with `uid` as document ID
    const signUp = async (email, password, username, phone) => {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = res.user;

        // Save to Firestore using `uid` as document ID
        await setDoc(doc(db, "user", newUser.uid), {
            uid: newUser.uid,
            email,
            username,
            phone,
            authProvider: "local",
        });

        setUser({
            uid: newUser.uid,
            email,
            username,
            phone,
        });
        return newUser;
    };

    // Login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logout = () => {
        return signOut(auth);
    };

    // Fetch user data from Firestore when authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                console.log("Firebase User:", currentUser); // Debug log

                // Fetch user document from Firestore
                const userDocRef = doc(db, "user", currentUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    console.log("Fetched Firestore Data:", userDoc.data()); // Debug log

                    setUser({
                        uid: currentUser.uid,
                        email: currentUser.email,
                        username: userDoc.data().username, // Retrieve username
                        phone: userDoc.data().phone,
                    });
                } else {
                    console.warn("User document not found in Firestore!");
                    setUser(currentUser);
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signUp, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
