import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from 'shared/constants';
import { getFood } from 'shared/services';
import { Category, Food, GetFoodResponse } from 'shared/types';
import { useMemo } from 'react';

const ITEM_PER_PAGE = 10;

const useGetFood = ({ selectedCategory, queryKey, pageNumber }: { selectedCategory: Category; queryKey: string; pageNumber: number }) => {
  const {
    isLoading,
    data: food,
    isError,
  } = useQuery<GetFoodResponse, Error, Food[]>({
    queryKey: [QueryKeys.GetFood],
    queryFn: getFood,
    select: data => data?.foods || [],
  });

  const filteredFood = useMemo(() => {
    if (!food) return [];

    let rs = [...food];

    if (queryKey) {
      rs = rs.filter(item => item.restaurant.toLowerCase().includes(queryKey.toLowerCase()));
    }

    if (selectedCategory && selectedCategory.id) {
      // ignore `All` category
      rs = rs.filter(item => {
        return item.categoryId === selectedCategory.id;
      });
    }
    return rs;
  }, [selectedCategory, queryKey, pageNumber, food]);

  const displayedFoodData = useMemo(() => filteredFood.slice(0, ITEM_PER_PAGE * pageNumber), [filteredFood, pageNumber]);

  return {
    isLoading,
    food: displayedFoodData,
    isLoadMore: displayedFoodData.length < filteredFood.length,
    isError,
  };
};

export default useGetFood;
