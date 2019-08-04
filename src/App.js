import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListScreen from './screens/ListScreen/ListScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: ListScreen,
  },
});

export default createAppContainer(AppNavigator);
