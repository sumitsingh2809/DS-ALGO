/**
 * 35. Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    let middleIdx;

    if (nums[leftIdx] > target) return 0;
    if (nums[rightIdx] < target) return rightIdx + 1;
    while (leftIdx <= rightIdx) {
        middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        if (nums[middleIdx] === target) {
            return middleIdx;
        } else if (nums[middleIdx] < target) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
        // console.log({ leftIdx, rightIdx, middleIdx });
    }

    return leftIdx;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1], 0)); // 0
console.log(searchInsert([], 0)); // 0
