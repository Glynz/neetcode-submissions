class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let start = 0;
        let end = cleanedString.length - 1;

        while(start < end) {
            if(cleanedString[start] !== cleanedString[end]) return false;
            start++;
            end--;
        }

        return true
    }
}
