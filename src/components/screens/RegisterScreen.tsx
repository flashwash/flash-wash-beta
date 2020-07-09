import React, {memo, useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {emailValidator, passwordValidator} from '../helpers/utils';
import Logo from '../../../src/components/helpers/logo';
import TextInput from '../helpers/TextInput';
import BackButton from '../BackButton';
import {Navigation} from '../../types';
import {AuthContext} from '../../navigation/authProvider';
import {Headline} from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const {register} = useContext(AuthContext);

  const onRegisterPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    register(email, password);
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={() => navigation.navigate('WelcomeScreen')} />
      <Logo />
      <Headline style={styles.registerText}>Crea una nueva cuenta</Headline>
      <View style={styles.containerInputs}>
        <TextInput
          accessibilityStates
          label={'Email'}
          returnKeyType={'next'}
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          accessibilityStates
          label={'Contraseña'}
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
      </View>
      <View style={styles.containerRegister}>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => onRegisterPressed()}>
          <Text style={styles.txtRegister}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.txtLogin}>Ya tienes una cuenta? Inicia Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  registerText: {
    marginTop: 30,
    marginBottom: 10,
    fontFamily: 'Impact',
    alignSelf: 'center',
  },
  containerInputs: {
    flexDirection: 'column',
    marginHorizontal: 40,
    marginTop: 5,
  },
  containerRegister: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginTop: 24,
  },
  btnRegister: {
    backgroundColor: '#4FC3F7',
    borderRadius: 24,
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtRegister: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 17,
  },
  btnLogin: {
    alignSelf: 'center',
    marginTop: 25,
  },
  txtLogin: {
    fontSize: 14,
    color: '#0F4C81',
    fontWeight: 'bold',
  },
});

export default memo(RegisterScreen);
