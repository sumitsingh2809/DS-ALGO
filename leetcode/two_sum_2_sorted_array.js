/**
 * Given an array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number.
 * Return the indices of the two numbers (1-indexed) as an integer array answer of size 2,
 * where 1 <= answer[0] < answer[1] <= numbers.length.
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 */

// O(n)
// Hint: using two pointers
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
};

// console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
// console.log(twoSum([2, 3, 4], 6)); // [1, 3]
// console.log(twoSum([-1, 0], -1)); // [1, 2]
