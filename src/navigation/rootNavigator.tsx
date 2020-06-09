import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';

import {HomeStack} from '../components/homeStack';
import {DrawerContent} from '../components/DrawerContent';
import React from 'react';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator
        drawerContent={(
          props: DrawerContentComponentProps<DrawerNavigationProp<{}>>,
        ) => <DrawerContent {...props} />}>
        <Drawer.Screen name={'Home'} component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
