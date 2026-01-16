import  { useRef } from "react";
import "./Chessboard.css";
import { useState } from "react";
import { useCallback, useMemo } from "react";
// import button from "./button";
import ButtonFile from "./ButtonFile";
import { useEffect } from "react";
// import implimentChess from "./implimentChess";
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
  
 
  const [newboxes, setBoxes] = useState([]);
  
  const targetRef = useRef(null);

  useEffect(() => {
    const newBoxes = [];
    let count = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const white = (i + j) % 2 === 0;
        const className = white ? "cell white" : "cell grey";
        newBoxes.push(
          <ButtonFile key={count} row={i}  col={j}
            className={className}
          />
        );
        count++;
      }
    }
    setBoxes(newBoxes);
  
  }, []);
   
const handleClick = useCallback((event) => {
    if(targetRef.current){
      targetRef.current.classList.remove("highlighted");
    }
    // console.log("event", event.target)
     const row = parseInt(event.target.dataset.row);
     const col = parseInt(event.target.dataset.col);
     event.target.classList.add("highlighted");
     targetRef.current =event.target;
  
}, []);


 

  return (
    <div className="chessboard-container">
      <h2>Interactive Chessboard</h2>
      <div className="chessboard" data-testid="chessboard" 
      onClick={handleClick}>
        {/* Your chessboard implementation */}
         {newboxes}
      </div>
    </div>
  );
};

export default Chessboard;
