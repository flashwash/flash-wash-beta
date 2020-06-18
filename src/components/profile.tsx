/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Divider, useTheme, Avatar, Button} from 'react-native-paper';
import auth, {firebase} from '@react-native-firebase/auth';
import TextInput from '../components/helpers/TextInput';
import {AuthContext} from '../navigation/authProvider';
import ImagePicker from 'react-native-image-picker';
import overlay from './overlay';

export const Profile = () => {
  const userDetails = auth().currentUser;
  const theme = useTheme();
  const {user} = useContext(AuthContext);
  const backgroundColor = overlay(2, theme.colors.surface) as string;
  const [name, setName] = useState({
    displayName: userDetails.displayName || 'Nombre de Usuario',
  });
  const [photo, setPhoto] = useState({
    userPhoto: user.photoURL || '',
  });
  const options = {
    title: 'Selecciona Imagen',
    takePhotoButtonTitle: 'Tomar una Foto',
    chooseFromLibraryButtonTitle: 'Escoge de tu libreria',
    cancelButtonTitle: 'Cancelar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  // const [phone, setPhone] = useState({
  //   userPhone: user.phone || '123-456-7890',
  // });
  const [isNameModalVisible, setNameModalVisible] = useState(false);
  // const [isPhoneModalVisible, setPhoneModalVisible] = useState(false);

  const toggleNameModal = async () => {
    await auth().currentUser.updateProfile({displayName: name.displayName});
    await firebase.auth().currentUser.reload(); //Needed to immediately update the value to the app
    setNameModalVisible(!isNameModalVisible);
  };

  const togglePhotoUpload = async () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        Alert.alert('Cancelaste seleccionar foto 😟');
      } else if (response.error) {
        Alert.alert('And error occured: ', response.error);
      } else {
        const source = {uri: response.uri};
        setPhoto({
          userPhoto: source,
        });
      }
    });
    await auth().currentUser.updateProfile({
      photoURL: photo.userPhoto.toString(),
    });
    // await firebase.auth().currentUser.reload();
  };

  // const togglePhoneModal = async () => {
  //   await auth().currentUser.updateProfile({userPhone: phone.userPhone});
  //   await firebase.auth().currentUser.reload();
  //   setPhoneModalVisible(!isPhoneModalVisible);
  // };

  return (
    <>
      <ScrollView
        style={{backgroundColor}}
        contentContainerStyle={[styles.scrollViewContent, {backgroundColor}]}>
        <View style={{alignSelf: 'center'}}>
          <Avatar.Image
            accessibilityStates
            source={
              photo.userPhoto === null
                ? require('../../src/assets/empty_avatar.png')
                : photo.userPhoto
            }
            size={150}
          />
          <View style={styles.add}>
            <TouchableOpacity onPress={togglePhotoUpload}>
              <MaterialCommunityIcons
                name={'plus-circle-outline'}
                color={'#FFFFFF'}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.nameContainer}>
          <TextInput
            style={[
              styles.nameText,
              {
                backgroundColor,
                fontWeight: '200',
                fontSize: 22,
              },
            ]}
            mode={'flat'}
            accessibilityStates
            disabled={true}
            returnKeyType={'done'}
            value={name.displayName}
          />
          <View style={styles.editText}>
            <TouchableOpacity onPress={toggleNameModal}>
              <MaterialCommunityIcons
                name={'lead-pencil'}
                color={'#4FC3F7'}
                size={25}
              />
            </TouchableOpacity>
            <Modal
              isVisible={isNameModalVisible}
              onBackdropPress={() => setNameModalVisible(false)}
              animationOut={'slideOutRight'}
              animationInTiming={500}
              animationOutTiming={600}
              style={{marginTop: 30}}>
              <View style={{flex: 1}}>
                <TextInput
                  mode={'flat'}
                  accessibilityStates
                  value={name.displayName}
                  onChangeText={(displayName: any) =>
                    setName({...name, displayName})
                  }
                />
                <Button
                  accessibilityStates
                  mode={'contained'}
                  onPress={() => toggleNameModal()}>
                  Guardar
                </Button>
              </View>
            </Modal>
          </View>
        </View>
        <Divider accessibilityStates />
        <View style={styles.detailsContainer}>
          {/* <View style={styles.phoneLine}>
            <MaterialCommunityIcons
              style={styles.icon}
              name={'phone'}
              color={'#4FC3F7'}
              size={35}
            />
            <TextInput
              style={{
                width: '50%',
                backgroundColor,
                justifyContent: 'center',
              }}
              mode={'flat'}
              accessibilityStates
              label={'Telefono'}
              disabled={true}
              returnKeyType={'done'}
              value={phone.userPhone}
            />
            <View style={styles.editPhone}>
              <TouchableOpacity onPress={togglePhoneModal}>
                <MaterialCommunityIcons
                  name={'lead-pencil'}
                  color={'#4FC3F7'}
                  size={25}
                />
              </TouchableOpacity>
              <Modal
                isVisible={isPhoneModalVisible}
                onBackdropPress={() => setPhoneModalVisible(false)}
                animationOut={'slideOutRight'}
                animationInTiming={600}
                animationOutTiming={600}
                style={{marginTop: 30}}>
                <View style={{flex: 1}}>
                  <TextInput
                    mode={'flat'}
                    accessibilityStates
                    value={phone.userPhone}
                    onChangeText={(userPhone: any) =>
                      setPhone({...phone, userPhone})
                    }
                  />
                  <Button
                    accessibilityStates
                    mode={'contained'}
                    onPress={togglePhoneModal}>
                    Guardar
                  </Button>
                </View>
              </Modal>
            </View>
          </View> */}
          {/* <View style={styles.emailLine}>
            <MaterialCommunityIcons
              style={styles.icon}
              name={'email'}
              color={'#4FC3F7'}
              size={35}
            />
            <TextInput
              style={{
                width: '50%',
                backgroundColor,
                justifyContent: 'center',
              }}
              mode={'flat'}
              accessibilityStates
              label={'Email'}
              returnKeyType="done"
              disabled={true}
              value={user.email}
              keyboardType={'email-address'}
            />
          </View> */}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  add: {
    backgroundColor: '#4FC3F7',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 45,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  nameText: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
    paddingRight: 25,
    marginLeft: 20,
  },
  editText: {
    position: 'absolute',
    bottom: 30,
    marginLeft: 30,
    right: 0,
  },
  detailsContainer: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },
  // phoneLine: {
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  // editPhone: {
  //   position: 'absolute',
  //   bottom: 30,
  //   marginRight: 80,
  //   right: 0,
  // },
  // emailLine: {
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  icon: {
    marginLeft: 25,
    paddingRight: 10,
    paddingTop: 25,
  },
  editIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
});
