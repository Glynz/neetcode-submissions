class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        // naive approach to brute force by calculating every possible combination n^2
        // Alternative approach: Identify all the valleys within the elevation map
        // looking for local maximums that aren't encompassed by a larger value.
        // Have a left ptr and a right ptr where the right continues to move until it finds
        // a height higher than the left ptr and a value right that is lower than the current
        // right value. At that point we add the total water and move the left ptr to this new location
        // and continue the process
        let l = 0;
        let r = 1;
        let maxWater = 0;
        let curWater = 0;

        // Need to know the maximum. Work on the left of maximum then the right of maximum
        let maxHeightIndex = 0;
        for (let i = 1; i < height.length; i++) {
            if (height[maxHeightIndex] < height[i]) maxHeightIndex = i;
        }

        // Work from left to max
        while (r < height.length && l !== maxHeightIndex) {
            if (height[l] <= height[r]) {
                l = r;
                maxWater += curWater;
                curWater = 0;
            } else {
                curWater += height[l] - height[r];
            }
            r++;
        }
        curWater = 0;
        // Right to max
        r = height.length - 1;
        l = r - 1;
        while (l >= 0 && r !== maxHeightIndex) {
            if (height[r] <= height[l]) {
                r = l;
                maxWater += curWater;
                curWater = 0;
            } else {
                curWater += height[r] - height[l];
            }
            l--;
        }

        // Need to start with the lowest side
        // if (height[0] < height[height.length - 1]) { 
        //     while (r < height.length) {
        //         if (height[l] <= height[r]) {
        //             l = r;
        //             maxWater += curWater;
        //             curWater = 0;
        //         } else {
        //             curWater += height[l] - height[r];
        //         }
        //         r++;
        //     }
        // } else {
        //     r = height.length - 1;
        //     l = r - 1;
        //     while (l > 0) {
        //         if (height[r] <= height[l]) {
        //             r = l;
        //             maxWater += curWater;
        //             curWater = 0;
        //         } else {
        //             curWater += height[r] - height[l];
        //         }
        //         l--;
        //     }
        // }
        
        return maxWater;

    }
}
