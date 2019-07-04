/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './src/reducer/RootReducer';
import Navigator from './src/AppNavigator';
import RootSaga from './src/saga/RootSaga';

const saga = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(saga));
saga.run(RootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
