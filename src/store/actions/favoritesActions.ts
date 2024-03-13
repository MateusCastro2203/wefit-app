import { Dispatch } from "redux";
import { IncrementalActionTypes, IncrementalAction } from "../types";
export const incrementCounter = (count: number): IncrementalAction => ({
  type: IncrementalActionTypes.INCREMENT_COUNTER,
  payload: count,
});

export const setCounter = (count: number) => (dispatch: Dispatch) => {
  const incrementalCounter = count + 1;
  dispatch(incrementCounter(incrementalCounter));
};
