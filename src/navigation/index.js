import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Shop,
  GetHelp,
  Dashboard,
  Learn,
  FlashScreen,
  UserAuth,
  LandingPage,
  DetailedScreenFS,
  DetailedScreenEquipment,
  DetailedForum,
  Orders,
} from '../containers';

const Screens = {
  LandingPage: {
    screen: LandingPage,
  },
  FlashScreen: {
    screen: FlashScreen,
  },
  GetHelp: {
    screen: GetHelp,
  },
  Shop: {
    screen: Shop,
  },
  Dashboard: {
    screen: Dashboard,
  },
  Learn: {
    screen: Learn,
  },
  UserAuth: {
    screen: UserAuth,
  },
  DetailedScreenFS: {
    screen: DetailedScreenFS,
  },
  DetailedScreenEquipment: {
    screen: DetailedScreenEquipment,
  },
  DetailedForum: {
    screen: DetailedForum,
  },
  Orders: {
    screen: Orders,
  },
};

const AppNavigator = createStackNavigator(Screens, {
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);
