function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Best: O(n k) => (n) length * (k) number of digits
// Average: O(n k)
// Worst: O(n k)
// Space: O(n + k)
function radix_sort(arr) {
    const maxDigits = mostDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const digit = getDigit(current, k);
            buckets[digit].push(current);
        }

        arr = [].concat(...buckets);
    }
    return arr;
}

console.log(radix_sort([5432, 12345678, 18, 8, 40865, 745789, 0])); //  [ 0, 8, 18, 5432, 40865, 745789, 12345678 ]
console.log(radix_sort([23, 45, 12, 13, 6, 43, 435, -5])); // [ -5,  6, 12,  13, 23, 43, 45, 435 ]

// console.log(digitCount(1)); // 1
// console.log(digitCount(25)); // 2
// console.log(digitCount(314)); // 3
// console.log(mostDigits([1234, 56, 7])); // 4
// console.log(mostDigits([1, 11, 11111, 1])); // 5
// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(12345, 2)); // 3
