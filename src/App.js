import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListScreenWireframe from './screens/ListScreen/ListScreenWireframe';

const AppNavigator = createStackNavigator({
  List: {
    screen: ListScreenWireframe,
  },
});

export default createAppContainer(AppNavigator);
