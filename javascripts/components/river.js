import util from '../helpers/util.js';
import bearsData from '../helpers/data/bearsData.js';

const printAllBears = () => {
    const allBears = bearsData.getBears();
    let domString = '';
    allBears.forEach((bears) => {
        domString += `<div id="${bears.bearId}" class="card text-center m-2">`;
        domString +=   `<img src="${bears.imageUrl}" class="card-img-top" alt="a picture of ${bears.name} the bear">`;
        domString +=   '<div class="card-body">';
        domString +=     `<h5 class="card-title">${bears.name}</h5>`;
        domString +=     '<button class="fish-attempt btn btn-dark mx-1"><i class="fas fa-question"></i></button>';
        domString +=     '<button class="fish-caught btn btn-dark mx-1"><i class="fas fa-fish"></i></button>';
        domString +=     `<p class="fish-count text-success mt-2">Fishes Caught: ${bears.fishesCaught}</p>`;
        domString +=   '</div>';
        domString += '</div>';
    })
    util.printToDom('river', domString);
};

export default { printAllBears };