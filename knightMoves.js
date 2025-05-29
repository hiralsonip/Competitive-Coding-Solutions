/*

Minimum Knight Moves
Medium
Given a knight at position (0,0) on an infinite chessboard, find the minimum number of moves required to reach (x,y). The knight moves in an "L" shape - two squares in one direction and then one square perpendicular.

Example:
Input: x = 2, y = 1
Output: 1
Explanation: The knight moves directly to (2,1) in one move.

Input: x = 5, y = 5
Output: 4
Explanation: The shortest path requires four moves.

*/

function getKnightShortestPath(x, y) {
    // WRITE YOUR BRILLIANT CODE HERE

    function getNeighbors(node) {
        const res = [];
        const [row, col] = node;
        const deltaRow = [-2, -2, -1, 1, 2, 2, 1, -1]
        const deltaCol = [-1, 1, 2, 2, 1, -1, -2, -2];
        for (let i = 0; i < deltaRow.length; i++) {
            const r = row + deltaRow[i];
            const c = col + deltaCol[i];
            res.push([r, c]);
        }
        return res;
    }

    function bfs(start) {
        const visited = new Set();
        let steps = 0;
        const queue = [start];

        while (queue.length > 0) {
            let n = queue.length;
            for (let i = 0; i < n; i++) {
                const node = queue.shift();

                // reach at the target
                if (node[0] === x && node[1] === y) return steps;

                // find neighbor of the node
                for (const neighbor of getNeighbors(node)) {
                    const key = neighbor.join(",")

                    // If the node is already visited 
                    if (visited.has(key)) continue;

                    queue.push(neighbor);
                    visited.add(key);
                }
            }
            steps++;
        }
        return steps;
    }

    return bfs([0, 0]);
}
