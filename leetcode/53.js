/**
 * 53. Maximum Subarray
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 *
 * Follow up: If you have figured out the O(n) solution,
 * try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * Kadane's Algorithms
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (curSum < 0) curSum = 0;
        curSum += nums[i];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 => [4,-1,2,1] has the largest sum = 6.
// console.log(maxSubArray([1])); // 1
// console.log(maxSubArray([5, 4, -1, 7, 8])); // 23

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// output: 6
// [4, -1, 2, 1] has the largest sum = 6
