/**
 * Write a function called sameFrequency.
 * Given two positive integers,
 * find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities: Time: O(N)
 */

function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.length !== num2.length) return false;

    const num1Frequency = {};
    const num2Frequency = {};

    for (let i = 0; i < num1.length; i++) {
        num1Frequency[num1[i]] = (num1Frequency[num1[i]] || 0) + 1;
    }
    for (let i = 0; i < num2.length; i++) {
        num2Frequency[num2[i]] = (num2Frequency[num2[i]] || 0) + 1;
    }
    for (const key in num1Frequency) {
        if (!num1Frequency.hasOwnProperty(key)) return false;
        if (num1Frequency[key] !== num2Frequency[key]) return false;
    }

    return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false
