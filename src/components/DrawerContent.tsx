/* eslint-disable react-native/no-inline-styles */
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerNavigationProp,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Avatar, Caption, Drawer, Title, useTheme} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import {DrawerActions} from '@react-navigation/native';
import {AuthContext} from '../navigation/authProvider';
type Props = DrawerContentComponentProps<DrawerNavigationProp<{}>>;

export const DrawerContent = (props: Props) => {
  const userDetails = auth().currentUser;
  const paperTheme = useTheme();
  const {logout} = useContext(AuthContext);

  const translateX = Animated.interpolate(props.progress, {
    inputRange: [0, 0.5, 0.7, 0.8, 1],
    outputRange: [-100, -85, -70, -45, 0],
  });

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View
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
              source={
                userDetails.photoURL === ''
                  ? require('../../src/assets/empty_avatar.png')
                  : {uri: userDetails.photoURL}
              }
              size={70}
            />
          </TouchableOpacity>
          <Title style={styles.title}>
            {userDetails.displayName === null
              ? 'Nombre de Usuario'
              : userDetails.displayName}
          </Title>
          <Caption style={styles.caption}>@flashWashCEO</Caption>
        </View>
        <Drawer.Section accessibilityStates style={styles.drawerSection}>
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons
                name={'account-outline'}
                color={'#4FC3F7'}
                size={size}
              />
            )}
            label={'Perfil'}
            onPress={() => props.navigation.navigate('Profile')}
          />
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons
                name={'history'}
                color={'#4FC3F7'}
                size={size}
              />
            )}
            label={'Historial'}
            onPress={() => {}}
          />
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons
                name={'map-marker'}
                color={'#4FC3F7'}
                size={size}
              />
            )}
            label={'Mis Direcciones'}
            onPress={() => {}}
          />
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons
                name={'car'}
                color={'#4FC3F7'}
                size={size}
              />
            )}
            label={'Mis Vehiculos'}
            onPress={() => {}}
          />
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons
                name={'tune'}
                color={'#4FC3F7'}
                size={size}
              />
            )}
            label={'Preferencias'}
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section accessibilityStates style={styles.drawerSection}>
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons
                name={'script-text-outline'}
                color={'#4FC3F7'}
                size={size}
              />
            )}
            label={'Terminos y Condiciones'}
            onPress={() => {}}
          />
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons
                name={'email'}
                color={'#4FC3F7'}
                size={size}
              />
            )}
            label={'Contactanos'}
            onPress={() => props.navigation.navigate('Mensajes')}
          />
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons
                name={'exit-run'}
                color={'#4FC3F7'}
                size={size}
              />
            )}
            label={'Cerrar Sesión'}
            onPress={() => logout()}
          />
        </Drawer.Section>
        <Caption style={styles.footNote}>Version 0.1.06.08</Caption>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    alignItems: 'center',
    paddingTop: 10,
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
  footNote: {
    paddingLeft: 15,
  },
});
