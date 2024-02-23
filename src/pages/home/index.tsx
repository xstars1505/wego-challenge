import React, { useMemo, useState } from 'react';
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

const ITEM_PER_PAGE = 10;

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>();
  const [queryKey, setQueryKey] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading: isLoadingCategories, data: categories } = useGetCategories();
  const { isLoading: isLoadingFood, data: food } = useGetFood();

  const filteredFood = useMemo(() => {
    if (!food) {
      return [];
    }
    let rs = [...food];

    if (queryKey) {
      rs = rs.filter(item => item.name.includes(queryKey));
    }

    if (selectedCategory && selectedCategory.id) {
      // ignore `All` category
      rs = rs.filter(item => {
        return item.categoryId === selectedCategory.id;
      });
    }
    return rs.slice(0, ITEM_PER_PAGE * pageNumber);
  }, [food, selectedCategory, pageNumber, queryKey]);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const loadMoreFood = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className={styles.foodContainer}>
      <InputField className="mb-4" placeholder={'aa'} icon={FaSearch} onChange={value => setQueryKey(value.trim())} />
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
        <>
          <FoodCategories categories={categories || []} onSelectCategory={handleSelectCategory} />
          <div className="row">
            {filteredFood.map(item => (
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
          <div className={styles.buttonsContainer}>
            <Button label={'+Show More'} onClick={loadMoreFood} />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
