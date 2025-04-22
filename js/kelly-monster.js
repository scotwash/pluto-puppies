import { app } from "./app.js";

import { getFirestore, 
    getDocs, 
    collection, 
    updateDoc, 
    deleteDoc, 
    doc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const plutoCollection = collection("pluto-puppies");
const plutoRef = document.querySelector("#pluto-puppies");

async function getPuppies(params) {
    
}

