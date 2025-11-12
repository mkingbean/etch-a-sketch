// Create a 16x16 grid of divs

let container = document.querySelector(".container");

let columns = [];
let squares = [];
for (let i = 0; i < 4; i++) {
    columns[i] = document.createElement("div");
    container.appendChild(columns[i]);
    squares[i] = [];
    for (let j = 0; j < 4; j++) {
        squares[i][j] = document.createElement("div");
        columns[i].appendChild(squares[i][j]);
    }
}