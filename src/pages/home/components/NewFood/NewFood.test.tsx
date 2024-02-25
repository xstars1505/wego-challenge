import React from 'react';
import { render } from '@testing-library/react';
import NewFood from 'pages/home/components/NewFood/NewFood';

describe('<NewFood />', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<NewFood />);
    expect(getByText('New')).toBeInTheDocument();

    const tagElement = container.firstChild;
    expect(tagElement).toHaveClass('tag');
  });
});
