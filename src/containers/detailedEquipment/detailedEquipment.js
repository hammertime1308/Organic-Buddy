import React, { useContext, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Linking,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Gallery from 'react-native-image-gallery';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header } from '../../components';

import Context from '../../context';

import { deleteEquipment } from '../../api';

import { NavigationService } from '../../utilities';

import {
  DetailsContainer,
  DescriptionContainer,
} from '../detailedFertilizer&Seeds/styles';
import { COLOR, FONT } from '../../styles';

export const DetailedScreenEquipment = props => {
  const {
    equipmentDescription,
    equipmentImages,
    equipmentName,
    equipmentPrice,
    equipmentType,
    id,
    sellerId,
    sellerContact,
    setCount,
  } = props.navigation.state.params;

  const [context, setContext] = useContext(Context);
  const [loading, setLoading] = useState(false);

  const handleDelete = async id => {
    setLoading(true);
    let response = await deleteEquipment(id);
    if (response.status === 200) {
      alert('Deleted successfully');
      NavigationService.back();
    } else {
      alert(response.data);
    }
    setCount(prevState => prevState + 1);
    setLoading(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Header>{equipmentName}</Header>
      <Header />
      <DetailsContainer>
        {equipmentImages.length !== 0 ? (
          <Gallery
            pageMargin={10}
            style={{ margin: 10 }}
            images={equipmentImages.map(item => ({
              source: { uri: item },
            }))}
          />
        ) : (
          <View />
        )}
        <ScrollView>
          <DescriptionContainer>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Advertisement Type
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              {equipmentType}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                marginBottom: 10,
              }}>
              Description
            </Text>
            <Text style={{ fontSize: 15 }}>{equipmentDescription}</Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
                marginTop: 20,
              }}>
              Price
            </Text>
            <Text style={{ fontSize: 15 }}>Rs. {equipmentPrice}</Text>
          </DescriptionContainer>
        </ScrollView>
      </DetailsContainer>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: `${COLOR.GreenHeader}`,
          height: '10%',
          justifyContent: 'center',
        }}
        onPress={() => Linking.openURL(`tel:+91-${sellerContact}`)}
        activeOpacity={0.8}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: 20,
            color: `${COLOR.White}`,
            fontWeight: `${FONT.FontWeightBold}`,
          }}>
          Call seller
        </Text>
      </TouchableOpacity>
      {context.get('user').userId === sellerId ? (
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            bottom: '10%',
            right: 0,
            margin: 15,
            borderRadius: 50,
            elevation: 5,
          }}
          activeOpacity={0.8}
          onPress={() => handleDelete(id)}>
          {loading ? (
            <ActivityIndicator
              color="white"
              size={30}
              style={{ padding: 10 }}
            />
          ) : (
            <Icon
              style={{ padding: 10 }}
              name="delete"
              size={30}
              color="white"
            />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
