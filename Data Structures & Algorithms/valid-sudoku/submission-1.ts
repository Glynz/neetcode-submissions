class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudokuOld(board: string[][]): boolean {
        let i, j = 0;

        const isDigit = (char: string): boolean => {
            return (char >= '1' && char <= '9')
        }
        // Evaluate every row
        for (j = 0; j < board[0].length; j++) {
            let rowSet = new Set();
            for (i = 0; i < board.length; i++) {
                if (isDigit(board[i][j])) {
                    if(rowSet.has(board[i][j])) return false;
                    else rowSet.add(board[i][j])
                }
            }
        }
        // Evaluate every col
        for (i = 0; i < board[0].length; i++) {
            let colSet = new Set();
            for (j = 0; j < board.length; j++) {
                if (isDigit(board[i][j])) {
                    if(colSet.has(board[i][j])) return false;
                    else colSet.add(board[i][j])
                }
            }
        }

        // Evaluate the 9 x 9 cube
        let cubeXOffset;
        let cubeYOffset;
        for (let cube = 0; cube < 9; cube++) {
            if (cube <= 2) cubeXOffset = 0;
            else if (cube <= 5) cubeXOffset = 3;
            else cubeXOffset = 6;

            cubeYOffset = (cube * 3) % 9;

            let cubeSet = new Set();
            for (i = cubeXOffset; i < cubeXOffset + 3; i++) {
                for (j = cubeYOffset; j < cubeYOffset + 3; j++) {
                    if (isDigit(board[i][j])) {
                    if(cubeSet.has(board[i][j])) return false;
                    else cubeSet.add(board[i][j])
                    }
                }
            }
        }

        return true
    }

    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const columns = Array.from({ length: 9 }, () => new Set<string>());
        const boxes = Array.from({ length: 9 }, () => new Set<string>());

        const isDigit = (char: string): boolean => {
            return (char >= '1' && char <= '9')
        }

        let boxIndex = 0;

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (isDigit(board[row][col])) {
                    const value = board[row][col];
                    boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                    if (
                        rows[row].has(value) ||
                        columns[col].has(value) ||
                        boxes[boxIndex].has(value)
                    ) return false;
                    

                    rows[row].add(value);
                    columns[col].add(value);
                    boxes[boxIndex].add(value);
                }
                    
            }
        }

        return true;
    }
}
