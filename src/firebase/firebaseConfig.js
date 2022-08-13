// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLTGX3BG0lCG0QLoTzkxvAGV31tGV6F5E",
  authDomain: "ecom-you-need-sushi.firebaseapp.com",
  projectId: "ecom-you-need-sushi",
  storageBucket: "ecom-you-need-sushi.appspot.com",
  messagingSenderId: "462843169182",
  appId: "1:462843169182:web:ddd750c4a9efc9b0372e8f"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 