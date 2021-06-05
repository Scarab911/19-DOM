const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input');
const spanDOM = document.querySelector('span');
const fonospalva = document.querySelector('#bg-color');
const textcolor = document.querySelector('#text-color');



inputDOM.style.color = 'red';

buttonDOM.addEventListener('click', (event) => {
    //isjungiam delfaultinesa savybes, kad nepersikrautu
    event.preventDefault();
    //priskiriam elemntui turini
    spanDOM.innerText = inputDOM.value;
    //priskiriam elemtui spalvas
    spanDOM.style.color = `${textcolor.value}`;
    spanDOM.style.backgroundColor = `${fonospalva.value}`;
    //isvalom forma
    inputDOM.value = '';

})