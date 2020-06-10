import React, {memo, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {emailValidator} from '../../../src/components/helpers/utils';
import Background from '../Background';
import BackButton from '../BackButton';
import Logo from '../helpers/logo';
import Header from '../helpers/Header';
import TextInput from '../helpers/TextInput';
import {theme} from '../../assets/theme';
import Button from '../Button';
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
    <Background>
      <BackButton goBack={() => navigation.navigate('LoginScreen')} />

      <Logo />

      <Header>Recuperar Contraseña</Header>

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

      <Button
        accessibilityStates
        mode={'contained'}
        onPress={_onSendPressed}
        style={styles.button}>
        Mandar Instrucciones
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.label}>← Regresar a inicio de sesion</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
