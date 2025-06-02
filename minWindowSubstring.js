/*

Minimum Window Substring
Hard
Given two strings s and t, return the minimum window in s that contains all the characters in t. If no such window exists, return an empty string "".

Example:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum substring containing "A", "B", and "C" is "BANC".

Input: s = "a", t = "a"
Output: "a"

Input: s = "a", t = "aa"
Output: ""
Explanation: Since 'a' appears only once, but 't' requires two, there i

*/

function getMinimumWindow(s, t) {
    if (t.length > s.length) return "";

    // count number of characters and its occurance
    const tMap = new Map();
    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }

    let left = 0, right = 0;
    let required = tMap.size;
    let formed = 0;
    const windowCounts = new Map();

    let minLen = Infinity;
    let minWindow = "";

    while (right < s.length) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (tMap.has(char) && windowCounts.get(char) === tMap.get(char)) {
            formed++;
        }

        while (left <= right && formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minWindow = s.slice(left, right + 1);
            }

            let leftChar = s[left];
            windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
            if (tMap.has(leftChar) && windowCounts.get(leftChar) < tMap.get(leftChar)) {
                formed--;
            }
            left++;
        }
        right++;
    }
    return minWindow
}

const s = "ADOBECODEBANC", t = "ABC"
console.log("ANSWER - ", getMinimumWindow(s, t))