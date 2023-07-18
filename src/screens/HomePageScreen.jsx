/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../styles/AppStyles';
import auth from '@react-native-firebase/auth';
import {CardComponent} from '../components/Flights/CardComponent';
import {FloatButtonComponent} from '../components/Flights/FloatButtonComponent';
import firestore from '@react-native-firebase/firestore';

export const HomePageScreen = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [flights, setFlights] = useState([]);

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

  useEffect(() => {
    if (user) {
      getFlights();
    }
  }, [user]);

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

  const getFlights = async () => {
    try {
      const snapshot = await firestore()
        .collection('flights')
        .where('userEmail', '==', user.email)
        .get();

      const flightsData = snapshot.docs.map(doc => doc.data());
      setFlights(flightsData);
      console.log(flightsData);
    } catch (error) {
      console.error('Error al obtener los vuelos:', error);
    }
  };

  const returnCardComponents = () => {
    return flights.map((flight, idx) => (
      <CardComponent key={idx} data={flight} />
    ));
  };

  return (
    <View style={styles.homePageContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.homePageTitle}>My flights</Text>
        <TouchableOpacity
          onPress={handleLogOut}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#899FFF',
            height: 40,
            width: 100,
            borderRadius: 12,
          }}>
          <Text style={[styles.buttonText, {fontSize: 14}]}>Log Out</Text>
        </TouchableOpacity>
      </View>
      {/* Change for a flatlist */}
      {flights.length !== 0 ? (
        returnCardComponents()
      ) : (
        <Text>No flights found</Text>
      )}
      <FloatButtonComponent onPressFn={goToFlightStackNavigator} />
    </View>
  );
};
