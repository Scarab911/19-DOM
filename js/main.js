let rezultatas = 0;
const newAntraste = 'Zadimas procese!'// arba tiesiog priskirti teksta pakeitimui be kintamojo priskyrimo

const minus = document.querySelector('.minus');
const plius = document.querySelector('.plus');
const result = document.querySelector('.number');
const reset = document.querySelector('.reset')
const antraste = document.querySelector('h1');
const ulDOM = document.querySelector('ul');
const gryzta = antraste.innerText;
// const pradinisUlHTML = ulDOM.innerHTML;   //nereikalingas



ulDOM.innerHTML = `<li>Tu pasileidai zaidima - sekmes!</li>`

minus.addEventListener('click', () => {
    result.innerText = --rezultatas;
    antraste.innerText = newAntraste;
    ulDOM.innerHTML += `<li>Paspaudei minusa ir dabartinis rezultatas yra ${rezultatas}</li>`


})

plius.addEventListener('click', () => {
    result.innerText = ++rezultatas;
    antraste.innerText = newAntraste;
    ulDOM.innerHTML += `<li>Paspaudei pliusa ir dabartinis rezultatas yra ${rezultatas}</li>`
})

reset.addEventListener('click', () => {
    rezultatas = 0;
    result.innerText = rezultatas;
    antraste.innerText = gryzta;
    ulDOM.innerHTML = `<li>Paspaudei reset ir dabartinis rezultatas yra ${rezultatas}</li>`

})

