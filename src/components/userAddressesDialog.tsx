/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Modal from 'react-native-modal';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import TextInput from './helpers/TextInput';
import {overlay, useTheme} from 'react-native-paper';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const schema = Yup.object().shape({
  name: Yup.string()
    .label('Nombre')
    .required('Nombre de la direccion, puede ser (casa ó trabajo)')
    .max(40),
  address1: Yup.string()
    .label('Calle y Numero')
    .required('Calle y Numero es obligatorio')
    .max(40),
  address2: Yup.string()
    .label('Colonia o Fraccionamiento')
    .required('Colonia o fraccionamiento es obligatorio')
    .max(40),
  city: Yup.string()
    .label('Ciudad')
    .max(20),
  state: Yup.string()
    .label('Juarez')
    .max(2),
  zip: Yup.string()
    .label('C.P.')
    .required('Codigo postal es obligatorio')
    .min(5)
    .max(10),
  notes: Yup.string()
    .label('Notas adicionales')
    .max(60),
});

export const UserAddressesDialog = ({open, setOpen}: IProps) => {
  const theme = useTheme();
  const backgroundColor = overlay(2, theme.colors.surface) as string;
  const onSubmit = () => {
    return;
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          address1: '',
          address2: '',
          city: 'Juarez',
          state: 'CHIH',
          zip: '',
          notes: '',
        }}
        onSubmit={onSubmit}
        validationSchema={schema}>
        {({values, handleChange}) => (
          <Modal
            isVisible={open}
            onBackButtonPress={() => setOpen(false)}
            onBackdropPress={() => setOpen(false)}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            animationInTiming={500}
            animationOutTiming={600}
            style={styles.modalContainer}>
            <ScrollView
              style={{backgroundColor}}
              contentContainerStyle={[{backgroundColor}]}>
              <View style={styles.containerInputs}>
                <TextInput
                  accessibilityStates
                  mode={'flat'}
                  underlineColor={'#4FC3F7'}
                  label={'Titulo'}
                  returnKeyType={'next'}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  autoCapitalize={'none'}
                />
                <TextInput
                  accessibilityStates
                  label={'Direccion (Calle y Numero)'}
                  returnKeyType={'next'}
                  value={values.address1}
                  onChangeText={handleChange('address1')}
                  autoCapitalize={'none'}
                />
                <TextInput
                  accessibilityStates
                  label={'Colonia o Fracc.'}
                  returnKeyType={'next'}
                  value={values.address2}
                  onChangeText={handleChange('address2')}
                  autoCapitalize={'none'}
                />
                {/* <TextInput
                  accessibilityStates
                  label={'Ciudad'}
                  disabled={true}
                  value={values.city}
                  onChangeText={handleChange('city')}
                  autoCapitalize={'none'}
                />
                <TextInput
                  accessibilityStates
                  label={'Estado'}
                  disabled={true}
                  value={values.state}
                  onChangeText={handleChange('state')}
                  autoCapitalize={'none'}
                /> */}
                <TextInput
                  accessibilityStates
                  label={'C.P.'}
                  returnKeyType={'next'}
                  value={values.zip}
                  onChangeText={handleChange('zip')}
                  autoCapitalize={'none'}
                />
                <TextInput
                  accessibilityStates
                  label={'Notas Adicionales'}
                  returnKeyType={'next'}
                  multiline={true}
                  value={values.notes}
                  onChangeText={handleChange('notes')}
                  autoCapitalize={'none'}
                />
                <View style={styles.containerActionBttns}>
                  <TouchableOpacity
                    style={styles.actionCancelButton}
                    onPress={() => setOpen(false)}>
                    <Text style={styles.actionText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => {}}>
                    <Text style={styles.actionText}>Guardar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </Modal>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  modalContainer: {
    maxHeight: 600,
  },
  containerInputs: {
    flexDirection: 'column',
    marginHorizontal: 40,
    marginTop: 24,
  },
  actionCancelButton: {
    backgroundColor: '#FF6600',
    marginRight: 30,
    borderRadius: 24,
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#4FC3F7',
    borderRadius: 24,
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
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
  containerActionBttns: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginTop: 24,
  },
});
