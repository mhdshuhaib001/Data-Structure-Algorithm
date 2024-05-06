class Node {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;

        for (let val of word) {
            if (!curr.children[val]) {
                curr.children[val] = new Node();
            }
            curr = curr.children[val];
        }

        curr.isEnd = true;
    }

    search(word) {
        let curr = this.root;

        for (let val of word) {
            if (!curr.children[val]) {
                return false;
            }
            curr = curr.children[val];
        }

        return curr.isEnd;
    }

    display(root = this.root, prefix = '') {
        if (root.isEnd) {
            console.log(prefix);
        }

        for (let char in root.children) {
            this.display(root.children[char], prefix + char);
        }
    }

    startWithPrefix(word) {
        let curr = this.root;
        for (let val of word) {
            if (!curr.children[val]) {
                return 'no matching prefix';
            }
            curr = curr.children[val];
        }
        this.display(curr, word);
    }

    delete(word) {
        this.deleteHelper(this.root, word, 0);
    }

    deleteHelper(root, word, level) {
        if (word.length === level) {
            if (root.isEnd) {
                root.isEnd = false;
            }
            return Object.keys(root.children).length === 0;
        }
    
        let child = root.children[word[level]];
        if (!child) {
            return false; 
        }
    
        let deleted = this.deleteHelper(child, word, level + 1);
    
        if (deleted) {
            delete root.children[word[level]];
            if (Object.keys(child.children).length === 0 && !child.isEnd) {
                return true;
            }
        }
    
        return false;
    }
    
}

// Test cases
const trie = new Trie();

// Insertion
trie.insert("apple");
trie.insert("banana");
trie.insert("application");
trie.insert("app");

// Search
console.log(trie.search("apple")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("application")); // true
console.log(trie.search("app")); // true
console.log(trie.search("orange")); // false

// Prefix Matching
console.log(trie.startWithPrefix("a")); // Display words starting with "a"
console.log(trie.startWithPrefix("app")); // Display words starting with "app"
console.log(trie.startWithPrefix("ban")); // Display words starting with "ban"
console.log(trie.startWithPrefix("orange")); // "no matching prefix"

// Deletion
trie.delete("apple");
trie.delete("banana");
trie.delete("orange");

console.log(trie.search("apple")); // false
console.log(trie.search("banana")); // false
console.log(trie.search("orange")); // false
