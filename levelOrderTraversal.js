/*
You are given the root of a binary tree. The goal is to display the node values at each level of the binary tree. The values for all levels should be displayed on separate lines, where each line corresponds to a level in the tree.
*/

class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
}

function levelOrderTraversal(root) {

    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {

        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.value);

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(currentLevel)
    }

    return result;
}

// Create the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(2);
root.right.right = new TreeNode(6);

const levels = levelOrderTraversal(root);

// Print each level
levels.forEach(level => console.log(level.join(" ")));