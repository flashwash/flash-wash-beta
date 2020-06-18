import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Loading from './loading';
import {Card} from 'react-native-paper';

export const Services = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [services, setServices] = useState([]); // Initial empty array of services offered

  useEffect(() => {
    const subscriber = firestore()
      .collection('packages')
      .onSnapshot(querySnapshot => {
        const packages = [];

        querySnapshot.forEach(documentSnapshot => {
          packages.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setServices(packages);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/wash.jpg')}
        style={styles.backgroundImage}
      />
      <FlatList
        data={services}
        // renderItem={renderItem}
        renderItem={({item}) => (
          <Card accessibilityStates>
            <Text>Servicio: {item.id}</Text>
            <Text>User Name: {item.name}</Text>
            <Image source={item.image} />
          </Card>
        )}
        ItemSeparatorComponent={() => (
          <View style={{height: StyleSheet.hairlineWidth}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 600,
    opacity: 0.5,
  },
});
