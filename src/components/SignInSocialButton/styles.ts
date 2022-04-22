import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton) `
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
  border-radius: 5px;

  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ImageContainer = styled.View `
  align-items: center;
  justify-content: center;
  height: 100%;

  border-right-width: 1px;

  padding: ${RFValue(16)}px;
  border-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.Text `
  flex: 1;
  text-align: center;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
