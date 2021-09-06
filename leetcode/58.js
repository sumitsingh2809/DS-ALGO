/**
 * Length of Last Word
 *
 * Given a string s consisting of some words separated by some number of spaces,
 * return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
    return s.trim().split(' ').pop().length;
};

var lengthOfLastWord = function (s) {
    let wordStart = false;
    let wordLength = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (wordStart === true) break;
        } else {
            wordStart = true;
            wordLength++;
        }
    }
    return wordLength;
};

console.log(lengthOfLastWord('Hello World')); // 5 => The words are "Hello" and "World", both of length 5.
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4 => The longest word is "moon" with length 4.
console.log(lengthOfLastWord('luffy is still joyboy')); // 6 => The longest word is "joyboy" with length 6.
