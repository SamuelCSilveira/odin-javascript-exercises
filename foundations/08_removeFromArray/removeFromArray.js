const removeFromArray = function(array, ...removed) {
    return array.filter((item) => !removed.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
