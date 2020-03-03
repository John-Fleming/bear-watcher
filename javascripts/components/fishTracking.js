import bearsData from '../helpers/data/bearsData.js';
import river from '../components/river.js';

const addFishAttemptLog = (buttonClicked, bearId) => {
    const failedCatchLog = {
        successfulCatch: false,
        attemptTimestamp: 'current time'
    };
    const successfulCatchLog = {
        successfulCatch: true,
        attemptTimestamp: 'current time'
    };

    if (buttonClicked === 'attempt-btn') {
        bearsData.updateFishAttemptLogs(bearId, failedCatchLog);
    } else if (buttonClicked === 'successful-catch-btn') {
        bearsData.updateFishAttemptLogs(bearId, successfulCatchLog);
    };
};


const tryForFish = (e) => {
    const attemptBtn = e.target.id;
    const bearId = e.target.closest('.card').id;
    bearsData.updateFishAttempts(bearId);
    addFishAttemptLog(attemptBtn, bearId);
    // console.log(bearsData.getBears());
    river.printAllBears();
};

const caughtAFish = (e) => {
    const bearId = e.target.closest('.card').id;
    bearsData.updateFishAttempts(bearId);
    bearsData.updateFishesCaught(bearId);
    river.printAllBears();
};

const fishingEvents = () => {
    $('#river').on('click', '.fish-attempt', tryForFish);
    $('#river').on('click', '.fish-caught', caughtAFish);
};

export default { fishingEvents };
