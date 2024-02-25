import { server } from 'mocks/server';
import useGetFood from './useGetFood';
import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { getFoodHandler } from 'mocks/mock-handlers';
import { TestRoot } from 'shared/test/TestRoot';
import { getFoodResponse } from 'mocks/responseMocks';

const selectedCategory = { name: 'All', id: '' };
const queryKey = '';
const pageNumber = 1;

describe('useGetFood', () => {
  describe('when request succeeded', () => {
    it('should get food list', async () => {
      const { result } = renderHook(() => useGetFood({ selectedCategory, queryKey, pageNumber }), { wrapper: TestRoot });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.isError).toBe(false);
      expect(result.current.isLoadMore).toBe(false);
      expect(result.current.food).toStrictEqual([]);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
        expect(result.current.isError).toBe(false);
        expect(result.current.isLoadMore).toBe(true);
        expect(result.current.food).toStrictEqual([...getFoodResponse.foods.slice(0, 10)]);
      });
    });
  });

  describe('when request failed', () => {
    it('should return an error', async () => {
      server.use(getFoodHandler.errorHandler);
      const { result } = renderHook(() => useGetFood({ selectedCategory, queryKey, pageNumber }), { wrapper: TestRoot });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.isError).toBe(false);
      expect(result.current.isLoadMore).toBe(false);
      expect(result.current.food).toStrictEqual([]);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
        expect(result.current.isError).toBe(true);
        expect(result.current.isLoadMore).toBe(false);
        expect(result.current.food).toStrictEqual([]);
      });
    });
  });
});
