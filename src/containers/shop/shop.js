import React, { useState } from 'react';
import { View } from 'react-native';

import { Header, Footer, Cart } from '../../components';
import { FertilizersScreen } from './fertilizer/fertilizersScreen';
import { SeedScreen } from './seeds/seedsScreen';
import { EquipmentScreen } from './equipments/equipmentsScren';

import { ButtonText, Container, SelectedButtonText } from './styles';

export const Shop = () => {
  const [index, setIndex] = useState(1);

  const RenderScreen = () => {
    switch (index) {
      case 1:
        return <FertilizersScreen />;
      case 2:
        return <SeedScreen />;
      case 3:
        return <EquipmentScreen />;
    }
  };

  return (
    <View style={{ height: '100%' }}>
      <Header>SHOP</Header>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: 'rgba(76, 154, 42, 1)',
        }}>
        <Container onPress={() => setIndex(1)}>
          {index === 1 ? (
            <SelectedButtonText>Fertilizers</SelectedButtonText>
          ) : (
            <ButtonText>Fertilizers</ButtonText>
          )}
        </Container>
        <Container onPress={() => setIndex(2)}>
          {index === 2 ? (
            <SelectedButtonText>Seeds</SelectedButtonText>
          ) : (
            <ButtonText>Seeds</ButtonText>
          )}
        </Container>
        <Container onPress={() => setIndex(3)}>
          {index === 3 ? (
            <SelectedButtonText>Equipments</SelectedButtonText>
          ) : (
            <ButtonText>Equipments</ButtonText>
          )}
        </Container>
      </View>
      <RenderScreen />
      <Footer />
      <View style={{ position: 'absolute', bottom: '12%', right: '5%' }}>
        <Cart onPress={() => alert('Cart pressed')} />
      </View>
    </View>
  );
};
