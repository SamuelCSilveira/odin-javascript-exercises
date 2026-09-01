const reverseString = function(word) {
    let wordArr = word.split('');
    let reversedArr = [];
    while (wordArr.length > 0) {
        reversedArr.push(wordArr.pop());
    }
    return reversedArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
