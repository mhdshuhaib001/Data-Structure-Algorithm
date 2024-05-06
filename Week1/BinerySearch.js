function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([-2, 4, 7, 8, 9, 7, 5], 7));


function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1

    while(left<=right){
        let middile = Math.floor((left+right)/2);
        if(target===arr[middile]){
            return middile
        }

        if(target < arr[middile]){
            right = middile - 1
        }else{
            left = middile +1   
        }
    }
    return -1
}

console.log(binarySearch([2,3,4,5,6,7,8,9],7));
console.log(binarySearch([2,3,4,5,6,7,8,9],4));
console.log(binarySearch([2,3,4,5,6,7,8,9],5));



=========Recursion Binnery search ============

function RecursionBinnerySearch(arr ,target){
    return search(arr , target , 0,arr.length - 1);
}


function search(arr,target,left,right){
    if(left > right){
        return -1 
    }

    let middile = Math.floor((left+right)/2);

    if(target === arr[middile]){
        return middile
    }

     if(target < arr[middile]){
        return search(arr,target,left,middile - 1);
     }else{
        return search(arr,target,middile + 1, right);
     }
}

console.log('RecursionB',RecursionBinnerySearch([2,3,4,5,6,7,8,9,9],9));
console.log('RecursionB',RecursionBinnerySearch([20,3,9,50,1,8,5,39],9));