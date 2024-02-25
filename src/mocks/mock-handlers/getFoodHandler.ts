import { rest } from 'msw';
import { getFoodResponse } from 'mocks/responseMocks';
import { baseURL } from 'shared/constants';

const url = `${baseURL}v3/c75dc0d8-ad78-4b3d-b697-807a5ded8645`;

const defaultHandler = rest.get(url, (req, res, ctx) => {
  return res(ctx.json(getFoodResponse));
});

const errorHandler = rest.get(url, (req, res, ctx) => res(ctx.status(500)));

export const getFoodHandler = {
  defaultHandler,
  errorHandler,
};
