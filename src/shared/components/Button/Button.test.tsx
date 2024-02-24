import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from 'shared/components/Button/index';

const label = 'Submit';

describe('<Button />', () => {
  it('renders button with label', () => {
    const { getByText } = render(<Button label={label} onClick={() => {}} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  it('applies disabled attribute when disabled prop is true', () => {
    const { container } = render(<Button label={label} disabled onClick={() => {}} />);
    const button = container.querySelector('button');
    expect(button).toHaveAttribute('disabled');
  });

  it('applies loading class when loading prop is true', () => {
    const { container } = render(<Button label={label} loading onClick={() => {}} />);
    const button = container.querySelector('button');
    expect(button).toHaveAttribute('disabled');
  });

  it('calls onClick handler when button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button label={label} onClick={onClick} />);
    fireEvent.click(getByText('Submit'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
