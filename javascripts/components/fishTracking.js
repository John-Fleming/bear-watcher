import bearsData from '../helpers/data/bearsData.js';
import river from '../components/river.js';

const addFishAttemptLog = (buttonClicked, bearId) => {
    if (buttonClicked === 'attempt-btn') {
        bearsData.updateFishAttemptLogs(bearId, {
            successfulCatch: false,
            attemptTimestamp: 'current time'
        });
    } else if (buttonClicked === 'successful-catch-btn') {
        bearsData.updateFishAttemptLogs(bearId, {
            successfulCatch: true,
            attemptTimestamp: 'current time'
        });
    }
};


const tryForFish = (e) => {
    const attemptBtn = e.target.id;
    const bearId = e.target.closest('.card').id;
    bearsData.updateFishAttempts(bearId);
    addFishAttemptLog(attemptBtn, bearId);
    console.log(bearsData.getBears());
    // console.log(Date.now())
    // addFishAttemptLog() <-- should i pass the bearId here? try that and see how it impacts the above function
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
