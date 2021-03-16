import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Repository,
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
