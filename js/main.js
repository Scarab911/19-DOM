
//pirma dalis
const button = document.querySelector('button');
const input = document.querySelector('#board')
const option = document.querySelector('.option')
//antra dalis
const board = document.querySelector('.board')

button.addEventListener('click', (e) => {
    e.preventDefault();
    const n = parseInt(input.value);//paverciam teksta i skaiciu!
    option.innerText = `${n}x${n}`;
    generateChessBoard(n, board);
})


function generateChessBoard(lentosDydis, DOM) {

    let rowHTML = '';
    let celleHTML = '';
    const dydis = 100 / lentosDydis;

    for (let j = 1; j <= lentosDydis; j++) {
        celleHTML += `<div class="cell" style="width:${dydis}%;"></div>`;
    }

    for (let i = 1; i <= lentosDydis; i++) {
        rowHTML += `<div class="row" style="height:${dydis}%;">${celleHTML}</div>`
    }
    DOM.innerHTML = rowHTML;
}
