/**
 * Given two strings, write an algorithm to check if they are anagrams of each other.
 * Return true if they pass the test and false if they don't. E.g
 * isAnagram('silent', 'listen') // should return true
 */

function isAnagram_(stringA, stringB) {
    if (stringA.length !== stringB.length) return false;

    const fCounterA = {};
    const fCounterB = {};

    for (const char of stringA) {
        fCounterA[char] = (fCounterA[char] || 0) + 1;
    }
    for (const char of stringB) {
        fCounterB[char] = (fCounterB[char] || 0) + 1;
    }

    for (const key in fCounterA) {
        if (!(key in fCounterB)) {
            return false;
        }
        if (fCounterA[key] !== fCounterB[key]) {
            return false;
        }
    }
    return true;
}

function isAnagram(stringA, stringB) {
    if (stringA.length !== stringB.length) return false;

    const lookup = {};
    for (const char of stringA) {
        lookup[char] = (lookup[char] || 0) + 1;
    }

    for (const char of stringB) {
        if (!lookup[char]) return false;
        lookup[char] -= 1;
    }
    return true;
}

console.log(isAnagram('silent', 'listen')); // true
console.log(isAnagram('aaz', 'zza')); // false
console.log(isAnagram('heart', 'earth')); // true
console.log(isAnagram('rat', 'car')); // false
