const button = document.querySelector('button');
const input = document.getElementById('board')
const option = document.querySelector('.option')
const board = document.querySelector('.board')

button.addEventListener('click', (e) => {
    e.preventDefault();
    const n = parseInt(input.value);//paverciam teksta i skaiciu!
    option.innerText = `${n}x${n}`;
    generateChessBoard(n, board);
})

//Lentos generavimo funkcija:
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

    const allCells = DOM.querySelectorAll('.cell')
    const langeliai = Array.from(allCells)
    console.log(langeliai)

    for (let k = 0; k < langeliai.length; k++) {
        const langelis = langeliai[k];
        if (k % 2 === 0) {
            langelis.classList.add('black')
        }
    }
}
