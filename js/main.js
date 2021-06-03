const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger')
const navDOM = document.querySelector('nav');


console.log(navDOM);

hamburgerDOM.addEventListener('click', () => {
    navDOM.classList.toggle('visible');
    logoDOM.classList.toggle('big');
})