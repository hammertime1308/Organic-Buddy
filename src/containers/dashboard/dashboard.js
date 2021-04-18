import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';

import Context from '../../context';

export const Dashboard = () => {
  const [user] = useContext(Context);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return <Text style={{ flex: 1 }}>Dashboard</Text>;
};
