const photos = [
    {
        file: "20260919_190543.jpg",
        caption: "A moment in nature."
    },

    {
        file: "20260920_211325.jpg",
        caption: "Captured in a frame."
    },

    {
        file: "20260924_004623.jpg",
        caption: "Another story."
    },

    {
        file: "20260925_155039.jpg",
        caption: "A moment worth remembering."
    }
];


function enterGallery() {

    const ready = document.getElementById("ready");
    const main = document.getElementById("main-content");

    ready.style.display = "none";

    main.classList.add("show");

    loadPhotos();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function loadPhotos() {

    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    photos.forEach(photo => {

        const image = document.createElement("img");

        image.src = photo.file;

        image.alt = photo.caption;

        image.loading = "lazy";

        image.onerror = function () {

            console.log(
                "Could not load image:",
                photo.file
            );

            image.style.display = "none";
        };

        gallery.appendChild(image);

    });
}
