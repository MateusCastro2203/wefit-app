import { Dispatch } from "redux";
import { ReposActionTypes, ReposAction, Repository } from "../types";
import { fetchReposApi } from "../../services/api";

export const reposRequest = (): ReposAction => ({
  type: ReposActionTypes.FETCH_REPOS_REQUEST,
});

export const fetchReposSuccess = (repositories: Repository[]): ReposAction => ({
  type: ReposActionTypes.FETCH_REPOS_SUCCESS,
  payload: repositories,
});

export const fetchReposFailure = (error: Error): ReposAction => ({
  type: ReposActionTypes.FETCH_REPOS_FAILURE,
  payload: error,
});

export const getRepos =
  (username: string) => async (dispatch: Dispatch<ReposAction>) => {
    dispatch(reposRequest());
    try {
      const response = await fetchReposApi(username);
      console.log("AA", response);
      dispatch(fetchReposSuccess(response));
    } catch (error) {
      dispatch(fetchReposFailure(error));
    }
  };
