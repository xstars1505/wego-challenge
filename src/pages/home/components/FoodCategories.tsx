import React from 'react';
import ButtonGroup from 'shared/components/ButtonGroup';
import { Category } from 'shared/types';

type Props = {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
};
const FoodCategories: React.FC<Props> = ({ categories, onSelectCategory }) => {
  const buttonLabels = [{ name: 'All', id: '' }, ...categories].map(category => category.name);

  const handleCategoryClick = (index: number) => {
    onSelectCategory(categories[index]);
  };

  return <ButtonGroup buttonLabels={buttonLabels} onClick={handleCategoryClick} />;
};

export default FoodCategories;
