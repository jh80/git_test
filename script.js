const blueBtn = document.querySelector("#blue");
const greenBtn = document.querySelector(".green");
const heading = document.querySelector("h1");

const body = document.querySelector("body");

blueBtn.addEventListener("click", () => color("blue"))
greenBtn.addEventListener("click", () => color("green"))

function color (color) {
    body.setAttribute("class", color);
    heading.textContent = `This is a cute little site with a ${color} background`;    
}
