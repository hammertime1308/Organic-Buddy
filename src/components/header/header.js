import React from 'react';
import styled from 'styled-components/native';

import { COLOR, FONT } from '../../styles';

const StyledHeader = styled.Text`
  background-color: ${COLOR.GreenHeader};
  padding-top: 10px;
  text-align: center;
  font-size: ${FONT.FontSizeHeader};
  color: ${COLOR.White};
  font-weight: ${FONT.FontWeightBold};
`;

export const Header = ({ children = '' }) => (
  <StyledHeader>{children}</StyledHeader>
);
