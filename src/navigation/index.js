import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';

import { Dashboard, Shop } from '../containers';

const Screens = {
  Shop: {
    screen: Shop,
  },
  Dashboard: {
    screen: Dashboard,
  },
};

const AppNavigator = createStackNavigator(Screens, {
  headerMode: 'none',
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
  },
});

export default createAppContainer(AppNavigator);
