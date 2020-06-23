/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar, useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {BottomTabs} from '../components/bottomTabs';
import {Services} from '../components/services';
import {StackNavigatorParamlist} from '../types';
import {Message} from '../components/message';
import {Profile} from '../components/profile';

const Stack = createStackNavigator<StackNavigatorParamlist>();

export const HomeStack = () => {
  const theme = useTheme();
  const userDetails = auth().currentUser;

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
                    source={
                      userDetails.photoURL === ''
                        ? require('../../src/assets/empty_avatar.png')
                        : {uri: userDetails.photoURL}
                    }
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                accessibilityStates
                title={
                  title === 'FlashWash' ? (
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
