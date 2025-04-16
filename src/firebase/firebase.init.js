// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkZX9h8sXNDfID8y7BJkZayu_9m9yidaI",
    authDomain: "cuppon-83a87.firebaseapp.com",
    projectId: "cuppon-83a87",
    storageBucket: "cuppon-83a87.firebasestorage.app",
    messagingSenderId: "1074133166445",
    appId: "1:1074133166445:web:a3aaacb42f134b3f619264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

