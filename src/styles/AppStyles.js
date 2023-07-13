import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
  },
  textPassDetails: {
    fontSize: 12,
    letterSpacing: 0.1,
    marginTop: 6,
    color: '#888888',
  },
  chekboxContainer: {
    marginTop: 29,
    marginLeft: -0.5,
    height: '13%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textCheckbox: {
    marginLeft: 5,
    fontSize: 15,
    color: '#888888',
  },
  buttonsContainer: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '24%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  googleTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logInTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonSignUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C6C6C6',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    height: 50,
  },
  btnEnabled: {
    backgroundColor: '#899FFF',
  },
  checkboxItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: '#888888',
    fontSize: 15,
    marginBottom: 10,
  },
  inputField: {
    borderWidth: 1.5,
    borderColor: '#909090',
    paddingStart: 7,
    width: '100%',
    height: 55,
  },
  fieldContainer: {
    marginTop: 10,
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  formTitle: {
    marginBottom: 24,
    fontSize: 24,
    letterSpacing: 0.8,
    color: '#6270DE',
    fontWeight: 'bold',
  },
  textSignIn: {
    fontSize: 16,
    marginTop: 8,
    color: '#888888',
  },
  redirectSignUp: {
    textDecorationLine: 'underline',
    color: 'blue',
  },

  containerForgotPws: {
    alignSelf: 'flex-end',
    marginTop: 1,
    marginRight: 5,
  },

  logo: {
    alignSelf: 'center',
    width: '90%',
    maxWidth: 230,
    height: 200,
    marginBottom: -20,
  },

  title: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: 1,
    marginBottom: 25,
  },

  titleFPwd: {
    paddingTop: 10,
    fontSize: 14,
    color: 'blue',
    paddingBottom: 20,
  },
  focus: {
    borderColor: '#5C65B1',
  },
  feedbackValidation: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 5
  },

  // -------------------- STYLES LOADER --------------------
  loderContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingContent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F3446',
    width: '33%',
    height: '23%',
    marginBottom: 100,
  },

  // -------------------- STYLES FLIGHT SCREENS --------------------
  fromFlightContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginRight: 35,
    marginLeft: 35,
    marginTop: 20,
  },
  titleFlight: {
    fontSize: 33,
    lineHeight: 40,
    fontWeight: '900',
    color: 'black',
  },
  textFieldFlight: {
    borderBottomWidth: 1,
    borderBottomColor: '#909090',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  underlineContainer: {
    borderBottomColor: '#86898C',
    borderBottomWidth: 1,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  ToFromContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    width: 120,
  },
  airportText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  textRight: {
    textAlign: 'right',
  },
  countryText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#86898C',
  },
  infoText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  cardContainer: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  flightButton: {
    borderWidth: 1,
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    right: 170,
    backgroundColor: '#899FFF',
    borderColor: '#899FFF',
    borderRadius: 100,
    elevation: 8,
  },
  // -------------------- STYLES FLIGHT SCREENS --------------------
  homePageContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  homePageTitle: {
    color: '#899FFF',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 15,
  },
  cardsContainer: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
});
