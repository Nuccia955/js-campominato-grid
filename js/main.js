//1. switch grid dimensions with level-select and generate grid with btn-Play
let mainContent = document.querySelector('.main-section');
const btnPlay = document.querySelector('#btn-play');
const selection = document.querySelector('#selection');

btnPlay.addEventListener('click', function() {
    mainContent.innerHTML = '';
    const levelSelection = selection.value;
    console.log(levelSelection);
    let gridNumberOfSquares;
    let gridRowCells;
    switch (levelSelection) {
    case '1': gridNumberOfSquares = 49;
              gridRowCells = 7;
              break;
    case '2': gridNumberOfSquares = 81;
              gridRowCells = 9;
              break;
    case '3': gridNumberOfSquares = 100;
              gridRowCells = 10;
    }
    console.log(gridNumberOfSquares);
    console.log(gridRowCells);
    const grid = document.createElement('div');
    grid.classList.add('grid-wrap');
    console.log(grid);

    for (let i = 1; i <= gridNumberOfSquares; i++) {
        const square = addSquare(i, gridRowCells);
        grid.append(square);
    }

    mainContent.append(grid);
});

//2. add function to create squares
function addSquare(number, cells) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${cells})`;
    square.style.height = `calc(100% / ${cells})`;
    const squareNumber = document.createElement('span');
    squareNumber.append(`${number}`);
    square.append(squareNumber);
    console.log(square);
    return square;
}


//3. on squares add click event for changing background-color