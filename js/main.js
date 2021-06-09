function generuotiSocials(selector, array) {

    if (!Array.isArray(array) ||
        array.length === 0) {
        console.error('ERROR: sarasas turi buti ne tuscias!');
        return false;
    }

    const selectorDOM = document.querySelector(selector);
    if (!selectorDOM) {
        console.error('ERROR: nepavyko rasti selectoriaus');
        return false;
    }

    if (typeof selector !== 'string' ||
        selector === '') {
        console.error('ERROR: selectorius negali buti tuscias string!');
        return false;
    }

    let HTML = '';

    for (let element of array) {
        HTML += `<i class="fa fa-${element}"></i>`
    }
    if (HTML === '') {
        console.error('ERROR: kodo dalis negali buti tuscia ir turi buti string');
        return false
    }

    selectorDOM.innerHTML = HTML;
}

const icons = ['facebook', 'twitter', 'linkedin'];
const icons1 = [];
generuotiSocials('.socials', icons);