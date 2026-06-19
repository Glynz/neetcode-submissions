class Solution {
    calculateHashIndexv1(str: string): Map<string, number> {
        const map = new Map<string, number>
        for (const s of str) {
            map.set(s, (map.get(s) ?? 0) + 1);
        }
        return map;
    }

    // Optimal solution utilizes charCodeAt to more easily play with ascii values
    calculateHashIndex(str: string): string {
        const sortedStr = str.split("").sort().join("");
        // const map = new Map<string, number>
        // for (const s of sortedStr) {
        //     map.set(s, (map.get(s) ?? 0) + 1);
        // }
        // return JSON.stringify(map);
        return sortedStr;
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hash = new Map<string, string[]>;
        let result;
        // Loop over all strs
        // Calculate their hash index via counting the frequency of the values
        // Determine if that hash index matches any other items
        // return the keys
        for (const s of strs) {
            result = this.calculateHashIndex(s);
            const existing = hash.get(result);
            if(existing) { 
                existing.push(s); // has the actual reference so no need to re-add
            } else {
                hash.set(result, [s]);
            }
        }

        // const output = [];
        // for (const value of hash.values()) {
        //     output.push(value);
        // }

        // return output;
        // Slicker approach
        return [...hash.values()];
    }
}
