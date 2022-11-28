import styled, { css } from "styled-components/native";

import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  active: boolean;
}

export const Container = styled(TextInput)<Props>`
  width: 100%;
  padding: 18px 16px;
  margin-bottom: 8px;
  border-radius: 5px;

  font-size: ${ RFValue(14) }px;
  font-family: ${ ({ theme }) => theme.fonts.regular };

  color: ${ ({ theme }) => theme.colors.text_dark };
  background-color: ${ ({ theme }) => theme.colors.shape };

  ${({ active, theme}) => active && css`
    border-width: 3px;
    border-color: ${theme.colors.attention};
  `}
`;