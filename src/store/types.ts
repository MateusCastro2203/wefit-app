export interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  stargazers_count: number;
  language: string;
  html_url: string;
}

export interface ReposState {
  repositories: Repository[];
  loading: boolean;
  error: Error | null;
}

export enum ReposActionTypes {
  FETCH_REPOS_REQUEST = "FETCH_REPOS_REQUEST",
  FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS",
  FETCH_REPOS_FAILURE = "FETCH_REPOS_FAILURE",
}

interface FetchReposRequestAction {
  type: ReposActionTypes.FETCH_REPOS_REQUEST;
}

interface FetchReposSuccessAction {
  type: ReposActionTypes.FETCH_REPOS_SUCCESS;
  payload: Repository[];
}

interface FetchReposFailureAction {
  type: ReposActionTypes.FETCH_REPOS_FAILURE;
  payload: Error;
}

export type ReposAction =
  | FetchReposRequestAction
  | FetchReposSuccessAction
  | FetchReposFailureAction;

export enum IncrementalActionTypes {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
}

export interface IncrementalAction {
  type: IncrementalActionTypes.INCREMENT_COUNTER;
  payload: number;
}
