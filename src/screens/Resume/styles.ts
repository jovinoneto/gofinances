import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import theme from "../../global/styles/theme";

export const Container = styled.View `
  flex: 1;
  background-color: ${ ({ theme }) => theme.colors.background };
`;

export const Header = styled.View `
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${ RFValue(100) }px;

  background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const LoadContainer = styled.View `
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: theme.colors.primary
})``;

export const Title = styled.Text `
  font-size: ${ RFValue(18) }px;
  font-family: ${ ({ theme }) => theme.fonts.regular };

  color: ${ ({ theme }) => theme.colors.shape };
`;

export const MonthSelect = styled.View `
  width: 100%;

  padding: 10px 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentScrollView = styled.ScrollView.attrs(props => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24
  }
})) ``;


export const MonthSelectButton = styled(BorderlessButton) ``;

export const MonthSelectIcon = styled(Feather) `
  font-size: ${RFValue(24)}px;
`;

export const Month = styled.Text `
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const ChartContainer = styled.View `
  width: 100%;
  align-items: center;
`;
