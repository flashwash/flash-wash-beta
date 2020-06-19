import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Surface, Text, useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from 'color';

type Props = {
  id: number;
  name: string;
  content: string;
};

export const NotificationDetail = (props: Props) => {
  const theme = useTheme();

  const contentColor = color(theme.colors.text)
    .alpha(0.8)
    .rgb()
    .string();

  return (
    <Surface accessibilityStates style={styles.container}>
      <View style={styles.leftColumn}>
        <MaterialCommunityIcons
          name={'information-outline'}
          size={30}
          color="#8d38e8"
        />
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.topRow} />
        <Text accessibilityStates style={{color: contentColor}}>
          {props.content}
        </Text>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  leftColumn: {
    width: 100,
    marginRight: 10,
    alignItems: 'flex-end',
  },
  rightColumn: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
