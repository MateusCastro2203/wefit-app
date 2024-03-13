import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { RootState } from "./reducers/reposReducer";
import { reducerRootState } from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
  repos: RootState,
  counter: reducerRootState,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
