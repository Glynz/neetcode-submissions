class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Utilize 2 ptrs (start and end)
        // If the two numbers added are greater than the target value. decrement the end pointer
        // If the two numbers added are less than the target value then increment start
        let start = 0;
        let end = numbers.length - 1;
        let calculation = 0;

        while(start < end) {
            calculation = numbers[start] + numbers[end];
            if(calculation === target) return [start + 1, end + 1];
            else if(calculation > target) end--;
            else start++;
        }

        return [];
    }
}
