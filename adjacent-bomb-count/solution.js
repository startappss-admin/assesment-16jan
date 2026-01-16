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

  let result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],  [0, 0], [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {

      if (grid[row][col] === 'X') {
        result[row][col] = 'X';
      } 
      else {
        let count = 0;
        for (let i = 0; i < directions.length; i++) {
          let newRow = row + directions[i][0];
          let newCol = col + directions[i][1];
          if (
            newRow >= 0 && newRow < 3 &&
            newCol >= 0 && newCol < 3
          ) {

            if (grid[newRow][newCol] === 'X') {
              count++;
            }

          }
        }

        result[row][col] = count;
      }
    }
  }

  return result;
}

module.exports = countAdjacentBombs;


