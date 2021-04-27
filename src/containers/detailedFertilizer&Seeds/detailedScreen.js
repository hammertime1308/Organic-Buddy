import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import Gallery from 'react-native-image-gallery';

import { Header } from '../../components';
import Context from '../../context';

import {
  DetailsContainer,
  DescriptionContainer,
  CartContainer,
  AddItem,
  IncreaseCount,
  Count,
} from './styles';

export const DetailedScreenFS = props => {
  const [context, setContext] = useContext(Context);
  const cart = context.get('cart');

  const [count, setCount] = useState(0);

  const {
    id,
    productName,
    productDescription,
    productPrice,
    productImages,
  } = props.navigation.state.params;

  const item = cart.filter(items => items.id === id);

  const addToCartHandler = () => {
    setContext(prevState =>
      prevState.set('cart', [
        ...prevState.get('cart'),
        { id: id, name: productName, price: productPrice, count: 1 },
      ]),
    );
    setCount(prevState => prevState + 1);
  };

  const incrementCountHandler = () => {
    item[0].count++;
    setCount(prevState => prevState + 1);
  };

  const decrementCountHandler = () => {
    item[0].count--;
    if (item[0].count === 0) {
      item.splice(0, 1);
      let temp = cart.filter(item => item.id !== id);
      setContext(prevState => prevState.set('cart', temp));
    }
    setCount(prevState => prevState + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Header>{productName}</Header>
      <Header />
      <DetailsContainer>
        {productImages.length !== 0 ? (
          <Gallery
            pageMargin={10}
            style={{ margin: 10 }}
            images={productImages.map(item => ({
              source: { uri: item },
            }))}
          />
        ) : (
          <View />
        )}
        <DescriptionContainer>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            Description
          </Text>
          <Text style={{ fontSize: 15 }}>{productDescription}</Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10,
              marginTop: 20,
            }}>
            Price
          </Text>
          <Text style={{ fontSize: 15 }}>Rs. {productPrice}</Text>
        </DescriptionContainer>
      </DetailsContainer>
      <CartContainer>
        {item.length !== 0 ? (
          <IncreaseCount>
            <Count activeOpacity={0.8} onPress={incrementCountHandler}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>
                +
              </Text>
            </Count>
            <Text
              style={{
                flex: 1.5,
                height: '100%',
                textAlignVertical: 'center',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              {item[0].count}
            </Text>
            <Count activeOpacity={0.8} onPress={decrementCountHandler}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>
                -
              </Text>
            </Count>
          </IncreaseCount>
        ) : (
          <AddItem onPress={addToCartHandler} activeOpacity={0.8}>
            <Text style={{ fontWeight: '700', color: 'white' }}>
              Add to cart
            </Text>
          </AddItem>
        )}
      </CartContainer>
    </View>
  );
};
