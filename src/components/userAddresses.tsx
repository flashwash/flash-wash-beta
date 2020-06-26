import React from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {overlay, useTheme, Avatar} from 'react-native-paper';

export const UserAddresses = () => {
  const theme = useTheme();
  const backgroundColor = overlay(2, theme.colors.surface) as string;
  return (
    <ScrollView
      style={{backgroundColor}}
      contentContainerStyle={[styles.scrollViewContent, {backgroundColor}]}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Avatar.Icon
            style={styles.avatar}
            accessibilityStates
            // source={{
            //   uri:
            //     'https://firebasestorage.googleapis.com/v0/b/flashwash-72262.appspot.com/o/address_icons%2Fhome.png?alt=media&token=3a2864e9-bb6c-4269-a635-1977b83a09b6',
            // }}
            icon={'folder'}
            size={100}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar.Image
            style={styles.avatar}
            accessibilityStates
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/flashwash-72262.appspot.com/o/address_icons%2Fhome.png?alt=media&token=3a2864e9-bb6c-4269-a635-1977b83a09b6',
            }}
            size={100}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar.Image
            style={styles.avatar}
            accessibilityStates
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/flashwash-72262.appspot.com/o/address_icons%2Fhome.png?alt=media&token=3a2864e9-bb6c-4269-a635-1977b83a09b6',
            }}
            size={100}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    backgroundColor: '#000000',
  },
});
