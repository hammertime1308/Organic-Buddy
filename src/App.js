import React from 'react';
import { Text } from 'react-native';

import { Endpoints } from './api';

const App = () => {
  // show landing screen
  // check if logged in
  // if logged in -> go to dashboard
  // else show info screens

  console.log(Endpoints.LOGIN);
  return <Text>{Endpoints.LOGIN}</Text>;
};

export default App;
