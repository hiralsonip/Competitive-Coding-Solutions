/*

Given the head pointers of two linked lists where each linked list represents an integer number (each node is a digit), add them and return the resulting linked list. Here, the first node in a list represents the least significant digit.

*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function addTwoLinkedList(l1, l2) {

    // Take the result linked list and make it empty 
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // iterate through both linked list
    while (l1 !== null || l2 !== null || carry > 0) {

        const val1 = l1 ? l1.value : 0;
        const val2 = l2 ? l2.value : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10); // Create a new node for the current digit
        current = current.next;

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }
    return dummyHead.next;
}

// Example usage:
const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // 342
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // 465

const result = addTwoLinkedList(l1, l2); // 807 (7 -> 0 -> 8)

// Print the result
let current = result;
while (current) {
    console.log(current.value);
    current = current.next;
}
