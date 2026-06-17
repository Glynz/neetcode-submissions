class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum2(nums: number[], target: number): number[] {
        let i = 0;
        let j = nums.length - 1;
        let val;

        const sortedWithOriginalIndex = nums
            .map((value, index) => ({ value, originalIndex: index }))
            .sort((a, b) => a.value - b.value);

        while (i < j) {
            val = sortedWithOriginalIndex[i].value + sortedWithOriginalIndex[j].value;
            if (val > target) j--;
            else if (val < target) i++;
            else
                return [
                    sortedWithOriginalIndex[i].originalIndex,
                    sortedWithOriginalIndex[j].originalIndex,
                ];
        }

        return [-1, -1];
    }

    twoSum(nums: number[], target: number): number[] {
        let difference; 
        let hash = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            difference = target - nums[i];

            if(hash.has(difference)) return [hash.get(difference), i];

            hash.set(nums[i], i);
        }
            
        return [-1, -1];
    }
}
