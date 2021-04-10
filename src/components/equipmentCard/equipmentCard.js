import React from 'react';
import { Image, View, Text } from 'react-native';

import { Type, StyledCard, Title, Description, Price } from './styles';

export const EquipmentCard = ({
  id = '',
  equipmentName = 'Title',
  equipmentDescription = 'Description of equipment',
  equipmentPrice = 0,
  equipmentImages = [],
  equipmentType = '',
  sellerId = '',
  onPress = () => {},
}) => {
  return (
    <StyledCard id={id} onPress={onPress} activeOpacity={0.75}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Type type={equipmentType} />
        <View style={{ flex: 1 }}>
          {equipmentImages.length !== 0 ? (
            <Image
              style={{
                width: '100%',
                height: 120,
                resizeMode: 'cover',
              }}
              source={{
                uri: `${equipmentImages[0]}`,
              }}
            />
          ) : (
            <Text />
          )}
          <Title>{equipmentName}</Title>
          <Description>{equipmentDescription}</Description>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Price>Price: {equipmentPrice} Rs</Price>
            <Price>Ad Type: {equipmentType}</Price>
            <Price>Seller: {sellerId}</Price>
          </View>
        </View>
      </View>
    </StyledCard>
  );
};
