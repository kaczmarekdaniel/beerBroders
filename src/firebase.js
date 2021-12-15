import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyAN3SLuDCydjphJG8_-22jKJtg8c9bV_1w",
  authDomain: "beerbroders-d46c2.firebaseapp.com",
  projectId: "beerbroders-d46c2",
  storageBucket: "beerbroders-d46c2.appspot.com",
  messagingSenderId: "618021269596",
  appId: "1:618021269596:web:4a9849e7ef8e8c07147699",
};

const app = initializeApp(config);

export const db = getFirestore(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const userSignOut = () => auth.signOut();
window.db = db;
