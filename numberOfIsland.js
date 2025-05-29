/*

Number of Islands
Medium
Given an m x n grid consisting of 1s (land) and 0s (water), return the number of islands. An island is formed by connecting adjacent 1s vertically or horizontally.

Example:
Input:
grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
Explanation:
  - The first island consists of the top-left 1s.
  - The second island consists of the middle 1.
  - The third island consists of the bottom-right 1s.


*/

function countNumberOfIslands(grid) {
    // WRITE YOUR BRILLIANT CODE HERE
    const totalRows = grid.length;
    const totalCols = grid[0].length;

    function getNeighbors(node) {
        const [r, c] = node
        const neighbors = [];
        const deltaRow = [-1, 0, 1, 0];
        const deltaCol = [0, 1, 0, -1];
        for (let i = 0; i < deltaRow.length; i++) {
            let newRow = r + deltaRow[i];
            let newCol = c + deltaCol[i];
            if (newRow >= 0 && newRow < totalRows && newCol >= 0 && newCol < totalRows) {
                neighbors.push([newRow, newCol])
            }
        }
        return neighbors;
    }

    function bfs(start) {
        const [r, c] = start;
        const queue = [start];
        grid[r][c] = 0;

        while (queue.length > 0) {
            const node = queue.shift();
            for (const neighbor of getNeighbors(node)) {
                const [r, c] = neighbor;
                if (grid[r][c] === 0) continue;
                queue.push(neighbor);
                grid[r][c] = 0;
            }
        }

    }

    let count = 0;
    for (let r = 0; r < totalRows; r++) {
        for (let c = 0; c < totalCols; c++) {
            if (grid[r][c] === 0) continue;
            bfs([r, c]);
            count++;
        }
    }
    return count;
}
