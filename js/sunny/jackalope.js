//References to the Dom
const imageRef = document.querySelector("#sunny-image-gallery");

//Data
const imageItems = [
    {image: "https://res.cloudinary.com/review-journal/image/upload/f_auto,q_auto,c_scale,w_1200/v1646256034/jackaloperedo-copy.jpg", name: "Intro Jackalope",},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3vqV5X1jokk640noOOR8mjeV-e4emClhUg&s", name: "Wall Mounted Jackalope",},
    {image: "https://i0.wp.com/www.hcn.org/wp-content/uploads/2022/04/jackalope-excerpt-2.jpg?resize=1200%2C800&quality=100&ssl=1", name: "Shope papilloma virus",},
    {image: "https://pbs.twimg.com/media/GLjG1sHW4AAtT5H.png", name: "Jackalope from Gravity Falls",},
    {image: "https://i.redd.it/i-rewatched-alien-invaders-after-about-13-years-and-im-v0-9enshu8jabqd1.jpg?width=617&format=pjpg&auto=webp&s=3fa3af0234e3d86c164d926a8961386ad9173976", name: "Jackalope from Scooby Doo",},
    {image: "https://staticdelivery.nexusmods.com/images/3024/92384258-1727403173.png", name: "Jackalope from Red Dead",},
];

imageRef.innerHTML = "";

for (let i = 0; i < imageItems.length; i++) {
    const item = imageItems[i];
    
    const newArticle = document.createElement("article")
    const newImg = document.createElement("img")

    newImg.src = item.image;
    const newText = "<h3 class='sunny-bold'>" + item.name + "</h3>"

    newArticle.appendChild(newImg);
    newArticle.innerHTML += newText;

    imageRef.appendChild(newArticle);
}



import { app } from "./sunnyapp.js";

import {getFirestore, collection, getDocs, addDoc} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

const db = getFirestore(app);

const sightingCollection = collection(db, "storyofsighting");

const sightingRef = document.querySelector("#sightings");

const sightingFormRef = document.querySelector("#new-sighting");

const sightingTextRef = document.querySelector("#sighting-text");

async function getSightings() {
const sightingDocs = await getDocs(sightingCollection);
console.log(sightingDocs.docs.length);

sightingRef.innerHTML = ""
for (let i = 0; i < sightingDocs.docs.length; i++) {
    const currentSighting = sightingDocs.docs[i];
    console.log(currentSighting.id, currentSighting.data());
    const sightingData = currentSighting.data();
    sightingRef.innerHTML += "<p>" + sightingData.Sightings + "</p>"
    
}
}

async function addNewSighting(e) {
    e.preventDefault();
    // prevents the default thing from happening.

    const sightingTextValue = sightingTextRef.value;

    if (sightingTextValue.trim() === "") {
        alert("Entered a valid tale")
    } 
    else {

        const newSighting = await addDoc(sightingCollection, { Sightings: sightingTextValue });

        console.log(newSighting);

        getSightings();

        sightingFormRef.reset();
    }
}

sightingFormRef.onsubmit = addNewSighting;

getSightings();
