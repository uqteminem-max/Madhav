const pdfs = [
    {
        name: "PDF 1",
        description: "First Computer Science document",
        file: "pdfs/paper-1.pdf"
    },
    {
        name: "PDF 2",
        description: "Second Computer Science document",
        file: "pdfs/paper-2.pdf"
    }
];

const introScreen = document.getElementById("introScreen");
const mainWebsite = document.getElementById("mainWebsite");
const enterButton = document.getElementById("enterButton");
const pdfList = document.getElementById("pdfList");


// ENTER MADHAV
enterButton.addEventListener("click", function () {

    introScreen.style.opacity = "0";
    introScreen.style.transition = "opacity 0.8s ease";

    setTimeout(function () {
        introScreen.classList.add("hidden");
        mainWebsite.classList.remove("hidden");
        window.scrollTo(0, 0);
    }, 800);

});


// SHOW THE TWO PDFs
pdfs.forEach(function (pdf) {

    const item = document.createElement("div");

    item.className = "pdf-item";

    item.innerHTML = `
        <div class="pdf-info">
            <h3>${pdf.name}</h3>
            <p>${pdf.description}</p>
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
