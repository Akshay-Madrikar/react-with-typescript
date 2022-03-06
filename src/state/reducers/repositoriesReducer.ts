import {
  SearchRepositoriesErrorAction,
  SearchRepositoriesSuccessAction,
} from '../actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchRepositories } from '../action-creators';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const repositorySlice = createSlice({
  name: 'RepositoryReducer',
  initialState,
  reducers: {
    searchRepositories(state) {
      state.loading = true;
    },
    searchRepositoriesSuccess(
      state,
      action: PayloadAction<SearchRepositoriesSuccessAction>
    ) {
      state.data = action.payload;
      state.loading = false;
    },
    searchRepositoriesError(
      state,
      action: PayloadAction<SearchRepositoriesErrorAction>
    ) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const repositoryActions = repositorySlice.actions;

export default repositorySlice;
