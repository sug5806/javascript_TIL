import {odd, even} from 'var';

console.log(odd);
console.log(even);

function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    } else {
        return even;
    }
}

module.exports = {
    checkOddOrEven,
    odd,
    even,
};
