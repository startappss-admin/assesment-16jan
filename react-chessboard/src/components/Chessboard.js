import React from "react";
import "./Chessboard.css";

/**
 * PROBLEM: Interactive Chessboard with Performance Optimization
 *
 * Create an 8x8 chessboard with the following requirements:
 *
 * 1. LAYOUT:
 *    - Render an 8x8 grid (64 cells total)
 *    - Alternate colors: white (#f0d9b5) and grey (#b58863)
 *    - First cell (0,0) should be white
 *    - CSS Classes Required:
 *      * Each cell must have base class: "cell"
 *      * White cells must have class: "white" 
 *      * Grey cells must have class: "grey"
 *
 * 2. INTERACTION:
 *    - Clicking a cell highlights it in red (#ff6b6b)
 *    - Clicking another cell moves the highlight to the new cell
 *    - Only one cell can be highlighted at a time
 *    - CSS Classes Required:
 *      * Highlighted cells must have class: "highlighted"
 *      * Highlighted class should be added to base "cell white/grey" classes
 *
 * 3. PERFORMANCE OPTIMIZATION (REQUIRED):
 *    - Use React.memo() to prevent unnecessary re-renders of cells
 *    - Use useMemo() to memoize the board generation
 *    - Use useCallback() to memoize the click handler
 *    - Implement event delegation (single click handler on parent)
 *
 * 4. COMPONENT STRUCTURE:
 *    - Main Chessboard component
 *    - Cell component (memoized)
 *    - Props: Cell component should receive: row, col, isHighlighted, onClick
 *    - IMPORTANT: Each cell MUST be a <button> element or have role="button"
 *      for proper accessibility and testing compatibility
 *    - CSS Class Structure:
 *      * Base: className="cell white" or className="cell grey"
 *      * Highlighted: className="cell white highlighted" or className="cell grey highlighted"
 *
 * EVENT DELEGATION REQUIREMENTS:
 *    - Parent container must handle ALL click events
 *    - Individual cells should NOT have onClick handlers
 *    - Use event bubbling to capture clicks from child elements
 *    - Parse clicked element using data-row and data-col attributes
 *    - Only ONE click handler should exist (on the parent)
 *
 * Example:
 * - Initial state: All cells are white/grey
 * - Click cell (2, 3): That cell turns red
 * - Click cell (5, 6): Cell (2, 3) returns to original color, cell (5, 6) turns red
 *
 * @returns {JSX.Element} Chessboard component
 */



function Chessboard() {

  const [selectedCell, setSelectedCell] = React.useState(null);

  let cells = [];
  const handleClick = (event) => {

    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (row !== undefined && col !== undefined) {
      setSelectedCell({
        row: Number(row),
        col: Number(col)
      });
    }
  };


  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

      const isWhite = (row + col) % 2 === 0;

      const isHighlighted =
        selectedCell &&
        selectedCell.row === row &&
        selectedCell.col === col;

      cells.push(
        <button
          key={row + "-" + col}
          data-row={row}
          data-col={col}
          className={
            "cell " +
            (isWhite ? "white" : "grey") +
            (isHighlighted ? " highlighted" : "")
          }
        >
        </button>
      );
    }
  }
  return (
    <div className="chessboard-container">
      <h2>Interactive Chessboard</h2>

      <div
        className="chessboard"
        data-testid="chessboard"
        onClick={handleClick}
      >
        {cells}
      </div>

    </div>
  );
}

export default Chessboard;


