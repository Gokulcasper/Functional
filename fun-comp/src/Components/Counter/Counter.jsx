import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [count, setCount] = useState({ name: "muthu", value: 0 }); // store var, modify func()
  //   let count = { name: "muthu", value: 0 };
  // setCount=()=>{

  // }
  const hanldeIncrement = () => {
    setCount({ ...count, value: count.value + 1 });
  };

  const handleDecrement = () => {
    if (count.value > 0) {
      setCount({ ...count, value: count.value - 1 });
    }
  };
  console.log("count :", count);

  const handleChangeName = () => {
    setCount({ ...count, name: "Gokul Raj" });
  };

  const handleResetName = () => {
    setCount({ ...count, name: "Muthu" });
  };

  const handleResetValue = () => {
    setCount({ ...count, value: 0 });
  };
  return (
    <div className="counter_container">
      <div className="button_container">
        <div className="button0_container">
          <button className="btn incBtn" onClick={hanldeIncrement}>
            Inc
          </button>
          <h3 style={{ fontSize: "30px" }}>{count.value}</h3>
          <button className="btn" onClick={handleDecrement}>
            Dec
          </button>
        </div>

        <div className="button1_container">
          <button className="btn-reset" onClick={handleResetValue}>
            {" "}
            Reset
          </button>
          <button className="btn1" onClick={handleChangeName}>
            Change Gokul Raj
          </button>
          <button className="btn1" onClick={handleResetName}>
            Change Muthu
          </button>

          <h3 className="h3">My name is {count.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Counter;

