const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const slider = document.querySelector(".slider")
const numberOfSlides = slides.length;
let slideNumber = 0;

// Slide Next Button 
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcons) => {
        slideIcons.classList.remove("active");
    })


    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});
// Slide Prevous Button 
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcons) => {
        slideIcons.classList.remove("active");
    })


    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

// Auto Play Buttons
let playSlider;

let repeater = () => {
    playSlider = setInterval(function () {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        })


        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000);
}
repeater();

//Stop Slider on MouseOver
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});
// Start Slider On MouseOut

slider.addEventListener("mouseout", () => {
    repeater();
});
