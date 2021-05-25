import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { signUp } from '../../../api';
import { NavigationService } from '../../../utilities';

import {
  Wrapper,
  InputContainer,
  Input,
  ButtonContainer,
  ButtonText,
} from './style';

export const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = (firstName, lastName, email, contact, password) => {
    let reg = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      contact === '' ||
      password === ''
    ) {
      alert('Enter credentials');
      return false;
    } else if (!email.match(reg)) {
      alert('Invalid email');
      setEmail('');
      return false;
    } else if (contact.length !== 10) {
      alert('Invalid contact');
      setContact('');
      return false;
    } else if (password.length < 4) {
      alert('Password length is small');
      setPassword('');
      return false;
    }
    return true;
  };

  const submitBtn = async () => {
    if (validate(firstName, lastName, email, contact, password)) {
      setLoading(true);
      const response = await signUp(
        firstName,
        lastName,
        email,
        contact,
        password,
      );
      // check response
      if (response.status === 200) {
        // response is success, store data
        alert('Registration successfull\nPlease Login');
      } else {
        alert(response.data);
        setEmail('');
        setContact('');
        setPassword('');
      }
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <InputContainer>
        <ScrollView>
          <Input
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />
          <Input
            placeholder="Last Name"
            onChangeText={setLastName}
            value={lastName}
          />
          <Input placeholder="Email" onChangeText={setEmail} value={email} />
          <Input
            placeholder="Contact Number"
            onChangeText={setContact}
            value={contact}
            keyboardType="numeric"
          />
          <Input
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </ScrollView>
      </InputContainer>
      <ButtonContainer activeOpacity={0.8} onPress={submitBtn}>
        {loading ? (
          <ActivityIndicator
            style={{ padding: 20 }}
            size="large"
            color="white"
          />
        ) : (
          <ButtonText>SIGN UP</ButtonText>
        )}
      </ButtonContainer>
    </Wrapper>
  );
};
