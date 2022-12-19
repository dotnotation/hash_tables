// if we wanted to make our own code based on the letters and assigning them a numerical value
// can use the built in function `charCodeAt(index)` 
// "a".charCodeAt(0) -> 97
// if you minus 96, that gives you the alphabetical ranking
// "a".charCodeAt(0) - 96 -> 1
// let total = 0
// total += "hello".charCodeAt(0) - 96 
// returns 8
// would loop through each letter
// what if you wanted to constrain the number to fit inside of a small array?
// % modulo to fit the number into a more manageable index

function hashFunction(key, arrayLength){
    let total = 0
    for (let char of key){
        // map "a" to 1, "b" to 2, etc.
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLength
    }
    return total
}
// Problems:
    // only hashes strings
    // not constant time
    // could be more random
    // can have duplicates

function hash(key, arrayLength){
    // try to keep arrayLength prime as it causes less collisions 
    let total = 0
    let WEIRD_PRIME = 31
    // prime number in the hash help spread out keys more uniformly 
    for (let i = 0; i < Math.min(key.length, 100); i++){
        // using min so that we will never go over more than 100 loops
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLength
    }
    return total
}

// Problem:
    // doesn't handle collisions 