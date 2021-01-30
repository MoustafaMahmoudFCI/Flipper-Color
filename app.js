const color = document.querySelector("#color");
//const container = document.querySelector(".container");
const btn = document.querySelector("button");

let hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += hexArr[randomNum()];
    }
    color.textContent = hex;
    document.body.style.backgroundColor = hex;
});

function randomNum() {
    return Math.floor(Math.random() * hexArr.length);
}