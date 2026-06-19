class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequentNaive(nums: number[], k: number): number[] {
        // make sure there is an item in the array otherwise return empty
        // Iterate over the array of nums and place them into a Map (num, frequency)
        // Iterate over the map keeping track of the k largest items 
        if(nums.length === 0) return [];

        const frequency = new Map<number, number>();
        const output = new Array(k).fill(-1);

        for (const num of nums) {
            frequency.set(num, (frequency.get(num) ?? 0) + 1);
        }

        const uniqueNums = Array.from(frequency.keys());
        uniqueNums.sort((a, b) => frequency.get(b)! - frequency.get(a)!);

        return uniqueNums.slice(0, k);
    }

    topKFrequent(nums: number[], k: number): number[] {
        if(nums.length === 0) return [];

        const frequency = new Map<number, number>();

        for (const num of nums) {
            frequency.set(num, (frequency.get(num) ?? 0) + 1);
        }

        // Mechanism to create number of empty buckets
        //const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        const buckets: number[][] = [];
        for (let i = 0; i <= nums.length; i++) buckets.push([]);

        for (const [num, count] of frequency) {
            buckets[count].push(num); 
        }

        const result: number[] = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
