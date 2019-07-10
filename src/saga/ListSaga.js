import { call, put } from 'redux-saga/effects';
import { dispatchGetNews } from '../actions/Creator';
import { checkNetworkConnection } from '../common/Utils';
import { HTTPMethod, apiRequest, Api } from '../ApiService';

export default function* getNewsList(action) {
  const isDeviceOnline = yield checkNetworkConnection();
  if (!isDeviceOnline) {
    return;
  }

  const api = Api.getNews(action.payload.data);

  try {
    const data = yield call(apiRequest, api, HTTPMethod.GET, null);
    console.log(data);
    yield put(dispatchGetNews(data.articles));
  } catch (error) {
    console.log(error);
  }
}
