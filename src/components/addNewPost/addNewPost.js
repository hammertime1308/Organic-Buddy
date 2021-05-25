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
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import styled from 'styled-components/native';

import { newPost } from '../../api';

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
  height: 500px;
  border-radius: 5px;
  align-items: center;
`;

export const AddNewPost = ({ visible, user, closeModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [loading, setLoading] = useState(false);

  const clearData = () => {
    setTitle('');
    setDescription('');
    setImage('');
  };

  const isValid = () => {
    if (title === '') {
      alert('Add Post title');
      return false;
    } else if (description === '') {
      alert('Add Post description');
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
    if (isValid()) {
      setLoading(true);
      let response = await newPost(
        user.userId,
        title,
        description,
        image === '' ? [] : [image],
      );
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
            Create a new post
          </Text>
          {loading ? (
            <ActivityIndicator
              style={{
                alignItems: 'center',
                height: 400,
                width: '100%',
              }}
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
                placeholder="Title for post (3-4 words)"
                value={title}
                onChangeText={setTitle}
                style={{
                  borderColor: 'black',
                  borderWidth: 0.2,
                  textAlign: 'center',
                  marginTop: 20,
                }}
              />
              <TextInput
                placeholder="Description of post (explain the issue)"
                value={description}
                onChangeText={setDescription}
                style={{
                  borderColor: 'black',
                  borderWidth: 0.2,
                  textAlign: 'center',
                  marginTop: 20,
                  marginBottom: 20,
                }}
              />

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
              Post
            </Text>
          </TouchableOpacity>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};
