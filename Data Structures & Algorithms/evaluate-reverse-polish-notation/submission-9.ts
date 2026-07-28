class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        // Push integers into stack until operand
        // Pop the 2 values and perform the operand
        // Push the result into the stack
        // Repeat and return the top value when complete
        const stack: number[] = [];

        for(const s of tokens) {
            if (!Number.isNaN(Number(s))) {
                stack.push(Number(s));
            } else {
                let num2 = stack.pop();
                let num1 = stack.pop();
                if(s === '+') {
                    stack.push(num1 + num2);
                } else if (s === '-') {
                    stack.push(num1 - num2);
                } else if (s === '*') {
                    stack.push(num1 * num2);
                } else if (s === '/') {
                    stack.push(Math.trunc(num1 / num2));
                }
            }
        }

        return stack.pop();
    }
}
