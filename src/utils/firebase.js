// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBdVpkKzmQupKvjqPlxLsjQG-1ttpT4Lc",
  authDomain: "netflix-2-77e1e.firebaseapp.com",
  projectId: "netflix-2-77e1e",
  storageBucket: "netflix-2-77e1e.appspot.com",
  messagingSenderId: "800323098129",
  appId: "1:800323098129:web:e4869fd4dc0ca8c0b083b0",
  measurementId: "G-P7134BXKDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth();
