// store.js
import { createStore } from "redux";
import mapReducer from "./Reducers/mapReducer";

const store = createStore(mapReducer);

export default store;
