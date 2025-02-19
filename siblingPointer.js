/*

You are given a binary tree where each node has an additional pointer called sibling (or next). The goal is to connect this sibling pointer such that:

Each node points to the next node in the same level.
The last node in each level points to the first node of the next level in the tree.
The traversal using the sibling pointer should provide a level-order traversal sequence.

*/

//  Tree Node with value, left and right element
class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function siblingPointer(root) {

    // check if root is true
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root]

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }

        }
        result.push(currentLevel);
    }
    return result
}

// Create the binary tree
const root = new TreeNode(191);
root.left = new TreeNode(8);
root.right = new TreeNode(868);
root.left.left = new TreeNode(110);
root.left.right = new TreeNode(277);
root.right.left = new TreeNode(59);
root.right.right = new TreeNode(825);
root.left.right.left = new TreeNode(372);
root.right.right.right = new TreeNode(677);
root.left.right.left.left = new TreeNode(416);
root.left.right.left.right = new TreeNode(809);
root.left.right.left.left.left = new TreeNode(671);
root.left.right.left.left.right = new TreeNode(735);
root.left.right.left.right.left = new TreeNode(823);
root.left.right.left.right.right = new TreeNode(581);

siblingPointer(root);

console.log("INPUT - ", root);
console.log("OUTPUT - ", siblingPointer(root));
