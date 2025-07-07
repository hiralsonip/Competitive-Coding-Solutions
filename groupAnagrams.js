function groupAnagrams(arr) {

    if (arr.length === 0) return false;

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(word)
    }

    console.log([...map.values()]);
    return [...map.values()]
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {
    if (root === null) return 0;

    const leftDepth = maxDepth(root.left);
    const righDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, righDepth)
}