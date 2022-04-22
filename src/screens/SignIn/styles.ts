import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import theme from "../../global/styles/theme";

export const Container = styled.View `
  flex: 1;
`;

export const Header = styled.View `
  width: 100%;
  height: 70%;

  justify-content: flex-end;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TitleWrapper = styled.View `
  align-items: center;
`;

export const Title = styled.Text `
  margin-top: 45px;

  text-align: center;

  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
`;

export const  SignInTitle = styled.Text `
  margin-top: 45px;
  margin-bottom: 67px;
  text-align: center;

  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Footer = styled.View `
  width: 100%;
  height: 30%;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  marginTop: 18,
  color: theme.colors.primary
})``;

export const FooterWrapper = styled.View `
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;

  justify-content: space-between;
`;