import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from 'shared/constants';
import { getFoodCategories } from 'shared/services';
import { Category } from 'shared/types';

const useGetCategories = () => {
  return useQuery<Category[], Error, Category[]>({
    queryKey: [QueryKeys.GetFoodCategories],
    queryFn: getFoodCategories,
    select: data => [{ name: 'All', id: '' }, ...data],
  });
};

export default useGetCategories;
