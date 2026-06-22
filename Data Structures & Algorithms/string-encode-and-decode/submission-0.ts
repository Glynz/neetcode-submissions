class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString = "";
        
        for (const str of strs) {
            encodedString += `${str.length}|${str}`;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decodedStringArr = [];
        let currentIndex = 0;
        let numString;
        let wordStart = 0;
        let wordEnd = 0;

        const isDigit = (ch: string): boolean => ch >= "0" && ch <= "9"
        const getNum = (str: string): string => {
            let i = 0;
            while (isDigit(str[i])) {
                i++;
            }
            
            return str.substring(0, i);
        }
        
        while (currentIndex < str.length) {
            numString = getNum(str.substring(currentIndex));
            wordStart = currentIndex + numString.length + 1;
            wordEnd = wordStart + Number(numString);
            decodedStringArr.push(str.substring(wordStart, wordEnd))
            currentIndex = wordEnd;
        }



        return decodedStringArr;
    }
}
