import React from "react";

const ButtonFile = ({count,i, j, className }) => {
  return (
    <button  data-count={count} data-row={i} data-col={j} className={className}>
       
    </button>
  );
};

export default ButtonFile;