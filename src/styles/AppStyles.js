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
    height: '28%',
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
});
