// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDREqiVQUeuc7QHYLVHKadC2iqF1xIUy_4",
  authDomain: "prompt-wallet-1bdd2.firebaseapp.com",
  projectId: "prompt-wallet-1bdd2",
  storageBucket: "prompt-wallet-1bdd2.firebasestorage.app",
  messagingSenderId: "1052268930288",
  appId: "1:1052268930288:web:b822e6c7bba1d3159c4e35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

