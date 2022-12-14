import React from "react";

const Counter = ({ number, onIncrease, OnDecrease }) => {
  return (
    <>
      <div>
        <h1>{number}</h1>
      </div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={OnDecrease}>-1</button>
    </>
  );
};

export default Counter;
