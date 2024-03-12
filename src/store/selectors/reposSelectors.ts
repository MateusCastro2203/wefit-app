import { RootState } from "../reducers/reposReducer";

export const selectRepos = (state: RootState) => state.repos.repositories;

export const selectLoading = (state: RootState) => state.repos.loading;

export const selectError = (state: RootState) => state.repos.error;
