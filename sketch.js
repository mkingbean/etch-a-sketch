function randomColourValue() {
    return Math.floor(Math.random() * 256);
}

function paintSquare(e) {
    let square = e.target;
    square.style.backgroundColor = `rgb(${randomColourValue()}, ${randomColourValue()}, ${randomColourValue()})`;
    if (+square.style.opacity < 1) {
        square.style.opacity = +square.style.opacity + 0.1;
    }
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
    let size;
    while (true) {
        if (1 <= size && size <= 100) {
            deleteGrid();
            generateGrid(size);
            break;
        } else if (size === null) {
            break;
        } else {
            size = prompt("Please enter a grid size between 1 and 100");
        }
    }
}

const button = document.querySelector(".btn");
const container = document.querySelector(".container");

button.addEventListener("click", requestInput);

let rows = [];
let squares = [];
generateGrid(4);