document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slideshow").forEach((slideshow) => {
        const slides = slideshow.querySelectorAll(".slide");
        let current = 0;

        const showSlide = (index) => {
            slides[current].classList.remove("active");

            current = (index + slides.length) % slides.length;

            // Pause videos when changing slides
            const video = slides[current].querySelector("video");
            slides.forEach((slide) => {
                const v = slide.querySelector("video");
                if (v) v.pause();
            });

            slides[current].classList.add("active");
        };

        slideshow.querySelector(".prev").addEventListener("click", () => {
            showSlide(current - 1);
        });

        slideshow.querySelector(".next").addEventListener("click", () => {
            showSlide(current + 1);
        });
    });
});
