const img = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const itemsElem = document.querySelector(".items");

let imgTag = "";

for (i = 0; i < img.length; i++) {
    const curImg = img[i];
    imgTag += 
     `<div class="item">
        <img src="${curImg}" alt="">
    </div>`;
}

itemsElem.innerHTML += imgTag;

//trovare elemento "prev" "next" nella pagina questa ricerca va fatta sotto itemsElem.innerHTML += imgTag; perche senno non funzionando andado ad cancellare gli elementi prev e next
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");


const photo = document.querySelectorAll(".item");

let indiceImg = 0;
photo[indiceImg].classList.add("active");


nextButton.addEventListener ("click", function(){

    photo[indiceImg].classList.remove ("active");

    if(indiceImg < photo.length -1) {
        indiceImg++; 

    } else {
        indiceImg = 0;
    }

    photo[indiceImg].classList.add ("active");
})





prevButton.addEventListener ("click", function(){

    photo[indiceImg].classList.remove ("active");
    if(indiceImg > 0) {
        indiceImg--;

    } else {
        indiceImg = photo.length -1;
        
    }
    
    photo[indiceImg].classList.add ("active");
})



let autoScrolling;

itemsElem.addEventListener("mouseout", function () {
    autoScrolling = setInterval (function () {
        photo[indiceImg].classList.remove ("active");
        if(indiceImg < photo.length -1) {
            indiceImg++; 
    
        } else {
            indiceImg = 0;
        }
    
        photo[indiceImg].classList.add ("active");  
    
    
    }, 1000);
})


itemsElem.addEventListener("mouseover", function () {
    clearInterval(autoScrolling);  
})



