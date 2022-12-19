# hash_tables
Code along with Colt Steele's JS algorithms and data structures masterclass

What are hash tables?
    - aka hash map aka object (but with restrictions as objects typically deal with strings)
    - built in to almost every programming language as a default type 
        - Python = dictionaries
        - JS = objects and maps
        - Java, Scala, and Go  = maps
        - Ruby = hashes
    - used to store key-value pairs
    - not ordered
    - fast for all operations 

Simulating hash tables with arrays:
    - called hash functions
	- implementing a hash table by using an array which you convert keys into valid array indices
    - any function that can be used to map data of arbitrary size to data of a fixed size
        - so basically no matter what size the input is, it could be one or million characters, the output will always be the same size
        - however the output isn't something you can work backwards from, it is encrypted 
    - the values returned are called hash values, hash  codes, digests, or simply hashes
    - used in caches, crypto, authentication  

What makes a good hash?
	- O(1)
	- doesn't cluster outputs at specific indices, but distributes uniformly 
	- deterministic, every time you put in the same input you get the same output

Handling collisions:
    - when you have a hash function it is inevitable that you will have data that will be assigned the same index especially with small arrays like in the example
    - separate chaining 
        - you store pieces of data at the same spot/index in a more sophisticated data structure like a linked list or nested array
            - this allows you to store multiple key-value pairs at the same index
    - linear probing
        - you only store one piece of information at each index, if you have a collision/duplicate, then you search through the array and find the next empty spot
        - allows you to avoid nested data structures 
        - however you have to decide what you are going to do when you run out of room in your array

Big O:
    - with good hash functions
    - insertion O(1)
    - deletion O(1)
    - access (using a given key to find a value) O(1)
    - searching O(n)