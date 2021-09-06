// Breadth-first Search
/**
 * Depth-first Search
 * 1. In-Order Search
 * 2. Pre-order Search
 * 3. Post-order Search
 */

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

    // Using Queue
    BFS() {
        const data = [];
        const queue = [];
        let node = this.root;

        if (node) queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    // (Root, Left, Right)
    DFSPreOrder() {
        const data = [];

        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    // (Left, Right, Root)
    DFSPostOrder() {}

    // (Left, Root, Right)
    DFSInOrder() {}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
// tree.insert(10);

tree.BFS(); //[10, 5, 13, 2, 7, 11, 16]
tree.DFSPreOrder(); //[10, 5, 2, 7, 13, 11, 16]
