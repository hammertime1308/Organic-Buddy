import React from 'react';
import { ScrollView, View } from 'react-native';

import { Card } from '../../../components';

export const SeedScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Card />
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
