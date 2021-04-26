import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, Image } from 'react-native';

import { NavigationService } from '../../utilities';

export const FlashScreen = () => {
  const Schema = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F0F0F0',
        }}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{ width: 300, height: 300, marginTop: '30%' }}
        />
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Text style={{ marginTop: 50, fontSize: 30, fontWeight: 'bold' }}>
            {item.title}
          </Text>
          <Text style={{ marginTop: 20, fontSize: 15 }}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const slides = [
    {
      key: 1,
      title: 'Organic Buddy',
      text: 'Your one stop application for all your farming needs',
      image: require('../../assets/icons/organic.png'),
    },
    {
      key: 2,
      title: 'Forum',
      text: 'Enabling communication with local community',
      image: require('../../assets/icons/communicate.png'),
    },
    {
      key: 3,
      title: 'Shop',
      text: 'Shop all your needs for organic farming',
      image: require('../../assets/icons/tractor.png'),
    },
  ];

  const renderButton = title => {
    return (
      <View
        style={{
          width: 80,
          height: 50,
          backgroundColor: 'green',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={Schema}
      data={slides}
      activeDotStyle={{ backgroundColor: 'green' }}
      renderNextButton={() => renderButton('Next')}
      renderSkipButton={() => renderButton('Skip')}
      renderDoneButton={() => renderButton('Done')}
      onDone={() => NavigationService.replace('UserAuth')}
      onSkip={() => NavigationService.replace('UserAuth')}
      showSkipButton
    />
    //
  );
};
