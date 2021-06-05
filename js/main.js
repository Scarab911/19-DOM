const mygtukas = document.querySelector('button');
const klientas = document.querySelector('#customer');
const sriuba = document.querySelector('#sriuba');
const patiekalas = document.querySelector('#patiekalas');
const desertas = document.querySelector('#desertas');
const uzsakymas = document.querySelector('.order')
const gerimas = document.querySelectorAll('input[name="drinks"]')

mygtukas.addEventListener('click', (event) => {
    event.preventDefault();

    function menuCheked(item) {
        if (item.checked) {
            return 'nori'
        }
        return 'nenori'
    }
    function drinkCheked(item) {
        for (let i = 0; i < item.length; i++) {
            let gerimoPavadinimas = ''
            if (item[i].checked === true) {
                return gerimoPavadinimas = `${item[i].value}`

            }

        }
    }
    uzsakymas.innerText = `Uzsakovas vardu ${klientas.value}, ${menuCheked(sriuba)} sriubos, ${menuCheked(patiekalas)} pagrindinio patiekalo, ${menuCheked(desertas)} deserto ir ${drinkCheked(gerimas)} yra pasirinktas gerimas.`;
})