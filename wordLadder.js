/*
Word Ladder
Hard
Given two words, beginWord and endWord, and a dictionary wordList, return the shortest transformation sequence from beginWord to endWord, such that

Only one letter can be changed at a time.
Each transformed word must exist in wordList.
If no such sequence exists, return 0.
Example:
Input: 
    beginWord = "hit", endWord = "cog", 
    wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: The shortest transformation sequence is:
    "hit" -> "hot" -> "dot" -> "dog" -> "cog"
    The sequence length is 5.

Input:
    beginWord = "hit", endWord = "cog",
    wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: Since "cog" is not in the word list, no transformation is possible.
*/


"use strict";

function wordLadder(begin, end, wordList) {
    const wordSet = new Set(wordList)
    if (!wordSet.has(end)) return 0;

    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const queue = [[begin, 1]] // [word, level]

    while (queue.length > 0) {
        const [word, level] = queue.shift();

        for (let i = 0; i < word.length; i++) {
            for (const char of alphabets) {
                if (char === word[i]) continue;

                const newWord = word.slice(0, i) + char + word.slice(i + 1);
                if (newWord === end) return level + 1;

                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord)
                }

            }
        }
    }
    return 0;
}

const begin = "hit", end = "cog"
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

const res = wordLadder(begin, end, wordList);
console.log(res);




