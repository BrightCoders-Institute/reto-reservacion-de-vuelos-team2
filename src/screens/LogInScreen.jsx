import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {styles} from '../styles/AppStyles';
import Logo from '../assets/img/logoAbc.png';
import {TextFieldForm} from '../components/TextFieldForm';
import {ButtonComponent} from '../components/ButtonComponent';

export const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {height} = useWindowDimensions();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
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
          onInputChange={setEmail}
        />

        <TextFieldForm
          inputTitle="Password *"
          inputValue={password}
          onInputChange={setPassword}
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
          onPressFn={() => console.log('Log In')}
          isDisabled={true}>
          <Text style={styles.buttonText}>Log In</Text>
        </ButtonComponent>
      </View>

      <View style={[styles.logInTextContainer, {marginTop: 0}]}>
        <Text style={{fontSize: 16, marginTop: 8, color: '#888888'}}>
          Don't have an account?
        </Text>
        <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
          <Text
            style={{
              fontSize: 16,
              marginTop: 8,
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
