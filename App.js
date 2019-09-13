import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// import Screen
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: {
    screen: SearchScreen,
  }
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);