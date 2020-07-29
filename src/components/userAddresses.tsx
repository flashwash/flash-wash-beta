/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
// import Modal from 'react-native-modal';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import TextInput from '../components/helpers/TextInput';
import {UserAddressesDialog} from './userAddressesDialog';

export const UserAddresses = () => {
  // const currentUserID = auth().currentUser.uid;
  const [openDialog, setOpenDialog] = useState(false);
  // const [userAddress, setUserAddress] = useState({
  //   street: '',
  //   street2: '',
  //   zipCode: '',
  //   notes: '',
  // });

  const toggleOpenDialog = () => {
    setOpenDialog(true);
  };

  // useEffect(() => {
  //   const subscriber = firestore()
  //     .doc(`users/${currentUserID}`)
  //     .onSnapshot(querySnapshot => {
  //       const packages = [];

  //       querySnapshot.forEach(documentSnapshot => {
  //         packages.push({
  //           ...documentSnapshot.data(),
  //           key: documentSnapshot.id,
  //         });
  //       });
  //       setServices(packages);
  //       setLoading(false);
  //     });
  //   // Unsubscribe from events when no longer in use
  //   return () => subscriber();
  // }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerAddAddress}>
          <TouchableOpacity style={styles.btnAdd} onPress={toggleOpenDialog}>
            <View style={styles.faceLogo}>
              <MaterialCommunityIcons
                name={'plus'}
                color={'#FFFFFF'}
                size={30}
              />
              <Text style={styles.txtAdd}>Agrega una dirección</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <UserAddressesDialog open={openDialog} setOpen={setOpenDialog} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerAddAddress: {
    flexDirection: 'row',
    marginTop: 24,
    marginHorizontal: 40,
  },
  btnAdd: {
    flex: 1,
    backgroundColor: '#4FC3F7',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtAdd: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 17,
  },
  faceLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
  },
});
