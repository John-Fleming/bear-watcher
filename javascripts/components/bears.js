import bearsData from '../helpers/data/bearsData.js';
import river from '../components/river.js';

const addBear = (e) => {
    e.preventDefault();
    const bearName = $('#bear-name').val();
    const bearImage = $('#bear-image').val();
    bearsData.setBears({name: bearName, imageUrl: bearImage});
    river.printAllBears();
    $('#new-bear-form').trigger("reset");
};

const submitBearEvent = () => {
    $('#submit-bear-btn').click(addBear);
};

export default { submitBearEvent };