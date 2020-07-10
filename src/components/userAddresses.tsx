/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import TextInput from '../components/helpers/TextInput';
import {
  Button,
  overlay,
  useTheme,
  Avatar,
  Card,
  Paragraph,
  Headline,
  Caption,
} from 'react-native-paper';

export const UserAddresses = () => {
  const theme = useTheme();
  const backgroundColor = overlay(2, theme.colors.surface) as string;
  const [isAddVisible, setIsAddVisible] = useState(false);

  const toggleAddAddress = () => {
    setIsAddVisible(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerAddAddress}>
        <TouchableOpacity style={styles.btnAdd} onPress={toggleAddAddress}>
          <View style={styles.faceLogo}>
            <MaterialCommunityIcons name={'plus'} color={'#FFFFFF'} size={30} />
            <Text style={styles.txtAdd}>Agrega una dirección</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isAddVisible}
        onBackdropPress={() => setIsAddVisible(false)}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        animationInTiming={500}
        animationOutTiming={600}
        style={styles.modalView}>
        {/* <View style={styles.cardContainer}>
          <Card accessibilityStates>
            <Card.Title
              accessibilityStates
              // style={styles.cardTitle}
              title={'Test'}
            />
            <Card.Content>
              <Paragraph>{'testing'}</Paragraph>
            </Card.Content>
            <Card.Cover
              accessibilityStates
              source={require('../assets/cdjx.jpg')}
            />
          </Card>
        </View> */}
        <ScrollView
          style={{flex: 1, backgroundColor}}
          contentContainerStyle={[{backgroundColor}]}>
          <Headline>Envianos un mensaje o Sugerencia</Headline>
          <Caption>
            Tus mensajes nos ayudan a mejorar nuestro servicio, todas las
            sugerencias son atendidas en el orden que se reciben y responderemos
            tus dudas o comentarios lo antes posible!
          </Caption>
          <Button
            accessibilityStates
            onPress={() => {}}
            mode="contained"
            labelStyle={{color: 'white'}}>
            Escribir un Mensaje
          </Button>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerAddAddress: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginTop: 24,
  },
  btnAdd: {
    backgroundColor: '#4FC3F7',
    borderRadius: 24,
    flex: 1,
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
  modalView: {
    flex: 1,
  },
  cardContainer: {
    display: 'flex',
  },
});
