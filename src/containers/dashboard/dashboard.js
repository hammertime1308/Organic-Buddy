import React, { useContext, useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Context from '../../context';
import { Footer, Header } from '../../components';

import { getDashboardData } from '../../api';
import { NavigationService } from '../../utilities';

import {
  UserAvatarContainer,
  UserAvatar,
  NameText,
  ContactText,
  EmailText,
  DetailCardContainer,
  AvatarDetailContainer,
  GreenCurvature,
  TimestampContainer,
  TypeImage,
  Data,
  DataContainer,
  CardFooter,
  Card,
  CardContainer,
  LogoutButton,
  LogoutText,
} from './styles';

export const Dashboard = () => {
  const [context, setContext] = useContext(Context);
  const user = context.get('user');

  Moment.locale('en');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const getData = async () => {
    let response = await getDashboardData(user.userId);
    if (response.status === 200) {
      response.data.timestamp = Moment(response.data.timestamp).format(
        'DD/MM/YYYY',
      );
      setData(response.data);
      setLoading(false);
    } else {
      alert(response.data);
    }
    // check for data and modify loading
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
      <View style={{ flex: 1 }}>
        <Header>Dashboard</Header>
        <GreenCurvature />
        <AvatarDetailContainer>
          <View>
            <UserAvatarContainer>
              <UserAvatar source={require('../../assets/icons/farmer.png')} />
            </UserAvatarContainer>
            <LogoutButton
              activeOpacity={0.9}
              onPress={async () => {
                await AsyncStorage.clear();
                NavigationService.replace('UserAuth');
              }}>
              <LogoutText>Logout</LogoutText>
            </LogoutButton>
          </View>
          <DetailCardContainer>
            <NameText>
              {user.firstName} {user.lastName}
            </NameText>
            <ContactText>+91-{user.contact}</ContactText>
            <EmailText>{user.email}</EmailText>
          </DetailCardContainer>
        </AvatarDetailContainer>
        {loading ? (
          <ActivityIndicator size={50} color="green" style={{ top: 100 }} />
        ) : (
          <CardContainer>
            <Card marginLeft={'0px'} marginRight={'8px'}>
              <DataContainer>
                <Data>{data.temperature}</Data>
                <TypeImage
                  source={require('../../assets/icons/temperature.png')}
                />
              </DataContainer>
              <CardFooter>Temperature</CardFooter>
            </Card>
            <Card marginLeft={'8px'} marginRight={'0px'}>
              <DataContainer>
                <Data>{data.soil_moisture}</Data>
                <TypeImage
                  source={require('../../assets/icons/moisture.png')}
                />
              </DataContainer>
              <CardFooter>Soil Moisture</CardFooter>
            </Card>
            <TimestampContainer>
              <Text style={{ fontSize: 10 }}>Updated at: {data.timestamp}</Text>
            </TimestampContainer>
          </CardContainer>
        )}
      </View>
      <Footer selected={'dashboard'} />
    </View>
  );
};
