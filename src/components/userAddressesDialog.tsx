/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Navigation} from '../types';
import {
  Alert,
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import TextInput from './helpers/TextInput';
import {overlay, useTheme} from 'react-native-paper';

type IProps = {
  navigation: Navigation;
};

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
  state: Yup.string().label('Estado'),
  zip: Yup.string()
    .label('C.P.')
    .required('Codigo postal es obligatorio')
    .max(5),
  notes: Yup.string()
    .label('Notas adicionales')
    .max(60),
});

export const UserAddressesDialog = ({navigation}: IProps) => {
  const theme = useTheme();
  const backgroundColor = overlay(2, theme.colors.surface) as string;
  const onSubmit = () => {
    Alert.alert('Direccion guardada con exito.');
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
        validationSchema={schema}
        onSubmit={onSubmit}>
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleReset,
          touched,
          setFieldTouched,
        }) => (
          <ScrollView
            style={{backgroundColor}}
            contentContainerStyle={[{backgroundColor}]}>
            <View style={styles.containerInputs}>
              <TextInput
                accessibilityStates
                label={'*Titulo'}
                returnKeyType={'next'}
                value={values.name}
                onChange={handleChange('name')}
                autoCapitalize={'none'}
              />
              {touched.name && errors.name && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.name}</Text>
              )}
              <TextInput
                accessibilityStates
                label={'*Direccion (Calle y Numero)'}
                returnKeyType={'next'}
                value={values.address1}
                onBlur={() => setFieldTouched('address1')}
                onChangeText={handleChange('address1')}
                autoCapitalize={'none'}
              />
              {touched.address1 && errors.address1 && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.address1}
                </Text>
              )}
              <TextInput
                accessibilityStates
                label={'*Colonia o Fracc.'}
                returnKeyType={'next'}
                value={values.address2}
                onBlur={() => setFieldTouched('address2')}
                onChangeText={handleChange('address2')}
                autoCapitalize={'none'}
              />
              {touched.address2 && errors.address2 && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.address2}
                </Text>
              )}
              <TextInput
                accessibilityStates
                label={'*C.P.'}
                returnKeyType={'next'}
                value={values.zip}
                keyboardType={'number-pad'}
                onBlur={() => setFieldTouched('zip')}
                onChangeText={handleChange('zip')}
                maxLength={5}
              />
              {touched.zip && errors.zip && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.zip}</Text>
              )}
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
                  onPress={() => {
                    handleReset();
                    navigation.navigate('userAddresses');
                  }}>
                  <Text style={styles.actionText}>Regresar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={handleSubmit}>
                  <Text style={styles.actionText}>Guardar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
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
  cardContainer: {
    display: 'flex',
  },
  containerActionBttns: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginTop: 24,
  },
});
