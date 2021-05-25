import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../../components';
import { LoginScreen } from './login/login';
import { SignUpScreen } from './signup/signup';

import { ButtonText, Container, SelectedButtonText } from './styles';

export const UserAuth = () => {
  const [index, setIndex] = useState(1);

  const RenderScreen = () => {
    switch (index) {
      case 1:
        return <LoginScreen />;
      case 2:
        return <SignUpScreen />;
    }
  };

  return (
    <View style={{ height: '100%' }}>
      <Header>WELCOME</Header>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: 'rgba(76, 154, 42, 1)',
          paddingBottom: 25,
          paddingTop: 25,
        }}>
        <Container onPress={() => setIndex(1)}>
          {index === 1 ? (
            <SelectedButtonText>Login</SelectedButtonText>
          ) : (
            <ButtonText>Login</ButtonText>
          )}
        </Container>
        <Container onPress={() => setIndex(2)}>
          {index === 2 ? (
            <SelectedButtonText>Sign Up</SelectedButtonText>
          ) : (
            <ButtonText>Sign Up</ButtonText>
          )}
        </Container>
      </View>
      <RenderScreen />
    </View>
  );
};
