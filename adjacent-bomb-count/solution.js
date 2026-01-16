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
  let rows = grid.length;
  let cols = grid[0].length;

  const result = grid.map((row) => [...row]); //used this from test.js file for help

  //All 8 directions
  const dx = [0, 1, 0, -1, 1, -1, -1, 1];
  const dy = [-1, 0, 1, 0, 1, 1, -1, -1];

  function checkAndCountBombs(i, j, dx, dy){
      let count = 0;
      for(let z = 0; z<dx.length; z++){
        let newX = i+dx[z];
        let newY = j+dy[z];
        if((newX >=0 && newX < rows)&& (newY >=0 && newY < cols) &&(grid[newX][newY] === "X")){
          count++;
        }
      }
      // console.log(i +", " +j+ " = "+count); //used for debugging
      return count;
  }

  for(let i = 0; i<rows; i++){
    for(let j = 0; j<cols; j++){
      if(grid[i][j] === "."){
        let totalAdjacentBombs = checkAndCountBombs(i, j, dx, dy);
        result[i][j] = totalAdjacentBombs;
      }
      else{
        result[i][j] = grid[i][j];
      }
    }
  }
  return result;
}

module.exports = countAdjacentBombs;
