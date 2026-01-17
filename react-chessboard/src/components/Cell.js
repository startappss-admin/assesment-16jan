import React from 'react'

const Cell = React.memo(
  ({row, col, isHighlighted}) => {
    let classes = "cell";
    classes += (row+col)%2 === 0 ? " white" : " grey";
    // console.log(isHighlighted);
    if(isHighlighted){
        classes += " highlighted";
    }
    
  return (
    <button 
        className={classes}
        data-row = {row}
        data-col ={col}
        >
    </button>
  )
}
);

export default Cell