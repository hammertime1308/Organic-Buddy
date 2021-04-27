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
        />
        <Card productName="b" id="b" />
        <Card productName="c" id="c" />
        <Card productName="d" id="d" />
        <Card productName="e" id="e" />
        <Card />
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
