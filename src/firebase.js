

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "olx-clone-react-7f17e.firebaseapp.com",
  projectId: "olx-clone-react-7f17e",
  storageBucket: "olx-clone-react-7f17e.firebasestorage.app",
  messagingSenderId: "775842813283",
  appId: "1:775842813283:web:cba728643e798959786f56"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
