import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '../../src/components/screens';
import {Main} from '../components/Main';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={'WelcomeScreen'} headerMode={'none'}>
      <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen name={'RegisterScreen'} component={RegisterScreen} />
      <Stack.Screen
        name={'ForgotPasswordScreen'}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={'Main'} component={Main} />
    </Stack.Navigator>
  );
}
