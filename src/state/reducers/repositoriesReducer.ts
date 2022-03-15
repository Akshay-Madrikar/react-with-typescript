import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchRepositories } from '../action-creators';

export interface RepositoriesState {
  status: 'loading' | 'success' | 'failed' | null;
  data: string[];
  error: string | null;
}

const initialState: RepositoriesState = {
  status: null,
  data: [],
  error: null,
};

const repositorySlice = createSlice({
  name: 'RepositoryReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // When we send a request,
    // `searchRepositories.pending` is being fired:
    builder.addCase(searchRepositories.pending, (state) => {
      // At that moment,
      // we change status to `loading`
      // and clear all the previous errors:
      state.status = 'loading';
      state.error = null;
    });

    // When a server responses with the data,
    // `searchRepositories.fulfilled` is fired:
    builder.addCase(searchRepositories.fulfilled, (state, { payload }) => {
      // We add all the new values into the state
      // and change `status` back to `success`:
      state.data = payload;
      state.status = 'success';
    });

    // When a server responses with an error:
    builder.addCase(searchRepositories.rejected, (state, { payload }) => {
      // We show the error message
      // and change `status` to `failed`.

      state.status = 'failed';
      if (payload) state.error = payload;
    });
  },
});

export const repositoryActions = repositorySlice.actions;

export default repositorySlice;
