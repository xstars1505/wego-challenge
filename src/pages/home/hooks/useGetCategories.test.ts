import { server } from 'mocks/server';
import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { getCategoriesHandler } from 'mocks/mock-handlers';
import { TestRoot } from 'shared/test/TestRoot';
import { getCategoriesResponse } from 'mocks/responseMocks';
import useGetCategories from './useGetCategories';

describe('useGetCategories', () => {
  describe('when request succeeded', () => {
    it('should get food list', async () => {
      const { result } = renderHook(() => useGetCategories(), { wrapper: TestRoot });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.isError).toBe(false);
      expect(result.current.data).toStrictEqual(undefined);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
        expect(result.current.isError).toBe(false);
        expect(result.current.data).toStrictEqual([{ name: 'All', id: '' }, ...getCategoriesResponse]);
      });
    });
  });

  describe('when request failed', () => {
    it('should return an error', async () => {
      server.use(getCategoriesHandler.errorHandler);
      const { result } = renderHook(() => useGetCategories(), { wrapper: TestRoot });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.isError).toBe(false);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
        expect(result.current.isError).toBe(true);
        expect(result.current.data).toStrictEqual(undefined);
      });
    });
  });
});
