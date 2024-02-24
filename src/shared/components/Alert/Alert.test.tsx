import React from 'react';
import { render } from '@testing-library/react';
import Alert from 'shared/components/Alert/index';

describe('Alert component', () => {
  it('renders correctly with error variant', () => {
    const { getByText, container } = render(<Alert variant="error" message="Error message" />);
    expect(getByText('Error message')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('alert', 'alert-error');
  });

  it('renders correctly with warning variant', () => {
    const { getByText, container } = render(<Alert variant="warning" message="Warning message" />);
    expect(getByText('Warning message')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('alert', 'alert-warning');
  });

  it('renders correctly with success variant', () => {
    const { getByText, container } = render(<Alert variant="success" message="Success message" />);
    expect(getByText('Success message')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('alert', 'alert-success');
  });
});
