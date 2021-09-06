/**
 * Remove Element
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
 * More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 * Return k after placing the final result in the first k slots of nums.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let rightIdx = nums.length - 1;
    let rightVal;
    for (let i = nums.length - 1; i > -1; i--) {
        const element = nums[i];
        console.log({ i, rightIdx, rightVal });
        if (element === val) {
            if (rightVal !== undefined) {
                nums[i] = rightVal;
                nums[rightIdx] = '_';
                rightIdx--;
                rightVal = nums[rightIdx];
            } else {
                nums[i] = '_';
                rightIdx--;
            }
        } else if (rightVal == undefined) {
            rightVal = element;
        }
        console.log(nums);
        console.log({ rightIdx, rightVal });
        console.log('================================================================');
    }
    console.log(nums);
    return rightIdx + 1;
};

var removeElement = function (nums, val) {
    var startIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[startIdx] = nums[i];
            startIdx++;
        }
    }
    for (let i = startIdx; i < nums.length; i++) {
        nums[i] = '_';
    }
    console.log(nums);
    return startIdx;
};

// console.log(removeElement([3, 2, 2, 3], 3)); // 2, nums = [2,2,_,_]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5, nums = [0,1,4,0,3,_,_,_]
