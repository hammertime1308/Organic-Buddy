import styled from 'styled-components/native';

import { COLOR, FONT } from '../../styles';

export const UserAvatarContainer = styled.View`
  background-color: ${COLOR.White};
  padding: 10px;
  border-radius: 50px;
  elevation: 10;
  shadow-color: ${COLOR.Black};
  shadow-offset: {width:2, height:2};
`;

export const UserAvatar = styled.Image`
  width: 70px;
  height: 70px;
`;

export const NameText = styled.Text`
  color: ${COLOR.White};
  font-size: 20px;
  align-self: center;
  font-weight: ${FONT.FontWeightBold};
  text-transform: capitalize;
`;

export const ContactText = styled.Text`
  padding-top: 5px;
  color: ${COLOR.White};
  font-size: 13px;
  align-self: center;
`;

export const EmailText = styled.Text`
  color: ${COLOR.White};
  font-size: 13px;
  align-self: center;
`;

export const DetailCardContainer = styled.View`
  background-color: ${COLOR.GreenHeader};
  flex: 4;
  elevation: 10;
  margin-left: 30px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  justify-content: center;
`;

export const AvatarDetailContainer = styled.View`
  flex-direction: row;
  position: absolute;
  top: 15%;
  left: 5%;
  right: 5%;
`;

export const GreenCurvature = styled.View`
  height: 40%;
  background-color: ${COLOR.GreenHeader};
  border-bottom-start-radius: 200px;
  border-bottom-right-radius: 200px;
  transform: scaleX(2);
`;

export const TimestampContainer = styled.View`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: -30px;
  align-items: center;
`;

export const TypeImage = styled.Image`
  align-self: flex-end;
  top: 10px;
  bottom: 10px;
  right: 10px;
  width: 70px;
  height: 70px;
`;

export const Data = styled.Text`
  font-size: 35px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 5px;
`;

export const DataContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const CardFooter = styled.Text`
  margin-bottom: 20px;
  font-weight: ${FONT.FontWeightBold};
  font-size: ${FONT.FontSizeHeader};
  align-self: center;
`;

export const Card = styled.View`
  flex: 1;
  background-color: #e6e6e6;
  border-radius: 10px;
  elevation: 5;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  shadow-offset: {width:0 ,height: 5};
`;

export const CardContainer = styled.View`
  flex-direction: row;
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 3px;
  elevation: 3;
`;

export const LogoutText = styled.Text`
  padding: 8px;
  font-weight: bold;
`;
