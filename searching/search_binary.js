// O(log n)
function binary_search(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middleIndex = Math.floor((left + right) / 2);
        const currentElement = arr[middleIndex];

        if (val > currentElement) {
            left = middleIndex + 1;
        } else if (val < currentElement) {
            right = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5));
