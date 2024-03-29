const gridContainer = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
const sizeButton = document.querySelector('#sizeButton');
const sizeInput = document.querySelector('#sizeInput');

const CONTAINER_SIZE = 480;
let gridSize = 16;

function handleHover(e) {
    e.target.classList.add('hover');
}

function handlePaint(e) {
    e.target.classList.add('painted');
}

function handleReset() {
    const nodeList = document.querySelectorAll('.square');
    for(const el of nodeList) {
        el.remove();
    }
    createGrid();
}

function handleSetSize(e) {
    const preferredSize = sizeInput.value;
    if(preferredSize > 100) {
        console.log("Prefered size is too big!");
        return;
    }
    gridSize = preferredSize;
    handleReset();
    sizeInput.value = '';
    sizeInput.focus();
}

function calculateSquareSize() {
    return squareSize = CONTAINER_SIZE / gridSize;
}

function createGrid() {
    for (let i = 0; i < (gridSize*gridSize); i++) {
        gridContainer.appendChild(createSquare());
    }
}

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square')
    square.style.width = calculateSquareSize() + 'px';
    square.style.height = calculateSquareSize() + 'px';
    square.addEventListener('mouseover', handleHover);
    square.addEventListener('click', handlePaint);
    return square;
}

sizeButton.addEventListener('click', handleSetSize);
resetButton.addEventListener('click', handleReset);
handleReset();