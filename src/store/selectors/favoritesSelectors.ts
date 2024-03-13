import { reducerRootState } from "../reducers/favoritesReducer";

export const selectCounter = (state: ReturnType<typeof reducerRootState>) =>
  state.favorite;
