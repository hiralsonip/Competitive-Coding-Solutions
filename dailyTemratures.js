/*
Daily Temperatures
Medium
Given an array of integers temperatures representing daily temperatures, return an array answer where answer[i] is the number of days you have to wait until a warmer temperature. If there is no future day with a warmer temperature, set answer[i] = 0.

Example:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

*/

function dailyTemperatures(t) {
    // WRITE YOUR BRILLIANT CODE HERE

    const stack = [];
    const result = Array(t.length).fill(0);

    for (let i = 0; i < t.length; i++) {
        while (stack.length > 0 && t[stack[stack.length - 1]] < t[i]) {
            const prevDayIndex = stack.pop();
            result[prevDayIndex] = i - prevDayIndex;
        }
        // push the current index to stack
        stack.push(i)
    }
    return result;
}