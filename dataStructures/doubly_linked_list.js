class Node {
    constructor(val) {
        this.prev = null;
        this.val = val;
        this.next = null;
    }
}

/**
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(n/2) ~ O(n)
 * Access - O(n)
 */
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Addind a new Node to the end
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
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
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Removing a Node from the end
    pop() {
        if (!this.head) return null;
        const node = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
        }
        this.length--;
        return node;
    }

    // Removing a Node from the beginning
    shift() {
        if (!this.head) return null;
        const node = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }

        this.length--;
        return node;
    }

    // Retreive a node by its position
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    // changing the value of a node based on its position
    set(index, val) {
        const currentNode = this.get(index);
        if (!currentNode) return false;

        currentNode.val = val;
        return true;
    }

    // Adding a node to the linked list at specific position
    insert(index, val) {
        if (index < 0 || index > this.length) return null;

        if (index === 0) return this.unShift(val);
        if (index === this.length) return this.push(val);

        const newNode = new Node(val);
        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;

        newNode.next = nextNode;
        nextNode.prev = newNode;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        this.length++;
        return this;
    }

    // Remove a node from the linked list at a specific position
    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const currentNode = this.get(index);
        if (!currentNode) return null;

        const prevNode = currentNode.prev;
        const nextNode = currentNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        currentNode.prev = null;
        currentNode.next = null;
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
            currentNode.prev = nextNode;

            prevNode = currentNode;
            currentNode = nextNode;
        }
        return this;
    }
}
