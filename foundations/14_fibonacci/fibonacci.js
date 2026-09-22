const fibonacci = function(index) {
    if (Number(index) < 0) return "OOPS";
    if (Number(index) === 0) return 0;

    const sequence = [ 1, 1 ];
    for (let i = 2; i <= Number(index); i++){
        sequence.push(sequence[i-1] + sequence[i-2]); 
    }
    return sequence[Number(index)-1];
};

// Do not edit below this line
module.exports = fibonacci;
