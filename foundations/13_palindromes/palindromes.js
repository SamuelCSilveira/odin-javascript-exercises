const palindromes = function (string) {
    const stringArray = string
        .replaceAll(" ", "")
        .replaceAll(".", "")
        .replaceAll(",", "")
        .replaceAll("!", "")
        .replaceAll("?", "")
        .toLowerCase()
        .split("");
    
    const invertedStringArray = [];

    for (let i = 0; i < string.length; i++) {
        invertedStringArray[string.length - i] = stringArray[i];
    }

    const formattedString = stringArray.join("");
    const invertedString = invertedStringArray.join("");

    return  formattedString === invertedString;
};

// Do not edit below this line
module.exports = palindromes;
