/*

Combination Sum
Medium
Given an array of distinct integers candidates and a target integer target, return all unique combinations of candidates where the chosen numbers sum to target. You may use the same number multiple times. The answer can be returned in any order.

Example:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation: 
  - 2+2+3 = 7
  - 7 = 7
  - These are the only valid combinations.

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Explanation: Multiple combinations exist that sum to 8.

*/

function combinationSum(candidates, target) {

    const result = [];

    function backtrack(remaining, combination, start) {
        if (remaining === 0) {
            result.push([...combination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= remaining) {
                combination.push(candidates[i]);
                backtrack(remaining - candidates[i], combination, i);
                combination.pop();
            }
        }
    }
    backtrack(target, [], 0)
    return result;
}