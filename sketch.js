let container = document.querySelector(".container");

function paintSquare(e) {
    e.target.classList.add("painted");
}

function generateGrid(size) {
    let rows = [];
    let squares = [];
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