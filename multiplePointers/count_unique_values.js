function countUniqueValues1(arr) {
    const resultObj = {};
    for (let i = 0; i < arr.length; i++) {
        resultObj[arr[i]] = 0;
    }

    return Object.keys(resultObj).length;
}

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    let j = 1;
    let current = arr[0];

    while (j < arr.length) {
        if (current !== arr[j]) {
            i++;
            current = arr[j];
        }
        j++;
    }

    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
