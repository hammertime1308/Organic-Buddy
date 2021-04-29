import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header, Footer, CartIcon, CartModal } from '../../components';
import { FertilizersScreen } from './fertilizer/fertilizersScreen';
import { SeedScreen } from './seeds/seedsScreen';
import { EquipmentScreen } from './equipments/equipmentsScren';

import Context from '../../context';

import { ButtonText, Container, SelectedButtonText, Add } from './styles';

export const Shop = () => {
  const [index, setIndex] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const [context, setContext] = useContext(Context);

  useEffect(() => {
    try {
      async function getSavedCart() {
        let data = await AsyncStorage.getItem('@cart');
        data = await JSON.parse(data);
        if (data !== null) {
          setContext(prevstate => prevstate.set('cart', data));
        }
      }
      getSavedCart();
    } catch (e) {
      console.log(e.message);
    }
    return async () =>
      await AsyncStorage.setItem('@cart', JSON.stringify(context.get('cart')));
  }, []);

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
      <CartModal
        visible={modalVisible}
        cart={context.get('cart')}
        closeModal={() => setModalVisible(!modalVisible)}
      />
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
      <Footer selected="shop" />
      <View style={{ position: 'absolute', bottom: '12%', right: '5%' }}>
        {index === 3 ? (
          <Add activeOpacity={0.8} onPress={() => alert('add pressed')}>
            <Icon style={{ padding: 10 }} name="plus" size={30} color="white" />
          </Add>
        ) : (
          <CartIcon
            onPress={() => {
              setModalVisible(true);
            }}
          />
        )}
      </View>
    </View>
  );
};
