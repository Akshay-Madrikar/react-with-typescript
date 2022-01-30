import { combineReducers } from 'redux';
import RepositoryReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: RepositoryReducer,
});

export default reducers;
