/**
 * Add Binary
 *
 * Given two binary strings a and b, return their sum as a binary string.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let aIdx = a.length - 1;
    let bIdx = b.length - 1;

    let carry = 0;
    let sum = '';
    console.log({ aIdx, bIdx });
    while (aIdx >= 0 && bIdx >= 0) {
        console.log({ aIdx, bIdx });
        if (parseInt(a[aIdx]) + parseInt(b[bIdx]) + carry > 1) {
            sum = `0${sum}`;
            carry = 1;
        } else {
            sum = `1${sum}`;
        }
        aIdx--;
        bIdx--;
    }
    if (carry > 0) sum = `1${sum}`;

    if (aIdx >= 0) {
    }
    return sum;
};

console.log(addBinary('11', '1')); // '100'
// console.log(addBinary('1010', '1011')); // '10101'
