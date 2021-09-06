const { swap } = require('../helpers/swap');

// O(n^2)
// function bubble_sort(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }

// optimized with noSwaps
// O(n) when data is nearly sorted.
function bubble_sort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubble_sort([23, 45, 12, 13, 6, 43, 435, -5])); // [ 6, 12, 13, 23, 45 ]
