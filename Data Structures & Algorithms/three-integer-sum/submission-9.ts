class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // Naive approach: loop over all possible combination n^3
        // Sort the nums array
        // Loop over the array such that an itme k is selected that
        // is between i, the start, and j, the end
        // Since this is sorted: increment i if sum < 0; decrement j if sum > 0
        nums.sort((a, b) => a - b );
        const uniqueMap = new Map<string, number[]>();

        for(let k = 1; k < nums.length - 1; k++) {
            let i = 0;
            let j = nums.length - 1;
            while(i < k && k < j) {
                let val = nums[i] + nums[k] + nums[j];
                if(nums[i] + nums[k] + nums[j] === 0)  {
                    if(!uniqueMap.has(`${nums[i]},${nums[k]},${nums[j]}`)) {
                        uniqueMap.set(`${nums[i]},${nums[k]},${nums[j]}`, [nums[i], nums[k], nums[j]]);
                    }
                    i++;
                    j--;
                }
                else if(val > 0) j--;
                else i++;
            }
        }

        return [...uniqueMap.values()];
    }
}
