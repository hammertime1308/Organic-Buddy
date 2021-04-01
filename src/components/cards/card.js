import React from 'react';
import { Image } from 'react-native';

import { StyledCard, Title, Description, Price } from './styles';

export const Card = ({
  title = 'Title',
  description = 'Description of product',
  price = 0,
  imageUri = 'https://cdn.croptrust.org/wp/wp-content/uploads/2014/12/about-us.jpg',
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
          uri: `${imageUri}`,
        }}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>Price: {price} Rs</Price>
    </StyledCard>
  );
};
