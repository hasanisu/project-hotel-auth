// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1TuSkmPq_2h74H39UjVFokwFTQhEUBeo",
  authDomain: "project-hotel-auth.firebaseapp.com",
  projectId: "project-hotel-auth",
  storageBucket: "project-hotel-auth.appspot.com",
  messagingSenderId: "895786373495",
  appId: "1:895786373495:web:9673027f2102858d519172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;