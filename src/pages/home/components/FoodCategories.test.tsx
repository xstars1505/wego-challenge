import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FoodCategories from './FoodCategories';

describe('<FoodCategories/>', () => {
  const categories = [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' },
    { id: '3', name: 'Category 3' },
  ];

  it('renders correctly', () => {
    const onSelectCategory = jest.fn();
    const { getByTestId, getByRole } = render(<FoodCategories categories={categories} onSelectCategory={onSelectCategory} />);
    const buttonGroup = getByTestId('categories');

    expect(buttonGroup).toBeInTheDocument();
    categories.forEach(category => {
      expect(getByRole('button', { name: category.name })).toBeInTheDocument();
    });
    expect(getByRole('button', { name: categories[0].name })).toHaveClass('active');
  });

  it('calls onSelectCategory with correct category when a category is clicked', () => {
    const onSelectCategory = jest.fn();
    const { getByText } = render(<FoodCategories categories={categories} onSelectCategory={onSelectCategory} />);

    fireEvent.click(getByText('Category 2'));

    expect(onSelectCategory).toHaveBeenCalledWith(categories[1]);
  });
});
