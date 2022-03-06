import axios from 'axios';
import { SearchRepositoriesSuccessAction } from '../actions';
import { repositoryActions } from '../reducers/repositoriesReducer';

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch(repositoryActions.searchRepositories());

    const fetchRepository = async () => {
      const response = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error('Could not fetch repositories!');
      }

      const names = response.data.objects.map((result: any) => {
        return result.package.name;
      });

      return names;
    };
    try {
      const repositories: SearchRepositoriesSuccessAction =
        await fetchRepository();
      dispatch(repositoryActions.searchRepositoriesSuccess(repositories));
    } catch (error: any) {
      dispatch(repositoryActions.searchRepositoriesError(error));
    }
  };
};
