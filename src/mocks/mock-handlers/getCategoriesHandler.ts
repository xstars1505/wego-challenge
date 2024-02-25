import { rest } from 'msw';
import { getCategoriesResponse } from 'mocks/responseMocks';
import { baseURL } from 'shared/constants';

const url = `${baseURL}v3/b88ec762-2cb3-4015-8960-2839b06a7593`;

const defaultHandler = rest.get(url, (req, res, ctx) => {
  return res(ctx.json(getCategoriesResponse));
});

const errorHandler = rest.get(url, (req, res, ctx) => res(ctx.status(500)));

export const getCategoriesHandler = {
  defaultHandler,
  errorHandler,
};
