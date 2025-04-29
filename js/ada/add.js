<<<<<<< HEAD


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
=======
var firebaseConfig = {

  apiKey: "AIzaSyADre2-zbRAogQRbu3RDIq-XZVCIP9TMEg",

  authDomain: "contact-pluto.firebaseapp.com",

  projectId: "contact-pluto",

  storageBucket: "contact-pluto.firebasestorage.app",

  messagingSenderId: "210548571418",

  appId: "1:210548571418:web:274485884dc98c6d81c0a3"

};

firebaseConfig.initializeApp(firebaseConfig);

var database = firebase.database()

function save() {
  var name = document.getElementById('fname').value
  var email = document.getElementById('lname').value
  var message = document.getElementById('subject').value

  database.ref('users/' + username).set({
    name : fname,
    email : lname,
    message : subject,
  })

  alert('Saved')



}

function get() {
  
}
function update() {
  
}

function remove() {
  
}
>>>>>>> d890919f899071582dd33dc52f10199bc9e0b3c0
