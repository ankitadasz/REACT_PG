import React from "react";
import Header from "./Components/Header";
import Elements from "./Components/Elements";
import Btn from "./Components/Button";
import Counter from "./Components/Countercomponent";
import "./style.css";

const App = () => {
  return (
    <div className="Todo-Container">
      <Counter />
      <Header text="TODOIE" />
      <Elements completed={true} text="eat" />
      <Elements text="sleep" />
      <Elements text="code" />
      <Elements text="repeat" />
      <Btn />
    </div>
  );
};

export default App;
