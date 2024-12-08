class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const hash = this._hash(key);
        this.data[hash] = value;
    }

    get(key) {
        const hash = this._hash(key);
        return this.data[hash];
    }

    keys() {
        const keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                if(Array.isArray(this.data[i]) && this.data[i].length) {
                    keysArray.push(this.data[i])
                }
                keysArray.push(this.data[i])
            }
        }
        return keysArray
    }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable);
console.log(myHashTable.get("grapes"));
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'))
console.log(myHashTable.keys());