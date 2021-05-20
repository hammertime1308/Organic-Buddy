import React, { useState } from 'react';
import { Modal, Text, Button, ActivityIndicator, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

import { placeOrder } from '../../api';

import { COLOR, FONT } from '../../styles';

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

const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.View`
  background-color: ${COLOR.White};
  width: 80%;
  height: 70%;
  border-radius: 5px;
  align-items: center;
  padding: 20px;
`;

const ItemContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  margin: 10px;
  margin-top: 10px;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  background-color: red;
  top: 20px;
  right: 10px;
  border-radius: 50px;
  padding: 5px;
`;

export const CartIcon = ({ onPress = () => {} }) => {
  return (
    <CartContainer activeOpacity={0.7} onPress={onPress}>
      <Icon name="shopping-cart" size={25} color={COLOR.White} />
    </CartContainer>
  );
};

export const CartModal = ({ visible, cart, closeModal, userId, clearCart }) => {
  const [loading, setLoading] = useState(false);

  const header = ['Name', 'Quantity', 'Price'];
  const data = cart.map(item => [item.name, item.count, item.price]);
  let amount = 0;

  if (cart.length !== 0) {
    amount = cart.map(item => item.count * item.price).reduce((a, b) => a + b);
  }

  const checkout = async () => {
    setLoading(true);
    if (cart.length === 0) {
      alert('Add items then checkout');
      setLoading(false);
      return;
    }
    let response = await placeOrder(
      userId,
      amount,
      cart.map(item => {
        return {
          productId: item.id,
          name: item.name,
          quantity: item.count,
          price: item.price,
        };
      }),
    );
    if (response.status === 200) {
      alert('Order placed successfully');
      clearCart();
    } else {
      alert(response.data);
    }
    setLoading(false);
    closeModal();
  };

  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={closeModal}
      animationType="fade">
      <ModalContainer>
        <ModalView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: `${COLOR.GreenHeader}`,
              marginBottom: 20,
            }}>
            Cart
          </Text>

          <CloseButton activeOpacity={0.8} onPress={closeModal}>
            <Icon name="cancel" size={20} color="white" />
          </CloseButton>

          {loading ? (
            <ActivityIndicator
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              size={50}
              color="green"
            />
          ) : (
            <View
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ItemContainer>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                  <Row
                    data={header}
                    style={{ height: 40, backgroundColor: '#f1f8ff' }}
                    textStyle={{ margin: 6, fontWeight: '700' }}
                  />
                  <Rows data={data} textStyle={{ margin: 6 }} />
                </Table>
              </ItemContainer>
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: 10,
                  color: `${COLOR.GreenHeader}`,
                  fontWeight: `${FONT.FontWeightBold}`,
                }}>
                Rs. {amount}
              </Text>
              <Button color={'green'} title="checkout" onPress={checkout} />
            </View>
          )}
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};
