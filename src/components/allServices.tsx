import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Loading from './loading';
import {ServicesDetail} from './servicesDetail';

type ServicesProps = React.ComponentProps<typeof ServicesDetail>;

// function renderServices({item}: {item: ServicesProps}) {
//   return <ServicesDetail {...item} />;
// }

const renderServices = ({item}: {item: ServicesProps}) => {
  return <ServicesDetail {...item} />;
};

export const AllServices = () => {
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
      <FlatList data={services} renderItem={renderServices} />
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
