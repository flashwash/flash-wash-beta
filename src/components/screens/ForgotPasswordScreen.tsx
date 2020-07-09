import React, {memo, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {emailValidator} from '../../../src/components/helpers/utils';
import BackButton from '../BackButton';
import Logo from '../helpers/logo';
import TextInput from '../helpers/TextInput';
import {Navigation} from '../../types';

type Props = {
  navigation: Navigation;
};

const ForgotPasswordScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={() => navigation.navigate('LoginScreen')} />
      <Logo />
      <Text style={styles.txtSignUp}>
        Ingresa el correo electronico con el que te registraste
      </Text>
      <View style={styles.containerInputs}>
        <TextInput
          accessibilityStates
          label={'E-mail'}
          returnKeyType={'done'}
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize={'none'}
          autoCompleteType={'email'}
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
        />
      </View>
      <View style={styles.containerResetPassword}>
        <TouchableOpacity
          style={styles.btnResetPassword}
          onPress={_onSendPressed}>
          <Text style={styles.txtResetPassword}>Regenerar contraseña</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.txtLogin}>← Regresar a inicio de sesion</Text>
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
  txtSignUp: {
    fontSize: 12,
    color: '#0F4C81',
    fontWeight: '500',
    marginTop: 30,
    alignSelf: 'center',
  },
  containerInputs: {
    flexDirection: 'column',
    marginHorizontal: 40,
  },
  containerResetPassword: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginTop: 24,
  },
  btnResetPassword: {
    backgroundColor: '#4FC3F7',
    borderRadius: 24,
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtResetPassword: {
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
    fontWeight: '500',
  },
});

export default memo(ForgotPasswordScreen);
