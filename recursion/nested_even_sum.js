/**
 * Write a recursive function called nestedEvenSum.
 * Return the sum of all even numbers in an object which may contain nested objects.
 */

function isObject(data) {
    return typeof data === 'object' && data !== null && !Array.isArray(data);
}
function isArray(data) {
    return typeof data === 'object' && data !== null && Array.isArray(data);
}

function nestedEvenSum(obj) {
    let sum = 0;
    if (!isObject(obj) && isNaN(parseInt(obj))) return 0;

    for (const key in obj) {
        if (!isObject(obj[key]) && !isNaN(parseInt(obj[key])) && parseInt(obj[key]) % 2 === 0) {
            sum += obj[key];
        } else {
            sum += nestedEvenSum(obj[key]);
        }
    }
    return sum;
}

// function nestedEvenSum (obj, sum=0) {
//     for (var key in obj) {
//         if (typeof obj[key] === 'object'){
//             sum += nestedEvenSum(obj[key]);
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
//             sum += obj[key];
//         }
//     }
//     return sum;
// }

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: 'yup',
        },
    },
};

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
