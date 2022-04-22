import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps> `
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  padding: 13px 24px;
  margin-top: 8px ;

  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text `
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Amount = styled.Text `
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;