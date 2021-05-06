import React from 'react';
import { ScrollView, View } from 'react-native';

import { Card } from '../../../components';

export const FertilizersScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Card
          productName="a"
          id="a"
          productImages={[
            'http://i.imgur.com/XP2BE7q.jpg',
            'http://i.imgur.com/5nltiUd.jpg',
          ]}
          productPrice="100"
        />
        <Card productName="b" id="b" productPrice="10" />
        <Card productName="c" id="c" productPrice="50" />
        <Card productName="d" id="d" />
        <Card productName="e" id="e" />
        <Card />
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
