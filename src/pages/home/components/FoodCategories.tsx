import React from 'react';
import ButtonGroup from 'shared/components/ButtonGroup';
import { Category } from 'shared/types';

type Props = {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
};
const FoodCategories: React.FC<Props> = ({ categories, onSelectCategory }) => {
  const buttonLabels = categories.map(category => category.name);

  const handleCategoryClick = (index: number) => {
    onSelectCategory(categories[index]);
  };

  return (
    <ButtonGroup className="mb-4" testId="categories" preselectedIndex={0} buttonLabels={buttonLabels} onClick={handleCategoryClick} />
  );
};

export default FoodCategories;
