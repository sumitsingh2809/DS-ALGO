/**
 * Array Nesting
 *
 * You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1].
 * You should build a set s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... } subjected to the following rule:
 * The first element in s[k] starts with the selection of the element nums[k] of index = k.
 * The next element in s[k] should be nums[nums[k]], and then nums[nums[nums[k]]], and so on.
 * We stop adding right before a duplicate element occurs in s[k].
 * Return the longest length of a set s[k].
 *
 * {@link https://www.youtube.com/watch?v=HiuoGkBMJdc&ab_channel=codeExplainer}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    const elements = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in elements) {
            continue;
        }

        let idx = i;
        let count = 0;
        while (true) {
            if (nums[idx] in elements) {
                break;
            }
            elements[nums[idx]] = true;
            idx = nums[idx];
            count += 1;
        }
        max = Math.max(count, max);
    }

    return max;
};

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2])); // 4 => s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}
// console.log(arrayNesting([0, 1, 2])); // 1
