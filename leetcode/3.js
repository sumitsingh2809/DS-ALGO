/**
 * Given a string s, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let mapObject = {};
    let max = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        left = mapObject[element] >= left ? mapObject[element] + 1 : left;
        mapObject[element] = i;
        max = Math.max(max, i - left + 1);
    }
    return max;
};

var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let max = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const element = s[right];
        while (set.has(element)) {
            set.delete(s[left]);
            left++;
        }
        set.add(element);
        max = Math.max(max, right - left + 1);
    }
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // "abc": 3
console.log(lengthOfLongestSubstring('bbbbb')); // "b": 1
console.log(lengthOfLongestSubstring('pwwkew')); // "wke": 3
console.log(lengthOfLongestSubstring('')); // "": 0
console.log(lengthOfLongestSubstring(' ')); // " ": 1
console.log(lengthOfLongestSubstring('au')); // "au": 2
console.log(lengthOfLongestSubstring('dvdf')); // "vdf": 3
