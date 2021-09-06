/**
 * Singly Linked Lists are an excellent alternative to arrays
 * when insertion and deletion at the beginning are frequently required.
 *
 * Does not contain a built-in index.
 * Foundation of other data structures like stacks and queues.
 */

// piece of data - val
// reference to next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Insertion - O(1)
 * Removal - O(1) or O(n)
 * Searching - O(n)
 * Access - O(n)
 */
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    // Addind a new Node to the end
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Addind a new Node to the beginning
    unShift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Removing a Node from the end
    pop() {
        if (!this.head) return;
        let current = this.head;
        let pre = current;
        while (current) {
            if (!current.next) {
                // end of list
                this.tail = pre;
                this.tail.next = null;
                this.length--;
                if (this.length === 0) {
                    this.head = null;
                    this.tail = null;
                }
                return current;
            }
            pre = current;
            current = current.next;
        }
    }

    // Removing a Node from the beginning
    shift() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    // Retreive a node by its position
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // changing the value of a node based on its position
    set(index, val) {
        const foundNode = this.get(index);
        if (!foundNode) return false;

        foundNode.val = val;
        return true;
    }

    // Adding a node to the linked list at specific position
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return null;
        } else if (index === 0) {
            return this.unShift(val);
        } else if (index === this.length) {
            return this.push(val);
        } else {
            const newNode = new Node(val);
            const prevNode = this.get(index - 1);

            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
            return this;
        }
    }

    // Remove a node from the linked list at a specific position
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let prevNode = this.get(index - 1);
        let currentNode = prevNode.next;

        prevNode.next = currentNode.next;
        this.length--;
        return currentNode;
    }

    // Reversing the linked list in place.
    // should not make any duplicate
    reverse() {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        let prevNode = null;
        let nextNode;
        for (let i = 0; i < this.length; i++) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        return this;
    }
}

const list = new SinglyLinkedList();
// console.log(list);
// console.log(list.push('hi'));
// console.log(list.push('hello'));
