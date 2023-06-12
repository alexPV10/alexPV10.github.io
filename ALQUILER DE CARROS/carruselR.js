const carrusel = document.querySelector(".carrusel");
firstImg = carrusel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".primera i");

// por defecto isDragStart es falso y sera verdadero
// solo cuando se de click en el boton

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 10; 

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carrusel.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth;
    })
});

const dragStart = (e) => {
    // actualizando el valor de las variables en el mause hacia abajo
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carrusel.scrollLeft;
}

const dragging = (e) => {
    // con esto se trata de que no se arrastre con el 
    // puntero del raton
    if(!isDragStart) return;
    e.preventDefault();
    carrusel.classList.add("dragging");
    // desplazando las images segun el puntero izquierdo
    let positionDiff = e.pageX - prevPageX;
    carrusel.scrollLeft =  prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carrusel.addEventListener("mousedown", dragStart);
carrusel.addEventListener("mousemove", dragging);
carrusel.addEventListener("mousedown", dragStop);

