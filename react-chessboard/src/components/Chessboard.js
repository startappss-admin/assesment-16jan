import React from "react";
import { useCallback, useMemo, useState } from 'react'
import "./Chessboard.css";
import  Cell  from './Cell.js'

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

const Chessboard = () => {
  // Your implementation here

  const [highlighted, setHighlighted] = useState(null);

  const cells = useMemo(() => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        board.push({ row, col });
      }
    }
    return board;
  }, []);

  // event deligation
  const handleBoardClick = useCallback((event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const row = parseInt(button.dataset.row, 10);
    const col = parseInt(button.dataset.col, 10);

    setHighlighted({ row, col });
  }, []);


  return (
    <div className="chessboard-container">
      <h2>Interactive Chessboard</h2>
      <div className="chessboard" data-testid="chessboard" onClick={handleBoardClick}>

        {
          /* Your chessboard implementation */
          cells.map(({ row, col }) => (
            <Cell
              key={`${row}-${col}`}
              row={row}
              col={col}
              isHighlighted={
                highlighted?.row === row && highlighted?.col === col
              }
            />
          ))}

      </div>
    </div>
  );
};

export default Chessboard;
