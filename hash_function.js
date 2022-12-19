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