const bears = [];

const setBears = (newBearObject) => {
    bears.push(newBearObject);
};

const getBears = () => {
    return bears;
};

export default { getBears, setBears };