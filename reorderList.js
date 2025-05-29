/*

Reorder List
Medium
Given the head of a singly linked list, reorder it to follow this pattern - the first node, then the last node, then the second node, then the second-last node, and so on. The reordering must be done in-place without modifying node values.

Example:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

Input: head = [1,2,3,4]
Output: [1,4,2,3]

*/

function reorderList(head) {
    // WRITE YOUR BRILLIANT CODE HERE

    if (!head || !head.next) return head;

    // Step 1: find the middle of the list
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next; // middle value
        fast = fast.next.next;
    }

    // Step 2 : Reverse the second half
    let prev = null, curr = slow.next;
    slow.next = null // Separate the first and second half
    while (curr) {
        let tempNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNode
    }

    // Step 3 : Merge the two halves
    let first = head, second = prev;
    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1
        second = temp2
    }

    return head;
}