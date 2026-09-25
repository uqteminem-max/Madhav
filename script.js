/* =========================
   YOUR PHOTOS
========================= */

const photos = [
    {
        file: "20260919_190543.jpg",
        title: "Into the Wild"
    },

    {
        file: "20260920_211325.jpg",
        title: "A Quiet Moment"
    },

    {
        file: "20260924_004623.jpg",
        title: "Nature's Beauty"
    },

    {
        file: "20260925_155039.jpg",
        title: "Captured Moment"
    }
];


/* =========================
   ENTER GALLERY
========================= */

function enterGallery() {

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const galleryScreen =
        document.getElementById("galleryScreen");


    if (!welcomeScreen || !galleryScreen) {
        console.error("Gallery elements not found.");
        return;
    }


    welcomeScreen.style.display = "none";

    galleryScreen.style.display = "block";


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    loadPhotos();
}


/* =========================
   LOAD PHOTOS
========================= */

function loadPhotos() {

    const gallery =
        document.getElementById("gallery");


    if (!gallery) {
        console.error("Gallery element not found.");
        return;
    }


    gallery.innerHTML = "";


    photos.forEach(function(photo) {

        /* Create card */

        const card =
            document.createElement("div");

        card.className = "photo-card";


        /* Create image */

        const image =
            document.createElement("img");


        /*
         * IMPORTANT:
         *
         * The images are in the SAME folder
         * as index.html.
         *
         * Therefore we use:
         *
         * photo.file
         *
         * NOT:
         *
         * images/photo.file
         */

        image.src = photo.file;

        image.alt = photo.title;

        image.loading = "lazy";


        /* Image error handling */

        image.onerror = function() {

            console.error(
                "Could not load image:",
                photo.file
            );


            card.innerHTML = "";


            const error =
                document.createElement("div");

            error.className = "image-error";

            error.textContent =
                "Image could not be loaded: " +
                photo.file;


            card.appendChild(error);
        };


        /* Photo title */

        const name =
            document.createElement("div");

        name.className = "photo-name";

        name.textContent = photo.title;


        /* Build card */

        card.appendChild(image);

        card.appendChild(name);


        /* Add card to gallery */

        gallery.appendChild(card);
    });
}
