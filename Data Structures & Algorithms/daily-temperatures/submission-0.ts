class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        // Brute force approach: iterate over every value to find the next item that is larger
        // o(n^2)
        // Stack approach: Iterate over the temperature, if the current
        // value is greater than any of the existing items in the queue
        // grab the index from the stack, calculate the distant, and pop off the value
        // If smaller, then add the value to the stack
        const stack: number[] = [];
        const ret: number[] = Array(temperatures.length).fill(0);

        for (const [i, temp] of temperatures.entries()) {
            if (stack.length === 0) stack.push(i);
            else if (temp < temperatures[stack[stack.length - 1]]) stack.push(i);
            else {
                while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temp) {
                    let idx = stack.pop()
                    ret[idx] = i - idx;
                }
                stack.push(i);
            }
        }

        return ret;
    }
}
