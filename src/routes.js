import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#F03C02',
        },
        headerTintColor: '#fff',
        headerBackTitle: false,
      },
    },
  ),
);

export default Routes;
