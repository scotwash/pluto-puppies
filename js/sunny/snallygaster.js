//References to the Dom
const imageRef = document.querySelector("#sunny-image-gallery");

//Data
const imageItems = [
    {image: "https://images.squarespace-cdn.com/content/v1/60679617dd4c185fb8767c66/1620870100856-HJEGXHZF9VTJUXI9GMNN/public.jpeg", name: "Intro Snallygaster",},
    {image: "https://jasonrobertsonline.com/wp-content/uploads/2019/11/Snallygaster.jpg", name: "Artist Rendition of the Snallygaster",},
    {image: "https://assets.simpleviewinc.com/sv-frederick-county/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/frederickcountymd/Snallygaster_406FBAA4-02CD-9DD2-DAF33C8546C321AB_40940787-9f44-7570-09ac8e6f97153a80.jpg", name: "Artist Rendition of the Snallygaster",},
    {image: "https://www.thebaltimorebanner.com/resizer/6-y6iR6bYhW7QRAqxvhWDMv14Xc=/arc-photo-baltimorebanner/arc2-prod/public/F4HBR23TAJFFTE7NJTIMK7MK64.jpg", name: "Artist Rendition of the Snallygaster",},
    {image: "https://bygonemaryland.com/wp-content/uploads/2016/10/dwayyothe_news_wed__dec_1__1965_1.jpg?w=548", name: "The Dwayyo - Foe of the Snallygaster",},
    {image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/07/snallygaster-2.jpeg", name: "Fallout 76 Snallygaster",},
];

imageRef.innerHTML = "";

for (let i = 0; i < imageItems.length; i++) {
    const item = imageItems[i];
    
    const newArticle = document.createElement("article")
    const newImg = document.createElement("img")

    newImg.src = item.image;
    const newText = "<p class='sunny-bold'>" + item.name + "</p>"

    newArticle.appendChild(newImg);
    newArticle.innerHTML += newText;

    imageRef.appendChild(newArticle);
}