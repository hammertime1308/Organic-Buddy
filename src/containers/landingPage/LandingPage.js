import React, { useContext, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationService } from '../../utilities';
import Context from '../../context';

export const LandingPage = () => {
  const [context, setContext] = useContext(Context);

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@userData');
      if (data === null) {
        NavigationService.replace('FlashScreen');
      } else {
        setContext(prevState => prevState.set('user', JSON.parse(data)));
        NavigationService.replace('Dashboard');
      }
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
      <Text
        style={{
          flex: 1,
          textAlignVertical: 'bottom',
          textAlign: 'center',
          marginBottom: 50,
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        Organic Buddy
      </Text>
      <ActivityIndicator
        style={{
          flex: 1,
          justifyContent: 'flex-start',
        }}
        color="green"
        size={50}
      />
    </View>
  );
};
