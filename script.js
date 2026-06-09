const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

const prevBtn =
    document.querySelector(".prev");

const nextBtn =
    document.querySelector(".next");

let currentSlide = 0;

/* Show Slide */

function showSlide(index){

    slides.forEach((slide) => {

        slide.classList.remove("active");
    });

    dots.forEach((dot) => {

        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");
}

/* Next Slide */

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);
});

/* Previous Slide */

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

/* Dot Click */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);
    });
});

/* Auto Slide */

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 3000);