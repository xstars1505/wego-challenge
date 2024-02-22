import React, { useMemo, useState } from 'react';
import InputField from 'shared/components/InputField';
import { FaSearch } from 'react-icons/fa';
import Button from 'shared/components/Button';
import ButtonGroup from 'shared/components/ButtonGroup';
import Tag from 'shared/components/Tag';
import useGetCategories from 'pages/home/hooks/useGetCategories';
import useGetFood from 'pages/home/hooks/useGetFood';
import FoodCategories from 'pages/home/components/FoodCategories';
import { Category } from 'shared/types';
import FoodLoader from 'pages/home/components/FoodLoader';
import Card from 'shared/components/Card';

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

  // if (isLoadingCategories || isLoadingFood) {
  //   return <FoodLoader />;
  // }
  return (
    <>
      <InputField placeholder={'aa'} icon={FaSearch} onChange={value => setQueryKey(value.trim())} />
      <FoodCategories categories={categories || []} onSelectCategory={handleSelectCategory} />
      <div className="row">
        {isLoadingFood && (
          <>
            {Array.from([1, 2, 3, 4, 5, 6]).map(item => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={item}>
                <FoodLoader />
              </div>
            ))}
          </>
        )}
        {filteredFood.map(item => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={item.id}>
            <Card key={item.id} className="mb-4" title={item.name} imageSrc={item.imageUrl}>
              <Tag>{item.rating}</Tag>
            </Card>
          </div>
        ))}
      </div>
      <Button label={'+Show More'} onClick={loadMoreFood} />
    </>
  );
};

export default HomePage;
