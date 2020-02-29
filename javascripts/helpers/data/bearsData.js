const bears = [];
const fishAttemptLogs = [];

const setBears = (newBearObject) => {
    bears.push(newBearObject);
};

const updateFishAttemptLogs = (newAttemptOject) => {
    bears.fishAttemptTimestamp.push(newAttemptOject); // SEE IF THIS WIL WORK WITH THE DOUBLE DOT NOTATION
};

const getBears = () => {
    return bears;
};

const updateFishAttempts = (bearId) => {
    const selectedBear = bears.findIndex((x) => x.bearId === bearId);
    bears[selectedBear].fishAttempts += 1;
};

const updateFishesCaught = (bearId) => {
    const selectedBear = bears.findIndex((x) => x.bearId === bearId);
    bears[selectedBear].fishesCaught += 1;
};

export default { getBears, setBears, updateFishAttempts, updateFishesCaught, updateFishAttemptLogs };