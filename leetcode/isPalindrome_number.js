/**
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is palindrome while 123 is not.
 *
 * Follow up: Could you solve it without converting the integer to a string?
 *
 * {@link https://leetcode.com/problems/palindrome-number/}
 */

var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;

    let num = x;
    let result = 0;
    while (num > 0) {
        result += num % 10;
        num = Math.trunc(num / 10);
        if (num > 0) result *= 10;
    }
    return result === x;
};

/**
 * Time complexity : O(log 10 (n)).
 * We divided the input by 10 for every iteration,
 * so the time complexity is O(log 10(n))
 * Space complexity : O(1).
 */
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;
    if (x < 10) return true;

    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + (x % 10);
        x = Math.trunc(x / 10);
    }

    // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
    // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
    // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
    return revertedNumber === x || x === Math.trunc(revertedNumber / 10);
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false
