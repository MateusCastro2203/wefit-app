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

export const removeRepo = (repositories: Repository[]): ReposAction => ({
  type: ReposActionTypes.REMOVE_REPOS,
  payload: repositories,
});

export const setRepos =
  (username: string) => async (dispatch: Dispatch<ReposAction>) => {
    dispatch(reposRequest());
    try {
      const response = await fetchReposApi(username);
      dispatch(fetchReposSuccess(response));
    } catch (error) {
      dispatch(fetchReposFailure(error));
      throw error;
    }
  };

export const SetRemoveRepos =
  (id: number, repos: Array<Repository>) =>
  async (dispatch: Dispatch<ReposAction>) => {
    const reposObject = repos;

    for (let i = 0; i < reposObject.length; i++) {
      if (reposObject[i].id === id) {
        reposObject.splice(i, 1);
        break; // Uma vez que o objeto é removido, não há necessidade de continuar o loop
      }
    }
    dispatch(fetchReposSuccess(reposObject));
  };
