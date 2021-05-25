import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import styled from 'styled-components/native';

import { addNewEquipment } from '../../api';

import { COLOR } from '../../styles';

const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.View`
  background-color: ${COLOR.White};
  width: 90%;
  height: 90%;
  border-radius: 5px;
  align-items: center;
`;

export const AddEquipmentModal = ({ visible, user, closeModal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [checked, setChecked] = useState('Sell');

  const [loading, setLoading] = useState(false);

  const clearData = () => {
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
    setChecked('Sell');
  };

  const isValid = (name, description, price) => {
    if (name === '') {
      alert('Add equipment name');
      return false;
    } else if (description === '') {
      alert('Add some description');
      return false;
    } else if (price === '') {
      alert('Add price');
      return false;
    }
    return true;
  };

  const selectImages = async () => {
    let options = {
      title: 'Select Image',
      mediaType: 'photo',
      quality: 0.3,
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setImage('');
      } else if (response.error) {
        alert('Error: ', response.error);
      } else {
        setImage(response.base64);
      }
    });
  };

  const apiCall = async () => {
    if (isValid(name, description, price)) {
      setLoading(true);
      let response = await addNewEquipment({
        equipmentName: name,
        equipmentDescription: description,
        equipmentPrice: price,
        equipmentImages: image === '' ? [] : [image],
        equipmentType: checked,
        sellerId: user.userId,
        sellerContact: user.contact,
      });
      setLoading(false);
      if (response.status === 200) {
        clearData();
        closeModal();
      } else {
        alert(response.data);
      }
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={() => {
        clearData();
        closeModal();
      }}
      animationType="fade">
      <ModalContainer>
        <ModalView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: `${COLOR.GreenHeader}`,
              paddingTop: 20,
            }}>
            Advertise for equipment
          </Text>
          {loading ? (
            <ActivityIndicator
              style={{ position: 'absolute', top: '50%' }}
              size={50}
              color={COLOR.GreenHeader}
            />
          ) : (
            <ScrollView
              style={{
                flex: 1,
                width: '100%',
                padding: 20,
              }}>
              <TextInput
                placeholder="Name of equipment"
                value={name}
                onChangeText={setName}
                style={{
                  borderColor: 'black',
                  borderWidth: 0.2,
                  textAlign: 'center',
                  marginTop: 20,
                }}
              />
              <TextInput
                placeholder="Description of equipment"
                value={description}
                onChangeText={setDescription}
                style={{
                  borderColor: 'black',
                  borderWidth: 0.2,
                  textAlign: 'center',
                  marginTop: 20,
                }}
              />
              <TextInput
                placeholder="Price"
                value={price}
                keyboardType="numeric"
                onChangeText={setPrice}
                style={{
                  borderColor: 'black',
                  borderWidth: 0.2,
                  textAlign: 'center',
                  marginTop: 20,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Sell</Text>
                <RadioButton
                  value="Sell"
                  status={checked === 'Sell' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Sell')}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Hire</Text>
                <RadioButton
                  value="Hire"
                  status={checked === 'Hire' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Hire')}
                />
              </View>

              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginBottom: 20,
                  alignSelf: 'center',
                }}
                source={{
                  uri: 'data:image/jpeg;base64,' + image,
                }}
              />

              <Button
                title="add image"
                color={COLOR.GreenHeader}
                onPress={selectImages}
              />
            </ScrollView>
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={apiCall}
            style={{
              backgroundColor: `${COLOR.GreenHeader}`,
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '10%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
              Submit
            </Text>
          </TouchableOpacity>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};
