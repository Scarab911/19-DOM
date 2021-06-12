
//pirma dalis
const button = document.querySelector('button');
const input = document.querySelector('#board')
const option = document.querySelector('.option')
//antra dalis
const board = document.querySelector('.board')

button.addEventListener('click', (e) => {
    e.preventDefault();
    const n = input.value;
    option.innerText = `${n}x${n}`;
})

function generateChessBoard() {

}
generateChessBoard();