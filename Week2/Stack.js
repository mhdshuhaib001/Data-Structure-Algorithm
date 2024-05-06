? =============STACK USING LIST =============

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class listStack {
    constructor(){
        this.top= null
        this.tail = null
        this.size = 0
    }

    push(data){
        const newNode = new Node(data)

        if(this.top === null){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.size ++
    }

    pop(){
        this.top = this.top.next
    }

    peek(){
        return this.top.data
    }

    print(){
        let curr = this.top
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
}

let list = new listStack()

list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)

list.pop()
// list.peek()
list.print()

console.log(list.peek(),'Peek')


 ? =============STACK USING ARRAY ===============


class stack {
    constructor(){
        this.item =[]
    }

    push(data){
        this.item.push(data)
    }

    pop(){
        if(this.item.length === 0){
            return  "underFlow"
        }else{
            return this.item.pop()
        }
    }

    peek(){
        return this.item[this.item.length -1]
    }

    isEmpty(){
        return this.item.length === 0;
    }

    revercestring(str) {
        let stack = []
        for (const string of str) {
            stack.push(string)
        }
        let revercestring = ""
        while (stack.length > 0) {
            revercestring += stack.pop()
        }
        return console.log(revercestring)
    }

    print(){
        console.log(this.item)
    }
}

const list = new stack();

list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.pop()
console.log(list.peek())
list.print()


? =============== Stack using object =================

class Stack {
    constructor() {
        this.stack = {};
        this.top = 0;
    }

    push(data) {
        this.stack[this.top] = data;
        this.top++;
    }

    pop() {
        if (this.top === 0) {
            return "Underflow";
        }
        this.top--;
        delete this.stack[this.top];
    }

    peek(){
        if(this.stack.length===0){
            return "stak is not here"
        }

        return  this.stack[this.top-1]
    }
    print() {
        console.log(this.stack);
    }
}

const stackObject = new Stack();
stackObject.push(2);
stackObject.push(3);
stackObject.push(4);
stackObject.push(5);
stackObject.pop();
stackObject.print();
console.log(stackObject.peek());


?  =========== Valid Paranteses ===========

var isValid = function(s) {
    const stack = []

    let parentes = '(),[],{}';
    let i =0

    while(i<s.length){
        stack.push(s[i]) 
        i++
        let open = stack[stack.length - 2]
        let close = stack[stack.length -1]

        let openParentises = open+close
        if(parentes.includes(openParentises)){
            stack.pop()
            console.log("haloooo",  stack);
            stack.pop()
            console.log(stack,'pop 2');
        }

    }
    return stack.length === 0
};


console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false


let stack = [];
let string = "hashim";

function reverse(strng) {
    for (let i = 0; i < strng.length; i++) {
        stack.push(strng[i]);
    }
    let newStrng = '';
    while (stack.length > 0) {
        newStrng += stack.pop();
    }
    return newStrng;
}

console.log(reverse(string)); 



function Parentheses (str){
    let stack = []
    const parentes={
        "(" : ")",
        "[" : "]",
        "{" : "}",
    }

    for(let char of str){
        if(char in parentes){
            stack.push(char)
        }else{
            const top = stack.pop()
            if(!top||parentes[top]!==char){
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(Parentheses("()[]{}"))

? ------------ Delet Middile -------------


function middileDelet(arr){
    let tempStack = []
    let count = 0
    let size = arr.length
    while(count<size/2){
        let element = arr.pop()
        tempStack.push(element)
        count++
    }
    arr.pop()

    while(tempStack.length>0){
        let element = tempStack.pop()
        arr.push(element)
    }
    return arr
}
console.log(middileDelet([1,2,3,5,6,7]))


?===========stack using queue ==========

class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(data) {

        this.queue1.push(data);
        while (this.queue1.length != 0) {
            this.queue2.push(this.queue1.shift());
        }
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    pop() {
        if (this.queue1.length === 0) {
            return "underFlow";
        }
        this.queue1.shift();
    }

    top() {
        if (this.queue1.length === 0) {
            return -1;
        }
        return this.queue1[0];
    }

    printAllElements() {
        for (let i = 0; i < this.queue1.length; i++) {
            console.log(this.queue1[i]);
        }
    }
}


let s = new Stack();

// // Pushing elements onto the stack
s.push(1);
s.push(2);
s.push(3);
// // Printing all elements of the stack
// console.log("Elements after pushing:");
s.printAllElements(); 
// Output:
// 3
// 2
// 1
// Popping an element from the stack
s.pop();
// Printing all elements of the stack after popping
console.log("Elements after popping:");
s.printAllElements(); 
// Output:
// 2
// 1
// Getting the top element of the stack
console.log("Top element:", s.top()); // Output: 2


? =========== Queue Using Stack =============

class QueueUsingStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(data) {
        this.stack1.push(data);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.shift());
            }
        }

        return this.stack2.shift();
    }

    peek() {
        return this.stack2[this.stack2.length - 1];
    }

    printAllElements() {
        for (let i = 0; i < this.stack2.length; i++) {
            console.log(this.stack2[i]);
        }
    }
}

const queue = new QueueUsingStack();

// Test case 1: Enqueue elements
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.printAllElements();

// Test case 2: Dequeue elements
console.log(queue.dequeue()); // Expected output: 1
console.log(queue.dequeue()); // Expected output: 2

// Test case 3: Peek
console.log(queue.peek());    // Expected output: 3




739. Daily Temperatures


var dailyTemperatures = function(temperatures) {
    const stack = []
    const result = Array(temperatures.length).fill(0)

    for(let i=0;i<temperatures.length;i++){
        while(stack.length>0&&temperatures[i]>temperatures[stack[stack.length-1]]){
            result[stack[stack.length-1]] = i-stack.pop()
        }
        stack.push(i)
    }

    return result
    
};


======== MIN AND MAX ===========

class MinMaxStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.maxStack = [];
    }

    push(val) {
        this.stack.push(val);

        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }

        // Update maxStack
        if (this.maxStack.length === 0 || val >= this.getMax()) {
            this.maxStack.push(val);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return "Stack is empty";
        }
        const top = this.stack.pop();

        // Update minStack
        if (top === this.getMin()) {
            this.minStack.pop();
        }

        // Update maxStack
        if (top === this.getMax()) {
            this.maxStack.pop();
        }
    }

    top() {
        if (this.stack.length === 0) {
            return "Stack is empty";
        }
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) {
            return "Stack is empty";
        }
        return this.minStack[this.minStack.length - 1];
    }

    getMax() {
        if (this.maxStack.length === 0) {
            return "Stack is empty";
        }
        return this.maxStack[this.maxStack.length - 1];
    }
}

const stack = new MinMaxStack();
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(1);
console.log("Minimum value:", stack.getMin()); // Output: 1
console.log("Maximum value:", stack.getMax()); // Output: 5
stack.pop();
console.log("Minimum value after pop:", stack.getMin()); // Output: 2
console.log("Maximum value after pop:", stack.getMax()); // Output: 5
