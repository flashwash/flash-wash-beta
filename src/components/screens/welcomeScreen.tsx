import React, {memo} from 'react';
import Background from '../Background';
import Logo from '../../../src/components/helpers/logo';
import Button from '../helpers/Button';
import {Navigation} from '../../types';
import {StyleSheet} from 'react-native';
import {Headline} from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const WelcomeScreen = ({navigation}: Props) => (
  <Background>
    <Logo />
    <Headline style={styles.welcomeText}>Bienvenido</Headline>
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

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: 'Impact',
  },
});
