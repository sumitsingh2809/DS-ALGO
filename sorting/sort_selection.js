const { swap } = require('../helpers/swap');

// O(n^2)
// useful when we want to have less number of swaps.
function selection_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // if (arr[minIndex] < arr[i]) swap(arr, i, minIndex);
        if (i !== minIndex) swap(arr, i, minIndex);
    }
    return arr;
}

console.log(selection_sort([23, 45, 12, 13, 6, 43, 435, -5])); // [ -5,  6, 12,  13, 23, 43, 45, 435 ]
