import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../Background';
import Logo from '../helpers/logo';
import Button from '../Button';
import TextInput from '../TextInput';
import BackButton from '../BackButton';
import {theme} from '../../assets/theme';
import {emailValidator, passwordValidator} from '../helpers/utils';
import {Navigation} from '../../types';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    navigation.navigate('Main');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('WelcomeScreen')} />

      <Logo />
      <View style={styles.textContainer}>
        <TextInput
          accessibilityStates
          label={'Email'}
          returnKeyType={'next'}
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize={'none'}
          autoCompleteType={'email'}
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
        />

        <TextInput
          accessibilityStates
          label={'Contraseña'}
          returnKeyType={'done'}
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.label}>Olvidaste Tú Contraseña?</Text>
        </TouchableOpacity>
      </View>

      <Button accessibilityStates mode={'contained'} onPress={_onLoginPressed}>
        Iniciar Sesion
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>No Tienes Una Cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  textContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 60,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: '#00008B',
  },
});

export default memo(LoginScreen);
