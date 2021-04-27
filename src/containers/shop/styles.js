import styled from 'styled-components/native';

import { COLOR, FONT } from '../../styles';

export const ButtonText = styled.Text`
  font-size: ${FONT.FontSizeNormal};
  color: ${COLOR.WhiteUnselectedText};
  font-weight: ${FONT.FontWeightSlightBold};
`;

export const SelectedButtonText = styled.Text`
  font-size: ${FONT.FontSizeNormal};
  color: ${COLOR.WhiteSelectedText};
  font-weight: ${FONT.FontWeightBold};
`;

export const Header = styled.Text`
  background-color: ${COLOR.GreenHeader};
  padding-top: 10px;
  text-align: center;
  font-size: ${FONT.FontSizeHeader};
  color: ${COLOR.White};
  font-weight: ${FONT.FontWeightBold};
`;

export const Container = styled.TouchableOpacity`
  padding: 15px;
`;

export const Add = styled.TouchableOpacity`
  background-color: ${COLOR.GreenHeader};
  width: 50px;
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  elevation: 5;
  shadowColor: ${COLOR.Black};
  shadowOffset: { width: 0, height: 3};
`;
