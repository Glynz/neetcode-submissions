class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map<number, number>();
        for (const num of nums) {
            if (map.has(num)) return true;
            else (map.set(num, 1))
        }

        return false;
    }

    hasDuplicateSet(nums: number[]): boolean {
        const set = new Set<number>;
        for (const num of nums) {
            if (set.has(num)) return true;
            else set.add(num);
        }

        return false
    }
}
