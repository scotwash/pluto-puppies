
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB66SpRqT-dr29ja6V2uWpBcN2FYfUWZgY",
    authDomain: "sunny-database.firebaseapp.com",
    projectId: "sunny-database",
    storageBucket: "sunny-database.firebasestorage.app",
    messagingSenderId: "1016717781554",
    appId: "1:1016717781554:web:210618fc0808f055e46a2b",
    measurementId: "G-FTVTN58RF2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
