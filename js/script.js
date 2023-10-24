//DATI 
const img = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];


//INSERIMENTO NEL DOM
const itemsElem = document.querySelector(".items");

let imgTag;

for (i = 0; i < img.length; i++) {
    const curImg = img[i];
    imgTag += 
    `<div class="item">
        <img src="${curImg}" alt="">
    </div>`;
}

itemsElem.innerHTML = imgTag;

//CLASS ACTIVE
const itemsElems = document.querySelectorAll(".item");
console.log(itemsElems);