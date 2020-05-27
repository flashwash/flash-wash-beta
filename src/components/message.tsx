/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {Headline, Caption, useTheme, Button} from 'react-native-paper';

import overlay from './overlay';

type Props = {
  navigation: MaterialBottomTabNavigationProp<{}>;
};

export const Message = () => {
  const theme = useTheme();

  const backgroundColor = overlay(2, theme.colors.surface) as string;

  return (
    <ScrollView
      style={{backgroundColor}}
      contentContainerStyle={[styles.scrollViewContent, {backgroundColor}]}>
      <Headline style={styles.centerText}>
        Envianos un mensaje o Sugerencia
      </Headline>
      <Caption style={styles.centerText}>
        Tus mensajes nos ayudan a mejorar nuestro servicio, todas las
        sugerencias son atendidas en el orden que se reciben y responderemos tus
        dudas o comentarios lo antes posible!
      </Caption>
      <Button
        accessibilityStates
        onPress={() => {}}
        style={styles.button}
        mode="contained"
        labelStyle={{color: 'white'}}>
        Escribir un Mensaje
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});
