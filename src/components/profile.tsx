/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Divider, useTheme, Avatar} from 'react-native-paper';
import TextInput from '../components/helpers/TextInput';
import {AuthContext} from '../navigation/authProvider';

import overlay from './overlay';

// type Props = {
//   navigation: Navigation;
// };

export const Profile = () => {
  const theme = useTheme();
  const {user} = useContext(AuthContext);
  const backgroundColor = overlay(2, theme.colors.surface) as string;

  return (
    <>
      <ScrollView
        style={{backgroundColor}}
        contentContainerStyle={[styles.scrollViewContent, {backgroundColor}]}>
        <View style={{alignSelf: 'center'}}>
          <Avatar.Image
            accessibilityStates
            source={
              user.photoURL === null
                ? require('../../src/assets/empty_avatar.png')
                : user.photoURL
            }
            size={150}
          />
          <View style={styles.add}>
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name={'plus-circle-outline'}
                color={'#FFFFFF'}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.nameContainer}>
          <TextInput
            style={[
              styles.nameText,
              {
                backgroundColor,
                fontWeight: '200',
                fontSize: 22,
              },
            ]}
            mode={'flat'}
            accessibilityStates
            disabled={true}
            returnKeyType={'done'}
            value={
              user.displayName === null ? 'Nombre de Usuario' : user.displayName
            }
          />
          <View style={styles.editText}>
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name={'lead-pencil'}
                color={'#4FC3F7'}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Divider accessibilityStates />
        <View style={styles.emailContainer}>
          <MaterialCommunityIcons
            style={styles.icon}
            name={'phone'}
            color={'#4FC3F7'}
            size={35}
          />
          <TextInput
            style={{
              width: '50%',
              backgroundColor,
              justifyContent: 'center',
            }}
            mode={'flat'}
            accessibilityStates
            label={'Telefono'}
            disabled={true}
            returnKeyType={'done'}
            value={'123-456-789'}
          />
        </View>
        <View style={styles.emailContainer}>
          <MaterialCommunityIcons
            style={styles.icon}
            name={'email'}
            color={'#4FC3F7'}
            size={35}
          />
          <TextInput
            style={{
              width: '50%',
              backgroundColor,
              justifyContent: 'center',
            }}
            mode={'flat'}
            accessibilityStates
            label={'Email'}
            returnKeyType="done"
            disabled={true}
            value={user.email}
            keyboardType={'email-address'}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  add: {
    backgroundColor: '#4FC3F7',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 45,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  nameText: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
    paddingRight: 25,
    marginLeft: 20,
  },
  editText: {
    position: 'absolute',
    bottom: 30,
    marginLeft: 30,
    right: 0,
  },
  emailContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 25,
    paddingRight: 10,
    paddingTop: 25,
  },
  editIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
});
