

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBN1gqwbTzca8UKPU_n9Kxplquv3W9bHjw",
    authDomain: "scotwash-final-db.firebaseapp.com",
    projectId: "scotwash-final-db",
    storageBucket: "scotwash-final-db.firebasestorage.app",
    messagingSenderId: "636462454794",
    appId: "1:636462454794:web:1945c8a0021c513edd27f3",
    measurementId: "G-LFKWVJ4NNR"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
