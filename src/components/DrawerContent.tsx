/* eslint-disable react-native/no-inline-styles */
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerNavigationProp,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import React from 'react';
// import {DrawerHomeComponentProps} from '../navigation/rootNavigator';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Switch,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import {DrawerActions} from '@react-navigation/native';

import {PreferencesContext} from './context/preferencesContext';
type Props = DrawerContentComponentProps<DrawerNavigationProp<{}>>;

export const DrawerContent = (props: Props) => {
  const paperTheme = useTheme();
  const {theme, toggleTheme} = React.useContext(PreferencesContext);

  const translateX = Animated.interpolate(props.progress, {
    inputRange: [0, 0.5, 0.7, 0.8, 1],
    outputRange: [-100, -85, -70, -45, 0],
  });

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View
        //@ts-ignore
        style={[
          styles.drawerContent,
          {
            backgroundColor: paperTheme.colors.surface,
            transform: [{translateX}],
          },
        ]}>
        <View style={styles.userInfoSection}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.toggleDrawer);
            }}>
            <Avatar.Image
              accessibilityStates
              source={require('../../src/assets/avatar.jpg')}
              size={50}
            />
          </TouchableOpacity>
          <Title style={styles.title}>Mario Herrera</Title>
          <Caption style={styles.caption}>@flashWashCEO</Caption>
        </View>
        <Drawer.Section accessibilityStates style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label={'Perfil'}
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name={'history'}
                color={color}
                size={size}
              />
            )}
            label={'Historial'}
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name={'map-marker'}
                color={color}
                size={size}
              />
            )}
            label={'Mis Direcciones'}
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons name={'car'} color={color} size={size} />
            )}
            label={'Mis Vehiculos'}
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label={'Preferencias'}
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section accessibilityStates title={'Ajustes'}>
          <TouchableRipple accessibilityStates onPress={toggleTheme}>
            <View style={styles.preference}>
              <Text accessibilityStates>Modo Obscuro</Text>
              <View pointerEvents="none">
                <Switch accessibilityStates value={theme === 'dark'} />
              </View>
            </View>
          </TouchableRipple>
          {/* <TouchableRipple onPress={toggleRTL}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={rtl === 'right'} />
              </View>
            </View>
          </TouchableRipple> */}
        </Drawer.Section>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingTop: 5,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
