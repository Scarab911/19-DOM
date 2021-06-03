let rezultatas = 0;
const newAntraste = 'Zadimas procese!'// arba tiesiog priskirti teksta pakeitimui be kintamojo priskyrimo

const minus = document.querySelector('.minus');
const plius = document.querySelector('.plus');
const result = document.querySelector('.number');
const reset = document.querySelector('.reset')
const antraste = document.querySelector('h1');
const gryzta = antraste.innerText;

minus.addEventListener('click', () => {
    result.innerText = --rezultatas;
    antraste.innerText = newAntraste;
})

plius.addEventListener('click', () => {
    result.innerText = ++rezultatas;
    antraste.innerText = newAntraste;
})

reset.addEventListener('click', () => {
    rezultatas = 0;
    result.innerText = rezultatas;
    antraste.innerText = gryzta;
})

