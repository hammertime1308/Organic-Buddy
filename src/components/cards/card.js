import React from 'react';
import { Image } from 'react-native';

import { NavigationService } from '../../utilities';

import { StyledCard, Title, Description, Price } from './styles';

export const Card = ({
  id = '',
  productName = 'Title',
  productDescription = 'Description',
  productPrice = 0,
  productImages = [],
}) => {
  return (
    <StyledCard
      onPress={() =>
        NavigationService.navigate('DetailedScreenFS', {
          id,
          productName,
          productDescription,
          productPrice,
          productImages,
        })
      }
      activeOpacity={0.75}>
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
      ) : null}
      <Title>{productName}</Title>
      <Description>{productDescription}</Description>
      <Price>Price: {productPrice} Rs</Price>
    </StyledCard>
  );
};
