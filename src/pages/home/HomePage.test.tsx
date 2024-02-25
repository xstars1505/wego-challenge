import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from 'pages/home/index';
import { TestRoot } from 'shared/test/TestRoot';
import { server } from 'mocks/server';
import { getFoodHandler } from 'mocks/mock-handlers';
import { getCategoriesResponse } from 'mocks/responseMocks';

const renderComponent = async () => {
  const result = render(<HomePage />, { wrapper: TestRoot });
  const { container, getByPlaceholderText, queryAllByTestId, getByRole, getByTestId } = result;
  expect(getByPlaceholderText('Enter restaurant name')).toBeInTheDocument();

  expect(queryAllByTestId('food-loader')).toHaveLength(6);

  await waitFor(() => {
    expect(queryAllByTestId('food-loader')).toHaveLength(0);
    expect(getByTestId('categories')).toBeInTheDocument();

    expect(container.getElementsByClassName('card')).toHaveLength(10);
    expect(getByRole('button', { name: '+Show More' })).toBeInTheDocument();
  });
  return result;
};

describe('HomePage component', () => {
  it('renders correctly', async () => {
    renderComponent();
  });

  it('handles filter by category correctly', async () => {
    const { container, queryByText, getByRole } = await renderComponent();
    getCategoriesResponse.forEach(category => {
      expect(getByRole('button', { name: category.name })).toBeInTheDocument();
    });
    fireEvent.click(getByRole('button', { name: 'Drinks' }));

    expect(container.getElementsByClassName('card')).toHaveLength(4);
    expect(queryByText('+Show More')).toBeNull();
  });

  it('handles search input correctly', async () => {
    const { container, getByPlaceholderText, queryByText } = await renderComponent();
    const searchInput = getByPlaceholderText('Enter restaurant name');
    fireEvent.change(searchInput, { target: { value: 'Plasto' } });
    expect(searchInput).toHaveValue('Plasto');

    expect(container.getElementsByClassName('card')).toHaveLength(1);
    expect(queryByText('+Show More')).toBeNull();

    fireEvent.change(searchInput, { target: { value: 'Not found' } });
    expect(searchInput).toHaveValue('Not found');
    expect(container.getElementsByClassName('card')).toHaveLength(0);
    expect(queryByText('+Show More')).toBeNull();
    expect(queryByText('There are no restaurants')).toBeInTheDocument();
  });

  it('loads more food items when "Show More" button is clicked', async () => {
    const { container, getByPlaceholderText, queryAllByTestId, getByRole, queryByText } = render(<HomePage />, { wrapper: TestRoot });
    expect(getByPlaceholderText('Enter restaurant name')).toBeInTheDocument();

    expect(queryAllByTestId('food-loader')).toHaveLength(6);

    await waitFor(() => {
      expect(queryAllByTestId('food-loader')).toHaveLength(0);
      expect(container.getElementsByClassName('card')).toHaveLength(10);
    });
    const showMoreButton = getByRole('button', { name: '+Show More' });
    fireEvent.click(showMoreButton);
    expect(container.getElementsByClassName('card')).toHaveLength(16);
    expect(queryByText('+Show More')).toBeNull();
  });

  it('show error message in case API is unavailable', async () => {
    server.use(getFoodHandler.errorHandler);

    const { queryAllByTestId, queryByText } = render(<HomePage />, { wrapper: TestRoot });

    expect(queryAllByTestId('food-loader')).toHaveLength(6);

    await waitFor(() => {
      expect(queryAllByTestId('food-loader')).toHaveLength(0);
      expect(queryByText('There was an error, please try to refresh the page')).toBeInTheDocument();
    });
  });
});
