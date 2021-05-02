import React from 'react';
import { ScrollView, View } from 'react-native';

import { EquipmentCard } from '../../../components';

export const EquipmentScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <EquipmentCard equipmentType="Hire" />
        <EquipmentCard
          equipmentDescription="Sample description"
          equipmentImages={[
            'http://i.imgur.com/XP2BE7q.jpg',
            'http://i.imgur.com/5nltiUd.jpg',
          ]}
          equipmentName="sample title"
          equipmentPrice={5000}
          equipmentType="Sell"
          id=""
          sellerId="2f27cd9c-d7f8-41aa-b4e0-e19ba931a8a8"
          sellerContact="8805251095"
        />
        <EquipmentCard />
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
