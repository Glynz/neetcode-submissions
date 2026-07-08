class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // Utilize Map or Set to keep track of each letter for a sequence
        // If the Map/Set has the value, restart the count and start anew
        // Keep tally of the largest Map
        let maxSubstring = 0;
        let i = 0;
        let j = 0;

        for (let i = 0; i < s.length; i++) {
            const map = new Map<string, number>();
            j = i;
            while (j < s.length && !map.has(s[j]) ) {
                map.set(s[j], 1);
                maxSubstring = Math.max(maxSubstring, map.size);
                j++;
            }
        }

        return maxSubstring;
    }
}
