import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { LogBox } from 'react-native';

import Navigator from './navigation';
import { NavigationService } from './utilities';
import Context from './context';

const App = () => {
  let data = new Map();
  data.set('user', {});
  data.set('cart', []);
  const [context, setContext] = useState(data);
  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  LogBox.ignoreAllLogs(true);
  return (
    <Context.Provider value={[context, setContext]}>
      <Navigator
        ref={r => {
          NavigationService.setTopLevelNavigator(r);
        }}
      />
    </Context.Provider>
  );
};

export default App;
