/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * {@link https://leetcode.com/problems/longest-common-prefix/}
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';

    return strs.reduce((acc, cur) => {
        console.log({ acc, cur });
        let i = 0;
        while (acc[i] === cur[i]) i++;
        console.log({ [i]: cur.slice(0, i) });
        return cur.slice(0, i);
    });
};

var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    let prefix = '';
    let maxPrefixLength = Math.min(...strs.map((str) => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
        let char = strs[0][i];
        if (strs.every((str) => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
// console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
// console.log(longestCommonPrefix(['a'])); // ""
// console.log(longestCommonPrefix(['ab', 'a'])); // "a"
