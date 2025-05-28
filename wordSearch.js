/*

Word Search
Medium
Given an m x n board of characters and a word, return true if the word exists in the grid. The word can be constructed from letters in adjacent cells (horizontally or vertically) but cannot reuse the same letter cell more than once.

Example:
Input: 
board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
]
word = "ABCCED"
Output: true

Input:
board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
]
word = "SEE"
Output: true

Input:
board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
]
word = "ABCB"
Output: false

*/

"use strict";

function exist(board, word) {
    // WRITE YOUR BRILLIANT CODE HERE

    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, i) {
        // if the word is found
        if (i === word.length) return true;

        // check out of bound error and if the
        // next letter from board if not there in word
        if (r < 0 || r >= rows || c < 0 || c >= cols ||
            board[r][c] !== word[i]) return false;

        const temp = board[r][c];
        board[r][c] = "#" // mark as visited

        const found = dfs(r + 1, c, i + 1) || // down
            dfs(r - 1, c, i + 1) || // up
            dfs(r, c + 1, i + 1) || // right
            dfs(r, c - 1, i + 1) // left

        board[r][c] = temp; //backtrack
        return found;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) {
                return true;
            }
        }
    }
    return false;
}

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
]
const word = "ABCCED"
const res = exist(board, word);
console.log(res);

