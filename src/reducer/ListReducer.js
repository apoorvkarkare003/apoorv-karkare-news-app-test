import { TYPE_LIST } from '../actions/Types';

const INITIAL_STATE = {};
export default (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }
  if (action.type === TYPE_LIST) {
    return {
      ...state,
      newsList: action.payload
    };
  }
  return state;
};
