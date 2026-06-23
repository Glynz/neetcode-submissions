class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        // Naive approach to sort then increment O(nlog(n))
        // Convert array to a set to remove duplicates and easier extraction
        // Create a variable that maintains the longest chain seen
        // Create a variable that maintains the current chain
        // When current chain is longer than the longest set longest to current
        const numsSet = new Set(nums);

        // Has no num before but has one after 
        const startOfChain = [];

        for (const val of numsSet.values()) {
            if (numsSet.has(val + 1) && !numsSet.has(val - 1)) startOfChain.push(val);
        }

        let maxChainLength = 1;
        for (const start of startOfChain ) {
            let i = 1;
            let currentChainLength = 1;
            while(numsSet.has(start + i)) {
                currentChainLength += 1;
                i++;
            }
            if (maxChainLength < currentChainLength) maxChainLength = currentChainLength;
        }

        return maxChainLength;
    }
}
