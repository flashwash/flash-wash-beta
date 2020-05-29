/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
      </ScrollView>
      <View style={{backgroundColor}}>
        <TextInput
          style={{
            width: '75%',
            justifyContent: 'center',
          }}
          accessibilityStates
          label="Email"
          returnKeyType="done"
          disabled={true}
          value={'test@gmail.com'}
          keyboardType="email-address"
        />
        <TextInput
          style={{
            width: '75%',
            justifyContent: 'center',
          }}
          accessibilityStates
          label="Phone"
          disabled={true}
          returnKeyType="done"
          value={'123-456-789'}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 30,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontWeight: 'normal',
  },
  centerText: {
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});
