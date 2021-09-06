/**
 * Given an array of positive and negative numbers,
 * find if there is a subarray (of size at-least one) with 0 sum.
 */

// O(n^2)
function sumZero_(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// O(n)
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        } else {
            return [arr[left], arr[right]];
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-4, -3, -2, -1, 0, 3, 4]));
console.log(sumZero([-2, 0, 1, 3]));
