function factorial_iterative(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

function factorial_recursive(num) {
    if (num === 0) return 1;
    return num * factorial_recursive(num - 1);
}

console.log(factorial_recursive(0)); // 1
console.log(factorial_recursive(2)); // 2
console.log(factorial_recursive(3)); // 6
console.log(factorial_recursive(4)); // 24
console.log(factorial_recursive(7)); // 5040
