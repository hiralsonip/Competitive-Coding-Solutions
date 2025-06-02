function validParentheses(s) {
    let stack = [];
    let pair = { "}": "{", ")": "(", "]": "[" }

    for (const char of s) {
        if ((["(", "{", "["]).includes(char)) {
            stack.push(char)
        } else if (([")", "}", "]"]).includes(char)) {
            if (stack.length === 0 || stack.pop() !== pair[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

const s = "(([)]{}";
console.log(validParentheses(s));