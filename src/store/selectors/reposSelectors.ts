import { RootState } from "../reducers/reposReducer";

export const selectRepos = (state: RootState) => state.repos;

export const selectLoading = (state: RootState) => state.repos;

export const selectError = (state: RootState) => state.repos;
