import 'react-native-gesture-handler';
import React, { useState } from 'react';

import Navigator from './navigation';
import { NavigationService } from './utilities';
import Context from './context';

const App = () => {
  const [context, setContext] = useState();
  console.disableYellowBox = true;
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
