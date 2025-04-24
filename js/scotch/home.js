import { app } from "../app.js";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


// create a button
const randomButton = document.createElement("button");
randomButton.textContent = "Let's visit some cryptids!";
randomButton.id = "random-button-id";
randomButton.setAttribute('type','button');
randomButton.addEventListener("click", function getRandomLinks(){})
// retrieve data fromm database 
const db = getFirestore(app);
const cryptidLinksCollection = collection(db, "pluto-puppies-links");

async function getRandomLinks() {
    const randomCryptidLinks = await getDocs(cryptidLinksCollection);

    
}
