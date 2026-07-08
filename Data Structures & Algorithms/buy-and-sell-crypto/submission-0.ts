class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // Naive approach: loop over every possible combination to find the best result
        // Keep track of current best trade opportunity keeping track of l and r ptr
        // Increment l ptr if l > r and increment r if r > l
        let l = 0;
        let r = 1;
        let maxProfit = 0;

        while (r != prices.length) {
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
            if (prices[l] <= prices[r]) {
                r++;
            } else {
                l++;
            }
        }

        return maxProfit;
    }
}
