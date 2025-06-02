/*

Min Stack
Medium
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Example:
Input:
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin(); // returns -3
    minStack.pop();
    minStack.top();    // returns 0
    minStack.getMin(); // returns -2

*/

class MinStack {

    // create a stack
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // push 
    push(element) {
        this.stack.push(element);

        if (this.minStack.length === 0 || element < this.minStack[this.minStack.length - 1]) {
            this.minStack.push(element)
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1])
        }
    }

    // pop
    pop() {
        if (this.stack.length === 0) {
            return -1
        }
        this.stack.pop();
        this.minStack.pop();
    }

    // top
    top() {
        console.log("Top - ", this.stack[this.stack.length - 1]);
        return this.stack[this.stack.length - 1];
    }

    // get minimum
    getMin() {
        if (this.minStack.length !== 0) {
            console.log("Min - ", this.minStack[this.minStack.length - 1]);
            return this.minStack[this.minStack.length - 1];
        }

    }

}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // returns -3
minStack.pop();
minStack.top();    // returns 0
minStack.getMin(); // returns -2

console.log(minStack.stack);