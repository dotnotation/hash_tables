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
    - hash function
	- implementing a hash table by using an array which you convert keys into valid array indices 

Handling collisions:
    - separate chaining 
    - linear probing