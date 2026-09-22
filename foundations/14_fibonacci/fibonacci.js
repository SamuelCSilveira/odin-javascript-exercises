const fibonacci = function(index) {
    if (Number(index) < 0) return "OOPS";
    if (Number(index) === 0) return 0;

    const array = [ 1, 1 ];
    for (let i = 2; i <= Number(index); i++){
        array.push(array[i-1] + array[i-2]); 
    }
    return array[Number(index)-1];
};

// Do not edit below this line
module.exports = fibonacci;
