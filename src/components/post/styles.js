import styled from 'styled-components/native';

import { COLOR, FONT } from '../../styles';

export const StyledPost = styled.TouchableOpacity`
  margin: 10px 10px 0px 10px;
  border-radius: 5px;

  backgroundColor: ${COLOR.White};
  shadowColor: ${COLOR.Black};
  shadowOpacity: 0.26;
  shadowOffset: { width: 0, height: 2};
  elevation: 3;
  overflow: hidden;
`;

export const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px;
`;

export const ColumnContainer = styled.View`
  flex: 2;
  flex-direction: column;
`;

export const Title = styled.Text`
  flex: 2;
  font-size: ${FONT.FontSizeHeader};
  font-weight: ${FONT.FontWeightBold};
`;

export const Description = styled.Text`
  flex: 1;
  font-size: ${FONT.FontSizeNormal};
  font-weight: ${FONT.FontWeightSlightBold};
`;

export const MetaDataContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

export const MetaDataText = styled.Text`
  margin-right: 5px;
  font-size: ${FONT.FontSizeSmall};
  font-weight: ${FONT.FontWeightSlightBold};
  color: ${COLOR.GrayColor};
`;
