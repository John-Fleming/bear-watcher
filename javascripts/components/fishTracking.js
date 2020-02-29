import bearsData from '../helpers/data/bearsData.js';
import river from '../components/river.js';

const addFishAttemptLog = () => {
    // this needs some sort of conditional saying if the button was caught a fish, then push an object with 
    // successfulCatch = true, else push a different object with it set to false
    // TRY ADDING e TO THIS AND CONSOLE LOGGING THE E.TARGET.ID TO SEE WHAT IT IS
    // IF ITS OBVIOUSLY ONE BUTTON, ADJUST THE CONDITIONAL ACCORDING TO IT
    bearsData.updateFishAttemptLogs({
        successfulCatch: ,
        attemptTimestamp: 
    })
}


const tryForFish = (e) => {
    const bearId = e.target.closest('.card').id;
    bearsData.updateFishAttempts(bearId);
    // console.log(bearsData.getBears());
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
