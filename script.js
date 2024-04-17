const blueBtn = document.querySelector("#blue");
const greenBtn = document.querySelector(".green");
const heading = document.querySelector("h1");

const body = document.querySelector("body");

blueBtn.addEventListener("click", () => {
    body.setAttribute("class", "purple");
    heading.textContent = `This is a cute little site with a purple background`;
});
greenBtn.addEventListener("click", () => {
    body.setAttribute("class", "yellow");
    heading.textContent = `This is a cute little site with a yellow background`;
});

