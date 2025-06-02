/*

Evaluate Reverse Polish Notation
Medium
Given an array of strings tokens representing an arithmetic expression in Reverse Polish Notation (RPN), evaluate the expression and return the result.

Example:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Input: tokens = ["10","6","9","3","/","+","-11","*","/","17","+","5","+"]
Output: 22

*/

function evalRpn(tokens) {
    // WRITE YOUR BRILLIANT CODE HERE

    let operator = ["+", "-", "/", "*"];
    let stack = [];

    for (let token of tokens) {
        if (operator.includes(token)) {

            let operand2 = stack.pop();
            let operand1 = stack.pop();

            let result = 0;

            if (token === "+") result = operand1 + operand2
            else if (token === "-") result = operand1 - operand2
            else if (token === "*") result = operand1 * operand2
            else if (token === "/") result = Math.trunc(operand1 / operand2)

            stack.push(result)

        } else {
            stack.push(parseInt(token));
        }
    }
    return stack.pop();
}

const tokens = ["10", "6", "9", "3", "/", "+", "-11", "*", "/", "17", "+", "5", "+"]    // ["4", "13", "5", "/", "+"]  ["2", "1", "+", "3", "*"]
console.log(evalRpn(tokens));

