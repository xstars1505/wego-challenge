import React from 'react';
import { render } from '@testing-library/react';
import Tag from 'shared/components/Tag/index';

describe('<Tag />', () => {
  it('renders  correctly', () => {
    const { container, getByText } = render(<Tag className="custom-tag">Tag</Tag>);
    expect(getByText('Tag')).toBeInTheDocument();

    const tagElement = container.firstChild;
    expect(tagElement).toHaveClass('tag', 'custom-tag');
  });
});
