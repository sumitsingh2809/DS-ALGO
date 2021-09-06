function flatten(arr) {
    let results = [];
    for (const el of arr) {
        if (!Array.isArray(el)) {
            results.push(el);
        } else {
            results.push(...flatten(el));
        }
    }

    return results;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
