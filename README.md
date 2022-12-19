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
    - separate chaining 
    - linear probing