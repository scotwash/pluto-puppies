import { app } from "../app.js";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";





// retrieve data fromm database 
const db = getFirestore(app);
const cryptids = collection(db,"pluto-puppies");

// ref members cited as a const
const cryptidRef = document.querySelector("#members-list");

// create id for cryptid ref
cryptidRef.id = "hi";


document.getElementById("hi").style.paddingLeft = "20px";
document.getElementById("hi").style.fontFamily = "monospace";



// prints members' cryptids
async function getCryptidList() {
    const hasDocs = await getDocs(cryptids);
    cryptidRef.innerHTML = "";


    for(let i = 0; i < hasDocs.docs.length; i ++)
    {
        const currentCryptid = hasDocs.docs[i];
        console.log(currentCryptid.id);
        const cryptidData = currentCryptid.data();
        cryptidRef.innerHTML += "<p>" + "Ada researched the "+ cryptidData.state + " and " + cryptidData.state2 + "!" + " These creatures are so cute and fluffy! Maybe the Not-Deer can give some Rudolph some time off for Christmas.</p>";
        // add image here
    
        cryptidRef.innerHTML += "<br> <p>" + "Scotch researched the " + cryptidData.state3 + " and " + cryptidData.state4 + "!" + "";
        cryptidRef.innerHTML += "<br> <p>" + "Sheryl researched the " + cryptidData.state5 + "!";
        cryptidRef.innerHTML += "<br> <p>" + "Sunny researched the " + cryptidData.state6 + " and " + cryptidData.state7 + "!" + "</p";
        
    
    }
}

// make a button that leads to a cryptid website

const cryptidButton = document.createElement("")



getCryptidList();
