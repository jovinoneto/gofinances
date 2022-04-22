import styled from "styled-components/native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View `
  flex: 1;
  background-color: ${ ({ theme }) => theme.colors.background };
`;

export const Header = styled.View `
  width: 100%;
  height: ${ RFValue(100) }px;

  align-items: center;
  justify-content: center;

  background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const Title = styled.Text `
  font-size: ${ RFValue(18) }px;
  font-family: ${ ({ theme }) => theme.fonts.regular };

  color: ${ ({ theme }) => theme.colors.shape };
`;

export const Form = styled.View `
  flex: 1;
  justify-content: space-between;
  width: 100%;

  padding: 24px;
`;

export const Fields = styled.View ``;

export const TransactionsTypes = styled.View `
  flex-direction: row;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 16px;
`;