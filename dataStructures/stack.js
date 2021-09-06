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
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // unShift of SLL
    // Addind a new Node to the beginning of SLL
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        return ++this.size;
    }

    // shift of SLL
    // Removing a Node from the beginning of SLL
    pop() {
        if (!this.first) return undefined;
        const temp = this.first;

        this.first = temp.next;
        if (this.length === 0) {
            this.last = null;
        }
        this.size--;
        return temp.val;
    }
}
