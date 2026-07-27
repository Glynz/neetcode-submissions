class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        let ret = true;

        for (const char of s) {
            if(char === '[' || char === '(' || char === '{') {
                stack.push(char);
            } else {
                if(stack.length === 0) {
                    ret = false;
                    break;
                }
                let popedChar = stack.pop();
                if (char === ']' && popedChar !== '[') {
                    ret = false;
                    break;
                }
                else if (char === ')' && popedChar !== '(') {
                    ret = false;
                    break;
                }
                else if (char === '{' && popedChar !== '}') {
                    ret = false;
                    break;
                }
            }
        }

        return stack.length === 0 && ret;

    }
}
