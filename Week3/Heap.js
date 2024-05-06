// class Heap {
//     constructor(){
//         this.arr = []
//     }

//     getParent(i){
//         return Math.floor(i-1/2)
//     }

//     getLeftChild(i){
//         return i * 2 + 1
//     }

//     getRightChild(i){
//         return i * 2 + 2
//     }

//     swap(i,j){
//         let temp = this.arr[i]
//         this.arr[i] = this.arr[j]
//         this.arr[j] = temp
//     }
//     insert(data){
//         this.arr[this.arr.length] = data
//         this.heapfyUp()
//     }

//     heapfyUp(){
//         let index = this.arr.length - 1;
//         while (index > 0 && this.arr[index] > this.arr[this.getParent(index)]) {
//             this.swap(index, this.getParent(index));
//             index = this.getParent(index);
//         }
//     }

//     remove(){
//         let root = this.arr[0]
//         let last = this.arr.pop()
//         if(this.arr.length>0){
//             this.arr[0] = last
//             this.heapfyDown(0,this.arr.length)
//         }
//         return root
//     }

//     heapfyDown(index , arrlenght){
//         let largest = index
//         let left = this.getLeftChild(index)
//         let right = this.getRightChild(index)
    
//         if(left < arrlenght && this.arr[left] > this.arr[largest]){
//             largest = left
//         }
    
//         if(right < arrlenght && this.arr[right] > this.arr[largest]){
//             largest = right
//         }
    
//         if(largest != index){
//             this.swap(index,largest)
//             this.heapfyDown(largest,arrlenght)
//         }
//     }

    
//     buildHeap(){
//         let length = this.arr.length
//         for(let i= Math.floor(length/2)-1;i>=0;i--){
//             this.heapfyDown(i,length)
//         }
//     }

//     heapSort(){
//         this.buildHeap()
//         for(let i=this.arr.length-1;i>=0;i--){
//             this.swap(0,i)
//             this.heapfyDown(0,i)
//         }
//     }
    
// }


// // let heap = new Heap();
// // heap.insert(10);
// // heap.insert(10);

// // heap.insert(20);
// // heap.insert(15);
// // heap.insert(20);
// // console.log(heap.arr); // Expected output: [20, 20, 15, 10]

// // heap.remove();
// // heap.remove();
// // heap.remove();
// // heap.remove();
// // console.log(heap.arr); // Expected output: []


// let heap = new Heap();
// heap.arr = [3, 7, 2, 11, 5, 8];
// heap.heapSort();
// console.log(heap.arr); // Expected output: [2, 3, 5, 7, 8, 11]


class Heap {
    constructor(){
        this.arr = []
    }

    getParent(i){
        return Math.floor(i-1/2)
    }

    getLeftChild(i){
        return i * 2 + 1
    }

    getRightChild(i){
        return i * 2 + 2
    }

    swap(i,j){
        let temp = this.arr[i]
        this.arr[i] = this.arr[j]
        this.arr[j] = temp
    }

    heapfyUp(){
        let index = this.arr.length-1

        while(index> 0 ,this.arr[index]>this.arr[this.getParent(index)]){
            this.swap(index,this.getParent(index))
            index = this.getParent(index)
        }
    }

    insert(data){
        this.arr[this.arr.length] = data
        this.heapfyUp()
    }

    heapfyDown(index, arrlenght){
        let largest = index
        let left = this.getLeftChild(index) , right = this.getRightChild(index)

        if(left < arrlenght && this.arr[left]> this.arr[largest]){
        largest = left
        }

        if(right < arrlenght&& this.arr[right] > this.arr[largest]){
            largest = right
        }

        if(largest != index ){
            this.swap(index,largest)
            this.heapfyDown(index, arrlenght)
        }
    }

    remove(){
        let root = this.arr[0]
        let last = this.arr.pop()

        if(this.arr.length > 0){
            this.arr[0] = last
            this.heapfyDown(0,this.arr.length)
        }
        return root
    }

    heapBuild(){
        let length = this.arr.length
        for(let i= Math.floor(length/2)-1;i>=0;i--){
            this.heapfyDown(i,length)
        }
    }

    heapSort(){
        this.heapBuild()
        for(let i=this.arr.length-1;i>=0;i--){ 
            this.swap(0,i)
            this.heapfyDown(0,i)
        }
    }


}

const heap = new Heap();
heap.insert(10);
heap.insert(20);
heap.insert(15);
heap.insert(30);
// After inserting these elements, the max heap property should be maintained
// Expected output: [30, 20, 15, 10]
heap.heapSort()
console.log(heap.arr);

