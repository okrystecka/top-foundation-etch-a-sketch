const gridContainer = document.querySelector('#container');
const resetButton = document.querySelector('#reset');

function createGrid() {
    for (let i = 0; i < (16*16); i++) {
        gridContainer.appendChild(createSquare());
    }
}

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square')
    square.addEventListener('mouseover', handleHover);
    return square;
}

function handleHover(e) {
    e.target.classList.add('hover');
}

function handleReset(e) {
    console.log('Reset');
    const nodeList = document.querySelectorAll('.square');
    for(const el of nodeList) {
        el.classList.remove('hover');
    }
}

resetButton.addEventListener('click', handleReset);
createGrid();