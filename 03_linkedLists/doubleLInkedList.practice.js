

class DBLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        prev: null,
        next: null
      };
      this.tail = this.head; // Reference
      this.length = 1;
    }
    
    append(value) {
      //Code here
      const newNode = {
        value: value,
        prev: this.tail,
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
            prev: null,
            next: this.head 
        }
        this.head = newHead;
        this.length ++;
        return this
    }

    lookup(index) {
        let counter = 0;
        let currentNode = this.head
        while(index !== counter) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode.value
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

    // More clean
    insert(index, value) {
        //Check for proper parameters;
        if (index >= this.length) {
          console.log("yes");
          return this.append(value);
        }
  
        const newNode = {
          value: value,
          prev: null,
          next: null,
        };
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }

    remove(index) {
        // Make sure index is a number and less than length
        if(typeof index !== "number") {
            return 
        }
        let removed = null
        if(index >= this.length - 1) {
            this.removeTail()
        }else {
            const currentNode = this.traverseToIndex(index - 1)
            removed = currentNode.next
            currentNode.next = removed.next
            this.length --
        }
        return this
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

    traverseBackwardToIndex(index) {
        let counter = this.length;
        let currentNode = this.tail
        while(counter !== index) {
            currentNode = currentNode.prev;
            counter--
        }
        return currentNode
    }

    removeFront() {
        this.head = this.head.next; // O(1)
        this.prev = null
        this.length --
    }

    removeTail(){
        const currentTail = this.tail.prev
        currentTail.next = null
        this.tail = currentTail
        this.length --
        return this
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }

    reverse() {
        //Code Here
        let newLinkedList = new DBLinkedList(this.tail.value)
        let currentNode = this.tail.prev
        while(currentNode !== null) {
            // Solve problem here
            newLinkedList.append(currentNode.value)
            currentNode = currentNode.prev
        }
      return this.printList();
    }

  }
    
let myDBLinkedList = new DBLinkedList(10);
  myDBLinkedList.append(5);
  myDBLinkedList.append(16);
  myDBLinkedList.prepend(1);
  myDBLinkedList.insert(2, 99);
// myDBLinkedList.insert(20, 88);
// myDBLinkedList.remove(2);
// myDBLinkedList.removeTail();
console.log("myDBLinkedList.printList() before reverse: ", myDBLinkedList);
myDBLinkedList.reverse()
console.log("myDBLinkedList.printList() after reverse: ", myDBLinkedList.printList())


  