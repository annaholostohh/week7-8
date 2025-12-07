
const images = [ "images/pexels-mareklevak-2265488.jpg", "images/smartcrop.jpg" ];

let index = 0;


const img = document.getElementById("carousel-img");


img.addEventListener("click", () => {
    img.style.opacity = 0; 

    setTimeout(() => {
        index = (index + 1) % images.length;
        img.src = images[index];             
        img.style.opacity = 1;               
    }, 300);
});
