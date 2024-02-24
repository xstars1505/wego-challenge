import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import CookingTime from 'pages/home/components/CookingTime';
import FoodCategories from 'pages/home/components/FoodCategories';
import FoodLoader from 'pages/home/components/FoodLoader';
import NewFood from 'pages/home/components/NewFood/NewFood';
import Rating from 'pages/home/components/Rating';
import useGetCategories from 'pages/home/hooks/useGetCategories';
import useGetFood from 'pages/home/hooks/useGetFood';
import Button from 'shared/components/Button';
import Card from 'shared/components/Card';
import InputField from 'shared/components/InputField';
import { Category } from 'shared/types';
import styles from './Home.module.scss';
import Alert from 'shared/components/Alert';

const HomePage = () => {
  const [queryParams, setQueryParams] = useState({
    selectedCategory: { name: 'All', id: '' },
    queryKey: '',
    pageNumber: 1,
  });

  const { isLoading: isLoadingCategories, data: categories, isError: isGetCategoriesError } = useGetCategories();
  const { isLoading: isLoadingFood, isLoadMore, food, isError: isGetFoodError } = useGetFood(queryParams);

  const handleSearch = (value: string) => {
    setQueryParams({
      ...queryParams,
      queryKey: value.trim(),
      pageNumber: 1,
    });
  };

  const handleSelectCategory = (selectedCategory: Category) => {
    setQueryParams({
      ...queryParams,
      selectedCategory,
      pageNumber: 1,
    });
  };

  const loadMoreFood = () => {
    setQueryParams({
      ...queryParams,
      pageNumber: queryParams.pageNumber + 1,
    });
  };
  const renderContents = () => {
    return isGetCategoriesError || isGetFoodError ? (
      <Alert variant="error" message="There was an error, please try to refresh the page" />
    ) : (
      renderFoodList()
    );
  };
  const renderFoodList = () => {
    return (
      <>
        <FoodCategories categories={categories || []} onSelectCategory={handleSelectCategory} />
        {food.length > 0 ? (
          <>
            <div className="row">
              {food.map(item => (
                <div key={item.id} className="col-12 col-sm-6 col-md-4  col-lg-4 col-xl-3 mb-4">
                  <Card key={item.id} title={item.name} imageSrc={item.imageUrl}>
                    <div className={styles.foodTags}>
                      <Rating rating={item.rating.toFixed(2)} />
                      <CookingTime from={item.minCookTime} to={item.maxCookTime} />
                      {item.isNew && <NewFood />}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            <div className={styles.buttonsContainer}>{isLoadMore && <Button label={'+Show More'} onClick={loadMoreFood} />}</div>
          </>
        ) : (
          <Alert variant="warning" message="There are no restaurants" />
        )}
      </>
    );
  };

  return (
    <div className={styles.foodContainer}>
      <InputField className="mb-4" placeholder="Enter restaurant name" icon={FaSearch} onChange={handleSearch} />
      {isLoadingCategories || isLoadingFood ? (
        <div className="row">
          <>
            {new Array(6).fill(0).map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4  col-lg-4 col-xl-3 mb-4">
                <FoodLoader />
              </div>
            ))}
          </>
        </div>
      ) : (
        renderContents()
      )}
    </div>
  );
};

export default HomePage;
