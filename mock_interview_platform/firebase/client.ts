import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA3fnOfZufmGxeMgZ9ZPPAcIx5qwqO93n8",
  authDomain: "prepwise-38bae.firebaseapp.com",
  projectId: "prepwise-38bae",
  storageBucket: "prepwise-38bae.firebasestorage.app",
  messagingSenderId: "295182250953",
  appId: "1:295182250953:web:e4a8b9cfb11a8011736e18",
  measurementId: "G-XZKZB9WRDP",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
