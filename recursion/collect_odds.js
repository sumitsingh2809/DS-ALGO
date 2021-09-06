// Helper Method Recursion
function collectOddValues_helper(arr) {
    let results = [];

    function helper(helperInput) {
        if (helperInput.length === 0) return;

        if (helperInput[0] % 2 !== 0) {
            results.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);

    return results;
}

// Pure Recursion
function collectOddValues_pure(arr) {
    let results = [];
    if (arr.length === 0) return results;

    if (arr[0] % 2 !== 0) {
        results.push(arr[0]);
    }

    return results.concat(collectOddValues_pure(arr.slice(1)));
}

console.log(collectOddValues_pure([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ 1, 3, 5, 7, 9 ]
