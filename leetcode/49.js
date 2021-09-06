/**
 * Group Anagrams
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const charGroups = [];
    const anagramGroups = [];
    for (let i = 0; i < strs.length; i++) {
        const element = strs[i];
        anagramGroups.push([element]);
        const chars = {};
        const chars2 = {};
        for (let j = 0; j < element.length; j++) {
            chars[element[j]] = (chars[element[j]] || 0) + 1;
        }
        for (let j = i + 1; j < strs.length; j++) {
            const element2 = strs[j];
            for (let k = 0; k < element2.length; k++) {
                chars2[element2[k]] = (chars2[element2[k]] || 0) + 1;
            }
            console.log(chars2);
        }
        charGroups.push(chars);
        console.log(chars);
        console.log();
    }

    // for (let i = 0; i < charGroups.length; i++) {
    //     const chars = charGroups[i];
    //     console.log(element);
    // }
    // return anagramGroups;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); //[["bat"],["nat","tan"],["ate","eat","tea"]]
