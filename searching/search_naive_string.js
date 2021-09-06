function search_string(str, pattern) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== str[i + j]) break;
            if (j == pattern.length - 1) result++;
        }
    }

    return result;
}

console.log(search_string('wowomgzomg', 'omg')); // 2
console.log(search_string('lorie loled', 'lol')); // 1
