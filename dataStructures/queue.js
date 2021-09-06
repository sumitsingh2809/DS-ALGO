class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Insertion - O(1)
 * Removal - O(1)
 */
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Addind a new Node to the end (push)
    enqueue(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    // Removing a Node from the beginning (shift)
    dequeue() {
        if (!this.first) return null;

        const temp = this.first;
        this.first = temp.next;
        this.size--;
        if (this.size === 0) {
            this.last = null;
        }

        return temp.val;
    }
}
