function charCount(str) {
    const obj = {};
    for (let char of str) {
        // if (/[a-z0-9]/.test(char)) {
        //     char = char.toLowerCase();
        //     obj[char] = ++obj[char] || 1;
        // }
        if (isAlphaNumericChar(char)) {
            char = char.toLowerCase();

            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumericChar(char) {
    var code = char.charCodeAt(0);
    if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123) // lower alpha (a-z)
    ) {
        return false;
    }
    return true;
}

console.log(charCount('Hello World!'));
// OUTPUT: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
