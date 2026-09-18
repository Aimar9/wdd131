const currentYear = document.querySelector('#currentyear');
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = 'Last Modification: ' + document.lastModified;

const menuButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        menuButton.textContent = '❌';
    } else {
        menuButton.textContent = '≡';
    }
});