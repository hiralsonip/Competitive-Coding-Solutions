/**
 * Definition for singly-linked list. */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let arr = [];

    while (list1 !== null) {
        arr.push(list1.val);
        list1 = list1.next;
    }

    while (list2 !== null) {
        arr.push(list2.val);
        list1 = list2.next;
    }

    arr.sort((a, b) => a - b);

    let result = new ListNode(-1);
    let head = result;

    for (let value of arr) {
        head.next = new Node(value);
        head = head.next
    }

    return result.next;
};