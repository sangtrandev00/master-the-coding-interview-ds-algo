// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      //Code here
      const newHead = {
        value: value,
        next: null
      }
      this.tail.next = newHead;
      this.tail = newHead
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
        if(index > this.length) {
            return
        }
        let currentHead = this.head
        for(let i = 0; i < index - 1; i++) {
            currentHead = this.head.next
        }
        //Check for proper parameters;
        const newNode = {
            value: value,
            next: currentHead
        }
        this.head.next = newNode
        return this
    }

  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(32);
  myLinkedList.prepend(41);
  myLinkedList.insert(2, 99);
  console.log("my linkedList", myLinkedList);
  