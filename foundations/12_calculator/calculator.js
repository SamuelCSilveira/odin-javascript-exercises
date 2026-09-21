const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum += current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product *= current, 1)
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(val) {
	if (val === 0 || val === 1) return 1;
  let result = val;
  for (let i = val; i > 1; i--){
    result = result * (i-1);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
