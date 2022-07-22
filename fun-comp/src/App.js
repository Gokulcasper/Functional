import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="app_container">
      <Header />
      <Counter />
    </div>
  );
}

export default App;
