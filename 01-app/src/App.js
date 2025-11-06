import React from "react";
import Header from './Components/Header';
import Elements from './Components/Elements';
import Btn from "./Components/Button";
import './style.css';
const App=()=>{
  return (
     <div class="Todo-Container">
      <Header/>
      <Elements/>
      <Btn/>
      </div>
  );
};
export default App;