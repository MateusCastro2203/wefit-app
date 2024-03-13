import { combineReducers } from "redux";
import { IncrementalActionTypes, IncrementalAction } from "../types";

const initialState = {
  counter: 0,
};

export const reducer = (state = initialState, action: IncrementalAction) => {
  switch (action.type) {
    case IncrementalActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: action.payload,
      };
    default:
      return state;
  }
};

export const reducerRootState = combineReducers({
  favorite: reducer,
});
