import bearsData from '../helpers/data/bearsData.js';
import river from '../components/river.js';

const addBear = (e) => {
    e.preventDefault();
    const bearName = document.getElementById('bear-name').value;
    const bearImage = document.getElementById('bear-image').value;
    bearsData.setBears({name: bearName, imageUrl: bearImage});
    river.printAllBears();
    document.getElementById('new-bear-form').reset();
};

const submitBearEvent = () => {
    document.getElementById('submit-bear-btn').addEventListener('click', addBear);
};

export default { submitBearEvent };