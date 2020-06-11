import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';

import {HomeStack} from './homeStack';
import {DrawerContent} from '../components/DrawerContent';
import React from 'react';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    // <NavigationContainer theme={navigationTheme}>
    <Drawer.Navigator
      drawerContent={(
        props: DrawerContentComponentProps<DrawerNavigationProp<{}>>,
      ) => <DrawerContent {...props} />}>
      <Drawer.Screen name={'Home'} component={HomeStack} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};
