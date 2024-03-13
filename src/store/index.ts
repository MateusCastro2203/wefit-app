import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { RootState } from "./reducers/reposReducer";

const rootReducer = combineReducers({
  repos: RootState,
  // Adicione outros reducers, se necessário
});

export const store = createStore(RootState, applyMiddleware(thunk));
