import bears from './components/bears.js';
import fishTracking from './components/fishTracking.js';

const init = () => {
    bears.submitBearEvent();
    fishTracking.fishingEvents();
};

init();