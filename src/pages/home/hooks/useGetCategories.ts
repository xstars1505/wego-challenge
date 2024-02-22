import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from 'shared/constants';
import { getFoodCategories } from 'shared/services';
import { Category } from 'shared/types';

const useGetCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: [QueryKeys.GetFoodCategories],
    queryFn: getFoodCategories,
  });
};

export default useGetCategories;
