import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  optionsContainer: {
    height: Dimensions.get('window').height / 2,
  },
  menuIcon: {
    // backgroundColor: 'black',
    height: 20,
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    minHeight: Dimensions.get('window').height,
  },
  headerContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  titleImageLeft: {
    width: 30,
    height: 25,
  },
  titleImageRight: {
    width: 25,
    height: 25,
  },
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  resetPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formControl: {
    marginVertical: 4,
  },
  submitButton: {
    marginVertical: 24,
    width: '50%',
    alignSelf: 'center',
  },
  resetPasswordButton: {
    marginVertical: 24,
    width: '50%',
    alignSelf: 'center',
  },
  noAccountButton: {
    alignSelf: 'center',
  },
  haveAccountButton: {
    alignSelf: 'center',
  },
  button: {
    marginVertical: 24,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default styles;
