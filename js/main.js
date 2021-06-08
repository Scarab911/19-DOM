const mygtukas = document.querySelector('button');
const klientas = document.querySelector('#customer');
const sriuba = document.querySelector('#sriuba');
const patiekalas = document.querySelector('#patiekalas');
const desertas = document.querySelector('#desertas');
const uzsakymas = document.querySelector('.order')
const gerimas = document.querySelectorAll('input[name="drinks"]')

mygtukas.addEventListener('click', (e) => { //e=event, trumpiausias naudojamas parametras 
    e.preventDefault();
    let kreipinys = klientas.value === '' ? 'nepateikes vardo' : 'vardu' + klientas.value;

    function menuCheked(item) {
        return item.checked ? 'nori' : 'nenori';
    }
    function drinkCheked(item) {
        for (let i = 0; i < item.length; i++) {
            let gerimoPavadinimas = ''
            if (item[i].checked === true) {
                return gerimoPavadinimas = `${item[i].value}`
            }
        }
    }
    let gerimai = gerimas.value === undefined ? 'nenori gerimo' : (drinkCheked(gerimas)) + 'yra pasirinktas gerimas.'

    uzsakymas.innerText = `Uzsakovas ${kreipinys}, ${menuCheked(sriuba)} sriubos, ${menuCheked(patiekalas)} pagrindinio patiekalo, ${menuCheked(desertas)} deserto ir ${gerimai}`;
})