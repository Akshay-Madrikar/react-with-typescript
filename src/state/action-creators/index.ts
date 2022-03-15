import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  SearchRepositoriesErrorPayload,
  SearchRepositoriesSuccessPayload,
} from '../actions';
import { repositoryActions } from '../reducers/repositoriesReducer';

// `createAsyncThunk` is a generic function.
// We can use the first type-parameter
// to tell what type will be returned as a result.

// The second type-parameter in `createAsyncThunk`
// tells what argument takes the function inside:

// The third type-parameter is an object with:
// `{dispatch?, state?, extra?, rejectValue?}`` fields.
//
// `extra` is useful when we need to pass
// some static data to the request function,
// like jwt-token or HTTP-headers.
//
// `rejectValue` is useful when we need to type
// possible errors.
export const searchRepositories = createAsyncThunk<
  SearchRepositoriesSuccessPayload,
  string,
  { rejectValue: SearchRepositoriesErrorPayload }
>('RepositoryReducer/searchRepositories', async (term: string, thunkApi) => {
  // The second argument, `thunkApi`, is an object
  // that contains all those fields
  // and the `rejectWithValue` function:

  const response = await axios.get('https://registry.npmjs.org/-/v1/search', {
    params: {
      text: term,
    },
  });

  // Check if status is not okay:
  if (response.status !== 200) {
    // Return the error message:
    return thunkApi.rejectWithValue('Failed to fetch todos.');
  }

  const names: string[] = response.data.objects.map((result: any) => {
    return result.package.name;
  });

  return names;
});
