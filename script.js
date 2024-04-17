const blueBtn = document.querySelector("#blue");
const greenBtn = document.querySelector(".green");
const heading = document.querySelector("h1");

const body = document.querySelector("body");

blueBtn.addEventListener("click", () => {
    body.setAttribute("class", "violet");
    heading.textContent = `This is a cute little site with a violet background`;
});
greenBtn.addEventListener("click", () => {
    body.setAttribute("class", "mustard");
    heading.textContent = `This is a cute little site with a mustard background`;
});

