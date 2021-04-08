import React from 'react';
import { ScrollView, View } from 'react-native';

import { EquipmentCard } from '../../../components';

export const EquipmentScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <EquipmentCard equipmentType="hire" />
        <EquipmentCard />
        <EquipmentCard />
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
