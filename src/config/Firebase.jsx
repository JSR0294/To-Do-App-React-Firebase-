// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJyJJiplTzQqT5scto181e1jxRIH2u_F4",
  authDomain: "to-do-app-cba3d.firebaseapp.com",
  projectId: "to-do-app-cba3d",
  storageBucket: "to-do-app-cba3d.appspot.com",
  messagingSenderId: "357967855616",
  appId: "1:357967855616:web:ab194e5907ef02b6e758e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)