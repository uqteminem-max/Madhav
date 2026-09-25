/* =========================
   PDF DATABASE
========================= */

const pdfDatabase = {

    errors: {

        title: "Errors",

        files: [

            {
                name: "Errors — Chapter 1",
                description: "Computer Science notes",
                file: "pdfs/errors/errors-1.pdf"
            },

            {
                name: "Errors — Chapter 2",
                description: "Important questions",
                file: "pdfs/errors/errors-2.pdf"
            }

        ]

    },


    root: {

        title: "Root",

        files: [

            {
                name: "Root — Chapter 1",
                description: "Core concepts",
                file: "pdfs/root/root-1.pdf"
            },

            {
                name: "Root — Chapter 2",
                description: "Study material",
                file: "pdfs/root/root-2.pdf"
            }

        ]

    },


    "new-files": {

        title: "New Files",

        files: [

            {
                name: "New Notes",
                description: "Recently added",
                file: "pdfs/new-files/notes-1.pdf"
            },

            {
                name: "New Questions",
                description: "Practice material",
                file: "pdfs/new-files/notes-2.pdf"
            }

        ]

    }

};


/* =========================
   ELEMENTS
========================= */

const introScreen =
    document.getElementById("introScreen");

const mainWebsite =
    document.getElementById("mainWebsite");

const enterButton =
    document.getElementById("enterButton");

const pdfSection =
    document.getElementById("pdfSection");

const pdfList =
    document.getElementById("pdfList");

const categoryTitle =
    document.getElementById("categoryTitle");

const selectedCategory =
    document.getElementById("selectedCategory");

const backButton =
    document.getElementById("backButton");


/* =========================
   ENTER WEBSITE
========================= */

enterButton.addEventListener("click", function () {

    introScreen.style.opacity = "0";

    introScreen.style.transition =
        "opacity 0.8s ease";

    setTimeout(function () {

        introScreen.classList.add("hidden");

        mainWebsite.classList.remove("hidden");

        window.scrollTo(0, 0);

    }, 800);

});


/* =========================
   CATEGORY BUTTONS
========================= */

const categoryButtons =
    document.querySelectorAll(".category-card");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category =
            button.dataset.category;

        openCategory(category);

    });

});


/* =========================
   OPEN CATEGORY
========================= */

function openCategory(category) {

    const data =
        pdfDatabase[category];

    if (!data) {
        return;
    }

    categoryTitle.textContent =
        data.title;

    selectedCategory.textContent =
        "COLLECTION";

    pdfList.innerHTML = "";

    data.files.forEach(function (pdf) {

        const item =
            document.createElement("div");

        item.className = "pdf-item";

        item.innerHTML = `

            <div class="pdf-info">

                <h3>
                    ${pdf.name}
                </h3>

                <p>
                    ${pdf.description}
                </p>

            </div>

            <a
                class="open-pdf"
                href="${pdf.file}"
                target="_blank"
                rel="noopener noreferrer"
            >
                OPEN PDF →
            </a>

        `;

        pdfList.appendChild(item);

    });


    pdfSection.classList.remove("hidden");

    pdfSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   BACK BUTTON
========================= */

backButton.addEventListener("click", function () {

    pdfSection.classList.add("hidden");

    document
        .querySelector(".library")
        .scrollIntoView({
            behavior: "smooth"
        });

});
