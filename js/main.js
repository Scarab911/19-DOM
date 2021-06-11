debugger;
const gyvunai = ['zuikis', 'barsukas', 'lape', 'vilkas', 'sernas', 'stirna', 'vovere'];

function addAndPrint(selector, data) {
    //Validations

    //Logic
    const DOM = document.querySelector(selector);
    const button = document.querySelector('button');

    let HTML = '';

    for (const item of data) {
        HTML += `<option value="${item}">${item}</option>`
    }

    DOM.insertAdjacentHTML('afterend', `<select>${HTML}</select>`);

    const selectDOM = document.querySelector('select');
    selectDOM.classList.add('pomidoras'); //uzdedam klase kad pirma raide butu didzioji
    const spanDOM = document.querySelector('.option');
    spanDOM.classList.add('pomidoras');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        spanDOM.innerText = selectDOM.value;
    });

    // post Logic Validations
}

addAndPrint('label', gyvunai);