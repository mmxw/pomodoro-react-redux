import { createStore } from "redux";
import timerReducer from "./reducers/index";
const store = createStore(timerReducer);

export default store;
