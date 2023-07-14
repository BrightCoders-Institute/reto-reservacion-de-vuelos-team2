import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from '../styles/AppStyles';
import {TitleForm} from '../components/TitleForm';
import {TextFieldForm} from '../components/TextFieldForm';
import {CheckBoxComponent} from '../components/CheckBoxComponent';
import {ButtonComponent} from '../components/ButtonComponent';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useForm} from '../hooks/useForm';
import {useEmailPassValidation} from '../hooks/useEmailPassValidation';
import {useShowHidePassword} from '../hooks/useShowHidePassword';
import {Loader} from '../components/Loader';

GoogleSignin.configure({
  webClientId:
    '230335521144-bkm22iosp953h1nqjsfn2a8fahifsilf.apps.googleusercontent.com',
});

export const SignUpScreen = ({navigation}) => {
  const {firstName, email, password, onResetForm, onInputChange} = useForm({
    firstName: '',
    email: '',
    password: '',
  });
  const {
    isEmailValid,
    isPasswordValid,
    errorEmailText,
    errorPwText,
    setIsEmailValid,
    setIsPasswordValid,
    handleFieldValidation,
    setErrorEmailText,
    setErrorPwText,
  } = useEmailPassValidation();
  const {showPassword, handleShowPassword} = useShowHidePassword();
  const [termsCheckbox, setTermsCheckbox] = useState(false);
  const [subscribeCheckbox, setSubscribeCheckbox] = useState(false);
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const [isDesabledGoogleSignupBtn, setIsDesabledGoogleSignupBtn] =
    useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDisplayed, setIsLoadingDisplayed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    handleDesabledSignupButton();
    handleDesabledGoogleSignupButton();
  }, [email, password, termsCheckbox]);

  const handleInputChangeAndValidation = (name, value) => {
    onInputChange(name, value);
    handleFieldValidation(name, value);
  };

  const handleTermsCheckbox = () => {
    setTermsCheckbox(!termsCheckbox);
  };

  const handleSubscribeCheckbox = () => {
    setSubscribeCheckbox(!subscribeCheckbox);
  };

  const handleDesabledSignupButton = () => {
    if (
      isEmailValid &&
      email.trim() !== '' &&
      isPasswordValid &&
      password.trim() !== '' &&
      termsCheckbox
    ) {
      setIsDesabledSignupBtn(false);
      return;
    }
    setIsDesabledSignupBtn(true);
  };

  const handleDesabledGoogleSignupButton = () => {
    if (termsCheckbox !== false) {
      setIsDesabledGoogleSignupBtn(false);
      return;
    }
    setIsDesabledGoogleSignupBtn(true);
  };

  const signUpWithEmailAndPassword = () => {
    setIsLoadingDisplayed(true);
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setIsSuccess(true);
      })
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsLoadingDisplayed(false);
          onResetForm();
          handleTermsCheckbox();
          setSubscribeCheckbox(false);
          navigation.navigate('HomePageScreen');
        }, 1500);
      })
      .catch(error => {
        setIsLoading(false);
        setIsSuccess(false);
        setTimeout(() => {
          setIsLoadingDisplayed(false);
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            setIsEmailValid(false);
            setErrorEmailText('Email in use. Use a different email.');
            setIsLoadingDisplayed(false);
            setIsLoadingDisplayed(false);
          }

          if (error.code === 'auth/invalid-email') {
            setIsEmailValid(false);
            setErrorEmailText('The mail address is badly formatted');
            setIsLoadingDisplayed(false);
            setIsLoadingDisplayed(false);
          }
          console.error(error);
        }, 1500);
      });
  };

  function signUpWithGoogle() {
    setIsLoadingDisplayed(true);
    setIsLoading(true);
    GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true})
      .then(() => {
        onResetForm();
        return GoogleSignin.signOut();
      })
      .then(() => {
        setIsLoadingDisplayed(true);
        setIsLoading(true);
        return GoogleSignin.signIn();
      })
      .then(({idToken}) => {
        setIsSuccess(true);
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);
      })
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsLoadingDisplayed(false);
          onResetForm();
          handleTermsCheckbox();
          setSubscribeCheckbox(false);
          navigation.navigate('HomePageScreen');
        }, 1500);
      })
      .catch(error => {
        setIsLoading(false);
        setIsSuccess(false);
        setTimeout(() => {
          setIsLoadingDisplayed(false);
          console.error(error);
        }, 1500);
      });
  }

  return (
    <View style={styles.container}>
      <Loader
        openModal={isLoadingDisplayed}
        loadingText="Signing up..."
        isLoading={isLoading}
        loadingFinishText={isSuccess ? 'Signed Up' : 'Error!'}
        isSuccess={isSuccess}
      />

      <TitleForm title="Sign Up" />

      <TextFieldForm
        inputTitle="First Name"
        inputValue={firstName}
        onInputChange={value => onInputChange('firstName', value)}
      />

      <TextFieldForm
        inputTitle="Email *"
        inputValue={email}
        onInputChange={value => handleInputChangeAndValidation('email', value)}
        invalidText={errorEmailText}
        isInputValid={isEmailValid}
        setInputValid={setIsEmailValid}
      />

      <TextFieldForm
        inputTitle="Password *"
        inputValue={password}
        onInputChange={value =>
          handleInputChangeAndValidation('password', value)
        }
        invalidText={errorPwText}
        isInputValid={isPasswordValid}
        setInputValid={setIsPasswordValid}
        extraData={{
          showPassword,
          handleShowPassword,
        }}
      />

      <Text style={styles.textPassDetails}>
        Use 8 or more characters with a mix of letters, numbers, and symbols.
      </Text>

      <View style={styles.chekboxContainer}>
        <CheckBoxComponent
          checkboxValue={termsCheckbox}
          tintColors={{true: '#6270DE', false: 'gray'}}
          onCheckboxChange={handleTermsCheckbox}>
          <Text style={styles.textCheckbox}>
            I agree to the
            <Text style={{textDecorationLine: 'underline'}}> Terms</Text> and
            <Text style={{textDecorationLine: 'underline'}}>
              {' '}
              Privacy Policy.
            </Text>{' '}
            <Text style={{color: 'red'}}>*</Text>
          </Text>
        </CheckBoxComponent>

        <CheckBoxComponent
          checkboxValue={subscribeCheckbox}
          tintColors={{true: '#6270DE', false: 'gray'}}
          onCheckboxChange={handleSubscribeCheckbox}>
          <Text style={styles.textCheckbox}>
            Subscribe for select product updates.
          </Text>
        </CheckBoxComponent>
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonComponent
          onPressFn={signUpWithEmailAndPassword}
          isDisabled={isDesabledSignupBtn}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </ButtonComponent>

        <Text style={{fontSize: 15, color: '#888888'}}>or</Text>

        <ButtonComponent
          onPressFn={signUpWithGoogle}
          isDisabled={isDesabledGoogleSignupBtn}>
          <View style={styles.googleTextContainer}>
            <Image
              style={styles.googleLogo}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png',
              }}
            />
            <Text style={styles.buttonText}>Sign Up with Google</Text>
          </View>
        </ButtonComponent>
      </View>

      <View style={styles.logInTextContainer}>
        <Text style={{fontSize: 16, marginTop: 8, color: '#888888'}}>
          Already have an account?
        </Text>
        <Pressable onPress={() => navigation.navigate('LogInScreen')}>
          <Text
            style={{
              fontSize: 16,
              marginTop: 8,
              color: 'blue',
              textDecorationLine: 'underline',
            }}>
            {' '}
            Log In
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
