import { createStore } from "redux";
import Reducer from "../Reducer/counter_reducer"

export const store = createStore(Reducer);      //simple creeating reducing here