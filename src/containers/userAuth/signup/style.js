import styled from 'styled-components/native';

import { COLOR, FONT } from '../../../styles';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const InputContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  flex: 2;
`;

export const Input = styled.TextInput`
  text-align: center;
  height: 50px;
  margin: 12px;
  border-width: 0.4px;
  padding-left: 1px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${COLOR.GreenHeader};
  justify-content: center;
  align-items: center;
  height: 70px;
`;

export const ButtonText = styled.Text`
  padding: 20px;
  font-size: ${FONT.FontSizeHeader}
  color: ${COLOR.White};
  font-weight: ${FONT.FontWeightBold}
  width: 100%;
  text-align: center;
`;
