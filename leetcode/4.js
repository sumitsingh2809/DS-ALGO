/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let idx1 = 0;
    let idx2 = 0;
    const newArr = [];
    while (nums1.length > idx1 || nums2.length > idx2) {
        const el1 = nums1[idx1];
        const el2 = nums2[idx2];

        if (el1 === undefined) {
            newArr.push(el2);
            idx2++;
        } else if (el2 === undefined) {
            newArr.push(el1);
            idx1++;
        } else if (el1 <= el2) {
            newArr.push(el1);
            idx1++;
        } else {
            newArr.push(el2);
            idx2++;
        }
    }

    const middleIdx = Math.floor(newArr.length / 2);
    if (newArr.length % 2 === 0) {
        return (newArr[middleIdx - 1] + newArr[middleIdx]) / 2;
    }
    return newArr[middleIdx];
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10])); // 3
// console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
console.log(findMedianSortedArrays([], [1])); // 1
console.log(findMedianSortedArrays([2], [])); // 2
