import { app } from "../add.js";

import{
    getFirestore, 
    collection,
    getDocs, 
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const contactInfo = collection(db, "pluto-puppy-contact");

const wowzersRef = document.querySelector("#wowzers");

async function hehe() {
   const heheDocs = await getDocs(contactInfo); 
   wowzersRef.innerHTML = ""; 
   for (let index = 0; index < heheDocs.docs.length; index++) {

    const currentContact = heheDocs.docs[index];

    const contactData = currentContact.data();

    wowzersRef.innerHTML += "<p>" + contactData + "</p>"; 
   }
};