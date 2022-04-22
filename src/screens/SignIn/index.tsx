import React, { useState } from "react";

import { Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import { useAuth } from "../../hooks/auth";
import { SignInSocialButton } from "../../components/SignInSocialButton";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  LoadIndicator,
  FooterWrapper
} from "./styles";

export function SignIn() {
  const [isLoading, setIsloading] = useState(false);
  const {signInWithGoogle, signInWithApple} = useAuth();

  async function handleSignInWithGoogle() {
    try {
      setIsloading(true);
      await signInWithGoogle();

    } catch (error) {
      console.log(error);
      Alert.alert('Error ao conectar a conta google!');
      setIsloading(false);
    }
  }
  
  async function handleSignInWithApple() {
    try {
      setIsloading(true);
      await signInWithApple();

    } catch (error) {
      console.log(error);
      Alert.alert('Error ao conectar a conta apple!');
      setIsloading(false);
      
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          {
            Platform.OS === 'ios' &&
            <SignInSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSignInWithApple}
            />
          }
        </FooterWrapper>

        {
          isLoading && <LoadIndicator />
        }
      </Footer>
    </Container>
  )
}