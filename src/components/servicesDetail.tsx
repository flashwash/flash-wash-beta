import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
// import storage, {firebase} from '@react-native-firebase/storage';
// Imports required for function to download image URL

type Props = {
  id: number;
  name: string;
  content: string;
  image: string;
};

export const ServicesDetail = (props: Props) => {
  // function to return URL from storage path in Firebase
  //   const storageRef = storage().ref('full.png');
  //   storageRef.getDownloadURL().then(url => {
  //     console.log(url);
  //   });
  return (
    <View style={styles.container}>
      <Card accessibilityStates>
        <Card.Title
          accessibilityStates
          style={styles.cardTitle}
          title={props.name.toUpperCase()}
        />
        <Card.Content>
          <Paragraph style={styles.cardContent}>{props.content}</Paragraph>
        </Card.Content>
        <Card.Cover
          accessibilityStates
          source={{
            uri: props.image,
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 25,
    paddingTop: 15,
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
