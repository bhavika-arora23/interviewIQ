

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-6125a.firebaseapp.com",
  projectId: "interviewiq-6125a",
  storageBucket: "interviewiq-6125a.firebasestorage.app",
  messagingSenderId: "442156494907",
  appId: "1:442156494907:web:1114c031271d067bfc6c1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider}