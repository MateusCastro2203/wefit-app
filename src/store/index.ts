import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reposReducer } from "./reducers/reposReducer";

export const store = createStore(reposReducer, applyMiddleware(thunk));
