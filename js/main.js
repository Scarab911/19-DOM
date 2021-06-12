debugger;
const gyvunai = ['zuikis', 'barsukas', 'lape', 'vilkas', 'sernas', 'stirna', 'vovere'];

function addAndPrint(selector, data) {
    //Validations

    //Logic
    const DOM = document.querySelector(selector);

    let HTML = '';

    for (const item of data) {
        HTML += `<option value="${item}">${item}</option>`
    }

    DOM.insertAdjacentHTML('afterend', `<select>${HTML}</select>`);


    // post Logic Validations
}
addAndPrint('label', gyvunai);

//uzkuriam eventa
const button = document.querySelector('button');
const selectDOM = document.querySelector('select');
selectDOM.classList.add('pomidoras'); //uzdedam klase kad pirma raide butu didzioji
const spanDOM = document.querySelector('.option');
spanDOM.classList.add('pomidoras');

button.addEventListener('click', (e) => {
    e.preventDefault();
    spanDOM.innerText = selectDOM.value;
});