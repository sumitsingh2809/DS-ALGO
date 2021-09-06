/**
 * {@link https://leetcode.com/problems/roman-to-integer/}
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] && romanNumbers[s[i + 1]] > romanNumbers[s[i]]) {
            result -= romanNumbers[s[i]];
        } else {
            result += romanNumbers[s[i]];
        }
    }
    return result;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58  L = 50, V= 5, III = 3
console.log(romanToInt('MCMXCIV')); // 1994  M = 1000, CM = 900, XC = 90 and IV = 4
