import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from 'shared/components/Card/index';

describe('<Card/>', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Card imageSrc={'https://example.com'} title="Card title" children="Child content" />);

    const image = screen.getByAltText('media');

    expect(image).toHaveAttribute('src', 'https://example.com');
    expect(getByText('Card title')).toBeInTheDocument();
    expect(getByText('Child content')).toBeInTheDocument();
  });
});
