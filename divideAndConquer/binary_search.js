/**
 * Given a sorted array of integers, write a function called search,
 * that accepts a value and returns the index where the value passed to the function is located.
 * if the value is not found, return -1
 */

// O(log N)
function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        const middleIndex = Math.floor((min + max) / 2);
        const currentElement = arr[middleIndex];

        if (currentElement < val) {
            min = middleIndex + 1;
        } else if (currentElement > val) {
            max = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); //3
console.log(search([1, 2, 3, 4, 5, 6], 6)); //5
console.log(search([1, 2, 3, 4, 5, 6], 11)); //-1
