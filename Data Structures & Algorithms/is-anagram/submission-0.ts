class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const count = new Map<string, number>;

        for (const letter of s) count.set(letter, (count.get(letter) ?? 0) + 1);

        for (const letter of t) {
            const currentCount = count.get(letter);
            
            if (currentCount === undefined) return false;
            if (currentCount === 1) count.delete(letter);
            else (count.set(letter, currentCount - 1));
        }

        return count.size === 0;
    }
}
