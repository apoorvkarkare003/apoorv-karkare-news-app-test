import { call, put } from 'redux-saga/effects';
import { dispatchGetNews } from '../actions/Creator';
import { checkNetworkConnection } from '../common/Utils';
import { HTTPMethod, apiRequest, Api } from '../ApiService';

export default function* getNewsList() {
  const isDeviceOnline = yield checkNetworkConnection();
  if (!isDeviceOnline) {
    return;
  }
  try {
    const data = yield call(apiRequest, Api.getNews, HTTPMethod.GET, null);
    yield put(dispatchGetNews(data.articles));
  } catch (error) {
    console.log(error);
  }
}
