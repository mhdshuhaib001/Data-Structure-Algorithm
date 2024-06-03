// class Node {
//     constructor(data){
//         this.data  = data
//         this.next =  null
//     }
// }

// class QueueList{
//     constructor(){
//         this.head =  null
//         this.tail = null
//         this.size = 0
//     }

//     enqueue(data){
//         const newNode = new Node(data);
//         if(this.head == null){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.size++
//     }

//     dequeue(){
//         this.head = this.head.next
//         this.size--
//     }

//     peek(){
//         return this.head.data
//     }

//     isEmpty() {
//         return this.size === 0
//       }
    
//       getSize() {
//         return this.size
//       }

      
//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.data)
//             curr = curr.next
//         }
//     }
// }


// const list = new QueueList()

// list.enqueue(2)
// list.enqueue(3)
// list.enqueue(4)
// list.enqueue(5)
// list.enqueue(6)
// list.dequeue()
// console.log(list.peek(),'peek')
// list.print()



// class Queue{
//     constructor(){
//         this.item = []
//     }

//     enqueue(data){
//         return this.item.push(data)
//     }

//     dequeue(){
//         return this.item.shift()
//     }

//     isEmpty(){
//         return this.item.length === 0
//     }
//     size(){
//         return this.item.length 
//     }

//     print(){
//         console.log(this.item)
//     }

// }

// const list = new Queue()

// list.enqueue(2)
// list.enqueue(3)
// list.enqueue(4)
// list.enqueue(5)
// list.enqueue(6)
// list.dequeue()
// list.print()



// class Queue {
//     constructor(){
//         this.item = {}
//         this.front = 0
//         this.back = 0
//     }

//     enqueue(data){
//         this.item[this.back] = data
//         this.back++
//     }

//     dequeue(){
//        delete this.item[this.front]
//         this.front++
//     }

//     print(){
//         console.log(this.item)
//     }
// }


// const QueueList = new Queue()

// QueueList.enqueue(2)
// QueueList.enqueue(3)
// QueueList.enqueue(4)
// QueueList.enqueue(5)
// QueueList.enqueue(2)
// QueueList.enqueue(6)
// QueueList.dequeue()


// QueueList.print()


// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(item) {
//         this.items.push(item);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         return this.items.shift();
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }
// }

// function reverseArray(arr) {
//     const queue = new Queue();
//     for (let i = 0; i < arr.length; i++) {
//         queue.enqueue(arr[i]);
//     }

//     const reversedArray = [];

//     while (!queue.isEmpty()) {
//         reversedArray.unshift(queue.dequeue());
//     }

//     return reversedArray;
// }

// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
// console.log("Original array:", originalArray);
// console.log("Reversed array:", reversedArray);




// // Function to find and print duplicates using a queue
// function findDuplicatesUsingQueue(arr) {
//     let queue = [];
//     let duplicates = new Set()

//     // Enqueue all elements of the array to the queue
//     for (let i = 0; i < arr.length; i++) {
//         queue.push(arr[i]);
//     }

//     // Dequeue elements and check for duplicates
//     while (queue.length > 0) {
//         let current = queue.shift();
//         if (queue.includes(current)) {
//             duplicates.add(current);
//         }
//     }

//     // Convert the Set to an array and return it
//     return Array.from(duplicates)
// }

// const arr = [12, 11, 40, 12, 5, 6, 5, 12, 11];
// console.log(findDuplicatesUsingQueue(arr)); // Output: [12, 11, 5]



// function findDuplicatesUsingQueue(arr) {
//     let queue = [];
//     let duplicates = [];
//     for (let i = 0; i < arr.length; i++) {
//         queue.push(arr[i]);
//     }
//     while (queue.length > 0) {
//         let current = queue.shift();
//         if (queue.includes(current) && !duplicates.includes(current)) {
//             duplicates.push(current);
//         }
//     }

//     return duplicates;
// }

// const arr = [12, 11, 40, 12, 5, 6, 5, 12, 11];
// console.log(findDuplicatesUsingQueue(arr)); 
