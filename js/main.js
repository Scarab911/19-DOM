const submitDOM = document.querySelector("button")
const inputDOM = document.querySelector("input")
const spanDOM = document.querySelector("span")
const outputDOM = document.querySelector('.output')

// outputDOM.innerHTML = `<span></span>`

submitDOM.addEventListener('click', (event) => {
    event.preventDefault();
    // outputDOM.innerHTML = `<span></span>`
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';
})