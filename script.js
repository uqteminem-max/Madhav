/* =========================
   YOUR PHOTOGRAPHS
========================= */

/*
   Put your photographs inside:

   images/

   Then write their filenames here.
*/

const photos = [

    {
        file: "photo1.jpg",
        title: "Into the Wild"
    },

    {
        file: "photo2.jpg",
        title: "A Quiet Moment"
    },

    {
        file: "photo3.jpg",
        title: "Green Stories"
    },

    {
        file: "photo4.jpg",
        title: "Where the Sky Begins"
    },

    {
        file: "photo5.jpg",
        title: "Nature's Silence"
    },

    {
        file: "photo6.jpg",
        title: "Another Day, Another Frame"
    }

];


/* =========================
   ENTER GALLERY
========================= */

function enterGallery() {

    const welcome = document.getElementById("welcomeScreen");

    const galleryScreen = document.getElementById("galleryScreen");

    welcome.style.display = "none";

    galleryScreen.style.display = "block";

    window.scrollTo(0, 0);

    loadPhotos();
}


/* =========================
   LOAD PHOTOS
========================= */

function loadPhotos() {

    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";


    photos.forEach(function(photo) {

        const card = document.createElement("div");

        card.className = "photo-card";


        const image = document.createElement("img");

        image.src = "images/" + photo.file;

        image.alt = photo.title;


        const name = document.createElement("div");

        name.className = "photo-name";

        name.textContent = photo.title;


        card.appendChild(image);

        card.appendChild(name);

        gallery.appendChild(card);

    });

}
