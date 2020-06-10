import React, {memo} from 'react';
import Background from '../Background';
import Logo from '../../../src/components/helpers/logo';
import Header from '../helpers/Header';
import Button from '../Button';
// import Paragraph from '../Paragraph';
import {Navigation} from '../../types';

type Props = {
  navigation: Navigation;
};

const WelcomeScreen = ({navigation}: Props) => (
  <Background>
    <Logo />
    <Header>Flash Wash</Header>
    <Button
      accessibilityStates
      mode={'contained'}
      onPress={() => navigation.navigate('LoginScreen')}>
      Iniciar Sesión
    </Button>
    <Button
      accessibilityStates
      mode={'outlined'}
      onPress={() => navigation.navigate('RegisterScreen')}>
      Registrarse
    </Button>
  </Background>
);

export default memo(WelcomeScreen);
