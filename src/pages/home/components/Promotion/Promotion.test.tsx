import React from 'react';
import { render } from '@testing-library/react';
import Promotion from 'pages/home/components/Promotion/index';

describe('<Promotion/> ', () => {
  it('renders "1+1" promotion correctly', () => {
    const { getByText } = render(<Promotion promotion="1+1" />);
    expect(getByText('1+1')).toBeInTheDocument();
    expect(getByText('1+1')).toHaveClass('buyOneGetOne');
  });

  it('renders "gift" promotion correctly', () => {
    const { getByTestId } = render(<Promotion promotion="gift" />);
    expect(getByTestId('FaGift')).toBeInTheDocument();
    expect(getByTestId('FaGift').parentElement).toHaveClass('gift');
  });

  it('renders default promotion correctly', () => {
    const { getByTestId } = render(<Promotion promotion="discount" />);
    expect(getByTestId('FaPercent')).toBeInTheDocument();
    expect(getByTestId('FaPercent').parentElement).toHaveClass('discount');
  });
});
