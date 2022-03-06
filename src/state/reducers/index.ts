import { combineReducers } from '@reduxjs/toolkit';
import repositorySlice from './repositoriesReducer';

export const rootReducer = combineReducers({
  repositories: repositorySlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
