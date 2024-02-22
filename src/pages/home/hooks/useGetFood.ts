import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from 'shared/constants';
import { getFood } from 'shared/services';
import { Food, GetFoodResponse } from 'shared/types';

const useGetFood = () => {
  return useQuery<GetFoodResponse, Error, Food[]>({
    queryKey: [QueryKeys.GetFood],
    queryFn: getFood,
    select: data => data.foods,
  });
};

export default useGetFood;
