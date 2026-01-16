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

function countAdjacentBombs(grid) {
  
  // Your code here

  // create empty result grid
  let result = [];

  // loop through rows
  for (let i = 0; i < 3; i++) {
    result[i] = [];

    // loop through columns
    for (let j = 0; j < 3; j++) {

      // if current cell is bomb, copy it
      if (grid[i][j] === 'X') {
        result[i][j] = 'X';
        continue;
      }
      /*count for bombs*/
      let count = 0;

      // check all adjacent cells
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {

          // check grid boundary
          if (x >= 0 && x < 3 && y >= 0 && y < 3) {
            if (grid[x][y] === 'X') {
              count++;
            }
          }

        }
      }

      result[i][j] = count;
    }
  }

  return result;
}





module.exports = countAdjacentBombs;
