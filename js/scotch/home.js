import { app } from "../app.js";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


// edit button
const randomCryptidButton = document.getElementById("random-button-two");
randomCryptidButton.addEventListener("click", getRandomLinks);
// retrieve data fromm database 
const db = getFirestore(app);
const cryptidLinksCollection = collection(db, "pluto-puppies-links");

async function getRandomLinks() {
    const randomCryptidLinks = await getDocs(cryptidLinksCollection);
    var randomWebsiteGen = randomCryptidLinks[Math.floor(Math.random() * randomCryptidLinks.length)];

    
}
