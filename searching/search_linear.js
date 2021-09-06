// O(n)
function linear_search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(linear_search([1, 2, 3, 4, 5, 6, 7, 8], 7));
console.log(linear_search([8, 7, 6, 5, 4, 3, 2, 1], 9));
