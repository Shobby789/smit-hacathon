import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4-nEXKJXnxAyvM8N-Zw3fn3JoU-DqQWw",
  authDomain: "online-store-67dc7.firebaseapp.com",
  projectId: "online-store-67dc7",
  storageBucket: "online-store-67dc7.appspot.com",
  messagingSenderId: "139811581010",
  appId: "1:139811581010:web:ae41eedf0a76c3ab19438b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
