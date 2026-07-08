class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringOld(s: string): number {
        // Utilize Map or Set to keep track of each letter for a sequence
        // If the Map/Set has the value, restart the count and start anew
        // Keep tally of the largest Map
        let maxSubstring = 0;
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

    lengthOfLongestSubstring(s: string): number {
        // Naive approach: iterate over every starting point and calculate
        // longest set.
        // Alternative approach: create a sliding window where the size of
        // the window increases if the new value doesn't exist already in
        // the window. If it does exist in the window, we need to delete the
        // value from the window and shift over right until the offending 
        // character has been removed
        const seen = new Set<string>();
        let longestSet = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            while(seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }

            seen.add(s[r]);
            longestSet = Math.max(longestSet, seen.size);
        }


        return longestSet;
    
    }
}
