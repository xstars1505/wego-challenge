import { baseURL } from 'shared/constants';
import { Category, GetFoodResponse } from './types';

export const getFoodCategories = (): Promise<Category[]> =>
  fetch(`${baseURL}v3/b88ec762-2cb3-4015-8960-2839b06a7593`).then(res => res.json());

export const getFood = (): Promise<GetFoodResponse> => fetch(`${baseURL}v3/c75dc0d8-ad78-4b3d-b697-807a5ded8645`).then(res => res.json());
