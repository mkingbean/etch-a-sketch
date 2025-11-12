// Create a 16x16 grid of divs

let container = document.querySelector(".container");

let rows = [];
let squares = [];
for (let i = 0; i < 4; i++) {
    rows[i] = document.createElement("div");
    rows[i].classList.add("row");
    container.appendChild(rows[i]);
    squares[i] = [];
    for (let j = 0; j < 4; j++) {
        squares[i][j] = document.createElement("div");
        squares[i][j].classList.add("square");
        rows[i].appendChild(squares[i][j]);
    }
}