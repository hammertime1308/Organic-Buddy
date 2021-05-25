import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

export const DiseasePrediction = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');

  const selectImages = async () => {
    let options = {
      title: 'Select Image',
      mediaType: 'photo',
      quality: 0.8,
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

  const predict = async () => {
    if (image === '') {
      alert('Select image first');
      return;
    }
    // image is selected, call api
    setLoading(true);
    let response = await axios.post(`http://${url}:5000/predict`, {
      image: image,
    });
    if (response.status === 200) {
      alert(
        `Plant = ${response.data.name}\nDisease = ${response.data.disease}`,
      );
    } else {
      alert(response.data);
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          size={50}
          style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
          color="green"
        />
      ) : (
        <View
          style={{
            alignItems: 'center',
            padding: 20,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'green',
              marginBottom: 30,
            }}>
            Disease Prediction
          </Text>
          <TextInput
            placeholder="URL for prediction"
            value={url}
            onChangeText={setUrl}
            style={{
              width: '80%',
              borderColor: 'black',
              borderWidth: 0.2,
              textAlign: 'center',
              marginBottom: 10,
            }}
          />

          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={{
              uri: 'data:image/jpeg;base64,' + image,
            }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={selectImages}
            style={{
              backgroundColor: 'red',
              padding: 10,
              marginBottom: 20,
              elevation: 3,
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>
              Select Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={predict}
            style={{ backgroundColor: 'green', padding: 10, elevation: 3 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>
              Predict
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
