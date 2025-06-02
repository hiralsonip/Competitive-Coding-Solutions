class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseLinkedList(head) {
    // WRITE YOUR BRILLIANT CODE HERE
    let curr = head;
    let prev = null;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

// Create nodes
const node3 = new Node(3);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

// `node1` is now the head of the linked list: 1 -> 2 -> 3 -> null
function printList(head) {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}
printList(node1);

printList(reverseLinkedList(node1));
