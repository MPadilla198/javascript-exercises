const removeFromArray = function (array, ...removalElements) {
    for (elem of removalElements) {
        let index = array.findIndex(value => value === elem)
        while (index !== -1) {
            array.splice(index, 1)
            index = array.findIndex(value => value === elem)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
