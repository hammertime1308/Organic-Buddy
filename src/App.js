import 'react-native-gesture-handler';
import React from 'react';

import Navigator from './navigation';
import { NavigationService } from './utilities';

const App = () => {
  // show landing screen
  // check if logged in
  // if logged in -> go to dashboard
  // else show info screens
  return (
    <Navigator
      ref={r => {
        NavigationService.setTopLevelNavigator(r);
      }}
    />
  );
};

export default App;
