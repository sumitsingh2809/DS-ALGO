function numberCompareAsc(arr) {
    return arr.sort((num1, num2) => num1 - num2);
}
function numberCompareDesc(arr) {
    return arr.sort((num1, num2) => num2 - num1);
}
function stringCompare(arr) {
    return arr.sort();
}
function compareByLen(arr) {
    return arr.sort((item1, item2) => item1.length - item2.length);
}

console.log(numberCompareAsc([23, 45, 6, 12, 13])); //[ 6, 12, 13, 23, 45 ]
console.log(numberCompareDesc([23, 45, 6, 12, 13])); //[ 45, 23, 13, 12, 6 ]
console.log(stringCompare(['Steele', 'Colt', 'Data Structures', 'Algorithms'])); //[ 'Algorithms', 'Colt', 'Data Structures', 'Steele' ]
console.log(compareByLen(['Steele', 'Colt', 'Data Structures', 'Algorithms'])); //[ 'Colt', 'Steele', 'Algorithms', 'Data Structures' ]
