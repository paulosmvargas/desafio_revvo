let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    dots[slideIndex - 1].classList.add("active");

}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
