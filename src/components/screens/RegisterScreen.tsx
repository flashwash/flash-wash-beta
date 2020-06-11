import React, {memo, useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background from '../Background';
import Logo from '../../../src/components/helpers/logo';
import Header from '../helpers/Header';
import Button from '../helpers/Button';
import TextInput from '../helpers/TextInput';
import BackButton from '../BackButton';
import {theme} from '../../assets/theme';
import {Navigation} from '../../types';
import {AuthContext} from '../../navigation/authProvider';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useContext(AuthContext);

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('WelcomeScreen')} />

      <Logo />

      <Header>Crea Una Cuenta</Header>

      <TextInput
        accessibilityStates
        label={'Email'}
        returnKeyType={'next'}
        value={email}
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        accessibilityStates
        label={'Contraseña'}
        returnKeyType="done"
        value={password}
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry
      />

      <Button
        accessibilityStates
        mode="contained"
        onPress={() => register(email, password)}
        style={styles.button}>
        Registrarse
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Inicia Sesión</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#00008B',
  },
});

export default memo(RegisterScreen);
