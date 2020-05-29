/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import color from 'color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {useSafeArea} from 'react-native-safe-area-context';
import {useIsFocused, RouteProp} from '@react-navigation/native';

import overlay from './overlay';
// import {Feed} from './feed';
import {HomeScreen} from './homeScreen';
import {Notifications} from './notifications';
import {Services} from './services';
import {StackNavigatorParamlist} from '../types';

const Tab = createMaterialBottomTabNavigator();

type Props = {
  route: RouteProp<StackNavigatorParamlist, 'FlashWash'>;
};

export const BottomTabs = () => {
  const theme = useTheme();
  const safeArea = useSafeArea();
  const isFocused = useIsFocused();

  let requestIcon = 'car-electric';
  let scheduleIcon = 'calendar-clock';

  const tabBarColor = theme.dark
    ? (overlay(6, theme.colors.surface) as string)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName={'HomeScreen'}
        backBehavior={'initialRoute'}
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name={'Inicio'}
          component={HomeScreen}
          options={{
            tabBarIcon: 'home-account',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name={'Servicios'}
          component={Services}
          options={{
            tabBarIcon: 'car-wash',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name={'Notificaciones'}
          component={Notifications}
          options={{
            tabBarIcon: 'bell-outline',
            tabBarColor,
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          accessibilityStates
          visible={isFocused}
          icon={scheduleIcon}
          small={true}
          accessibilityLabel={'Agendar Un Servicio'}
          style={{
            position: 'absolute',
            bottom: safeArea.bottom + 135,
            right: 23,
          }}
          color="white"
          theme={{
            colors: {
              accent: 'gray',
            },
          }}
          onPress={() => {}}
        />
        <FAB
          accessibilityStates
          visible={isFocused}
          icon={requestIcon}
          style={{
            position: 'absolute',
            bottom: safeArea.bottom + 65,
            right: 16,
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
          onPress={() => {}}
        />
      </Portal>
    </React.Fragment>
  );
};
