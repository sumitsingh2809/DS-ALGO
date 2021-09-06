function isObject(data) {
    return typeof data === 'object' && data !== null && !Array.isArray(data);
}

function stringifyNumbers(obj) {
    const result = {};
    if (!isObject(obj)) {
        if (!isNaN(parseInt(obj))) {
            return obj.toString();
        }
        return obj;
    }

    for (const key in obj) {
        const value = obj[key];
        result[key] = stringifyNumbers(value);
    }
    return result;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};
console.log(stringifyNumbers(obj));

/* OUTPUT
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
