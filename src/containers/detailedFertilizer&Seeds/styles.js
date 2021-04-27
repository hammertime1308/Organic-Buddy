import styled from 'styled-components/native';

import { COLOR } from '../../styles';

export const DetailsContainer = styled.View`
  flex: 1;
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  margin: 15px;
`;

export const CartContainer = styled.View`
  position: absolute;
  width: 150px;
  height: 50px;
  bottom: 0px;
  right: 0px;
  margin: 20px;
`;

export const AddItem = styled.TouchableOpacity`
  background-color: ${COLOR.GreenHeader};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  elevation: 3;
`;

export const IncreaseCount = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const Count = styled.TouchableOpacity`
  background-color: ${COLOR.GreenHeader};
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 5px;
  elevation: 3;
`;
