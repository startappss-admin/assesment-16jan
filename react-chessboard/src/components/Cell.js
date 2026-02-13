
import React from "react";

const Cell = ({ row, col, isHighlighted }) => {
    const isWhite = (row + col) % 2 === 0;

    return (
        <button
            type="button"
            data-row={row}
            data-col={col}
            className={`cell ${isWhite ? "white" : "grey"} ${isHighlighted ? "highlighted" : ""
                }`}
        >
            {row},{col}
        </button>
    );
}

export default React.memo(Cell);










