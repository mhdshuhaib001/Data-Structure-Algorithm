// //////////////////////////////////////////////////////////Bubble sort/////////////////////////////////////

// function BubbleSort(arr){
//     let isSwapp 
//     do{
//         for(let i=0;i<arr.length-1;i++){
//             isSwapp = false
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//             arr[i]= arr[i+1]
//             arr[i+1] = temp
//             isSwapp = true
//             }
//         }
//     }while(isSwapp)
// }


// const arr = [15,4,3,7,84,3,44]

// BubbleSort(arr)
// console.log(arr)



// ////////////////////////////////////////////////////////////Insersion sort/////////////////////////////////////


// function InsersionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numberToInsert = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>numberToInsert){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] =numberToInsert
//     }
// }


// const arr = [2,3,2,1,-1,8,4,348,0]

// InsersionSort(arr)
// console.log(arr)







// ////////////////////////////////////////////////////////////Quick Sort /////////////////////////////////////


// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     let pivot = arr[arr.length - 1];
//     let right = [];
//     let left = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
    
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [2, 9, 1, -9, 6, 4, 23, 4, 7, 8];

// console.log("Original array:", arr);
// const sortedArr = quickSort(arr);
// console.log("Sorted array:", sortedArr);



// ////////////////////////////////////////////////////////////selection Sort /////////////////////////////////////


// function selectionSort(arr){
//       for(let i=0;i<arr.length;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         if(min != i){[]
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }
//       }
//       return arr
// }

// let arr = [5, 2, 4, 6, 1, 3];
// selectionSort(arr);
// console.log(arr);




// //////////////////////////////////////////////////////Merge Sort  /////////////////////////////////////


// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2);
//     const leftArr = arr.slice(0,mid)
//     const rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// } 


// function merge(leftArr,rightArr){
//     const sortedArr =  []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr,...leftArr,...rightArr]
// }

// const arr = [-1,8,7,5,3,5,3,6,-77]
// console.log(mergeSort(arr))





