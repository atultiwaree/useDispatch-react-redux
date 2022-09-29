import React from "react"
import action from "../action";
import { useDispatch } from "react-redux";
const Buttongroup = () => {
    const patcher = useDispatch();
    const funReduceAmt = (e) => {
        const amt = e.target.dataset.amount;
        const fuck = action(amt)
        patcher(fuck)
    }
    return (
        <section className="App__buttons">
          <button onClick={funReduceAmt} data-amount="10000">WITHDRAW $10,000</button>
          <button onClick={funReduceAmt} data-amount="5000">WITHDRAW $5,000</button>
        </section>
     )
}
export default Buttongroup