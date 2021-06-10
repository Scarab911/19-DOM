function generateNavLinks(selector, listOfLinks) {

    const selectorDOM = document.querySelector(selector);
    const logo = selectorDOM.querySelector('.logo')
    // console.log(logo);
    // console.log(listOfLinks[0].title);

    let HTML = '';

    for (let i in listOfLinks) {
        HTML += `<a href="${listOfLinks[i].href}">${listOfLinks[i].title}</a>`

        console.log(HTML)
    }
    logo.insertAdjacentHTML("afterend", `<nav>${HTML}</nav>`);
    // selectorDOM.innerHTML = selectorDOM.innerHTML + `<nav>${HTML}</nav>`;

}

const menu = [
    {
        href: '#',
        title: 'Home'
    },
    {
        href: '#',
        title: 'Services'
    },
    {
        href: '#',
        title: 'About us'
    },
    {
        href: '#',
        title: 'Contact us'
    }
];

console.log(generateNavLinks('header', menu));