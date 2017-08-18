import { createStore } from "redux";
import counter from "../Reducers";

let Store = createStore( counter );

export default Store;