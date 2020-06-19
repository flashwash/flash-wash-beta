import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

type Props = {
  id: number;
  name: string;
  content: string;
  image: string;
};

export const ServicesDetail = (props: Props) => {
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
            uri:
              'http://www.classychassycarwash.com/images/poQV2K.683d/1000w/Soft-Touch-Menu-sign.jpg',
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 30,
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
