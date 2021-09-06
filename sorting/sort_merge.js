const { merge_sorted_arrays } = require('../helpers/merge');

// O(n log n)
// (log n) decompositions * (n) comparisons per decomposition
function merge_sort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = merge_sort(arr.slice(0, mid));
    const right = merge_sort(arr.slice(mid));

    return merge_sorted_arrays(left, right);
}

console.log(merge_sort([23, 45, 12, 13, 6, 43, 435, -5]));
