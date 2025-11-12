function paintSquare(e) {
    e.target.classList.add("painted");
}

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        rows[i] = document.createElement("div");
        rows[i].classList.add("row");
        container.appendChild(rows[i]);
        squares[i] = [];
        for (let j = 0; j < size; j++) {
            squares[i][j] = document.createElement("div");
            squares[i][j].classList.add("square");
            squares[i][j].addEventListener("mouseover", paintSquare);
            rows[i].appendChild(squares[i][j]);
        }
    }
}

function deleteGrid() {
    rows.forEach((row) => container.removeChild(row));
    rows = [];
    squares = [];
}

function requestInput() {
    let size = prompt("Please enter a grid size");
    deleteGrid();
    generateGrid(size);
}

button = document.querySelector(".btn");
button.addEventListener("click", requestInput);

container = document.querySelector(".container");
let rows = [];
let squares = [];