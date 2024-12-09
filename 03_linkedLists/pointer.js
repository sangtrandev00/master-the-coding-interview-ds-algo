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


const copyNode = myLinkedListNode;
console.log("my copyNode", copyNode);

// copyNode.head.next.value = 100

const pointer = copyNode.head.next
pointer.value = 20
console.log("my linkedList", myLinkedListNode);
console.log("my copyNode", copyNode);