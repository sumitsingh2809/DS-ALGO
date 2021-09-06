const { swap } = require('../helpers/swap');

function pivot(arr, start = 0, end = arr.length - 1) {
    const pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    // console.log(arr);
    return swapIdx;
}

// Best: O(n logn) => (log n) decompositions * (n) comparisons per decomposition
// Average: O(n logn) => (log n) decompositions * (n) comparisons per decomposition
// Worst: O(n^2) (already sorted array) => (n) decompositions * (n) comparisons per decomposition
// Space: O(logn)
function quick_sort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quick_sort(arr, left, pivotIndex - 1);
        // right
        quick_sort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quick_sort([5, 2, 1, 8, 4, 7, 6, 3]));
console.log(quick_sort([23, 45, 12, 13, 6, 43, 435, -5]));
