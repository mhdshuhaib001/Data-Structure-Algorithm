class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkdList {
    constructor() {
        this.head = null
        this.size =0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize(){
        return this.size 
    }
}

const list = new linkdList();
console.log('list is empty',list.isEmpty());
console.log('List Size',list.getSize());


======================Single linked list =============================


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkdList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++
    }


    append(value) {
        const node = new Node(value);
        if (this.isEmpty) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev.next;
            }
            prev.next = node
        }
        this.size++
    }


    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index == 0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next
            prev.next = node
            this.size++

        }
    }


    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            console.log('there is no elemt on there');
            return null
        }

        let removeNode;

        if (index == 0) {
            removeNode = this.head;
            this.head = this.head.next
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--
        return removeNode.value
    }


    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }

            if (prev.next) {
                const removeNode = prev.next
                prev.next = removeNode.next

                this.size--
                return value
            }
            return null
        }
    }


// remove index another method
 removeIndex(index){
    if(index === 0){
      this.head = this.head.next
      return
    }
  
    let curr = this.head
    let i=0
    let prev = null
    while(curr && i<index){
               prev =  curr
               curr = curr.next
               i++
    }
  
    if(curr === null){
      console.log('index is not correct',);
    }
  
    prev.next = curr.next
   }

    search(value){
        if(this.value == 0){
            return -1
        }

        let index =0
        let curr = this.head

        while(curr){
            if(curr.value === value){
                return index
            }
            curr = curr.next
            index++
        }
        return -1
    }

    reverse(){
        let prev =  null
        let curr = this.head

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr
            curr = next
        }
        this.head = prev
    }
    print() {
        if (this.isEmpty()) {
            console.log('list is empty');
        } else {
            let current = this.head;
            let listValue = '';
    
            while (current) {
                listValue += `${current.value} -> `;
                current = current.next;
            }
            // Remove the last " -> " to avoid trailing arrow
            listValue = listValue.slice(0, -4);
            console.log(listValue);
        }
    }
    
}

const list = new linkdList();

console.log('list is empty', list.isEmpty());
console.log('List Size', list.getSize());
list.print();

list.append(10);
list.print()
list.append(20);
list.append(30);
list.print()
list.append(40);
list.print()

list.insert(10, 0)
list.print()

list.insert(20, 0)
list.print()

// list.insert(50, 2)
// list.print()
// list.insert(60, 3)
// list.print()


list.reverse()
list.print(  )

console.log('searhc',list.search(50));
console.log('remove node', list.removeValue(20));
list.print()

console.log(list.getSize());





==================== Double linked list =========================

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList2 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        if (this.isEmpty()) {
            console.log('list is empty');
        } else {
            let current = this.head;
            let listValue = ''

            while (current) {
                listValue += `${current.value} `
                current = current.next
            }
            console.log(listValue);
        }

    }

    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    deleteFirst() {
        if (this.isEmpty()) {
            return null;
        }
        const deletedValue = this.head.value;
        this.head = this.head.next;

        this.size--;
        return deletedValue;
    }

    deleteLast() {
        if (this.isEmpty()) {
            return null;
        }
        const deletedValue = this.tail.value;

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }

            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return deletedValue;
    }
}

const list = new LinkedList2();

// list.print();
list.append(1);
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);
list.prepend(5888)
list.deleteFirst()
list.deleteLast() 

list.print();


==================== Array To LinkedList ==============


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function arrayToLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }

    let head = new Node(arr[0]);
    let curr = head;
 
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        curr.next = newNode;
        curr = newNode;
    }
    return head;
}
function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(`${current.val}${current.next ? ' -> ' : ''}`);
        current = current.next;
    }
}


const array = [2, 3, 4, 5, 6, 7, 8, 9];
const linkedList = arrayToLinkedList(array);
printLinkedList(linkedList);


=========== Array To linkedlist Double linkedlist =======



class Node {
    constructor(val){
        this.val = val
        this.prev = null
        this.next = null
    }
}

function arrayToDoubleLinkedList(arr){
    if(arr.length === 0){
        return null
    }

    let head = new Node(arr)
    let crr = head
    for(let i =1 ;i<arr.length;i++){
        let newNode = new Node(arr[i]);

        crr.next = newNode
        crr.prev  = crr

        crr =  newNode
    }
    return head
}


function print(head){
    let current = head

    while(current){
        console.log(`${current.val}${current.next ? ' -> ' : ''}`);
        current = current.next;
    }
}


const array =  [2,3,4,5,6,7,8];

arrayToDoubleLinkedList(array)

print()


==========insert value in the next node =========


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    addFterNode(data, newData){
        let current =  this.head
        while(current && current.data !== data){
            current = current.next
        } 

        if(!current){
            console.log('current data is not fout ',);
            return null
        }

        const newNode = new Node(newData)
        newNode.next = current.next;
        current.next = newNode
    }
    printList() {
        let current = this.head;
        let list = "";
        while (current) {
            list += current.data + " -> "; 
            current = current.next;
        }
        console.log(list + "null");
    }
    
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(5);
list.append(6);
list.append(7);
list.addFterNode(2,666)
list.printList();



====================finding the middile man==================
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else {
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = newNode;
        }
    }

    middleMan(){
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    print(){
        let curr = this.head;
        let list = '';
        while(curr){
            list += curr.data + " -> ";
            curr = curr.next;
        }
        console.log(list + "null");
    }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(5);
list.append(6);
list.append(7);
list.append(7);


list.print(); 

const middleNode = list.middleMan(); 
console.log("Middle node:", middleNode.data); 


==========Remove the middile Man ========


class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}


class linkdList {
    constructor(){
        this.head = null
    }

    append(data){

        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode
        } else {
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next =  newNode
        }
    }

    removeMiddileOne(){

        if (!this.head || !this.head.next) {
            console.log("List is too short to remove a middle node.");
            return;
        }

        let slow = this.head
        let fast = this.head
        let prev = null

        while(fast&&fast.next){
            prev = slow;
            slow = slow.next
            fast = fast.next.next
        }

        if(prev){
            prev.next = slow.next;
        }else{
            this.head = null
        }
    }

    print(){
        let curr = this.head;
        let result = ''

        while(curr){
            result += curr.data + " -> "
            curr = curr.next
        }
        console.log(result + "null");
    }
}

const list = new linkdList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)

list.print()

list.removeMiddileOne()
list.print()






class Node {
    constructor(data){

        this.data = data
        this.next  = null

    }
}


class arraytoLinkedList {
    constructor(){
        this.head = null
    }

    append(data){
        let newNode = new Node(data)

        if(!this.head){
            this.head = newNode
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next

            }
            curr.next = newNode
        }
    }

    
    duplicate(){
      let curr = this.head
      while(curr != null){
        let runner = curr
        while(runner.next!= null)
        if(runner.next.data ===curr.data){
            runner.next = runner.next.next
        }else{
            runner =  runner.next
        }
        curr = curr.next
      }
    } 

    removeContinugeousDuplicate() {
        let curr = this.head;
        while (curr && curr.next) {
            if (curr.data === curr.next.data) {
                // Skip over all consecutive duplicates
                while (curr.next && curr.data === curr.next.data) {
                    curr.next = curr.next.next;
                }
            }
            // Move to the next node
            curr = curr.next;
        }
    }
    

    arrayLink(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
        }
    }

    arrayToLink(arr){
        let curr = this.head

        for(let i=0;i<arr.length;i++){
            const newNode = new Node(arr[i]);

            if(i==0){
                this.head = newNode
                curr =newNode
            }else{
                curr.next = newNode
                curr = newNode
            }
        }
    }


    print() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.data + (current.next ? " -> " : "" );
            current = current.next;
        }
        console.log(output);
    }
}


const list = new arraytoLinkedList()
// list.arrayLink([1,2,3,5,5,3,3,2,4,5,6])
// list.arrayToLink([1,2,3,5,6,7,8,8])

list.append(5)
list.append(3)
list.append(4)
list.append(5)

list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.append(5)

list.print()
list.duplicate()

// list.removeContinugeousDuplicate()
list.print()


========= Reverse String ============


class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class reverseString{
    constructor(){
        this.head = null
        this.prev = null
        this.next = null
    }

    append(data){
        let node = new Node(data)
        if(this.head==null){
            this.head = node
        }else {
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
    
        while (current !== null) {
          let temp = current.next; 
            current.next = prev; 
            prev = current; 
            current = temp; 
        }
    
        this.head = prev;
    }
    
    toString(){
        let string = " "
        let curr = this.head
        while(curr){
            string += curr.data
            curr = curr.next
        }
        return string;
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
}


let list = new reverseString()


const str = "hallo shuhaib";

for(let char of str){
    list.append(char)
}

list.reverse()
console.log(list.toString());

// list.print()