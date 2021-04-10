import React from 'react';
import { Image, Text } from 'react-native';

import { StyledCard, Title, Description, Price } from './styles';

export const Card = ({
  id = '',
  productName = 'Title',
  productDescription = 'Description',
  productPrice = 0,
  productImages = [],
  onPress = () => {},
}) => {
  return (
    <StyledCard onPress={onPress} activeOpacity={0.75}>
      {productImages.length !== 0 ? (
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
      ) : (
        <Text />
      )}
      <Title>{productName}</Title>
      <Description>{productDescription}</Description>
      <Price>Price: {productPrice} Rs</Price>
    </StyledCard>
  );
};
