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


function enterGallery() {

    const welcome = document.getElementById("welcomeScreen");
    const galleryScreen = document.getElementById("galleryScreen");

    welcome.style.display = "none";
    galleryScreen.style.display = "block";

    window.scrollTo(0, 0);

    loadPhotos();
}


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
