// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_THT-wgU0Pr7eXlUmQfqJKlCJ_b7s3mM",
  authDomain: "contactplutopuppies.firebaseapp.com",
  projectId: "contactplutopuppies",
  storageBucket: "contactplutopuppies.firebasestorage.app",
  messagingSenderId: "937806378282",
  appId: "1:937806378282:web:798ddcf089fc00460bda53",
  measurementId: "G-5XLRJ6GBJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);