import React, { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { login } from '../../../api';
import { NavigationService } from '../../../utilities';
import Context from '../../../context';

import {
  Wrapper,
  InputContainer,
  Input,
  ButtonContainer,
  ButtonText,
} from './style';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [context, setContext] = useContext(Context);

  const validate = (email, password) => {
    if (email === '' || password === '') {
      return false;
    }
    return true;
  };

  const submitBtn = async () => {
    if (validate(email, password)) {
      setLoading(true);
      const response = await login(email, password);
      // check response
      if (response.status === 200) {
        // response is success, store data
        try {
          await AsyncStorage.setItem(
            '@userData',
            JSON.stringify(response.data),
          );
          await setContext({ user: response.data });
          NavigationService.navigate('Dashboard');
        } catch (e) {
          console.error(e);
        }
      } else if (response.status === 400) {
        alert(response.data);
        setPassword('');
      } else if (response.status === 404) {
        alert(response.data);
        setEmail('');
        setPassword('');
      } else {
        alert(response.data);
      }
      setLoading(false);
    } else {
      alert('Please enter credentials');
    }
  };

  return (
    <Wrapper>
      <InputContainer>
        <Input
          placeholder="Registered Email"
          onChangeText={setEmail}
          value={email}
        />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </InputContainer>
      <ButtonContainer activeOpacity={0.8} onPress={submitBtn}>
        {loading ? (
          <ActivityIndicator
            style={{ padding: 20 }}
            size="large"
            color="white"
          />
        ) : (
          <ButtonText>LOGIN</ButtonText>
        )}
      </ButtonContainer>
    </Wrapper>
  );
};
