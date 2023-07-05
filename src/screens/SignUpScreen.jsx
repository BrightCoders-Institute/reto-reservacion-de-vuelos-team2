import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from '../styles/AppStyles';
import {TitleForm} from '../components/TitleForm';
import {TextFieldForm} from '../components/TextFieldForm';
import {CheckBoxComponent} from '../components/CheckBoxComponent';
import {ButtonComponent} from '../components/ButtonComponent';

export const SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsCheckbox, setTermsCheckbox] = useState(false);
  const [subscribeCheckbox, setSubscribeCheckbox] = useState(false);
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const [isDesabledGoogleSignupBtn, setIsDesabledGoogleSignupBtn] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    handleDesabledSignupButton();
    handleDesabledGoogleSignupButton();
  }, [email, password, termsCheckbox]);

  const handleEmailChange = (email) => {
    setEmail(email);

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    // console.log('Correo electrónico válido:', isValid);
  };

  const handlePasswordChange = (pass) => {
    setPassword(pass);

    // password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = passwordRegex.test(pass);
    setIsPasswordValid(isValid);
    // console.log('Contraseña válida:', isValid);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTermsCheckbox = () => {
    setTermsCheckbox(!termsCheckbox);
  };

  const handleSubscribeCheckbox = () => {
    setSubscribeCheckbox(!subscribeCheckbox);
  };

  const handleDesabledSignupButton = () => {
    if ( isEmailValid && email.trim() !== '' && isPasswordValid && password.trim() !== '' && termsCheckbox ){
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

  return (
    <View style={styles.container}>
      <TitleForm title="Sign Up" />

      <TextFieldForm
        inputTitle="First Name"
        inputValue={firstName}
        onInputChange={setFirstName}
      />

      <TextFieldForm
        inputTitle="Email *"
        inputValue={email}
        onInputChange={handleEmailChange}
        invalidText="Please enter a valid email."
        isInputValid={isEmailValid}
        setInputValid={setIsEmailValid}
      />

      <TextFieldForm
        inputTitle="Password *"
        inputValue={password}
        onInputChange={handlePasswordChange}
        invalidText="Invalid password."
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
          onPressFn={() => console.log('Sign Up')}
          isDisabled={isDesabledSignupBtn}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </ButtonComponent>

        <Text style={{fontSize: 15, color: '#888888'}}>or</Text>

        <ButtonComponent
          onPressFn={() => console.log('Google button')}
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
              color: '#888888',
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
