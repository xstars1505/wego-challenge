// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from 'mocks/server';
import { queryClient } from 'shared/test/TestRoot';

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

afterEach(() => {
  // Reset any runtime handlers tests or query results may use.
  server.resetHandlers();
  queryClient.clear();

  jest.clearAllMocks();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});
