import { takeLatest } from 'redux-saga/effects';
import { TYPE_SAGA_LIST } from '../actions/Types';
import ListSaga from './ListSaga';

export default function* rootSaga() {
  yield takeLatest(TYPE_SAGA_LIST, ListSaga);
}
