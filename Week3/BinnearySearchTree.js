

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode; 
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode; 
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.data === value) {
                return true;
            } else if (value < root.data) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data)
        }
    }

    levelWise(){
        if(!this.root){
            return
        }

        let queue = []

        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
        console.log(curr.data)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }

    }

    min(root){
        if(!root.left){
            return root.data
        }else{
            return this.min(root.left)
        }
    }

    delete(data){
        this.root = this.deleteNode(this.root,data)
    }

    deleteNode(root,data){
        if(root== null){
            return root
        }

        if(data<root.data){
            root.left = this.deleteNode(root.left,data)
        }else if(data > root.data){
            root.right = this.deleteNode(root.right,data)
        }else{
            if(root.left === null){
                return root.right
            }else if( root.right === null){
                return root.left
            }
            root.data = this.min(root.right)
            root.right = this.deleteNode(root.right,root.data)
        }
        return root
    }

    closestValueBFS(target) {
        if (!this.root || target === undefined) {
            return null;
        }
    
        let closest = this.root.data;
        let queue = [this.root];
    
        while (queue.length > 0) {
            let node = queue.shift();
            if (Math.abs(node.data - target) < Math.abs(closest - target)) {
                closest = node.data;
            }
    
            if (node.left) {
                queue.push(node.left);
            }
    
            if (node.right) {
                queue.push(node.right);
            }
        }
    
        return closest;
    }

    closestValueDFS(target){
        if(!this.root || target === undefined){
            return null
        }

        function dfs(node, closest){
            if(!node){
                return closest
            }

            if(Math.abs(node.data - target ) < Math.abs(closest - target)){
                closest = node.data
            }

            if(target < node.data){
                return dfs(node.left , closest)
            }else if( target > node.data){
                return dfs(node.right,closest)
            }else{
                return closest
            }

        }
        return dfs(this.root,this.root.data)

    }
    // ? Second Largest 
    secondLargest() {
        let curr = this.root;
        let parent = null;
    
        while (curr.right) {
            parent = curr;
            curr = curr.right;
        }
            if (curr.left) {
            return curr.left.data;
        }
    
        if (parent) {
            return parent.data;
        }
        return null;
    }


    // ? Validate binary search tree  BST OR NOT 
    validateBST(){
        const value = []

        function inorderTriversal(node){
            if(node === null){
                return 
            }

            inorderTriversal(node.left)
            value.push(node.data)
            inorderTriversal(node.right)
        }

        inorderTriversal(this.root)

        for(let i=1;i<value.length;i++){
            if(value[i]<= value[i-1]){
                return false
            }
        }
        return true 
    }
    

    // ?Size Of Tree

    sizeOfTree(node = this.root){
        if(node === null){
            return 0
        }

        return 1 + this.sizeOfTree(node.left) + this.sizeOfTree(node.right)
    }
    
    // ? Hight of tree

    hightOfTree(node = this.root){
        if(node === null){
            return 0
        }

        let leftHighest = this.hightOfTree(node.left)
        let rightHighedt = this.hightOfTree(node.right)

        return Math.max(leftHighest,rightHighedt) + 1
    }

    bft(){
        if(!this.root){
            return null
        }

        let queue = []
        queue.push(this.root)

        while(queue.length){
            let curr = queue.shift()
            console.log(curr.data)

            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    // ? Sum 
    rangeSum(low, high) {
        let sum = 0;

        const inorderTraversal = (node) => {
            if (node === null) {
                return;
            }
            inorderTraversal(node.left);

            if (node.data >= low && node.data <= high) {
                sum += node.data;
            }

            inorderTraversal(node.right);
        };

        inorderTraversal(this.root);

        return sum;
    }


// ? Leaf Node 
    findLeafNodes(root = this.root, result = []) {
        if (root === null) {
            return result;
        }

        if (root.left === null && root.right === null) {
            result.push(root.data);
        }

        this.findLeafNodes(root.left, result);
        this.findLeafNodes(root.right, result);

        return result;
    }
}

const tree = new BST();

tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(9);
console.log("Leaf nodes:", tree.findLeafNodes());

// console.log('Closest value to 2:', tree.closestValueDFS(2));
// console.log('Closest value to 6:', tree.closestValueBFS(6)); 
// console.log('Closest value to 10:', tree.closestValueBFS(10)); 

// console.log('Is the tree a Binary Search Tree?', tree.validateBST()); 
// console.log("Size of the tree",tree.sizeOfTree())
// console.log("highest Node ", tree.hightOfTree());
console.log(tree.min());
tree.bft()
// Example range
console.log("Range sum between", low, "and", high, ":", tree.rangeSum(low, high));





