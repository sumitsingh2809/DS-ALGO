// O(m + n)
// Both arrays must be sorted
function merge_sorted_arrays(arr1, arr2) {
    let idx1 = 0;
    let idx2 = 0;
    const result = [];

    while (arr1.length > idx1 || arr2.length > idx2) {
        const el1 = arr1[idx1];
        const el2 = arr2[idx2];

        // console.log({ el1, el2 });
        if (!el1) {
            result.push(el2);
            idx2++;
        } else if (!el2) {
            result.push(el1);
            idx1++;
        } else if (el1 >= el2) {
            result.push(el2);
            idx2++;
        } else {
            result.push(el1);
            idx1++;
        }
    }
    return result;
}

// console.log(merge_sorted_arrays([1, 2, 10, 50], [2, 14, 99, 100]));
module.exports = { merge_sorted_arrays };
