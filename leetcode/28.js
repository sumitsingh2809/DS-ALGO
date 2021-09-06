/**
 * Implement strStr()
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * haystack and needle consist of only lower-case English characters.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) return 0;
    const length =
        haystack.length > needle.length ? haystack.length - needle.length : haystack.length;
    for (let i = 0; i <= length; i++) {
        let haystackIdx = i;
        // console.log(i, '================================');
        for (let j = 0; j < needle.length; j++) {
            // console.log({ haystackIdx, j });
            // console.log({ haystackChar: haystack[haystackIdx], needleChar: needle[j] });
            if (haystack[haystackIdx] !== needle[j]) {
                break;
            } else {
                haystackIdx++;
                if (j === needle.length - 1) return i;
            }
        }
    }
    return -1;
};

var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};

var strStr = function (haystack, needle) {
    if (!needle) return 0;
    let idx = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] != needle[idx]) {
            i = i - idx;
            idx = 0;
        } else {
            if (idx == needle.length - 1) return i - idx;
            idx++;
        }
    }
    return -1;
};

var strStr = function (h, n) {
    if (!n) return 0;
    for (let j = 0, i = 0; i < h.length; i++) {
        if (h[i] === n[j]) j++;
        else (i -= j), (j = 0);
        if (j === n.length) return i - j + 1;
    }
    return -1;
};

console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
console.log(strStr('aaaaa', '')); // 0
console.log(strStr('', 'a')); // -1
console.log(strStr('a', 'a')); // 0
console.log(strStr('', '')); // 0
console.log(strStr('abc', 'c')); // 2
