import styled from 'styled-components/native';

import { COLOR, FONT } from '../../styles';

export const StyledFooter = styled.View`
  height: 80;
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
  margin: 3px;
`;

export const SelectedView = styled.TouchableOpacity`
  background-color: ${COLOR.GreenHeader};
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 3px;
  border-radius: 6px;

  elevation: 10;
`;

export const TextUnselected = styled.Text`
  font-size: ${FONT.FontSizeSmall};
  width: 100%;
  text-align: center;
  color: ${COLOR.GreenHeader};
`;

export const TextSelected = styled.Text`
  font-size: ${FONT.FontSizeSmall};
  width: 100%;
  text-align: center;
`;
