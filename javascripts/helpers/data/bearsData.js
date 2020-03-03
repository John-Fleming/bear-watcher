const bears = [];

const setBears = (newBearObject) => {
    bears.push(newBearObject);
};

const updateFishAttemptLogs = (bearId, newAttemptOject) => {
    const selectedBear = bears.findIndex((x) => x.bearId === bearId);
    bears[selectedBear].fishAttemptsLog.push(newAttemptOject); 
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
