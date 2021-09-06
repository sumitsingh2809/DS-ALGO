/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const symbols = {
        '(': 'OPEN',
        '[': 'OPEN',
        '{': 'OPEN',
        ')': 'CLOSE',
        ']': 'CLOSE',
        '}': 'CLOSE',
    };
    const braces = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    const bracketStack = [];
    for (const bracket of s) {
        if (symbols[bracket] === 'OPEN') {
            bracketStack.push(bracket);
        } else {
            const removedBracket = bracketStack.pop();
            if (braces[removedBracket] !== bracket) return false;
        }
    }
    return bracketStack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('{[]}')); // true
