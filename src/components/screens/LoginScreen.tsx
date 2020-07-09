import React, {memo, useState, useContext} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import Logo from '../../../src/components/helpers/logo';
import TextInput from '../helpers/TextInput';
import BackButton from '../BackButton';
import {theme} from '../../assets/theme';
import {emailValidator, passwordValidator} from '../helpers/utils';
import {Navigation} from '../../types';
import {AuthContext} from '../../navigation/authProvider';
import {LoginManager} from 'react-native-fbsdk';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const {login} = useContext(AuthContext);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    login(email, password);
  };

  const onFBLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function(result) {
        if (result.isCancelled) {
          Alert.alert('Cancelaste iniciar sesion con facebook');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={() => navigation.navigate('WelcomeScreen')} />
      <Logo />
      <View style={styles.containerInputs}>
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
      <TouchableOpacity
        style={styles.btnSignUp}
        onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.label}>Olvidaste Tú Contraseña?</Text>
      </TouchableOpacity>
      <View style={styles.containerSignIn}>
        <TouchableOpacity
          style={styles.btnSignIn}
          onPress={() => onLoginPressed()}>
          <Text style={styles.txtSignIn}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerOr}>
        <View style={styles.line} />
        <Text style={styles.txtOr}>O</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.btnSignFb} onPress={() => onFBLogin()}>
        <View style={styles.faceLogo}>
          <MaterialCommunityIcons
            name={'facebook'}
            color={'#FFFFFF'}
            size={30}
          />
          <Text style={styles.txtSignInFb}>Registrar con Facebook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnSignUp}
        onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.txtSignUp}>
          No Tienes Una Cuenta? Registrate Aquí
        </Text>
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
  containerInputs: {
    flexDirection: 'column',
    marginHorizontal: 40,
    marginTop: 24,
  },
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
  containerSignIn: {
    flexDirection: 'row',
    marginHorizontal: 40,
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
  containerOr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000000',
  },
  txtOr: {
    marginHorizontal: 20,
    fontSize: 16,
    color: '#1A051D',
    fontWeight: 'normal',
  },
  btnSignFb: {
    marginHorizontal: 40,
    borderRadius: 24,
    backgroundColor: '#3b5998',
    marginTop: 16,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtSignInFb: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    color: '#FFF',
    paddingLeft: 5,
  },
  btnSignUp: {
    alignSelf: 'center',
    marginTop: 15,
  },
  txtSignUp: {
    fontSize: 12,
    color: '#0F4C81',
    fontWeight: '500',
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
