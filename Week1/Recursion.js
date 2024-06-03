// function factorial (n){
 
//     if(n===0){
//         return 1
//     } else {
//         return n*factorial(n-1)
//     }
// }

// const number = 5
// const result = factorial(number);

// console.log(`this is number ${number} this is the factorial ${result}`);




// ==============RecursiveFibonacci========================
// function  RecursiveFibonacci(n){

//     if(n<2){
//         return n
//     }

//     return RecursiveFibonacci(n-1) + RecursiveFibonacci(n-2);

// }

// console.log('Fibonacci',RecursiveFibonacci(0));
// console.log('Fibonacci',RecursiveFibonacci(2));
// console.log('Fibonacci',RecursiveFibonacci(4));


// ================Factorial==============

// function recursiveFactorial(n){

//     if(n===0){
//         return 1
//     }
//     return n*recursiveFactorial(n-1)
// }

// console.log('recursiveFactorial',recursiveFactorial(9));index
// console.log('recursiveFactorial',recursiveFactorial(3));
// console.log('recursiveFactorial',recursiveFactorial(4));
// console.log('recursiveFactorial',recursiveFactorial(1));



// function reverseString(str){

//     if(str.length<=1){
//         return str
//     }

//     return reverseString(str.slice(1))+str[0]

// }


// const stringInput = "Halloo"

// console.log('Reversed',reverseString(stringInput));


// ============ Binnry Search Using Recursion =============

// function binarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,left,right){
//     if(left>right){
//         return 1
//     }

//         const middile = Math.floor((left + right)/2)

//         if(target === arr[middile]){
//             return middile
//         }

//         if(target < arr[middile]){
//             return search(arr,target,left , middile -1)
//         }else{
//             return search(arr,target,middile+ 1,right)
//         }
// }


// console.log('RecursionB',binarySearch([20,3,9,50,1,8,5,39],9));


// ========== Is palindrem ==============


// function isPalindrem (str){
//     if(str.length <=2){
//         return true
//     }

//     if(str[0]=== str[str.length-1]){
//         return isPalindrem(str.slice(1,-1))
//     }else {
//         return false
//     }
// }

// console.log(isPalindrem("racecar")); 


// reverse linked list 

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }


// class ReverseLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     push(data) {
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     print() {
//         let temp = this.head;
//         while (temp != null) {
//             console.log(temp.data + " ");
//             temp = temp.next;
//         }
//     }
// // requarion to reverse

//     reverse(data) {
//         if (!data) {
//             return data;
//         }
//         this.reverse(data.next)
//         console.log(data.data);
//     }
// }

// const list = new ReverseLinkedList();

// list.push(4);
// list.push(3);
// list.push(5);
// list.push(6);
// list.push(7);



// list.reverse(list.head)



// ================= Reverse String ======================

// function ReverseString(str){
//     if(str == ""){
//         return ""
//     }

//     return ReverseString(str.substr(1)) + str.charAt(0)
// }

// console.log(ReverseString("hallo"))


// =============== Reverse Word =================

// function reverseWord(str){
//     const index = str.indexOf(" ")

//     console.log('index',index);
//     if(index === -1){
//         return str
//     }

//     const words = str.split(" ");

//     return reverseWord(words.slice(1).join(" "))+ " " + words[0]
// }
// console.log(reverseWord("hallo world"))

// ============= FInd Sum ==========================
// function sum(array) {
//     if (array.length === 1) {
//       return 0;
//     } else {
//       return array[0] + sum(array);
//     }
// }

// console.log(sum([1,2,3,4,5,6])); 


// ============= Print number ==========\

// function printNumber(n){
//     if(n==1){
//         console.log(n);
//         return
//     }else{

//         console.log(n);
//         printNumber(n-1)
//     }
// }

// printNumber(5)




// function flattedArr(arr){
//     let flatten = []
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             flatten = flatten.concat(flattedArr(arr[i]))
//         }else{
//             flatten.push(arr[i])
//         }
//     }
//     return flatten
// }

// console.log(flattedArr([1, [2, 3], [4, [5, 6]], 7]))