/**
 * write a function called maxSubarraySum which accepts an array of integers
 * and a number called n.
 * the function should calculate the maximum sum of n consecutive elements in an array.
 */

// O(n^2)
function _maxSubarraySum(arr, n) {
    if (n > arr.length) return null;

    let max = -Infinity;
    for (let i = 0; i <= arr.length - n; i++) {
        let temp = 0;
        for (let j = i; j < i + n; j++) {
            temp += arr[j];
        }

        if (temp > max) max = temp;
    }

    return max;
}

// O(n)
// Sliding Window
function maxSubarraySum(arr, n) {
    if (n > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < n; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - n];

        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([-1, -2, -3, -4], 2)); // -3
console.log(maxSubarraySum([1, 2], 2)); // 3
