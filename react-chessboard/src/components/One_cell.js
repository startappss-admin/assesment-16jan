import React from 'react'
function One_cell({index, isSelected}) {
  const row = Math.floor(index / 8);
  const col = index % 8;

  const isWhite = (row + col) % 2 === 0;

  return (
    <button
        id={index}
      className={`cell ${isSelected ? "highlighted" : isWhite ? "white" : "black"}`}
    />
  );
}

export default React.memo(One_cell);