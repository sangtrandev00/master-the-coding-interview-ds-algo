// Create the below linked list:
const myLinkedListNode = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
};

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head; // Reference
      this.length = 1;
    }
    append(value) {
      //Code here
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode
      this.length ++;
      return this
    }

    prepend(value) {
        const newHead = {
            value: value,
            next: this.head 
        }
        this.head = newHead;
        this.length ++;
        return this
    }

    search(targetValue) {
        let index = 0;
        while(this.head.next !== null) {
            if(this.head.value === targetValue) {
                return true
            }
            this.head = this.head.next
            index++
        }
        return -1 // undefined
    }

    insert(index, value) {
        if(typeof index !== "number") {
            return 
        }

        if(index >= this.length) {
            this.append(value)
            return
        }

        let currentNode = this.head

        // Giải thích rõ chỗ lặp như này để hiểu!
        // Chỉ gán giá trị bộ nhớ (pointer) cho một biến tạm là currentNode (Không có gán gì cả nên không ảnh hưởng đến this.head trong trường hợp này!)
        for(let i = 0; i < index - 1; i++) {
            currentNode = this.head.next
        }
        // O(n): Timecomplexity
        // O(n): Spacecomplexity
        //Check for proper parameters;

        const newNode = {
            value: value,
            next: currentNode.next
        }

        currentNode.next = newNode
        this.length++
        return this
    }

    remove(index) {
        // Make sure index is a number and less than length
        if(typeof index !== "number") {
            return 
        }
        let removed = null
        if(index >= this.length - 1) {
            const currentNode = this.traverseToIndex(index - 2)
            removed = currentNode.next
            currentNode.next = null
            this.tail = currentNode
        }else {
            const currentNode = this.traverseToIndex(index - 1)
            removed = currentNode.next
            currentNode.next = currentNode.next.next
        }

        this.length --
        return removed
    }

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    removeFront() {
        this.head = this.head.next; // O(1)
        this.length --
    }

    removeTail(){
        this.remove(this.length - 1) // O(n) --> Hiện tại vì linkedlist của mình là một chiều nên phải chấp nhận như vậy
    }

  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(32);
  myLinkedList.prepend(41);
  myLinkedList.insert(2, 99); // Đang bị bí ideas về vấn đề insert này!
//   // 41 -> 32 -> 10 -> 5 -> 16
  // 41 -> 32 -> [99] -> 10 -> 5 -> 16
//   console.log("my linkedList", myLinkedList);
console.log("my linkedList", myLinkedList);
// console.log("my linkedList", myLinkedList.remove(1));
// console.log("my linkedList after remove", myLinkedList.remove(3));
  