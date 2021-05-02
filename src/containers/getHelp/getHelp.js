import React, { useState } from 'react';
import { View } from 'react-native';

import { Header, Footer } from '../../components';
import { Forum } from './forum/forum';
import { Chat } from './chatbot/chat';

import { ButtonText, Container, SelectedButtonText } from './styles';

export const GetHelp = () => {
  const [index, setIndex] = useState(1);

  const RenderScreen = () => {
    switch (index) {
      case 1:
        return <Forum />;
      case 2:
        return <Chat />;
    }
  };

  return (
    <View style={{ height: '100%' }}>
      <Header>GET HELP</Header>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: 'rgba(76, 154, 42, 1)',
        }}>
        <Container onPress={() => setIndex(1)}>
          {index === 1 ? (
            <SelectedButtonText>Forum</SelectedButtonText>
          ) : (
            <ButtonText>Forum</ButtonText>
          )}
        </Container>
        <Container onPress={() => setIndex(2)}>
          {index === 2 ? (
            <SelectedButtonText>ChatBot</SelectedButtonText>
          ) : (
            <ButtonText>ChatBot</ButtonText>
          )}
        </Container>
      </View>
      <RenderScreen />
      <Footer selected="getHelp" />
    </View>
  );
};
