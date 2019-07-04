import { combineReducers } from 'redux';
import listReducer from './ListReducer';

const rootReducer = combineReducers({
  news: listReducer
});

const reducer = (state, action) => {
  return rootReducer(state, action);
};

export default reducer;
