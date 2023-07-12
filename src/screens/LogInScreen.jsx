import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {styles} from '../styles/AppStyles';
import Logo from '../assets/img/logoAbc.png';
import {TextFieldForm} from '../components/TextFieldForm';
import {ButtonComponent} from '../components/ButtonComponent';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useForm} from '../hooks/useForm';
import {useShowHidePassword} from '../hooks/useShowHidePassword';
import {useEmailPassValidation} from '../hooks/useEmailPassValidation';
import {Loader} from '../components/Loader';

GoogleSignin.configure({
  webClientId: '230335521144-bkm22iosp953h1nqjsfn2a8fahifsilf.apps.googleusercontent.com',
});

export const LogInScreen = ({navigation}) => {
  const {email, password, onResetForm, onInputChange} = useForm({
    email: '',
    password: '',
  });
  const {showPassword, handleShowPassword} = useShowHidePassword();
  const { isEmailValid, isPasswordValid, errorEmailText, errorPwText, setIsEmailValid, setIsPasswordValid, handleFieldValidation, setErrorEmailText, setErrorPwText } = useEmailPassValidation();
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDisplayed, setIsLoadingDisplayed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {height} = useWindowDimensions();

  useEffect(() => {
    handleDesabledSignupButton();
  }, [email, password]);

  const handleInputChangeAndValidation = (name, value) => {
    onInputChange(name, value);
    handleFieldValidation(name, value);
  };

  const handleDesabledSignupButton = () => {
    if(isEmailValid && email.trim() !== '' && isPasswordValid && password.trim() !== ''){
      setIsDesabledSignupBtn(false);
      return;
    }
    setIsDesabledSignupBtn(true);
  };

  const logInWithEmailAndPassword = () => {
    setIsLoadingDisplayed(true);
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setIsSuccess(true);
      })
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsLoadingDisplayed(false);
          onResetForm();
          navigation.navigate('HomePageScreen');
        }, 1500);
      })
      .catch(error => {
        setIsLoading(false);
        setIsSuccess(false);
        setTimeout(() => {
          setIsLoadingDisplayed(false);
          if (error.code === 'auth/user-not-found') {
            setIsEmailValid(false);
            setErrorEmailText('No account for this email. Sign up please.');
          }

          if (error.code === 'auth/invalid-email') {
            setIsEmailValid(false);
            setErrorEmailText('The mail address is badly formatted');
          }

          if (error.code === 'auth/wrong-password') {
            setIsPasswordValid(false);
            setErrorPwText('Incorrect password.');
          }
          console.error(error);
        }, 1500);
      });
  };

  function logInWithGoogle() {
    setIsLoadingDisplayed(true);
    setIsLoading(true);
    GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true})
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
  };

  return (
    <View style={styles.container}>
      <Loader
        openModal={isLoadingDisplayed}
        loadingText="Logging in..."
        isLoading={isLoading}
        loadingFinishText={isSuccess ? 'Logged In' : 'Error'}
        isSuccess={isSuccess}
      />
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.title}>Welcome to your best option</Text>

        <TextFieldForm
          inputTitle="Email *"
          inputValue={email}
          onInputChange={(value) => handleInputChangeAndValidation('email', value)}
          invalidText={errorEmailText}
          isInputValid={isEmailValid}
          setInputValid={setIsEmailValid}
        />

        <TextFieldForm
          inputTitle="Password *"
          inputValue={password}
          onInputChange={(value) => handleInputChangeAndValidation('password', value)}
          invalidText={errorPwText}
          isInputValid={isPasswordValid}
          setInputValid={setIsPasswordValid}
          extraData={{
            showPassword,
            handleShowPassword,
          }}
        />
      </View>

      <View style={styles.containerForgotPws}>
        <TouchableOpacity>
          <Text style={styles.titleFPwd}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonComponent
          onPressFn={logInWithEmailAndPassword}
          isDisabled={isDesabledSignupBtn}>
          <Text style={styles.buttonText}>Log In</Text>
        </ButtonComponent>

        <Text style={{fontSize: 15, color: '#888888'}}>or</Text>

        <ButtonComponent
          onPressFn={logInWithGoogle}
          isDisabled={false}>
          <View style={styles.googleTextContainer}>
            <Image
              style={styles.googleLogo}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png',
              }}
            />
            <Text style={styles.buttonText}>Log In with Google</Text>
          </View>
        </ButtonComponent>
      </View>

      <View style={[styles.logInTextContainer, {marginTop: 0}]}>
        <Text style={{fontSize: 16, marginTop: 20, color: '#888888'}}>
          Don't have an account?
        </Text>
        <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
          <Text
            style={{
              fontSize: 16,
              marginTop: 20,
              color: 'blue',
              textDecorationLine: 'underline',
            }}>
            {' '}
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
