/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {styles} from '../styles/AppStyles';
import auth from '@react-native-firebase/auth';
import {CardComponent} from '../components/Flights/CardComponent';
import {FloatButtonComponent} from '../components/Flights/FloatButtonComponent';
import firestore from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomePageScreen = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [flights, setFlights] = useState([]);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (user) {
        getFlights();
      }
    }, [user]),
  );

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

      const flightsData = [];
      snapshot.forEach(doc => {
        const flight = {...doc._data, id: doc.id};
        flightsData.push(flight);
      });
      setFlights(flightsData);
    } catch (error) {
      console.error('Error al obtener los vuelos:', error);
    }
  };

  return (
    <SafeAreaView style={styles.homePageContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.homePageTitle}>My flights</Text>
        <TouchableOpacity onPress={handleLogOut} style={styles.buttonLogOut}>
          <Text style={[styles.buttonText, {fontSize: 14}]}>Log Out</Text>
        </TouchableOpacity>
      </View>
      {flights.length !== 0 ? (
        <FlatList
          data={flights}
          renderItem={({item}) => <CardComponent key={item.id} data={item} />}
          keyExtractor={flights => flights.id}
        />
      ) : (
        <Text>No flights found</Text>
      )}
      <FloatButtonComponent onPressFn={goToFlightStackNavigator} />
    </SafeAreaView>
  );
};
