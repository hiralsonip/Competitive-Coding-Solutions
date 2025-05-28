/*

Given an m x n image represented by a 2D integer grid where image[i][j] represents the color of the pixel, perform a flood fill. The flood fill starts from the given pixel (sr, sc) and changes the color of all connected pixels with the same initial color to newColor. Connected pixels are adjacent pixels horizontally or vertically.

Example:
Input: 
image = [
  [1,1,1],
  [1,1,0],
  [1,0,1]
], sr = 1, sc = 1, newColor = 2
Output: [
  [2,2,2],
  [2,2,0],
  [2,0,1]
]

*/

"use strict";

const image =
    [[0, 1, 3, 4, 1],
    [3, 8, 8, 3, 3],
    [6, 7, 8, 8, 3],
    [12, 2, 8, 9, 1],
    [12, 3, 1, 3, 2]];
const r = 2;
const c = 2;
const replacement = 9;

const res = floodFill(r, c, replacement, image);
for (const row of res) {
    console.log(row.join(" "));
}

function floodFill(r, c, replacement, image) {
    // WRITE YOUR BRILLIANT CODE HERE
    const totalRows = image.length;
    const totalCols = image[0].length;

    function getNeighbors(node, color) {
        const neighbors = [];
        const row = node[0];
        const col = node[1];

        const deltaRow = [-1, 0, 1, 0];
        const deltaCol = [0, 1, 0, -1];

        for (let i = 0; i < deltaRow.length; i++) {
            const neighborRow = row + deltaRow[i];
            const neighborCol = col + deltaCol[i];

            if (neighborRow >= 0 && neighborRow < totalRows
                && neighborCol >= 0 && neighborCol < totalCols) {
                if (image[neighborRow][neighborCol] === color) {
                    neighbors.push([neighborRow, neighborCol])
                }
            }
        }
        return neighbors;
    }

    function bfs(root) {
        const queue = [root];
        const visited = Array(totalRows).fill().map(() => Array(totalCols).fill(false));

        let r = root[0];
        let c = root[1];
        let color = image[r][c];
        image[r][c] = replacement;
        visited[r][c] = true;

        while (queue.length > 0) {
            const node = queue.shift();
            const neighbors = getNeighbors(node, color);
            for (const neighbor of neighbors) {
                r = neighbor[0];
                c = neighbor[1];
                if (visited[r][c]) continue;
                image[r][c] = replacement;
                queue.push(neighbor);
                visited[r][c] = true;
            }
        }

    }

    bfs([r, c]);
    return image;
}

// function splitWords(s) {
//     return s === "" ? [] : s.split(" ");
// }

// function* main() {
//     const r = parseInt(yield);
//     const c = parseInt(yield);
//     const replacement = parseInt(yield);
//     const imageLength = parseInt(yield);
//     const image = [];
//     for (let i = 0; i < imageLength; i++) {
//         image.push(splitWords(yield).map((v) => parseInt(v)));
//     }
//     const res = floodFill(r, c, replacement, image);
//     for (const row of res) {
//         console.log(row.join(" "));
//     }
// }

// class EOFError extends Error { }
// {
//     const gen = main();
//     const next = (line) => gen.next(line).done && process.exit();
//     let buf = "";
//     next();
//     process.stdin.setEncoding("utf8");
//     process.stdin.on("data", (data) => {
//         const lines = (buf + data).split("\n");
//         buf = lines.pop();
//         lines.forEach(next);
//     });
//     process.stdin.on("end", () => {
//         buf && next(buf);
//         gen.throw(new EOFError());
//     });
// }
