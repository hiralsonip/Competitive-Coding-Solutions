/*

Given a positive integer, target, print all possible combinations of positive integers that sum up to the target number.

*/

function printAllSum(target) {

    const result = [];

    function backtrack(currentCombination, start, remaining) {
        if (remaining === 0) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i <= remaining; i++) {
            currentCombination.push(i);
            backtrack(currentCombination, i, remaining - i);
            currentCombination.pop();
        }
    }
    backtrack([], 1, target);
    return result;
}

console.log(printAllSum(5));