// Link to the task
// https://leetcode.com/problems/add-two-numbers/


// Definition for singly-linked list.class ListNode {
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let list;
    let head;
    let previousNumber = 0;

    if (l1.val === null && l2.val === null) return null;

    while (l1 || l2 || previousNumber > 0) {
        const currentSum = (l1?.val ?? 0) + (l2?.val ?? 0);

        const node = new ListNode((currentSum + previousNumber) % 10);
        previousNumber = Math.floor((currentSum + previousNumber) / 10);


        if (!list) {
            head = node;
            list = node;
        } else {
            head.next = node;
            head = node;
        }

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return list;
}

// result 708
const test1 = {
    l1: new ListNode(2, new ListNode(4, new ListNode(3, null))),
    l2: new ListNode(5, new ListNode(6, new ListNode(4, null)))
}

// result 0
const test2 = {
    l1: new ListNode(0, null),
    l2: new ListNode(0, null)
}

// result 89990001
const test3 = {
    l1: new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))))))),
    l2: new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))))
}

console.log(addTwoNumbers(test3.l1, test3.l2));