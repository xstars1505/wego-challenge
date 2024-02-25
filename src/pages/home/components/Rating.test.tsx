import React from 'react';
import { render } from '@testing-library/react';
import Rating from './Rating';

describe('<Rating />', () => {
  it('renders rating with star icon correctly', () => {
    const { getByText, getByTestId } = render(<Rating rating={4} />);
    expect(getByTestId('FaStar')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
  });
});
