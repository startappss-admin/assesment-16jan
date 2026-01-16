import React from "react";

const Cell = React.memo(function Cell({ row, col, isHighlighted }) {
    /*condition for color of cell even cell will get white & odd will get grey*/
  const isWhite = (row + col) % 2 === 0;

  const className = `
    cell
    ${isWhite ? "white" : "grey"}
    ${isHighlighted ? "highlighted" : ""}
  `;

  return (
    <button
      className={className}
      data-row={row}
      data-col={col}
    ></button>
  );
});

export default Cell;
