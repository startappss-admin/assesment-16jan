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






function countBombs(directions, row, col, grid) {
  let count = 0;

  // Check all 8 directions
  for (let [dx, dy] of directions) {
    const newRowIndex = row + dx;
    const newColIndex = col + dy;

    // Boundary check
    if (
      newRowIndex >= 0 &&
      newRowIndex < 3 &&
      newColIndex >= 0 &&
      newColIndex < 3 &&
      grid[newRowIndex][newColIndex] === 'X'
    ) {
      count++;
    }
  }

  return count;
}

function countAdjacentBombs(grid) {
  // Your code here
  const result = [];

  // 8 possible directions 
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  for (let row = 0; row < 3; row++) {
    const newRow = []

    for (let col = 0; col < 3; col++) {

      // If current cell is a bomb, keep it as 'X'
      if (grid[row][col] === 'X') {
        newRow.push('X');
      } else {

      // count adjacent bombs
        newRow.push(countBombs(directions, row, col, grid));
      }
    }

    result.push(newRow);
  }

  return result;
}

module.exports = countAdjacentBombs;






