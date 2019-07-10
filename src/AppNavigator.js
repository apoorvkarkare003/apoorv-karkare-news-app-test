import { createAppContainer, createStackNavigator } from 'react-navigation';
import HeadLines from './view/Headlines';
import NewsDetails from './view/NewsDetails';

const configRouteMap = {
  HeadLines: { screen: HeadLines },
  NewsDetails: { screen: NewsDetails }
};

const AppNavigator = createStackNavigator(configRouteMap, {
  initialRouteName: 'HeadLines',
  defaultNavigationOptions: {
    header:null,
    gestureEnabled: false,
  }
});

export default createAppContainer(AppNavigator);
