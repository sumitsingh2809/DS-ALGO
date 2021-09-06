function isObject(data) {
    return typeof data === 'object' && data !== null && !Array.isArray(data);
}

function collectStrings(obj) {
    let results = [];
    if (!isObject(obj)) {
        if (typeof obj === 'string') {
            return obj;
        }
        return;
    }

    for (const key in obj) {
        const value = obj[key];
        results = results.concat(collectStrings(value));
    }
    return results;
}

const obj = {
    stuff: 'foo',
    data: {
        val: {
            thing: {
                info: 'bar',
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: 'baz',
                    },
                },
            },
        },
    },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
