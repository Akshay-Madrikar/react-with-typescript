import { combineReducers } from 'redux';

import RepositoryReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: RepositoryReducer,
});

export default reducers;

// Declare type of Redux store
export type RootState = ReturnType<typeof reducers>;
