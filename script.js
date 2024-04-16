const blueBtn = document.querySelector("#blue");
const greenBtn = document.querySelector(".green");
const heading = document.querySelector("h1");

const body = document.querySelector("body");

blueBtn.addEventListener("click", () => {
    body.setAttribute("class", "blue");
    heading.textContent = `This is a cute litte site with a blue background`;
});
greenBtn.addEventListener("click", () => {
    body.setAttribute("class", "green");
    heading.textContent = `This is a cute litte site with a green background`;
});

