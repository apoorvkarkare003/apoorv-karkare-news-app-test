import { TYPE_LIST } from './Types';
export const dispatchGetNews = data => {
  return { type: TYPE_LIST, payload: data };
};
