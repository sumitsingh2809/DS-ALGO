// good if data is nearly sorted or streaming data
function insertion_sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertion_sort([23, 45, 12, 13, 6, 43, 435, -5])); // [ -5,  6, 12,  13, 23, 43, 45, 435 ]
