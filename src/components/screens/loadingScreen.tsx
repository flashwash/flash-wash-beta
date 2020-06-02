import React, {memo} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Navigation} from '../../types';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(LoginScreen);
