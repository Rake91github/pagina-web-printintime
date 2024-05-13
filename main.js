const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderArticle = document.querySelectorAll(".slider-article");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e=> moveToRight())

/*CODIGO SLIDER INFINITO*/
setInterval(() => {
    moveToRight()
}, 3000);

let operacion = 0;
    counter = 0,
    widthImg = 100 / sliderArticle.length;

function moveToRight(){
    if (counter >= sliderArticle.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
/*QUITA LA TRANSITION AL LLEGAR A LA ULTIMA Y VUELVE A LA PRIMERA IMAGEN*/
        slider.style.transition = "none";
        return;
    }
    counter++;

        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .8s"
    

}

function moveToLeft(){
    counter--;
    if(counter < 0) {
        counter = sliderArticle.length-1;
        operacion = widthImg * (sliderArticle.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
/*  QUITA LA TRANSITION AL LLEGAR A LA ULTIMA Y VOLVER A LA PRIMERA IMAGEN*/
        slider.style.transition = "none";
        return
    }
    operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
}

