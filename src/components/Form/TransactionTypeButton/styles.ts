import styled, { css } from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled.View<ContainerProps> `
  width: 48%;

  border-style: solid;
  border-radius: 5px;
  border-width: ${ ({ isActive }) => isActive ? 0 : 1.5 }px;
  border-color: ${ ({ theme }) => theme.colors.text };

  ${ ({ isActive, type }) => isActive && type === 'up' && css `
    background-color: ${ ({ theme }) => theme.colors.success_light }
  `}

${ ({ isActive, type }) => isActive && type === 'down' && css `
    background-color: ${ ({ theme }) => theme.colors.attention_light }
  `}
`;

export const Button = styled(RectButton) `
  padding: 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather)<IconsProps> `
  margin-right: 12px;
  font-size: ${ RFValue(24) }px;

  color: ${ ({ theme, type }) => 
    type === 'up' ? theme.colors.success : theme.colors.attention
  }
`;

export const Title = styled.Text `
  font-family: ${ ({ theme }) => theme.fonts.regular };
  font-size: ${ RFValue(14) }px;
`;

