/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        // If one list is empty then return the other list
        // Iterate over the two nodes and compare which one is smaller
        // Add them to a third chain and update the node's next appropriately
        // Break the loop once one node is null
        let leftNode = list1;
        let rightNode = list2;
        let mergedHead = null;
        let tail = null;

        if (leftNode === null && rightNode === null) return null;
        else if (leftNode === null && rightNode) return rightNode;
        else if (rightNode === null && leftNode) return leftNode;
        else if (leftNode.val < rightNode.val) {
            mergedHead = leftNode;
            leftNode = leftNode.next;
        } else {
            mergedHead = rightNode;
            rightNode = rightNode.next;
        }

        tail = mergedHead;

        while(leftNode !== null || rightNode !== null) {
            if (leftNode === null) {
                tail.next = rightNode;
                rightNode = rightNode.next;
            } else if (rightNode === null) {
                tail.next = leftNode;
                leftNode = leftNode.next;
            } else {
                if (leftNode.val < rightNode.val) {
                    tail.next = leftNode;
                    leftNode = leftNode.next;
                } else {
                    tail.next = rightNode;
                    rightNode = rightNode.next;
                }
            }
            tail = tail.next;
        }

        tail.next = null;

        return mergedHead;

    }
}
