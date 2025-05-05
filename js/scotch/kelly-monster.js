import { app } from "../app.js";
console.clear();
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);
const cryptids = collection(db,"pluto-puppies");
const cryptidRef = document.querySelector("#cryptids-id")


const cryptidsFormReference = document.querySelector("#new-cryptids");
const cryptidsTextRef = document.querySelector("#cryptid-text");

async function printSnowWasset() {
    const hasDocs = await getDocs(cryptids);
    cryptidRef.innerHTML = "";

    for(let i = 0; i < hasDocs.docs.length; i ++)
    {
        const currentCryptid = hasDocs.docs[i];
        console.log(currentCryptid.id);
        const cryptidData = currentCryptid.data();
        cryptidRef.innerHTML += "<li>" + cryptidData.state + "</li>";
    }
}

async function addNewCryptid(e) {
    e.preventDefault();

    const cryptidsTextValue= cryptidsTextRef.value;

   
    getHad();
   cryptidsFormReference.reset();
    
    }
    // fixed
    
    



