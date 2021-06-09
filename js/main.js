function generuotiSocials(selector, array) {
    const selectorDOM = document.querySelector(selector);

    if (!Array.isArray(array) ||
        array.length === 0) {
        console.error('ERROR: sarasas turi buti ne tuscias!');
        return false;
    }
    let HTML = '';

    for (let element of array) {
        HTML += `<i class="fa fa-${element}"></i>`
        console.log(HTML);
    }
    selectorDOM.innerHTML = HTML;
}

const icons = ['facebook', 'twitter', 'linkedin'];
const icons1 = [];
generuotiSocials('.socials', icons);