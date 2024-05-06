class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        this.table[index] =  value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this.hash(key)
        return this.table[index] = undefined

    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])

            }
        }
    }
}


const table = new HashTable(50)
table.set("name","Shuhaib")
table.set("age",19)
table.display()
console.log(table.get("name"))



========== LINKED LIST HASH ==============

class node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashList {
    constructor(size) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const newNode = new node(key, value);
        if (!this.table[index]) {
            this.table[index] = newNode;
        } else {
            let current = this.table[index];
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    get(key) {
        const index = this.hash(key);
        let current = this.table[index];

        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined; 
    }

    remove(key) {
        const index = this.hash(key);
        let current = this.table[index];
        let prev = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.table[index] = current.next;
                }
                return; 
            }
            prev = current;
            current = current.next;
        }
    }
}

const hashTable = new HashList(10);
hashTable.set("apple", 10);
hashTable.set("banana", 20);
hashTable.set("cherry", 30);

console.log(hashTable.get("apple")); 
console.log(hashTable.get("banana")); 

hashTable.remove("banana");
console.log(hashTable.get("banana")); 








? ==========SEPRATE CHAINING==============

class hashtable {
    constructor(size) {
        this.size = size
        this.items = new Array(size)
    }
    hash(key) {
        let hashkey = String(key)
        let hashedVal = 0

        for (let i = 0; i < hashkey.length; i++) {
            hashedVal += hashkey.charCodeAt(i)
        }
        return hashedVal % this.size;
    }

    set(key, val) {
        const index = this.hash(key)
        const bucket = this.items[index]
        if (!bucket) {
            this.items[index] = [[key, val]]
        } else {
            let samekeyitem = bucket.find(items => items[0] === key);
            if (samekeyitem) {
                samekeyitem[1] = val
            } else {
                bucket.push([key, val])
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.items[index];
    
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined; 
    }

    
    print() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i]) {
                console.log(i, this.items[i])
            }
        }
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.items[index]

        let samekeyitem = bucket.find(items => items[0] === key);
        if (samekeyitem) {
            bucket.splice(bucket.indexOf(samekeyitem), 1)
        }
    }
}
let hash = new hashtable(10);

hash.set("name", "shuhaib");
hash.set("age", 22);
hash.set("place", "malapuram");
console.log(hash.get("name"))
hash.set('mane', "tv");
hash.set('maen', "tv k");
hash.remove("maen")
hash.print();
console.log("name is this",hash.get("name"))



? ======== Linear Probing ==============

 class HashTable {
     constructor(size) {
         this.size = size;
         this.table = new Array(size).fill(null);
     }

     hash(key) {
         let hash = 0;
         for (let i = 0; i < key.length; i++) {
             hash += key.charCodeAt(i);
         }
         return hash % this.size;
     }

     set(key, val) {
         let index = this.hash(key);
         while (this.table[index] !== null && this.table[index].key !== key) {
             index = (index + 1) % this.size;
         }
         this.table[index] = { key, val };
     }
     get(key) {
         let index = this.hash(key);
         while (this.table[index] !== null) {
             if (this.table[index].key === key) {
                 return this.table[index].val;
             }
             index = (index + 1) % this.size;
         }
         return undefined;
     }
     display() {
         for (let i = 0; i < this.size; i++) {
             if (this.table[i]) {
                 console.log(i, this.table[i]);
             }
         }
     }
 }

Create a new hash table
const hashTable = new HashTable(10);

hashTable.set("name", "John");
hashTable.set("age", 30);
hashTable.set("city", "New York");

console.log(hashTable.get("name")); 
console.log(hashTable.get("age"));
console.log(hashTable.get("city"));

console.log("Hash Table:");
hashTable.display();
console.log("");


hashTable.set("phone", "555-1234");
console.log(hashTable.get("age"));
console.log(hashTable.get("company"));
console.log(hashTable.get("phone")); 
console.log("Hash Table after collisions:");
hashTable.display();





function findDuplicates(arr){
    const newHash = new hashtable(arr.length) 
    let dup = []
    for(const char of arr){
        if(newHash.get(char)!==undefined){
            dup.push(char)
        }else{
            newHash.set(char,1) 
        }
    }
    return dup;
}

console.log(findDuplicates(['a', 'b', 'c', 'd', 'a', 'e', 'f', 'g', 'h', 'i', 'j', 'a', 'b']))




?============== SORT THE PEOPELE  ==============

var sortPeople = function(names, heights) {
    let length = heights.length
    let map = new Map()

    for(let i=0;i<length;i++){
        map.set(heights[i],names[i])
    }

    heights.sort((a,b)=> b-a)
    let result = []
    for(let height of heights){
        result.push(map.get(height))
    }
    return result
};


287. Find the Duplicate Number

var findDuplicate = function(nums) {
    let set = new Set()

    for(let num of nums){
        if(set.has(num)){
            return num
        }
        set.add(num)
    }
    
};

function dup (arr){
    let elemnt = {}
    let dup = []
    for(let item of arr){
        if(elemnt[item]){
            dup.push(item)
        }else{
            elemnt[item] = true
        }
    }
    return dup
}


console.log(dup([2,3,53,2,3,1,6]))
