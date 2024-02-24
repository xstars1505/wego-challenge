import React from 'react';
import { render } from '@testing-library/react';
import Layout from 'shared/components/Layout/index';

describe('<Layout/>', () => {
  it('renders children within a container', () => {
    const { getByTestId, getByText } = render(
      <Layout>
        <div data-testid="child">Child Component</div>
      </Layout>
    );

    const container = getByTestId('layout-container');
    expect(container).toBeInTheDocument();

    const childComponent = getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
    expect(container.contains(childComponent)).toBeTruthy();
  });
});
