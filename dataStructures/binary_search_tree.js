class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * Insertion - O(log n) OR O(n) for one sided BST
 * Searching - O(log n) OR O(n) for one sided BST
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        let currentNode = this.root;

        if (!currentNode) {
            this.root = newNode;
            return this;
        }

        while (true) {
            if (val < currentNode.val) {
                const leftNode = currentNode.left;
                if (!leftNode) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = leftNode;
            } else if (val > currentNode.val) {
                const rightNode = currentNode.right;
                if (!rightNode) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = rightNode;
            } else {
                return null;
            }
        }
    }

    find(val) {
        let currentNode = this.root;
        let found = false;
        if (!currentNode) return false;

        while (currentNode && !found) {
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                currentNode = currentNode.right;
            } else {
                found = true;
            }
        }
        return currentNode;
    }

    contains(val) {
        let currentNode = this.root;
        if (!currentNode) return false;

        while (currentNode) {
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(10);
