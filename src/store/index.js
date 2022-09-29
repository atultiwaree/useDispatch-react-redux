import { createStore } from "redux";
import reducer from "../reducer";
const initialValue = {
     totalAmount : 5000000
}
const store = createStore(reducer, initialValue)
export default store