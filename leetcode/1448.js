/**
 * Count Good Nodes in Binary Tree
 *
 * Given a binary tree root, a node X in the tree is named good
 * if in the path from root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const left = new TreeNode(1, new TreeNode(3));
const right = new TreeNode(4, new TreeNode(1), new TreeNode(5));
const treeNode = new TreeNode(3, left, right);

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
    let res = 0;

    function dfsPre(node, maxValue) {
        if (!node) return;

        if (node.val >= maxValue) {
            res++;
            maxValue = node.val;
        }

        dfsPre(node.left, maxValue);
        dfsPre(node.right, maxValue);
    }

    dfsPre(root, -Number.MAX_VALUE);
    return res;
};

console.log(goodNodes(treeNode)); // 4
