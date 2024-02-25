import React from 'react';
import { render } from '@testing-library/react';
import FoodLoader from './FoodLoader';

describe('<FoodLoader/>', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<FoodLoader />);
    expect(getByTestId('food-loader')).toBeInTheDocument();
  });
});
