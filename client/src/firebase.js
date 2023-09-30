// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project1-e5bf8.firebaseapp.com",
  projectId: "mern-project1-e5bf8",
  storageBucket: "mern-project1-e5bf8.appspot.com",
  messagingSenderId: "490268145647",
  appId: "1:490268145647:web:2ecdb1121383fdf500281a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
