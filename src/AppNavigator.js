import { createAppContainer, createStackNavigator } from 'react-navigation';
import HeadLines from './view/Headlines';
import NewsDetails from './view/NewsDetails';
import { getFontFamily } from './common/Utils';

const configRouteMap = {
  HeadLines: { screen: HeadLines },
  NewsDetails: { screen: NewsDetails }
};

const AppNavigator = createStackNavigator(configRouteMap, {
  initialRouteName: 'HeadLines',
  defaultNavigationOptions: {
    gestureEnabled: false,
    headerTitleStyle: { fontFamily: getFontFamily() }
  }
});

export default createAppContainer(AppNavigator);
