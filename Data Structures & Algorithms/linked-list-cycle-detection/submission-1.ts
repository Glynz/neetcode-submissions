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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycleON(head: ListNode | null): boolean {
        // Keep a map of visited nodes using the ListNode as the key
        // If the key is already in the map then return false
        // Iterate over the entire linked list until you reach
        // the end
        const visitedMap = new Map<ListNode, number>();
        let index = 0;
        let currentNode = head;
        while(currentNode) {
            if (visitedMap.has(currentNode)) return true;
            visitedMap.set(currentNode, index++);
            currentNode = currentNode.next;
        }

        return false;
    }

    hasCycle(head: ListNode | null): boolean {
        let fastNode = head;
        let slowNode = head;
        while(fastNode && fastNode.next) {
            fastNode = fastNode.next;
            if(slowNode === fastNode.next || slowNode == fastNode) return true;
            slowNode = slowNode.next;
            fastNode = fastNode.next;
        }

        return false;
    }
}
