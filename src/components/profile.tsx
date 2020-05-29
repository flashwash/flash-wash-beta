/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Divider, useTheme, Avatar, Title} from 'react-native-paper';
import TextInput from '../components/TextInput';

import overlay from './overlay';

// type Props = {
//   navigation: Navigation;
// };

export const Profile = () => {
  const theme = useTheme();
  const backgroundColor = overlay(2, theme.colors.surface) as string;

  return (
    <>
      <ScrollView
        style={{backgroundColor}}
        contentContainerStyle={[styles.scrollViewContent, {backgroundColor}]}>
        <TouchableOpacity style={{marginLeft: 10}} onPress={() => {}}>
          <Avatar.Image
            accessibilityStates
            source={require('../../src/assets/avatar.jpg')}
            size={150}
          />
        </TouchableOpacity>
        <Title style={styles.title}>Mario Herrera</Title>
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
            value={'test@gmail.com'}
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
  title: {
    marginTop: 20,
    fontWeight: 'normal',
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
});
