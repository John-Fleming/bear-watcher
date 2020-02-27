import util from '../helpers/util.js';
import bearsData from '../helpers/data/bearsData.js';

const printAllBears = () => {
    const allBears = bearsData.getBears();
    let domString = '';
    allBears.forEach((bears) => {
        domString += '<div class="card m-2" style="width: 18rem;">';
        domString +=   `<img src="${bears.imageUrl}" class="card-img-top" alt="a picture of ${bears.name} the bear">`;
        domString +=   '<div class="card-body">';
        domString +=     `<h5 class="card-title">${bears.name}</h5>`;
        domString +=   '</div>';
        domString += '</div>';
    })
    util.printToDom('river', domString);
};

export default { printAllBears };