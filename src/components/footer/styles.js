import styled from 'styled-components/native';

import { COLOR, FONT } from '../../styles';

export const StyledFooter = styled.View`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${COLOR.FooterUnselectedBackground};
`;

export const NormalView = styled.TouchableOpacity`
  background-color: ${COLOR.FooterUnselectedBackground};
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const SelectedView = styled.TouchableOpacity`
  background-color: ${COLOR.GreenHeader};
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 6px;

  elevation: 3;
`;

export const TextUnselected = styled.Text`
  font-size: ${FONT.FontSizeSmall};
  font-weight: ${FONT.FontWeightBold};
  width: 100%;
  text-align: center;
  color: ${COLOR.GreenHeader};
`;

export const TextSelected = styled.Text`
  font-size: ${FONT.FontSizeSmall};
  font-weight: ${FONT.FontWeightBold};
  color: ${COLOR.WhiteSelectedText};
  width: 100%;
  text-align: center;
`;
