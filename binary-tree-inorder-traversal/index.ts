// https://leetcode.com/problems/binary-tree-inorder-traversal/


// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const nullNode = null;

node1.left = nullNode;
node1.right = node2;
node2.left = node3;
node2.right = nullNode;
node3.left = nullNode;
node3.right = nullNode;

console.log(inorderTraversal(node1));