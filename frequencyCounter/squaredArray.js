/**
 * Write a function called same, which accepts two arrays(number).
 * The Function should return true if every value in the array
 * has its corresponding value squared in the second array.
 * The frequency of values must be same.
 *
 * same([1, 2, 3], [4, 1, 9]); //true
 * same([1, 2, 3], [1, 9]); //false
 * same([1, 2, 1], [4, 4, 1]); //false (must be same frequency)
 */

// NESTED LOOPS: O(n^2)
function same_(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (const i of arr1) {
        const correctIndex = arr2.indexOf(i ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }

    return true;
}

// O(n)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (const val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (const val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (const key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
