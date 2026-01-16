/**
 * PROBLEM: Adjacent Bomb Count (3x3 Grid)
 *
 * You are given a 3x3 grid representing a board.
 * - Each cell contains either:
 *   - 'X' → a bomb
 *   - '.' → an empty cell
 *
 * Your task is to create a new grid where:
 * - Each empty cell ('.') is replaced by a number representing how many
 *   bombs ('X') are present in its adjacent cells
 * - Adjacent cells include all 8 directions:
 *   - up, down, left, right, and the 4 diagonals
 * - Bomb cells ('X') remain unchanged
 *
 * CONSTRAINT: Grid size is always 3x3
 *
 * Example:
 * Input:  [['X', '.', '.'],
 *          ['.', '.', 'X'],
 *          ['.', '.', '.']]
 *
 * Output: [['X', 2, 1],
 *          [1, 2, 'X'],
 *          [0, 1, 1]]
 *
 * Explanation:
 * - Top-middle cell (0,1) has 2 adjacent bombs:
 *   - Top-left (0,0) = 'X'
 *   - Middle-right (1,2) = 'X'
 * - Center cell (1,1) has 2 adjacent bombs:
 *   - Top-left (0,0) = 'X'
 *   - Middle-right (1,2) = 'X'
 * - Bottom-left cell (2,0) has 0 adjacent bombs
 *
 * @param {string[][]} grid - The input 3x3 grid with 'X' (bombs) and '.' (empty)
 * @return {(string|number)[][]} - 3x3 grid with counts
 */

function countAdjacentBombs(grid, i=0,  j=0 ) {
  
       if (i === 3){
         return grid;  // outof bound condtion
       }
    
    if (grid[i][j]!== 'X') {
        let count = 0;
        
        if (i-1 >= 0 && j-1 >= 0 && grid[i-1][j-1] === 'X') count++;
         if (i-1 >= 0 && j+1 < 3 && grid[i-1][j+1] === 'X') count++;
        if (i-1 >= 0 && grid[i-1][j] === 'X') count++;
        if (j-1 >= 0 && grid[i][j-1] ==='X') count++;
         if (j+1 < 3 && grid[i][j+1] === 'X') count++;
        if (i+1 < 3 && j-1 >= 0 && grid[i+1][j-1] === 'X') count++;
    if (i+1 < 3 && j+1 < 3 && grid[i+1][j+1] === 'X') count++;  
       if (i+1 < 3 && grid[i+1][j] === 'X') count++;

        grid[i][j] = count; 
    }

  
    if (j < 2) {
        countAdjacentBombs(grid, i, j + 1); //move next row 
    }
     else {
      
        countAdjacentBombs(grid, i + 1, 0); //move next index
    }

    return grid; 
}

     


module.exports = countAdjacentBombs;
