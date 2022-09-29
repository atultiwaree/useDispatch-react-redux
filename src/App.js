import React from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import Buttongroup from "./Buttongroup";
import { useSelector } from "react-redux";
import "./App.css";
const App = () => {

  const select = useSelector((state) => state)
  const username = "Janny";


  return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(select.totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

       <Buttongroup />

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
  );
  
}

export default App