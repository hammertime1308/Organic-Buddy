import styled from 'styled-components/native';

import { COLOR, FONT } from '../../styles';

export const StyledCard = styled.TouchableOpacity`
  border-radius: 15px;
  margin: 20px 20px 0px 20px;
  border: 1px solid ${COLOR.BlackBorder};
  display: flex;
  flex-direction: column;

  backgroundColor: ${COLOR.White};
  shadowColor: ${COLOR.Black};
  shadowOpacity: 0.26;
  shadowOffset: { width: 0, height: 2};
  elevation: 3;
  overflow: hidden;
`;

export const Title = styled.Text`
  font-size: ${FONT.FontSizeHeader};
  font-weight: ${FONT.FontWeightBold};
  margin: 10px 15px 5px 15px;
`;

export const Description = styled.Text`
  font-size: ${FONT.FontSizeNormal};
  margin: 0px 15px 10px 15px;
`;

export const Price = styled.Text`
  font-size: ${FONT.FontSizeNormal};
  margin: 0px 15px 10px 15px;
  font-weight: ${FONT.FontWeightSlightBold};
`;
