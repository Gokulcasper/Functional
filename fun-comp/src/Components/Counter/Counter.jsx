import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [count, setCount] = useState({ name: "muthu", value: 0 }); // store var, modify func()
  //   let count = { name: "muthu", value: 0 };
  // setCount=()=>{

  // }
  const hanldeIncrement = () => {
    setCount({ ...count, value: Math.random(count.value) * 10 });
  };

  const handleDecrement = () => {
    if (count.value > 0) {
      setCount({ ...count, value: count.value - 1 });
    }
  };
  console.log("count :", count);

  const handleChangeName = () => {
    setCount({ ...count, name: "G Raj" });
  };

  const handleResetName = () => {
    setCount({ ...count, name: "muthu" });
  };

  const handleResetValue = () => {
    setCount({ ...count, value: 0 });
  };
  return (
    <div className="counter_container">
      <h3>My name is {count.name}</h3>

      <div className="button_container">
        <button className="btn incBtn" onClick={hanldeIncrement}>
          Inc
        </button>
        <h3 style={{ fontSize: "30px" }}>{count.value}</h3>
        <button className="btn" onClick={handleDecrement}>
          Dec
        </button>
        <button onClick={handleChangeName}>Change Raj</button>
        <button onClick={handleResetName}>Change Muthu</button>
        <button onClick={handleResetValue}> Reset</button>
      </div>
    </div>
  );
};

export default Counter;
