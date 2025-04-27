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

  database.ref('users/' + username).set

}

function get() {
  
}
function update() {
  
}

function remove() {
  
}
