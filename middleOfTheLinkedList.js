"use strict";

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function middleOfLinkedList(head) {
    // WRITE YOUR BRILLIANT CODE HERE

    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        // move fast pointer by two steps
        fastPointer = fastPointer.next.next
        if (!fastPointer) {
            slowPointer = slowPointer.next;
            return slowPointer.val
        }

        // move slow pointer by one step
        slowPointer = slowPointer.next;
        console.log("AFTER")
        console.log("Fast - ", fastPointer.val, " Slow - ", slowPointer.val)
    }
    return slowPointer.val;
}

// Create linked list: 1 -> 2 -> 3 -> 4 -> 5
const node5 = new Node(5);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);
const head = new Node(0, node1);

// Call your function with this head
console.log(middleOfLinkedList(head));

