// function reverse(str) {
//     if (str.length === 0) return '';
//     return str.slice(-1) + reverse(str.slice(0, -1));
// }
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('emosewa')); // 'awesome'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
