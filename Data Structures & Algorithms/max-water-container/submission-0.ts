class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        // left ptr & right ptr
        // Keep track of the maximum amount of water within the container
        // if the left ptr is smaller than the right increment left ptr
        // if the right optr is smaller than the left increent right ptr
        // If the current max exceeds the existing max replace the value 
        // return the max value
        let l = 0;
        let r = heights.length - 1;
        let maxWater = 0;
        let curWater = 0;

        while (l < r) {
            if (heights[l] < heights[r]) {
                curWater = heights[l] * (r - l);
                l++;
            }  
            else {
                curWater = heights[r] * (r - l);
                r--; 
            } 
            if (curWater > maxWater) maxWater = curWater;
        }

        return maxWater;
    }
}
