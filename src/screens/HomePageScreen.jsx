/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../styles/AppStyles';
import auth from '@react-native-firebase/auth';
import {CardComponent} from '../components/Flights/CardComponent';
import {FloatButtonComponent} from '../components/Flights/FloatButtonComponent';

export const HomePageScreen = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <Text>Home Page</Text>
      </View>
    );
  }

  const logOff = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const handleLogOut = () => {
    logOff();
    navigation.navigate('SignUpScreen');
  };

  const goToFlightStackNavigator = () => {
    const homePageData = {
      userEmail: user.email,
    };
    navigation.navigate('FlightStackNavigator', {homePageData});
  };

  return (
    <View style={styles.homePageContainer}>
      <Text style={styles.homePageTitle}>My flights</Text>
      {/* Change for a flatlist */}
      <View style={styles.cardsContainer}>
        <CardComponent />
        <CardComponent />
      </View>
      <FloatButtonComponent onPressFn={goToFlightStackNavigator} />
      <Button title="SignOff" onPress={handleLogOut} />
    </View>
  );
};
