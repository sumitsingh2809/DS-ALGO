/**
 * Longest Palindromic Substring
 * Given a string s, return the longest palindromic substring in s.
 *
 * s consist of only digits and English letters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max = 0;
    let maxString = '';
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        let left = i;
        let right = i;
        let isPalindrome = true;

        while (left >= 0 && right < s.length) {
            console.log({ left: s[left], right: s[right] });
            if (s[left] === s[right]) {
                left--;
                right++;
            } else {
                left++;
                right--;
                // isPalindrome = false;
                break;
            }
        }
        if (left === -1) {
            left++;
            right--;
        }

        console.log({ left, right });

        // return;
        if (left >= 0) {
            if (right - left + 1 > maxString.length) {
                maxString = s.slice(left, right + 1);
            }
        }
        console.log({ isPalindrome, maxString });
        console.log();
    }
    return maxString;
};

// console.log(longestPalindrome('babad')); // bab or aba
console.log(longestPalindrome('123321')); // bab or aba
// console.log(longestPalindrome('12321')); // bab or aba
// console.log(longestPalindrome('madam')); // ada
// console.log(longestPalindrome('cbbd')); // bb
// console.log(longestPalindrome('a')); // a
// console.log(longestPalindrome('ac')); // a
// console.log('abcdefgh'.slice(0, 1));
