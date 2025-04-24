      // Import the functions you need from the SDKs you need

      import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

      import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

      // TODO: Add SDKs for Firebase products that you want to use

      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration

      // For Firebase JS SDK v7.20.0 and later, measurementId is optional

      const firebaseConfig = {
        apiKey: "AIzaSyA_THT-wgU0Pr7eXlUmQfqJKlCJ_b7s3mM",

        authDomain: "contactplutopuppies.firebaseapp.com",

        databaseURL: "https://contactplutopuppies-default-rtdb.firebaseio.com",

        projectId: "contactplutopuppies",

        storageBucket: "contactplutopuppies.firebasestorage.app",

        messagingSenderId: "937806378282",

        appId: "1:937806378282:web:2f63e1c7ad9557010bda53",

        measurementId: "G-RKBKD1ZEN3",
      };

      // Initialize Firebase

      const app = initializeApp(firebaseConfig);

      const db = getDatabase(app);
      document.getElementById("subject").addEventListener('click', function(e){
        set(ref(db, 'user/' + document.getElementById("fname").value), 
      
      fname = document.getElementById("fname").value),
      email = document.getElementById("lname").value,
      subject = document.getElementById("subject").value,
      
    });
      alert("Message Sent !");

