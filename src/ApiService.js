import { checkNetworkConnection } from './common/Utils';

let handleResponse;

const Api = {
  getNews:
    'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526'
};
const HTTPMethod = {
  GET: 'GET'
};

const apiRequest = function*(url, method, body) {
  const isDeviceOnline = yield checkNetworkConnection();
  if (!isDeviceOnline) {
    return;
  }
  const options = body != null ? JSON.stringify(body) : body;
  const apiResponse = yield handleResponse(
    fetch(url, {
      method,
      body: options
    })
  );
  console.log(apiResponse);
  return apiResponse;
};

handleResponse = promise => {
  return promise
    .then(response => {
      return new Promise((resolve, reject) => {
        if (!response.ok) {
          reject(response);
        } else {
          resolve(response.json());
        }
      });
    })
    .then(response => {
      return response;
    })
    .catch(e => {
      console.log(e);
    });
};

export { Api, apiRequest, HTTPMethod };
