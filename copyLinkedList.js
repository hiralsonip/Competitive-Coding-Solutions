class ListNode {
    constructor(value = 0, next = null, arbitary_pointer = null) {
        this.value = value;
        this.next = next;
        this.arbitary_pointer = arbitary_pointer;
    }
}

function copyLinkedList(head) {

    if (!head) {
        return null;
    }

    const nodeMap = new Map();
    let current = head;

    while (current) {
        nodeMap.set(current, new ListNode(current.value));
        current = current.next
    }

    current = head;
    while (current) {
        let copiedNode = nodeMap.get(current);
        copiedNode.next = current.next ? nodeMap.get(current.next) : null;
        copiedNode.arbitary_pointer = current.arbitary_pointer ? nodeMap.get(current.arbitary_pointer) : null;
        current = current.next;
    }

    return nodeMap.get(head);
}

// Example Usage
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

node1.arbitary_pointer = node3; // 1 -> 3
node2.arbitary_pointer = node1; // 2 -> 1
node3.arbitary_pointer = node3; // 3 -> 3 (self-referencing)

const copiedList = copyLinkedList(node1);

function printList(head) {
    let current = head;
    while (current) {
        console.log(`Value: ${current.value}, Arbitrary Pointer: ${current.arbitary_pointer?.value ?? 'null'}`);
        current = current.next;
    }
}

console.log("Original : \n");
printList(node1);
console.log("Copied : \n");
printList(copiedList);