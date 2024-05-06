
//=========== Reverse the Word ================== inbuild function 

// function reverseString(str){
//     let words = [];
//     let word = '';

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             words.push(word);
//             word = '';
//         } else {
//             word += str[i];
//         }
//     }

//     if (word) {
//         words.push(word);
//     }

//     let newString = '';
//     for (let i = words.length - 1; i >= 0; i--) { 
//         newString += words[i] + ' ';
//     }
//     return newString.trim(); 
// }

// console.log(reverseString("Hallo world"));



//=============== Reverse the Word ============= without inbuild functions
// let string = "Hallo Word";
// let words = [];
// let word = "";
// let newString = "";

// for(let i = 0; i < string.length; i++){
//     if(string[i] == " "){
//         words[words.length] = word;
//         word = "";
//     } else {
//         word += string[i];
//     }
// }


// if(word){
//     words[words.length] = word;
// }

// for(let i = words.length - 1; i >= 0; i--){
//     newString += words[i] + ' ';
// }
// // if(newString.length > 0){
// //     newString = newString.substring(0, newString.length - 1);
// // }

// console.log('result ', newString);


//============== Revwense Stirnf ================

// let str =  "hallo";
// let string = " "
// for(let i=str.length-1;i>=0;i--){
//     string += str[i]
// }

// console.log(string)



// ==========search two elements in  a array and if both elements are present in the array show true otherways false========
// let array = [1, 2, 3, 4, 5, 6, 7];

// let first = 4;
// let second = 7;

// let firstFound = false;
// let secondFound = false;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === first) {
//         firstFound = true;
//     }
//     if (array[i] === second) {
//         secondFound = true;
//     }
//     if (firstFound && secondFound) {
//         break;
//     }
// }
// console.log('first', firstFound);
// console.log('second', secondFound);


// function searchTwoElements(array, element1, element2) {
//     return array.includes(element1) && array.includes(element2);
// }

// // Example usage
// const myArray = [1, 2, 3, 4, 5, 6, 7];
// const element1 = 4;
// const element2 = 7;

// console.log(searchTwoElements(myArray, element1, element2));


//========= Second largest and Second smallest ===============

// let arr = [2, 3, 6, 4, 8, 2, 8];
// let small = Infinity;
// let larg = -Infinity;
// let secondSmal = Infinity;
// let secondLarge = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < small) {
//         secondSmal = small;
//         small = arr[i];
//     } else if (arr[i] < secondSmal && arr[i] > small) {
//         secondSmal = arr[i];
//     }

//     if (arr[i] > larg) {
//         secondLarge = larg;
//         larg = arr[i];
//     } else if (arr[i] > secondLarge && arr[i] < larg) {
//         secondLarge = arr[i];
//     }
// }

// console.log(secondLarge, secondSmal);


//=========== Find the Duplicates  O(n) ===============


// function findDup(arr){
//     let duplicate = []
//     let obj = {}

//     for(let i=0;i<arr.length;i++){
//         if(obj[arr[i]]){
//             if(!duplicate.includes(arr[i])){
//                 duplicate.push(arr[i])
//             }
//         }else{
//             obj[arr[i]] = true
//         }
//     }
//     return duplicate
// }

// console.log(findDup([1,2,3,4,3,2,3,2,6,8,8]))

    
//     function checkBothValues(array, value1, value2) {
//     let foundValue1 = false;
//     let foundValue2 = false;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value1) {
//             foundValue1 = true;
//         }
//         if (array[i] === value2) {
//             foundValue2 = true;
//         }
//         if (foundValue1 && foundValue2) {
//             return true;
//         }
//     }
//     return false;
// }

// const array = [1, 2, 3, 4, 5];
// const value1 = 2;
// const value2 = 3;
// console.log(checkBothValues(array, value1, value2)); 





// 1984. Minimum Difference Between Highest and Lowest of K Scores


var minimumDifference = function(nums, k) {
    nums.sort((a,b) => a - b)

let min = Infinity;
    for(let i=0;i<nums.length - k + 1 ; i++){
        min = Math.min(min,nums[i+k-1]-nums[i])
    }
    return min
};


// Input: nums = [9,4,1,7], k = 2
// Output: 2






// 2798. Number of Employees Who Met the Target


var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0
    for(let i=0;i<hours.length;i++){
        if(hours[i]>=target){
            count++
        }
    }
    return count
};


// Input: hours = [0,1,2,3,4], target = 2
// Output: 3




// 2535. Difference Between Element Sum and Digit Sum of an Array

var differenceOfSum = function(nums) {
    let digit =0
    let element = 0
    for(let i=0;i<nums.length;i++){
        element +=nums[i]
        let num = nums[i].toString()
        for(let j=0;j<num.length;j++){
            digit +=parseInt(num[j])
        }
    }
   
    return element - digit
};

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.