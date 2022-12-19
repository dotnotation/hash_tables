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
        let index = this.hash(key)
        if (!this.keyMap[index]){
            // if there is nothing already at that index we need to put an empty array to deal with separate chaining
            this.keyMap[index] = []
        }
        // note that this allows for you to submit duplicate keys
        // most languages will overwrite the key with the new value, however that is not a concern with JS
        this.keyMap[index].push([key, value])
        // note the [] to build our nested array
    }

    get(key){
        // hash the key
        // go to that index and retrieve the value
        // use separate chaining by checking the key 
        // if key not found, return undefined
        let index = this.hash(key)
        if(this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++){
                // using keyMap[index].length so we are only traversing the subarray 
                if (this.keyMap[index][i][0] === key){
                // going to the subarray, checking the element in the loop, and then the key which is at the 0 index
                return this.keyMap[index][i][1]
                // we want to return the value which is at index 1
                }
            }
        }
        return undefined
        // if we don't find anything
    }

    keys(){
        // loop through the hash table and returns an array of keys in the table
        let results = []
        for (let i = 0; i < this.keyMap.length; i++){
            if (this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i]; j++){
                    // for sub arrays
                    if (!results.includes(this.keyMap[i][j][0])){
                        // handle duplicate values
                        results.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return results
    }

    values(){
        // loops through hash table and returns an array of values
        // are you returning unique or duplicates? 
        let results = []
        for (let i = 0; i < this.keyMap.length; i++){
            if (this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i]; j++){
                    // for sub arrays
                    if (!results.includes(this.keyMap[i][j][1])){
                        // handle duplicate values
                        results.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return results
    }
}