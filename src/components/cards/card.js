import React from 'react';
import { Image } from 'react-native';

import { StyledCard, Title, Description, Price } from './styles';

export const Card = ({
  id = '',
  productName = 'Title',
  productDescription = 'Description',
  productPrice = 0,
  productImages = [
    'https://cdn.croptrust.org/wp/wp-content/uploads/2014/12/about-us.jpg',
  ],
  onPress = () => {},
}) => {
  return (
    <StyledCard onPress={onPress} activeOpacity={0.75}>
      <Image
        style={{
          width: '100%',
          height: 120,
          resizeMode: 'cover',
        }}
        source={{
          uri: `${productImages[0]}`,
        }}
      />
      <Title>{productName}</Title>
      <Description>{productDescription}</Description>
      <Price>Price: {productPrice} Rs</Price>
    </StyledCard>
  );
};
