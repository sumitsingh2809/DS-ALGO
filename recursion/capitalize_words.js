function capitalizeWords(arr) {
    const words = [];
    if (arr.length === 0) return [];

    words.push(arr[0].toUpperCase());
    return words.concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
