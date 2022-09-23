/* Imports */
import { getBeanies, getAstro } from './fetch-utils.js';
import { renderAstroOption, renderBeanie } from './render-utils.js';

/* Get DOM Elements */
const beanieList = document.getElementById('beanie-list');
const astroSelect = document.getElementById('astro-sign-select');

/* State */
//let error = null;
let astros = [];
let beanies = [];
let error = null;

/* Events */
window.addEventListener('load', async () => {
    findBeanies();

    const response = await getAstro();

    error = response.error;
    beanies = response.data;
});

async function findBeanies(title, astroSign) {
    const response = await getBeanies(title, astroSign);

    error = response.error;
    beanies = response.data;

    if (!error) {
        displayBeanies();
    }
}
/* Display Functions */
function displayBeanies() {
    beanieList.innerHTML = '';

    for (const beanie of beanies) {
        const beanieEl = renderBeanie(beanie);
        beanieList.append(beanieEl);
    }
}

function displayAstroOptions() {
    for (const astro of astros) {
        const option = renderAstroOption(astro);
        astroSelect.append(option);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayBeanies();
displayAstroOptions();
renderAstroOption();
