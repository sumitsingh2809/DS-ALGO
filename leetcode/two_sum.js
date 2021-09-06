/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

// O(n2)
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

// O(n)
var twoSum = function (nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const required = target - nums[i];

        if (required in hashMap) {
            return [hashMap[required], i];
        }
        hashMap[nums[i]] = i;
    }

    // console.log(hashMap);
    // for (const key in hashMap) {
    //     const required = target - key;
    //     if (hashMap[required] && required != key) {
    //         return [hashMap[key], hashMap[required]];
    //     }
    // }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1,2]
// console.log(twoSum([3, 3], 6)); // [0,1]
