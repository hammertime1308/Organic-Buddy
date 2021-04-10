import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLOR } from '../../styles';

const CartContainer = styled.TouchableOpacity`
  background-color: ${COLOR.GreenHeader};
  width: 50px;
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  elevation: 5;
  shadowColor: ${COLOR.Black};
  shadowOffset: { width: 0, height: 3};
`;

export const Cart = ({ onPress = () => {} }) => {
  return (
    <CartContainer activeOpacity={0.7} onPress={onPress}>
      <Icon name="ios-cart-outline" size={30} color={COLOR.White} />
    </CartContainer>
  );
};
