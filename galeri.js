const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        document.body.style.overflow = "hidden";
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "";
    }
});

