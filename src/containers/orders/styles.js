import styled from 'styled-components/native';

export const OrderView = styled.View`
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  margin: 10px;
`;

export const OrderCardContainer = styled.View`
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  elevation: 2;
`;

export const HorizontalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StatusText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.status === 'delivered' ? 'green' : 'yellow')};
`;
