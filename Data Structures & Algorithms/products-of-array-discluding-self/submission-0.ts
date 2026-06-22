class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelfDivision(nums: number[]): number[] {
        // If contains multiple 0 everything is 0
        const numOfZeroes = nums.reduce((acc, currVal) => currVal === 0 ? acc + 1: acc, 0);
        if (numOfZeroes > 1) return Array(nums.length).fill(0);
        // If only one entry is 0 then create a total without the 0
        const total = nums.reduce((acc, currVal) => currVal !== 0 ? acc * currVal: acc, 1);
        return nums.map((x) => { 
            if(numOfZeroes) return x !== 0 ? 0: total;
            else return total / x });
    }

    productExceptSelfOld(nums: number[]): number[] {
        const prefix = Array(nums.length + 1).fill(1);
        const suffix = Array(nums.length + 1).fill(1);
        if (nums.length <= 0) return [];

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i]
        }

        let i = 0;
        return prefix.map(x => x * suffix[i++])
    }

    productExceptSelf(nums: number[]): number[] {
        const prefix = Array(nums.length).fill(1);
        const suffix = Array(nums.length).fill(1);
        if (nums.length <= 0) return [];

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 1; i >= 1; i--) {
            suffix[i - 1] = suffix[i] * nums[i];
        }

        let i = 0;
        return prefix.map(x => x * suffix[i++])
    }
}
