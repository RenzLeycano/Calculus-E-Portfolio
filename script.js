/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });

});


/* =========================
   ACTIVITY FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const activityCards = document.querySelectorAll(".activity-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active state */
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active state */
        button.classList.add("active");

        const filter = button.dataset.filter;

        activityCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   IMAGE LIGHTBOX
========================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const closeLightbox = document.getElementById("closeLightbox");

const activityImages = document.querySelectorAll(".activity-image");

activityImages.forEach(media => {

    media.addEventListener("click", () => {

        lightbox.classList.add("show");

        lightboxTitle.textContent =
            media.dataset.title;

        document.body.style.overflow = "hidden";


        // If the clicked element is an IMAGE
        if (media.tagName === "IMG") {

            lightboxImage.style.display = "block";
            lightboxVideo.style.display = "none";

            lightboxImage.src = media.src;

        }


        // If the clicked element is a VIDEO
        else if (media.tagName === "VIDEO") {

            lightboxImage.style.display = "none";
            lightboxVideo.style.display = "block";

            lightboxVideo.src = media.querySelector("source")
                ? media.querySelector("source").src
                : media.src;

            lightboxVideo.play();

        }

    });

});


/* Close button */

closeLightbox.addEventListener("click", closeViewer);


/* Close when clicking outside image */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeViewer();
    }

});


/* Close with ESC key */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeViewer();
    }

});


function closeViewer() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "auto";

    lightboxImage.src = "";

    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;
    lightboxVideo.src = "";

}