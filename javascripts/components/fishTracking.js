import bearsData from '../helpers/data/bearsData.js';
import river from '../components/river.js';

const tryForFish = (e) => {
    const bearId = e.target.closest('.card').id;
    bearsData.updateFishAttempts(bearId);
    // console.log(bearsData.getBears());
    river.printAllBears();
};

const caughtAFish = (e) => {
    const bearId = e.target.closest('.card').id;
    bearsData.updateFishAttempts(bearId);
    bearsData.updateFishesCaught(bearId);
    // console.log(bearsData.getBears());
    river.printAllBears();
};

const fishingEvents = () => {
    $('#river').on('click', '.fish-attempt', tryForFish);
    $('#river').on('click', '.fish-caught', caughtAFish);
};

export default { fishingEvents };
