/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Appbar, Avatar, useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';

import {BottomTabs} from './bottomTabs';
// import {Details} from './details';
import {Services} from './services';
import {StackNavigatorParamlist} from '../types';
import {Message} from './message';
import {Profile} from './profile';

const Stack = createStackNavigator<StackNavigatorParamlist>();

export const StackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={'FlashWash'}
      headerMode={'screen'}
      screenOptions={{
        header: ({scene, previous, navigation}) => {
          const {options} = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <Appbar.Header
              accessibilityStates
              theme={{colors: {primary: theme.colors.surface}}}>
              {previous ? (
                <Appbar.BackAction
                  accessibilityStates
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  onPress={() => {
                    navigation.dispatch(DrawerActions.toggleDrawer);
                  }}>
                  <Avatar.Image
                    accessibilityStates
                    size={40}
                    source={require('../../src/assets/avatar.jpg')}
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                accessibilityStates
                title={
                  title === 'Feed' ? (
                    <MaterialCommunityIcons
                      style={{marginRight: 10}}
                      name={'twitter'}
                      size={40}
                      color={theme.colors.primary}
                    />
                  ) : (
                    title
                  )
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>
          );
        },
      }}>
      <Stack.Screen
        name={'FlashWash'}
        component={BottomTabs}
        options={() => {
          return {headerTitle: 'Flash Wash'};
        }}
      />
      <Stack.Screen
        name={'Servicios'}
        component={Services}
        options={{headerTitle: 'Servicios Disponibles'}}
      />
      <Stack.Screen
        name={'Mensajes'}
        component={Message}
        options={{headerTitle: 'Contactanos'}}
      />
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{headerTitle: 'Perfil'}}
      />
    </Stack.Navigator>
  );
};
