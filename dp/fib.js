var fib = function (n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
};

var fib = function (n, memo = []) {
    if (memo[n] != null) return memo[n];

    if (n <= 0) return 0;
    if (n == 1) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
console.log(fib(38));
console.log(fib(38));
console.log(fib(38));
