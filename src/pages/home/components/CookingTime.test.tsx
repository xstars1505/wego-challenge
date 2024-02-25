import React from 'react';
import { render } from '@testing-library/react';
import CookingTime from './CookingTime';

describe('<CookingTime />', () => {
  it('renders correctly with the given from and to props', () => {
    const { getByText } = render(<CookingTime from={10} to={20} />);
    expect(getByText('10 - 20 min')).toBeInTheDocument();
  });
});
