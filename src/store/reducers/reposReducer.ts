import { combineReducers } from "redux";
import { ReposActionTypes, ReposAction, ReposState } from "../types";

const initialState: ReposState = {
  repositories: [],
  loading: false,
  error: null,
};

export const reposReducer = (
  state = initialState,
  action: ReposAction
): ReposState => {
  switch (action.type) {
    case ReposActionTypes.FETCH_REPOS_REQUEST:
      return { ...state, loading: true, error: null };

    case ReposActionTypes.FETCH_REPOS_SUCCESS:
      return { ...state, loading: false, repositories: action.payload };

    case ReposActionTypes.FETCH_REPOS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export type RootState = {
  repos: ReposState;
};
