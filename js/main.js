//rezultatu isvedimui
const sveciuTaskuSuma = document.querySelector('[data-komanda=sveciu]');
const namuTaskuSuma = document.querySelector('[data-komanda=namu]');
//susirandam visa aikste
const aikstele = document.querySelector('.aikstele');
//susirandama aiksteles ir ieskome visoje aiksteje 
const namuAikstele = aikstele.querySelector('[data-komanda=namu]');
const sveciuAikstele = aikstele.querySelector('[data-komanda=sveciu]');
//susirandam mygtukus atitinkai kiekvienai aikstelej
const namuTaskaiButton = namuAikstele.querySelectorAll('button');
const sveciuTaskaiButton = sveciuAikstele.querySelectorAll('button');

//isspausdinam paspaudus atitinkama mygtuka 
let namuRezultatas = 0;
let sveciuRezultatas = 0;

for (let i = 0; i < 3; i++) {
    namuTaskaiButton[i].addEventListener('click', () => {
        namuRezultatas += i + 1;
        namuTaskuSuma.innerText = namuRezultatas;
    });
    sveciuTaskaiButton[i].addEventListener('click', () => {
        sveciuRezultatas += i + 1;
        sveciuTaskuSuma.innerText = sveciuRezultatas;
    });
}

// let rez = 0

// namuTaskaiButton[0].addEventListener('click', () => {
//     sveciuTaskuSuma.innerText = namuTaskaiButton[0] + 1;
// })
// namuTaskaiButton[1].addEventListener('click', () => {
//     sveciuTaskuSuma.innerText = namuTaskaiButton[1] + 1;
// })

// namuTaskaiButton[2].addEventListener('click', () => {
//     sveciuTaskuSuma.innerText = namuTaskaiButton[2] + 1;
// })