class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size)
    }

    hash(key){
        // try to keep arrayLength prime as it causes less collisions 
        let total = 0
        let WEIRD_PRIME = 31
        // prime number in the hash help spread out keys more uniformly 
        for (let i = 0; i < Math.min(key.length, 100); i++){
            // using min so that we will never go over more than 100 loops
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value){
        // hash the key
        // all items will be in a nested structure to allow for separate chaining
        
    }

    get(key){
        // hash the key
        // go to that index and retrieve the value
        // use separate chaining by checking the key 
        // if key not found, return undefined
        
    }
}