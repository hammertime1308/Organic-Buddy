import React from 'react';
import { ScrollView, View } from 'react-native';

import { Card } from '../../../components';

export const EquipmentScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
