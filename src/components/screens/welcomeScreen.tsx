import React, {memo} from 'react';
import Logo from '../../../src/components/helpers/logo';
import {Navigation} from '../../types';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Headline} from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const WelcomeScreen = ({navigation}: Props) => (
  <View style={styles.container}>
    <Logo />
    <Headline style={styles.welcomeText}>Bienvenido a Flash Wash</Headline>
    <View style={styles.containerSignIn}>
      <TouchableOpacity
        style={styles.btnSignIn}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.txtSignIn}>Iniciar Sesion</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default memo(WelcomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  welcomeText: {
    marginTop: 30,
    marginBottom: 40,
    fontFamily: 'Impact',
    alignSelf: 'center',
  },
  containerSignIn: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    marginHorizontal: 80,
    marginTop: 24,
  },
  btnSignIn: {
    backgroundColor: '#4FC3F7',
    borderRadius: 24,
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSignIn: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 17,
  },
});
