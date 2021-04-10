import React from 'react';
import { Image } from 'react-native';

import {
  TextSelected,
  TextUnselected,
  StyledFooter,
  NormalView,
  SelectedView,
} from './styles';

export const Footer = ({ selected = '' }) => {
  return (
    <StyledFooter>
      {selected === 'dashboard' ? (
        <SelectedView activeOpacity={0.8} onPress={() => {}}>
          <Image
            style={{ width: 35, height: 35, marginTop: 3, marginBottom: 5 }}
            source={require('../../assets/icons/dashboard.png')}
          />
          <TextSelected>Dashboard</TextSelected>
        </SelectedView>
      ) : (
        <NormalView
          activeOpacity={0.8}
          onPress={() => alert('dashboard pressed')}>
          <Image
            style={{ width: 35, height: 35, marginTop: 3, marginBottom: 5 }}
            source={require('../../assets/icons/dashboard.png')}
          />
          <TextUnselected>Dashboard</TextUnselected>
        </NormalView>
      )}

      {selected === 'shop' ? (
        <SelectedView activeOpacity={0.8} onPress={() => {}}>
          <Image
            style={{ width: 35, height: 35, marginTop: 3, marginBottom: 5 }}
            source={require('../../assets/icons/shop.png')}
          />
          <TextSelected>Shop</TextSelected>
        </SelectedView>
      ) : (
        <NormalView activeOpacity={0.8} onPress={() => alert('Shop pressed')}>
          <Image
            style={{ width: 35, height: 35, marginTop: 3, marginBottom: 5 }}
            source={require('../../assets/icons/shop.png')}
          />
          <TextUnselected>Shop</TextUnselected>
        </NormalView>
      )}

      {selected === 'getHelp' ? (
        <SelectedView activeOpacity={0.8} onPress={() => {}}>
          <Image
            style={{ width: 35, height: 35, marginTop: 3, marginBottom: 5 }}
            source={require('../../assets/icons/getHelp.png')}
          />
          <TextSelected>Get Help</TextSelected>
        </SelectedView>
      ) : (
        <NormalView
          activeOpacity={0.8}
          onPress={() => alert('Get Help pressed')}>
          <Image
            style={{ width: 35, height: 35, marginTop: 3, marginBottom: 5 }}
            source={require('../../assets/icons/getHelp.png')}
          />
          <TextUnselected>Get Help</TextUnselected>
        </NormalView>
      )}

      {selected === 'learn' ? (
        <SelectedView activeOpacity={0.8} onPress={() => {}}>
          <Image
            style={{ width: 35, height: 35, marginTop: 3, marginBottom: 5 }}
            source={require('../../assets/icons/learn.png')}
          />
          <TextSelected>Learn</TextSelected>
        </SelectedView>
      ) : (
        <NormalView activeOpacity={0.8} onPress={() => alert('Learn pressed')}>
          <Image
            style={{ width: 35, height: 35, marginTop: 3, marginBottom: 5 }}
            source={require('../../assets/icons/learn.png')}
          />
          <TextUnselected>Learn</TextUnselected>
        </NormalView>
      )}
    </StyledFooter>
  );
};
