function hashStringToInt(hashString, tableSize) {
    let hash = 17;
    console.log(tableSize);

    for (let i = 0; i < hashString.length; i++) {
        hash = (13 * hash * hashString.charCodeAt(i)) % tableSize;
    }
    return hash;
}

class HashTable {
    table = new Array(2001);

    setItem(key, value) {
        const idx = hashStringToInt(key, this.table.length);
        if (this.table[idx]) {
            this.table[idx].push([key, value]);
        } else {
            this.table[idx] = [[key, value]];
        }
        return idx;
    }

    getItem(key) {
        const idx = hashStringToInt(key, this.table.length);
        if (!this.table[idx]) return null;

        const data = this.table[idx].find((x) => x[0] === key);
        return data ? data[1] : null;
    }
}

const hashTable = new HashTable();
console.log(hashTable.setItem('first_name', 'John'));
console.log(hashTable.setItem('last_name', 'Smith'));
console.log(hashTable.table[0]);
console.log(hashTable.getItem('first_name'));
console.log(hashTable.getItem('last_name'));
console.log(hashTable.getItem('last_na'));
